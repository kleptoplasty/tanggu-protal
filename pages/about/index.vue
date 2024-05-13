<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/about_banner.png')] bg-no-repeat overflow-hidden bg-left-86-center bg-cover h-[350px] xl:w-full xl:h-[574px]"
      >
        <div class="mt-[87px] ml-[22px] xl:mt-[270px] xl:ml-[210px]">
          <div class="break-words text-regal-black-200 text-[14px] leading-[14px] font-['AlimamaShuHeiTi-Bold'] font-bold xl:font-['PingFangSC-Semibold'] xl:font-semibold whitespace-nowrap xl:text-xl xl:leading-5 xl:h-[20px]">
            数据统计解决方案市场
          </div>
          <div class="break-words text-regal-black-200 font-['AlimamaShuHeiTi-Bold'] font-bold whitespace-nowrap mt-[50px] text-2xl xl:leading-[52px] xl:h-[52px] xl:text-[52px] xl:mt-[57px]">
            标语标语标语标语
          </div>
          <div class="break-words text-regal-black-200 text-[14px] leading-[14px] font-['PingFangSC-Light'] font-light mt-6 xl:text-base whitespace-nowrap xl:leading-4 xl:mt-[23px] xl:h-4 xl:text-regal-gary">
            数据支撑的证明或说明
          </div>
        </div>
      </div>
    </div>
    <div class="self-center mt-6 mb-9 text-center w-moblie-w xl:w-full xl:my-[90px]">
      <span class="block break-words text-regal-black-200 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center xl:text-[32px] xl:h-8 xl:leading-8">
        关于汤谷
      </span>
      <span class="block w-moblie-w break-words text-regal-gary text-[14px] font-['PingFangSC-Light'] font-light leading-[23px] mt-3 xl:mt-[19px] xl:leading-[27px] xl:font-normal xl:text-base xl:w-[1500px] xl:mx-auto">
        介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
      </span>
    </div>
    <div class="w-full pt-6 bg-regal-gary-100 pb-9">
      <div class="w-moblie-w mx-auto xl:pt-[56px] xl:w-full">
        <div class="break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold text-center whitespace-nowrap leading-5 xl:leading-8 xl:text-[32px] xl:h-8 xl:w-[480px] xl:mx-auto">
          两大产品，提供针对性的解决方案
        </div>
        <div class="break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light text-center leading-[23px] mt-3 xl:leading-[27px] xl:text-base xl:mt-[19px]">
          汤谷数据治理和汤谷智慧统计，可以根据业务需求和行业特点进一步细化，同时提供针对性的解决方案。
        </div>
      </div>
      <div class="flex flex-col mx-auto w-moblie-w xl:flex-row xl:items-center xl:w-[1500px]">
        <div class="flex flex-col mt-[68px] xl:mt-0">
          <div class="w-moblie-w mx-auto flex flex-row justify-between items-center xl:w-[448px]">
            <div class="flex flex-row">
              <nuxt-img src="/img/dot.png" class="w-5 h-5 mr-4 xl:w-6 xl:h-6"/>
              <span class="break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:text-2xl xl:leading-6">
                汤谷数据治理平台
              </span>
            </div>
            <div class="h-[1px] bg-regal-blue-3 w-[107px] xl:w-[148px]"></div>
            <nuxt-img src="/img/dot.png" class="w-2 h-2 rotate-90 xl:w-3 xl:h-3"/>
          </div>
          <span class="block w-[287px] h-[72px] break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light leading-6 mt-4 ml-9 xl:w-[376px] xl:h-[132px] xl:ml-10 xl:leading-[33px] xl:mt-6 xl:text-base">
            对治理平台的说明对治理平台的说明对治理平台的说明对治理平台的说明对治理平台的说明对治理平台的说明。
          </span>
          <ul class="w-[232px] mt-[18px] ml-9 grid grid-cols-3 gap-y-4 gap-x-8 xl:grid-cols-2 xl:gap-y-6 xl:gap-x-3 xl:mt-8 xl:ml-10 xl:w-[252px]">
            <li v-for="(item, index) in data1" :key="index" class="break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light whitespace-nowrap leading-[14px] xl:text-base">{{ item }}</li>
          </ul>
        </div>
        <div class="w-[278px] mx-auto xl:w-[556px]">
          <nuxt-img src="/img/icon_jjfa_bg.png" class="w-[278px] h-[278px] xl:w-[556px] xl:h-[556px]" />
          <span class="block break-words text-regal-blue text-xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap text-center leading-5 mt-[23px] xl:text-[29px] xl:h-[41px] xl:leading-[41px]">数据治理 + 数据统计</span>
        </div>
        <div class="flex flex-col items-end mt-[66px] xl:mt-0">
          <div class="w-moblie-w mx-auto flex flex-row justify-between items-center xl:w-[448px]">
            <nuxt-img src="/img/dot.png" class="w-2 h-2 xl:w-3 xl:h-3"/>
            <div class="h-[1px] bg-regal-blue-3 w-[107px] xl:w-[148px]"></div>
            <div class="flex flex-row">
              <span class="break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:text-2xl xl:leading-6">
                汤谷数据统计平台
              </span>
              <nuxt-img src="/img/dot.png" class="w-5 h-5 ml-4 rotate-90 xl:w-6 xl:h-6"/>
            </div>
          </div>
          <span class="block w-[287px] h-[72px] text-right break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light leading-6 mt-4 mr-9 xl:w-[376px] xl:h-[132px] xl:mr-10 xl:leading-[33px] xl:mt-6 xl:text-base">
            对统计平台的说明对统计平台的说明对统计平台的说明对统计平台的说明对统计平台的说明对统计平台的说明。
          </span>
          <ul class="w-[232px] mt-[18px] mr-9 grid grid-cols-3 gap-y-4 gap-x-8 xl:grid-cols-2 xl:gap-y-6 xl:mt-8 xl:mr-10 xl:w-[252px]">
            <li v-for="(item, index) in data1" :key="index" class="break-words text-right text-regal-gary text-sm font-['PingFangSC-Light'] font-light whitespace-nowrap leading-[14px] xl:text-base">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <div class="break-words text-regal-black-200 text-xl font-['PingFangSC-Semibold'] font-semibold text-center whitespace-nowrap leading-5 mt-6 xl:leading-8 xl:text-[32px] xl:h-8 xl:w-[480px] xl:mx-auto xl:mt-[90px]">
        您信赖的品牌，都选择了我们
      </div>
      <div class="mt-4 mb-9 mx-auto w-moblie-w grid grid-cols-2 gap-3 xl:mt-[60px] xl:flex xl:flex-row xl:w-[1500px] xl:gap-x-[60px]">
        <div v-for="(item, index) in data2" :key="index" class="w-[166px] h-[79px] bg-regal-gary-100 xl:w-[252px] xl:h-[120px]"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // definePageMeta({
  //   layout: 'default', // default | orange
  //   layoutTransition: {
  //     name: 'slide-in'
  //   },
  //   pageTransition: {
  //     name: 'rotate'
  //   }
  // })
  const data1 = computed(() => ['主要功能', '主要功能', '主要功能', '主要功能', '主要功能', '主要功能']);

  const data2 = computed(() => [ {}, {}, {}, {}, {}, {} ]);
</script>
