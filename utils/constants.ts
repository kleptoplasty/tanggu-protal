export type ElIdInjectionContext = {
  prefix: number
  current: number
}

export const definePropType = <T>(val: any): PropType<T> => val



