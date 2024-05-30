import { definePropType, UPDATE_MODEL_EVENT, type Awaitable } from '../constants'
import { type TabsPaneContext, type TabPaneName } from './constants'
import type { ExtractPropTypes } from 'vue'
import Tabs from './index.vue'

export const tabsProps = {
  type: {
    type: String,
    values: ['card', 'border-card', ''],
    default: '',
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number],
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ['top', 'right', 'bottom', 'left'],
    default: 'top',
  },
  beforeLeave: {
    type: definePropType<
      (newName: TabPaneName, oldName: TabPaneName) => Awaitable<void | boolean>
    >(Function),
    default: () => true,
  },
  stretch: Boolean,
}

const isPaneName = (value: unknown): value is string | number =>
  isString(value) || isNumber(value)

export type TabsProps = ExtractPropTypes<typeof tabsProps>

export const tabsEmits = {
  [UPDATE_MODEL_EVENT]: (name: TabPaneName) => isPaneName(name),
  tabClick: (pane: TabsPaneContext, ev: Event) => ev instanceof Event,
  tabChange: (name: TabPaneName) => isPaneName(name),
  edit: (paneName: TabPaneName | undefined, action: 'remove' | 'add') =>
    ['remove', 'add'].includes(action),
  tabRemove: (name: TabPaneName) => isPaneName(name),
  tabAdd: () => true,
}

export type TabsEmits = typeof tabsEmits

export type TabsInstance = InstanceType<typeof Tabs> & {
  currentName: TabPaneName
}

export default tabsProps
