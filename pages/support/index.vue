<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/support_banner.png')] bg-no-repeat overflow-hidden bg-left-8-center bg-cover h-[350px] xl:w-full xl:h-[574px]"
      >
        <div class="pb-6 xl:w-[880px] text-center xl:mx-auto">
          <div class="break-words text-regal-black-200 mb-6 font-['AlimamaShuHeiTi-Bold'] font-bold whitespace-nowrap mt-[100px] text-2xl xl:text-[52px] xl:h-13 xl:mt-[263px]">
            技术支持
          </div>
          <div class="text-sm w-moblie-w h-[46px] break-words text-regal-gary font-light font-['PingFangSC-Light'] leading-6 mx-auto xl:w-[880px] xl:h-6 xl:text-2xl xl:font-normal xl:leading-6 xl:mt-8">
            我们的精英团队将全程为您提供卓越的支持服务，确保平台的无缝实施和最优运行
          </div>
        </div>
      </div>
    </div>
    <div class="text-regal-black-200 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center mt-6 xl:h-8 xl:mx-auto xl:text-[32px] xl:leading-8 xl:mt-[56px]">
      {{ Locale.Support.CPTechnicalSupport }}
    </div>
    <div class="self-center mt-6 mb-9 w-moblie-w xl:grid xl:grid-cols-3 xl:gap-x-8 xl:w-[1500px] xl:mb-[84px]">
      <div v-for="(item, index) in data1" :key="index" class="bg-[url('/img/card_bg.png')] bg-no-repeat bg-cover rounded px-6 flex flex-row justify-between mt-3 xl:h-[290px] xl:px-0 xl:relative">
        <span class="flex flex-col justify-start xl:ml-[46px]">
          <span class="break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 pt-8 xl:text-[32px] xl:mt-[46px]">
            {{ item.title }}
          </span>
          <span class="text-sm font-normal break-words text-regal-gary text-left whitespace-nowrap leading-[14px] mt-3 xl:text-2xl xl:mt-6">
            {{ item.describe }}
          </span>
          <span v-if="item.button" class="mt-6 text-base font-normal leading-4 text-left break-words whitespace-normal cursor-pointer text-regal-blue xl:text-2xl" @click="handleClick(item.button)">
            {{ item.button }}
          </span>
        </span>
        <nuxt-img :src="item.icon" alt="none" class="h-[138px] xl:h-[194px] xl:absolute xl:bottom-0 xl:right-0"/>
      </div>
    </div>
    <div class="w-full bg-regal-gary-100">
      <div class="text-regal-black-200 text-center text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center my-6 xl:mx-auto xl:text-[32px] xl:leading-8 xl:mt-[56px] xl:mb-[36px]">
        {{ Locale.Support.CPTechnicalSupport }}
      </div>
      <div class="mx-auto mb-[36px] xl:grid xl:grid-cols-3 xl:gap-x-16 xl:w-[1504px] xl:mb-[94px]">
        <div v-for="(item, index) in data2" :key="index" class="shadow-regal-4 w-moblie-w mx-auto bg-white rounded-[2px] mb-3 pb-6 xl:w-[480px] xl:pb-[56px]">
          <nuxt-img :src="item.banner" alt="none" class="h-[192px] xl:h-[270px]"/>
          <span class="block break-words text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 mt-6 ml-6 xl:mt-[56px] xl:ml-8 xl:text-[32px] xl:font-['PingFangSC-Medium'] xl:font-medium xl:leading-8">
            {{ item.title }}
          </span>
          <span class="block break-words text-regal-gary text-sm font-normal whitespace-nowrap leading-[14px] mt-4 ml-6 xl:mt-6 xl:ml-8 xl:leading-4 xl:text-base">
            {{ item.describe }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Locale from '@/locales';
  import { computed, ref } from 'vue';

  const data1 = computed(() => [
    {
      title: '客服热线',
      describe: '0759-30624700',
      icon: '/img/kefu.png',
    },
    {
      title: '在线客服',
      describe: '支持反馈与支持',
      icon: '/img/online_kefu.png',
      button: '立即反馈',
    },
    {
      title: '帮助中心',
      describe: '在线视频、文档',
      icon: '/img/support_center.png',
      button: '立即查询',
    },
  ]);

  const handleClick = (button: string) => {
    alert(`${button}功能开发中`)
  }

  const data2 = computed(() => [
    {
      title: '平台功能',
      describe: '深入了解「大数据智慧统计管理平台」',
      banner: '/img/mergeImage1.png',
    },
    {
      title: '敏捷咨询',
      describe: '高效运用敏捷实践',
      banner: '/img/mergeImage2.png',
    },
    {
      title: '敏捷培训',
      describe: '专属敏捷专家指导',
      banner: '/img/mergeImage3.png',
    },
  ]);
</script>
