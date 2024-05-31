<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/solutions_banner.png')] bg-no-repeat overflow-hidden bg-left-72-top bg-cover h-[350px] xl:bg-top xl:w-full xl:h-[574px]"
      >
        <div class="mt-[120px] ml-4 xl:w-[472px] xl:h-[91px] xl:mt-[162px] xl:ml-[210px] flex flex-col justify-between">
          <span class="break-words text-regal-black-200 font-['AlimamaShuHeiTi-Bold'] font-bold whitespace-nowrap text-2xl leading-6 ml-[6px] xl:w-[312px] xl:h-[52px] xl:leading-[52px] xl:text-[52px]">汤谷解决方案</span>
          <span class="w-[210px] h-12 break-words text-regal-gary text-sm font-light leading-6 mt-[22px] xl:w-[472px] xl:h-4 xl:text-base xl:font-normal xl:leading-4">一站式定制化方案解决您的烦恼，驱动数字化转型升级与管理创新</span>
        </div>
        <div class="flex flex-row justify-between w-[188px] mt-12 mr-1 ml-4 xl:w-[328px] xl:h-12 xl:mt-16 xl:ml-[210px]">
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
          class="text-xs break-words text-regal-black-200 font-['PingFangSC-Light'] font-light mt-4 mr-[38px] ml-4 xl:font-normal xl:text-base xl:leading-4 xl:w-[204px] xl:h-4 xl:mt-8 xl:mb-[101px] xl:ml-[210px]"
        >
          {{ Locale.Home.Telephone }}：0756-30624700
        </div>
      </div>
    </div>
    <div class="break-words text-regal-black-200 leading-5 mt-6 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap mx-auto xl:mt-[56px] xl:w-[256px] xl:h-8 xl:leading-8 xl:text-[32px]">
      我们可以为你解决
    </div>
    <BasicTab v-model="activeName">
      <BasicTabPane :label="Locale.Solutions.BigData" name="bigdata">
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
        <div class="self-center mx-auto mt-6 w-moblie-w xl:hidden">
          <div
            class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
          >
            {{ Locale.Solutions.BigData }}
          </div>
          <div class="self-center mt-4">
            <MobileCarousel :imglist="data1">
              <template #describe>
                <div class="w-[327px] break-words text-regal-blue text-xs font-normal text-center leading-[18px] mt-6">
                  提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。
                </div>
              </template>
            </MobileCarousel>
          </div>
        </div>
      </BasicTabPane>
      <BasicTabPane :label="Locale.Solutions.SmartGovernment" name="government">
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
        <div class="self-center mx-auto mt-6 w-moblie-w xl:hidden">
          <div
            class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
          >
            {{ Locale.Solutions.SmartGovernment }}
          </div>
          <div class="self-center mt-4">
            <MobileCarousel :imglist="data1">
              <template #describe>
                <div class="w-[327px] break-words text-regal-blue text-xs font-normal text-center leading-[18px] mt-6">
                  提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。
                </div>
              </template>
            </MobileCarousel>
          </div>
        </div>
      </BasicTabPane>
      <BasicTabPane :label="Locale.Solutions.SmartAffairs" name="affairs">
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
        <div class="self-center mx-auto mt-6 w-moblie-w xl:hidden">
          <div
            class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
          >
            {{ Locale.Solutions.SmartAffairs }}
          </div>
          <div class="self-center mt-4">
            <MobileCarousel :imglist="data1">
              <template #describe>
                <div class="w-[327px] break-words text-regal-blue text-xs font-normal text-center leading-[18px] mt-6">
                  提供的统计大数据解决方案基于元数据的数字化建模理念，建设共享、协作、高效的“统计业务资源管理与开发应用系统”，实现统一规范的数据管理、流程协作的工作模式、简单方便的可视化应用。可以大大减轻统计业务人员的劳动强度，提高办事效率，加快了领导的决策。
                </div>
              </template>
            </MobileCarousel>
          </div>
        </div>
      </BasicTabPane>
    </BasicTab>
    <div class="bg-regal-gary-100 h-[612px] mt-10 xl:h-[827px] xl:mt-[120px]">
      <div class="w-moblie-w text-center break-words text-regal-black-200 leading-5 mt-6 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap mx-auto xl:mt-[56px] xl:w-[256px] xl:h-8 xl:leading-8 xl:text-[32px]">
        总体框架
      </div>
      <div class="w-moblie-w h-[508px] xl:w-[1500px] xl:h-[543px] flex flex-col xl:flex-row xl:flex-wrap justify-between mx-auto mt-6 xl:mt-[100px]">
        <div v-for="(item, index) in data2" :key="index" :class="`bg-[url('/img/solutions/solutions_bg.png')] shadow-regal-5 rounded-xl bg-contain bg-no-repeat w-moblie-w xl:w-[700px] h-[115px] xl:h-[234px] flex items-center justify-between`">
          <div class="h-full z-[9]">
            <div class="w-24 h-6 ml-6 mt-6 xl:mt-[66px] xl:ml-14">
              <span class="w-24 h-6 break-words text-regal-black-200 text-xl xl:text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:leading-6">{{ item.title }}</span>
            </div>
            <div class="h-1 w-[14px] mt-4 ml-6 xl:h-2 xl:mt-8 xl:w-7 xl:ml-14">
              <div class="h-1 rounded-sm xl:h-2 w-7 bg-regal-blue-5"></div>
            </div>
            <div class="xl:w-[384px] h-4 mt-4 w-[284px] ml-6 xl:mt-8 xl:ml-14 flex flex-row flex-wrap justify-between">
              <span v-for="(ele, idx) in item.describe" :key="idx" class="h-4 text-xs font-normal leading-3 break-words xl:text-base xl:leading-7 text-regal-gary">
                {{ ele }}
              </span>
            </div>
          </div>
          <nuxt-img :src="item.icon" class="z-[8] h-full ml-[-70px] opacity-10 xl:opacity-100 xl:w-[171px] xl:h-[171px] xl:ml-0 xl:mr-[22px]" />
        </div>
      </div>
    </div>
    <div class="bg-[url('/img/solutions/功能框架-背景@2x.png')] bg-cover bg-no-repeat xl:h-[969px] w-full xl:relative">
      <div class="w-moblie-w text-center xl:w-32 xl:h-8 mt-6 xl:mt-[90px] mx-auto">
        <span class="break-words text-regal-black-200 leading-5 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap mx-auto xl:mt-[56px] xl:leading-8 xl:text-[32px]">功能框架</span>
      </div>
      <div class="w-moblie-w xl:w-[1500px] flex flex-col items-center justify-between flex-nowrap mx-auto mt-14 xl:flex-row">
        <div class="w-moblie-w text-left xl:w-[412px] xl:text-right">
          <div class="flex flex-col items-start justify-between xl:items-end">
            <div class="flex flex-row items-center xl:items-end xl:flex-col">
              <nuxt-img src="/img/solutions/saas@2x.png" class="w-8 h-8 xl:w-[52px] xl:h-[52px]"/>
              <span class="w-[248px] h-6 break-words text-regal-black-200 text-xl xl:text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:leading-6 mt-0 ml-[17px] xl:ml-0 xl:mt-6">Saas（软件即服务）层</span>
            </div>
            <p class="w-moblie-w xl:w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-3 xl:mt-6">根据用户实际的业务需求，结合基础服务平台，为用户提供具体的功能模块，包括数据处理、管理、分析、监控、资料发布等功能。</p>
          </div>
          <div class="flex flex-col items-start justify-between mt-9 xl:items-end xl:mt-[100px]">
            <div class="flex flex-row items-center xl:items-end xl:flex-col">
              <nuxt-img src="/img/solutions/paas@2x.png" class="w-8 h-8 xl:w-[52px] xl:h-[52px]"/>
              <span class="w-[248px] h-6 break-words text-regal-black-200 text-xl xl:text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:leading-6 mt-0 ml-[17px] xl:ml-0 xl:mt-6">Paas（平台即服务）层</span>
            </div>
            <p class="w-moblie-w xl:w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-3 xl:mt-6">作为开放、可扩展、成熟的应用系统，我们将提供元数据管理平台、信息采集平台、信息交换平台、数据处理服务平台、地理信息服务平台、门户支撑平台这六大基础服务平台，大部分功能模块通过这六大平台二次开发或配置完成，并保证业务模块的快速调整或功能扩展。</p>
          </div>
        </div>
        <div class="xl:absolute left-[660px] top-[197px] w-[300px] h-[326px] xl:w-[600px] xl:h-[600px]">
          <nuxt-img src="/img/solutions/功能框架@2x.png" class=" w-[300px] h-[326px] xl:w-[600px] xl:h-[600px]" />
        </div>
        <div class="w-moblie-w xl:w-[412px] text-left">
          <div class="flex flex-col items-start justify-between">
            <div class="flex flex-row items-center xl:items-start xl:flex-col ">
              <nuxt-img src="/img/solutions/laas@2x.png" class="w-8 h-8 xl:w-[52px] xl:h-[52px]"/>
              <span class="w-[248px] h-6 break-words text-regal-black-200 text-xl xl:text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:leading-6 mt-0 ml-[17px] xl:ml-0 xl:mt-6">Iaas（设备即服务）层</span>
            </div>
            <p class="w-moblie-w xl:w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-3 xl:mt-6">利用服务器、存储设备、网络设备等硬件设施，同时配合操作系统、虚拟化管理软件、数据库、网络管理系统为整个项目的部署、运行提供高效可控的硬件设施服务。</p>
          </div>
          <div class="flex flex-col items-start justify-between mt-9 mb-9 xl:mb-0 xl:mt-[100px]">
            <div class="flex flex-row items-center xl:items-start xl:flex-col">
              <nuxt-img src="/img/solutions/高并发@2x.png" class="w-8 h-8 xl:w-[52px] xl:h-[52px]"/>
              <span class="w-[248px] h-6 break-words text-regal-black-200 text-xl xl:text-2xl font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-5 xl:leading-6 mt-0 ml-[17px] xl:ml-0 xl:mt-6">高并发、高性能设计</span>
            </div>
            <p class="w-moblie-w xl:w-[412px] break-wrods text-regal-gary text-base font-normal leading-[33px] mt-3 xl:mt-6">利用对象存储、异步序列化模式解决高并发数据采集场景下传统数据库读写瓶颈，结合分布式存储处理、NoSQL、内存计算、预处理等大数据理念和处理模式，实现高性能的数据处理与分析。</p>
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
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataSourceManagement.DataQuality,
      describe: '严格监控，确保数据准确性，提升决策质量。',
      banner: '/img/banner/home_banner.png',
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
      icon: '/img/solutions/principle.png',
    },
    {
      title: '四步规则',
      describe: ['整合治理', '应用融合', '开放共享', '服务运营'],
      icon: '/img/solutions/rule.png',
    },
    {
      title: '五个平台',
      describe: ['大数据服务平台、资源体系管理平台、数据资源整合平台、数据交换平台、数据应用平台'],
      icon: '/img/solutions/platform.png',
    },
    {
      title: 'N个智慧专题',
      describe: ['提供N个智慧专题分析及应用服务'],
      icon: '/img/solutions/special.png',
    },
  ]);
</script>
