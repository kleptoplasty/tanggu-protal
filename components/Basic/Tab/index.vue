<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  nextTick,
  provide,
  ref,
  watch,
} from 'vue'
import { UPDATE_MODEL_EVENT } from '../constants'
import { tabsRootContextKey,type TabsPaneContext, type TabPaneName } from './constants'
import { tabsProps, tabsEmits } from './use-tabs'
import { useOrderedChildren } from '@/utils/hooks/use-ordered-children'

import type { TabNavInstance } from './use-tab-nav'

export default defineComponent({
  name: 'BasicTab',
  props: tabsProps,
  emits: tabsEmits,
  setup(props, { emit, slots, expose }) {
    const {
      children: panes,
      addChild: registerPane,
      removeChild: unregisterPane,
    } = useOrderedChildren<TabsPaneContext>(getCurrentInstance()!, 'BasicTabPane')

    const nav$ = ref<TabNavInstance>()
    const currentName = ref<TabPaneName>(props.modelValue ?? '0')

    const setCurrentName = async (value?: TabPaneName, trigger = false) => {
      if (currentName.value === value || isUndefined(value)) return

      try {
        const canLeave = await props.beforeLeave?.(value, currentName.value)
        if (canLeave !== false) {
          currentName.value = value
          if (trigger) {
            emit(UPDATE_MODEL_EVENT, value)
            emit('tabChange', value)
          }

          nav$.value?.removeFocus?.()
        }
      } catch {}
    }

    const handleTabClick = (
      tab: TabsPaneContext,
      tabName: TabPaneName,
      event: Event
    ) => {
      if (tab.props.disabled) return
      setCurrentName(tabName, true)
      emit('tabClick', tab, event)
    }

    watch(
      () => props.modelValue,
      (modelValue) => setCurrentName(modelValue)
    )

    watch(currentName, async () => {
      await nextTick()
      nav$.value?.scrollToActiveTab()
    })

    provide(tabsRootContextKey, {
      props,
      currentName,
      registerPane,
      unregisterPane,
    })

    expose({
      currentName,
    })

    return {
      props,
      currentName,
      panes,
      handleTabClick
    }
  }
})
</script>

<template>
  <div class="z-10">
    <BasicTabNav
      ref="nav$"
      :currentName="currentName"
      :editable="props.editable"
      :type="props.type"
      :panes="panes"
      :stretch="props.stretch"
      @tabClick="handleTabClick"
    />
    <slot></slot>
  </div>
</template>
