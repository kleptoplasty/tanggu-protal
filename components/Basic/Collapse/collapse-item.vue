<template>
  <div :class="`${rootKls}`">
    <button
      :class="`${headKls} w-[314px] my-4 flex justify-between items-center`"
      :aria-expanded="isActive"
      @click="handleHeaderClick"
      @keydown.space.enter.stop.prevent="handleEnterClick"
      @focus="handleFocus"
    >
      <div class="font-normal leading-4 text-white break-words whitespace-nowrap">
        <slot name="title">{{ title }}</slot>
      </div>
      <nuxt-img src="/img/down-arrow.png" :class="`transition-all w-6 ${isActive ? '' : 'rotate-180'}`"></nuxt-img>
    </button>
    <BasicCollapseTransition>
      <div v-show="isActive" role="region" :aria-hidden="!isActive" class="collapse-item__wrap border-x-0 border-t-0 border-b-white border-[1px] pb-4">
        <div class="collapse-item__content">
          <slot />
        </div>
      </div>
    </BasicCollapseTransition>
  </div>
</template>

<script lang="ts" setup>
import { useCollapseItem, useCollapseItemDOM } from './use-collapse-item'
import { collapseItemProps } from './constants';

defineOptions({
  name: 'BaseCollapseItem',
})

const props = defineProps(collapseItemProps)

const {
  focusing,
  id,
  isActive,
  handleFocus,
  handleHeaderClick,
  handleEnterClick,
} = useCollapseItem(props)

const { headKls, rootKls } = useCollapseItemDOM(props, { focusing, isActive, id })
</script>
