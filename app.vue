<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
  /* 淡入淡出效果 */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  /* 从上出现效果 */
  .rotate-enter-active,
  .rotate-leave-active {
    transition: all 0.4s;
  }
  .rotate-enter-from,
  .rotate-leave-to {
    opacity: 0;
    transform: rotate3d(1, 1, 1, 15deg);
  }

  /* 布局效果 */
  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
</style>
