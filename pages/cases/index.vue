<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/cases_banner.png')] bg-no-repeat overflow-hidden bg-left-82-center bg-cover h-[350px] xl:w-full xl:h-[574px]"
      >
        <div class="pt-[100px] pb-6 xl:pt-[210px]">
          <div class="break-words text-regal-black-200 mb-6 font-['AlimamaShuHeiTi-Bold font-bold text-center whitespace-nowrap text-2xl xl:text-[52px] xl:w-[416px] xl:h-13 xl:mt-[57px] xl:ml-[210px]">数据统计领域，客户遍及各地</div>
          <div class="text-sm break-words text-regal-black-200 font-light font-['PingFangSC-Light'] text-center whitespace-nowrap leading-[14px] mt-[1px] xl:w-[440px] xl:h-6 xl:text-2xl xl:font-normal xl:leading-6 xl:mt-9 xl:ml-[210px]">为企业客户提供行业领先的敏捷协作方案</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mx-auto mb-9 xl:grid xl:grid-cols-3 xl:gap-x-16 xl:gap-y-8">
      <BaseCard v-for="(item, index) in cases" :key="index" :info="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const cases = computed(() => [
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
  {
    banner: '',
    logo: '',
    title: '公司名称',
    describe: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
  },
])
</script>
