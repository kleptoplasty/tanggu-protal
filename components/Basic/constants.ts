import { capitalize as toCapitalize } from '@vue/shared'

export type Mutable<T> = { -readonly [P in keyof T]: T[P] }

export const mutable = <T extends readonly any[] | Record<string, unknown>>(val: T) => val as Mutable<typeof val>

export const definePropType = <T>(val: any): PropType<T> => val

class ElementPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'ElementPlusError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new ElementPlusError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void

export function debugWarn(scope: string, message: string): void

export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new ElementPlusError(`[${scope}] ${message}`)
      : scope
    console.warn(error)
  }
}

export const capitalize = <T extends string>(str: T) => toCapitalize(str) as Capitalize<T>


export type HTMLElementCustomized<T> = HTMLElement & T

export type Nullable<T> = T | null

export type Arrayable<T> = T | T[]
export type Awaitable<T> = Promise<T> | T

export const EVENT_CODE = {
  tab: 'Tab',
  enter: 'Enter',
  space: 'Space',
  left: 'ArrowLeft', // 37
  up: 'ArrowUp', // 38
  right: 'ArrowRight', // 39
  down: 'ArrowDown', // 40
  esc: 'Escape',
  delete: 'Delete',
  backspace: 'Backspace',
  numpadEnter: 'NumpadEnter',
  pageUp: 'PageUp',
  pageDown: 'PageDown',
  home: 'Home',
  end: 'End',
}

export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const CHANGE_EVENT = 'change'
export const INPUT_EVENT = 'input'
