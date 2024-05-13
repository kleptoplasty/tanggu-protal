<!-- TabPane -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  name: string
  tab: string
}
defineProps<Props>()
</script>
