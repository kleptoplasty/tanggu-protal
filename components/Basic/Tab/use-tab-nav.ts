import type { TabsPaneContext, TabPaneName } from './constants'
import { definePropType, mutable } from '../constants'
import TabNav from './nav.vue'

export const tabNavProps = {
  panes: {
    type: definePropType<TabsPaneContext[]>(Array),
    default: () => mutable([] as const),
  },
  currentName: {
    type: [String, Number],
    default: '',
  },
  editable: Boolean,
  type: {
    type: String,
    values: ['card', 'border-card', ''],
    default: '',
  },
  stretch: Boolean,
}

export const tabNavEmits = {
  tabClick: (tab: TabsPaneContext, tabName: TabPaneName, ev: Event) =>
    ev instanceof Event,
  tabRemove: (tab: TabsPaneContext, ev: Event) => ev instanceof Event,
}

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>
export type TabNavEmits = typeof tabNavEmits

export type TabNavInstance = InstanceType<typeof TabNav> & {
  scrollToActiveTab: () => Promise<void>
  removeFocus: () => void
}
