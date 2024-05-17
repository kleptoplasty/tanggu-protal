export type ElIdInjectionContext = {
  prefix: number
  current: number
}

export const definePropType = <T>(val: any): PropType<T> => val

export type CollapseActiveName = string | number

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<ElIdInjectionContext> = Symbol('elIdInjection')

export const collapseItemProps = {
  title: {
    type: String,
    default: '',
  },
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: undefined,
  },
  disabled: Boolean,
}

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export const useIdInjection = (): ElIdInjectionContext => {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')


import type { InjectionKey } from 'vue'

export type Arrayable<T> = T | T[]
export type CollapseModelValue = Arrayable<CollapseActiveName>
export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export type Mutable<T> = { -readonly [P in keyof T]: T[P] }
export type CollapseEmits = typeof collapseEmits
export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const CHANGE_EVENT = 'change'
export const INPUT_EVENT = 'input'

export const emitChangeFn = (value: CollapseModelValue) => isNumber(value) || isString(value) || isArray(value)

export const mutable = <T extends readonly any[] | Record<string, unknown>>(val: T) => val as Mutable<typeof val>

export const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
}

export const collapseProps = {
  accordion: Boolean,
  modelValue: {
    type: definePropType<CollapseModelValue>([Array, String, Number]),
    default: () => mutable([] as const),
  },
}
