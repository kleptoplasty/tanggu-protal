import type { ExtractPropTypes } from 'vue'
import type TabPane from './pane.vue'

export const tabPaneProps = {
  label: {
    type: String,
    default: '',
  },
  name: {
    type: [String, Number],
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean,
}

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export type TabPaneInstance = InstanceType<typeof TabPane>

export default tabPaneProps