<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/solutions_banner.png')] bg-no-repeat overflow-hidden bg-left-82-center bg-cover h-[350px] xl:w-full xl:h-[574px]"
      >
        <div class="w-[472px] h-[91px] mt-[162px] ml-[210px] flex flex-col justify-between">
          <span class="w-[312px] h-[52px] break-words text-regal-black-200 text-[52px] font-['AlimamaShuHeiTi-Bold'] font-bold whitespace-nowrap leading-[52px]">汤谷解决方案</span>
          <span class="w-[472px] h-4 break-words text-regal-gary text-base font-normal leading-4 whitespace-nowrap mt-[23px]">一站式定制化方案解决您的烦恼，驱动数字化转型升级与管理创新</span>
        </div>
        <div class="flex flex-row justify-between w-[188px] mt-8 mr-1 xl:w-[328px] xl:h-12 xl:mt-16 xl:ml-[210px]">
          <div class="flex flex-col items-center justify-center rounded bg-regal-green py-2 px-4 xl:p-0 xl:h-12 xl:w-[152px] cursor-pointer">
            <span class="text-base font-light leading-4 text-white break-words xl:h-4 xl:font-normal whitespace-nowrap">
              {{ Locale.Home.FreeTrial }}
            </span>
          </div>
          <div
            class="flex flex-col items-center justify-center rounded bg-white py-2 px-4 ml-3 xl:p-0 xl:h-12 xl:w-[152px] border-regal-blue border-[0.5px] xl:border-[1px] cursor-pointer"
          >
            <span class="text-base font-light leading-4 break-words xl:h-4 text-regal-blue xl:font-normal whitespace-nowrap">
              {{ Locale.Home.Details }}
            </span>
          </div>
        </div>
        <div
          class="text-xs break-words text-regal-black-200 font-['PingFangSC-Light'] font-light mt-4 mr-[38px] ml-[1px] xl:font-normal xl:text-base xl:leading-4 xl:w-[204px] xl:h-4 xl:mt-8 xl:mb-[101px] xl:ml-[210px]"
        >
          {{ Locale.Home.Telephone }}：0756-30624700
        </div>
      </div>
    </div>
    <div class="w-[256px] h-8 break-words text-regal-black-200 leading-8 text-[32px] font-['PingFangSC-Medium'] font-medium whitespace-nowrap mx-auto mt-[56px]">
      我们可以为你解决
    </div>
    <BaseTabs v-model="activeName">
      <BaseTabPane :name="Locale.Solutions.BigData" tab="bigdata">
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row justify-center">
            <div class="ml-[210px] w-[570px] h-[410px] mt-[100px]">
              <span class="w-[240px] h-12 break-words text-regal-black-200 text-5xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-12">{{ Locale.Solutions.BigData }}</span>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="w-[570px] h-[284px] mt-9 flex flex-col justify-between">
                <span class="w-[570px] h-[160px] break-words text-regal-gary text-2xl font-normal leading-10">提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。</span>
                <span class="w-[570px] h-[80px] break-words text-regal-gary text-2xl font-normal leading-10 mt-[44px]">可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。</span>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
      </BaseTabPane>
      <BaseTabPane :name="Locale.Solutions.SmartGovernment" tab="government">
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row justify-center">
            <div class="ml-[210px] w-[570px] h-[410px] mt-[100px]">
              <span class="w-[240px] h-12 break-words text-regal-black-200 text-5xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-12">{{ Locale.Solutions.SmartGovernment }}</span>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="w-[570px] h-[284px] mt-9 flex flex-col justify-between">
                <span class="w-[570px] h-[160px] break-words text-regal-gary text-2xl font-normal leading-10">提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。</span>
                <span class="w-[570px] h-[80px] break-words text-regal-gary text-2xl font-normal leading-10 mt-[44px]">可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。</span>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
      </BaseTabPane>
      <BaseTabPane :name="Locale.Solutions.SmartAffairs" tab="affairs">
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row justify-center">
            <div class="ml-[210px] w-[570px] h-[410px] mt-[100px]">
              <span class="w-[240px] h-12 break-words text-regal-black-200 text-5xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-12">{{ Locale.Solutions.SmartAffairs }}</span>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="w-[570px] h-[284px] mt-9 flex flex-col justify-between">
                <span class="w-[570px] h-[160px] break-words text-regal-gary text-2xl font-normal leading-10">提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。</span>
                <span class="w-[570px] h-[80px] break-words text-regal-gary text-2xl font-normal leading-10 mt-[44px]">可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。</span>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
      </BaseTabPane>
    </BaseTabs>
    <div class="bg-regal-gary-100 h-[827px] mt-[120px]">
      <div class="w-[128px] h-8 break-words text-regal-black-200 leading-8 text-[32px] font-['PingFangSC-Medium'] font-medium whitespace-nowrap mx-auto mt-[56px]">
        总体框架
      </div>
      <div class="w-[1500px] h-[543px] flex flex-wrap justify-between mx-auto mt-[100px]">
        <div v-for="(item, index) in data2" :key="index" :class="`shadow-regal-5 rounded-xl bg-[url('${item.bgimg}')] bg-contain bg-no-repeat w-[700px] h-[234px]`">
          <div class="w-24 h-6 mt-[66px] ml-14">
            <span class="w-24 h-6 break-words text-regal-black-200 text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-6">{{ item.title }}</span>
          </div>
          <div class="h-2 mt-8 w-7 ml-14">
            <div class="h-2 rounded-sm w-7 bg-regal-blue-5"></div>
          </div>
          <div class="w-[384px] h-4 mt-8 ml-14 flex flex-row flex-wrap justify-between">
            <span v-for="(ele, idx) in item.describe" :key="idx" class="h-4 text-base font-normal leading-7 break-words text-regal-gary">
              {{ ele }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[url('/img/solutions/功能框架-背景@2x.png')] bg-cover bg-no-repeat h-[969px] w-full relative">
      <div class="w-32 h-8 mt-[90px] mx-auto">
        <span class="text-regal-black-200 leading-8 text-[32px] font-['PingFangSC-Medium'] font-medium whitespace-nowrap">功能框架</span>
      </div>
      <div class="w-[1500px] flex justify-between flex-nowrap mx-auto">
        <div class="w-[412px] text-right">
          <div class="flex flex-col items-end justify-between">
            <nuxt-img src="/img/solutions/saas@2x.png" class="w-[52px] h-[52px]"/>
            <span class="w-[248px] h-6 break-words text-regal-black-200 text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-6 mt-6">Saas（软件即服务）层</span>
            <p class="w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-6">根据用户实际的业务需求，结合基础服务平台，为用户提供具体的功能模块，包括数据处理、管理、分析、监控、资料发布等功能。</p>
          </div>
          <div class="flex flex-col items-end justify-between mt-[100px]">
            <nuxt-img src="/img/solutions/paas@2x.png" class="w-[52px] h-[52px]"/>
            <span class="w-[248px] h-6 break-words text-regal-black-200 text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-6 mt-6">Paas（平台即服务）层</span>
            <p class="w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-6">作为开放、可扩展、成熟的应用系统，我们将提供元数据管理平台、信息采集平台、信息交换平台、数据处理服务平台、地理信息服务平台、门户支撑平台这六大基础服务平台，大部分功能模块通过这六大平台二次开发或配置完成，并保证业务模块的快速调整或功能扩展。</p>
          </div>
        </div>
        <div class="absolute left-[660px] top-[197px] w-[600px] h-[600px]">
          <nuxt-img src="/img/solutions/功能框架@2x.png" class="w-[600px] h-[600px]" />
        </div>
        <div class="w-[412px] text-left">
          <div class="flex flex-col items-start justify-between">
            <nuxt-img src="/img/solutions/laas@2x.png" class="w-[52px] h-[52px]"/>
            <span class="w-[248px] h-6 break-words text-regal-black-200 text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-6 mt-6">Iaas（设备即服务）层</span>
            <p class="w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-6">利用服务器、存储设备、网络设备等硬件设施，同时配合操作系统、虚拟化管理软件、数据库、网络管理系统为整个项目的部署、运行提供高效可控的硬件设施服务。</p>
          </div>
          <div class="flex flex-col items-start justify-between mt-[100px]">
            <nuxt-img src="/img/solutions/高并发@2x.png" class="w-[52px] h-[52px]"/>
            <span class="w-[248px] h-6 break-words text-regal-black-200 text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-6 mt-6">高并发、高性能设计</span>
            <p class="w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-6">利用对象存储、异步序列化模式解决高并发数据采集场景下传统数据库读写瓶颈，结合分布式存储处理、NoSQL、内存计算、预处理等大数据理念和处理模式，实现高性能的数据处理与分析。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Locale from '@/locales';
  const activeName = ref('bigdata');
  
  const data1 = computed(() => [
    {
      title: Locale.Home.DataSourceManagement.DataAcquisition,
      describe: '高效多渠道自动采集，自动化流程，保障数据',
      banner: '/img/demo/平台功能-数据生产-数据采集@2x.png',
    },
    {
      title: Locale.Home.DataSourceManagement.DataClassification,
      describe: '按需分类存储，简化数据检索，提高业务效率。',
      banner: '/img/home_banner.png',
    },
    {
      title: Locale.Home.DataSourceManagement.DataQuality,
      describe: '严格监控，确保数据准确性，提升决策质量。',
      banner: '/img/home_banner.png',
    },
    {
      title: Locale.Home.DataSourceManagement.DataPermission,
      describe: '细化权限控制，保障数据安全与合规使用。',
      banner: '/img/demo/平台功能-数据生产-权限管理@2x.png',
    },
  ]);
  
  const index_1 = ref(0);

  const updateIndex1 = (val: number) => {
    index_1.value = val;
  }

  const data2 = computed(() => [
    {
      title: '三个原则',
      describe: ['平台规划生态化', '平台规划生态化', '平台规划生态化'],
      bgimg: '/img/solutions/solutions_principle.png',
    },
    {
      title: '四步规则',
      describe: ['整合治理', '应用融合', '开放共享', '服务运营'],
      bgimg: '/img/solutions/solutions_rule.png',
    },
    {
      title: '五个平台',
      describe: ['大数据服务平台、资源体系管理平台、数据资源整合平台、数据交换平台、数据应用平台'],
      bgimg: '/img/solutions/solutions_platform.png',
    },
    {
      title: 'N个智慧专题',
      describe: ['提供N个智慧专题分析及应用服务'],
      bgimg: '/img/solutions/solutions_special.png',
    },
  ]);
</script>
