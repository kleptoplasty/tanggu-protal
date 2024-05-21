
<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
  import { useCollapse } from './use-collapse';
  import { collapseProps, collapseEmits } from './constants';

  defineOptions({
    name: 'BaseCollapse',
  })

  const props = defineProps(collapseProps)

  const emit = defineEmits(collapseEmits)

  const { activeNames, setActiveNames } = useCollapse(props, emit)

  defineExpose({
    activeNames,
    setActiveNames,
  })
</script>
