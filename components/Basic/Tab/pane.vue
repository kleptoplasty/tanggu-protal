<template>
  <div
    v-if="shouldBeRender"
    v-show="active"
    :id="`pane-${paneName}`"
    role="tabpanel"
    :aria-hidden="!active"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useSlots,
  watch,
} from 'vue'
import { eagerComputed } from '@vueuse/core'
import { throwError } from '../constants'
import { tabsRootContextKey } from './constants'
import { tabPaneProps } from './use-tab-pane'

const COMPONENT_NAME = 'BasicTabPane'
defineOptions({
  name: COMPONENT_NAME,
})
const props = defineProps(tabPaneProps)

const instance = getCurrentInstance()!
const slots = useSlots()

const tabsRoot = inject(tabsRootContextKey)
if (!tabsRoot)
  throwError(COMPONENT_NAME, 'usage: <BasicTab><BasicTabPane /></BasicTab/>')

const index = ref<string>()
const isClosable = computed(() => props.closable || tabsRoot.props.closable)
const active = eagerComputed(
  () => tabsRoot.currentName.value === (props.name ?? index.value)
)
const loaded = ref(active.value)
const paneName = computed(() => props.name ?? index.value)
const shouldBeRender = eagerComputed(
  () => !props.lazy || loaded.value || active.value
)

watch(active, (val) => {
  if (val) loaded.value = true
})

const pane = reactive({
  uid: instance.uid,
  slots,
  props,
  paneName,
  active,
  index,
  isClosable,
})

onMounted(() => {
  tabsRoot.registerPane(pane)
})

onUnmounted(() => {
  tabsRoot.unregisterPane(pane.uid)
})
</script>
