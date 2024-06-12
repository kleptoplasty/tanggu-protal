<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  watch,
} from 'vue'
import { useDocumentVisibility, useResizeObserver, useWindowFocus } from '@vueuse/core'
import { capitalize, throwError } from '../constants'
import { EVENT_CODE } from '../constants'
import { tabsRootContextKey } from './constants'
import { tabNavProps, tabNavEmits } from './use-tab-nav'
import { useNamespace } from '@/utils/hooks/use-namespace'

import type { CSSProperties } from 'vue'

interface Scrollable {
  next?: boolean
  prev?: number
}

const COMPONENT_NAME = 'BasicTabNav'

export default defineComponent({
  name: COMPONENT_NAME,
  props: tabNavProps,
  emits: tabNavEmits,
  setup(props, { expose, emit }) {
    const vm = getCurrentInstance()!

    const rootTabs = inject(tabsRootContextKey)
    if (!rootTabs) throwError(COMPONENT_NAME, `<BasicTab><BasicTabNav /></BasicTab>`)

    const ns = useNamespace('nav')
    const visibility = useDocumentVisibility()
    const focused = useWindowFocus()

    const navScroll$ = ref<HTMLDivElement>()
    const nav$ = ref<HTMLDivElement>()
    const el$ = ref<HTMLDivElement>()

    const scrollable = ref<false | Scrollable>(false)
    const navOffset = ref(0)
    const isFocus = ref(false)
    const focusable = ref(true)

    const sizeName = computed(() =>
      ['top', 'bottom'].includes(rootTabs.props.tabPosition)
        ? 'width'
        : 'height'
    )
    
    const navStyle = computed<CSSProperties>(() => {
      const dir = sizeName.value === 'width' ? 'X' : 'Y'
      return {
        transform: `translate${dir}(-${navOffset.value}px)`,
      }
    })

    const scrollToActiveTab = async () => {
      const nav = nav$.value
      if (!scrollable.value || !el$.value || !navScroll$.value || !nav) return

      await nextTick()

      const activeTab = el$.value.querySelector('.is-active')
      if (!activeTab) return

      const navScroll = navScroll$.value
      const isHorizontal = ['top', 'bottom'].includes(
        rootTabs.props.tabPosition
      )
      const activeTabBounding = activeTab.getBoundingClientRect()
      const navScrollBounding = navScroll.getBoundingClientRect()

      const maxOffset = isHorizontal
        ? nav.offsetWidth - navScrollBounding.width
        : nav.offsetHeight - navScrollBounding.height

      const currentOffset = navOffset.value
      let newOffset = currentOffset

      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset =
            currentOffset - (navScrollBounding.left - activeTabBounding.left)
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset =
            currentOffset + activeTabBounding.right - navScrollBounding.right
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset =
            currentOffset - (navScrollBounding.top - activeTabBounding.top)
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset =
            currentOffset +
            (activeTabBounding.bottom - navScrollBounding.bottom)
        }
      }
      newOffset = Math.max(newOffset, 0)
      navOffset.value = Math.min(newOffset, maxOffset)
    }

    const update = () => {
      if (!nav$.value || !navScroll$.value) return

      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`]
      const containerSize =
        navScroll$.value[`offset${capitalize(sizeName.value)}`]
      const currentOffset = navOffset.value

      if (containerSize < navSize) {
        scrollable.value = scrollable.value || {}
        scrollable.value.prev = currentOffset
        scrollable.value.next = currentOffset + containerSize < navSize
        if (navSize - currentOffset < containerSize) {
          navOffset.value = navSize - containerSize
        }
      } else {
        scrollable.value = false
        if (currentOffset > 0) {
          navOffset.value = 0
        }
      }
    }

    const changeTab = (e: KeyboardEvent) => {
      const code = e.code

      const { up, down, left, right } = EVENT_CODE
      if (![up, down, left, right].includes(code)) return

      // 左右上下键更换tab
      const tabList = Array.from(
        (e.currentTarget as HTMLDivElement).querySelectorAll<HTMLDivElement>(
          '[role=tab]:not(.is-disabled)'
        )
      )
      const currentIndex = tabList.indexOf(e.target as HTMLDivElement)

      let nextIndex: number
      if (code === left || code === up) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1
        } else {
          nextIndex = currentIndex - 1
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
          nextIndex = currentIndex + 1
        } else {
          nextIndex = 0
        }
      }
      tabList[nextIndex].focus({ preventScroll: true }) // 改变焦点元素
      tabList[nextIndex].click() // 选中下一个tab
      setFocus()
    }

    const setFocus = () => {
      if (focusable.value) isFocus.value = true
    }
    const removeFocus = () => (isFocus.value = false)

    watch(visibility, (visibility) => {
      if (visibility === 'hidden') {
        focusable.value = false
      } else if (visibility === 'visible') {
        setTimeout(() => (focusable.value = true), 50)
      }
    })

    watch(focused, (focused) => {
      if (focused) {
        setTimeout(() => (focusable.value = true), 50)
      } else {
        focusable.value = false
      }
    })

    useResizeObserver(el$, update)

    onMounted(() => setTimeout(() => scrollToActiveTab(), 0))
    onUpdated(() => update())

    expose({
      scrollToActiveTab,
      removeFocus,
    })
    watch(
      () => props.panes,
      () => vm.update(),
      { flush: 'post', deep: true }
    )

    const tabs = computed(() => props.panes.map((pane, index) => {
        const uid = pane.uid
        const disabled = pane.props.disabled
        const tabName = pane.props.name ?? pane.index ?? `${index}`
        const closable = !disabled && (pane.isClosable || props.editable)
        pane.index = `${index}`

        const btnClose = closable ? 'close' : null

        const tabLabelContent = pane.slots.label?.() || pane.props.label
        const tabindex = !disabled && pane.active ? 0 : -1
        return {
          ...pane,
          uid,
          disabled,
          tabName,
          closable,
          btnClose,
          tabLabelContent,
          tabindex
        }
      })
    )

    return {
      ns,
      tabs,
      isFocus,
      scrollable,
      rootTabs,
      props,
      changeTab,
      navStyle,
      setFocus,
      removeFocus,
      emit,
      EVENT_CODE
    }
  }
})
</script>

<template>
  <div ref="el$" class="mx-auto w-max">
    <div ref="navScroll$" :class="`bg-white shadow-regal-xl rounded-4xl border-regal-black-300 border-[0.5px] self-center mt-4 p-[4px] xl:mt-14 xl:border-[1px]`">
      <div
        ref="nav$"
        :class="`flex flex-row space-x-2 h-[38px] justify-between xl:h-12`"
        :style="navStyle"
        role="tablist"
        :onKeydown="changeTab"
      >
        <div
          v-for="pane in tabs"
          :ref="`tab-${pane.uid}`"
          :class="`flex flex-col items-center justify-center rounded-[26px] py-3 px-5 xl:h-12 xl:w-[176px] xl:p-0 ${pane.active ? 'bg-regal-blue text-white' : ''}`"
          :id="`tab-${pane.tabName}`"
          :key="`tab-${pane.uid}`"
          :aria-controls="`pane-${pane.tabName}`"
          role="tab"
          :aria-selected="pane.active"
          :tabindex="pane.tabindex"
          @focus="() => setFocus()"
          @blur="() => removeFocus()"
          @click="(ev: MouseEvent) => {
            removeFocus()
            emit('tabClick', pane, pane.tabName, ev)
          }"
        >
          <span class="font-normal break-words text-sm align-right whitespace-nowrap leading-[14px] xl:text-right xl:leading-4 cursor-pointer">
            {{ pane.tabLabelContent }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
