<template>
  <div class="orange">
    <AppHeader />
    <pre>橙色布局</pre>
    <slot />
  </div>
</template>

<style scoped>
  .orange {
    background-color: #eebb90;
    height: 100vh;
  }
</style>
