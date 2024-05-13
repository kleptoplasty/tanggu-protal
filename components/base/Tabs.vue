<template>
  <div
    :class="`bg-white shadow-regal-xl rounded-4xl border-regal-black-300 border-[0.5px] self-center mt-4 w-moblie-w p-[3.5px] xl:mt-14 xl:border-[1px] xl:w-[1032px] mx-auto`"
  >
    <div :class="`flex flex-row max-w-[335px] space-x-2 h-[38px] justify-between xl:h-12 xl:max-w-[1024px]`">
      <div
        :class="`flex flex-col items-center justify-center rounded-[26px] py-3 px-5 xl:h-12 xl:w-[176px] xl:p-0 ${currentTab === item.props?.tab ? 'bg-regal-blue text-white' : ''}`"
        v-for="(item, index) in panes"
        :key="index"
      >
        <span
          class="font-normal break-words text:sm align-right whitespace-nowrap leading-[14px] xl:text-right xl:leading-4 cursor-pointer"
          @click="tabClick(item.props?.tab)"
        >
          {{ item.props?.name }}
        </span>
      </div>
    </div>
  </div>
  <renderContent></renderContent>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'
type Props = {
  modelValue: string
  default?: string
}

const emit = defineEmits(['tab-click'])

const props = withDefaults(defineProps<Props>(), {
  default: '',
  modelValue: '',
})

const slots = useSlots() // 拿到 TabPane 的 slot
const panes = slots.default && slots.default()

const currentTab = ref<string>(props.modelValue)

const tabClick = (tab: string) => {
  currentTab.value = tab
  emit('tab-click', currentTab.value)
}

// 渲染的下方 插槽的相关数据
const renderContent = () => {
  return (
    slots.default &&
    slots.default().find((item) => {
      if (currentTab.value === '') {
        return true
      }
      return item.props?.tab === currentTab.value
    })
  )
}
</script>

<style scoped>
/* 滚动条的样式 */
div::-webkit-scrollbar {
  height: 2px;
}
div::-webkit-scrollbar-track {
  background: transparent;
}
div::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}
</style>