<template>
  <div class="bg-white w-moblie-w rounded border-[1px] border-regal-gary-200 pb-3 mt-6 xl:w-[440px] xl:pb-9">
    <div class="bg-white w-[341px] h-[193px] border-b-[1px] border-regal-gary-200 xl:w-[438px]">
      <!-- 公司图片 -->
    </div>
    <div class="bg-regal-gary-300 w-[164px] h-[35px] mt-6 ml-6 xl:ml-8 xl:mt-8 xl:w-[211px]">
      <!-- 公司logo -->
    </div>
    <span class="block break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 mt-[27px] ml-6 xl:ml-8">
      {{ propsInfo.title }}
    </span>
    <span class="block w-[295px] break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light text-left leading-6 self-center mt-4 ml-6 xl:w-[376px] xl:ml-8 xl:mt-6">
      {{ propsInfo.describe }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  interface CardItem {
    banner: string;
    logo: string;
    title: string;
    describe: string;
  }

  const props = defineProps({
    info: Object as PropType<CardItem>
  })

  const propsInfo  = {
    banner: props.info?.banner || '',
    logo: props.info?.banner || '',
    title: props.info?.title || '',
    describe: props.info?.describe || '',
  }
</script>
