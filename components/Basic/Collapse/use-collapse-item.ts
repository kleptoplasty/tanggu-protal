import { type CollapseItemProps, collapseContextKey, useIdInjection } from './constants'
import { inject, ref, unref, computed } from 'vue'

export const useCollapseItem = (props: CollapseItemProps) => {
  const collapse = inject(collapseContextKey)
  const focusing = ref(false)
  const isClick = ref(false)
  const idInjection = useIdInjection()
  const id = computed(() => idInjection.current++)
  const name = computed(() => {
    return (
      props.name ?? `collapse-id-${idInjection.prefix}-${unref(id)}`
    )
  })

  const isActive = computed(() =>
    collapse?.activeNames.value.includes(unref(name))
  )

  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true
      } else {
        isClick.value = false
      }
    }, 50)
  }

  const handleHeaderClick = () => {
    if (props.disabled) return
    collapse?.handleItemClick(unref(name))
    focusing.value = false
    isClick.value = true
  }

  const handleEnterClick = () => {
    collapse?.handleItemClick(unref(name))
  }

  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick,
  }
}

export const useCollapseItemDOM = (
  props: CollapseItemProps,
  { focusing, isActive, id }: Partial<ReturnType<typeof useCollapseItem>>
) => {
  const rootKls = computed(() => ['collapse-item', unref(isActive) && 'is-active', props.disabled && 'is-disabled'])
  const headKls = computed(() => ['collapse-item__header', unref(isActive) && 'is-active', { focusing: unref(focusing) && !props.disabled }])
  const arrowKls = computed(() => ['collapse-item__arrow', unref(isActive) && 'is-active'])

  return {
    rootKls,
    headKls,
    arrowKls
  }
}