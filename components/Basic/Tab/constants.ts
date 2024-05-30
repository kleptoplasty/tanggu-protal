import type { ComputedRef, InjectionKey, Ref, Slots, UnwrapRef, ExtractPropTypes } from 'vue'
import type { Awaitable } from '../constants'
import type { TabPaneProps } from './use-tab-pane'

import { definePropType } from '../constants'

export type TabPaneName = string | number

export type TabsProps = ExtractPropTypes<typeof tabsProps>

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

export type TabsPaneContext = UnwrapRef<{
  uid: number
  slots: Slots
  props: TabPaneProps
  paneName: ComputedRef<string | number | undefined>
  active: ComputedRef<boolean>
  index: Ref<string | undefined>
  isClosable: ComputedRef<boolean>
}>

export interface TabsRootContext {
  props: TabsProps
  currentName: Ref<string | number>
  registerPane: (pane: TabsPaneContext) => void
  unregisterPane: (uid: number) => void
}

export const tabsRootContextKey: InjectionKey<TabsRootContext> = Symbol('tabsRootContextKey')
