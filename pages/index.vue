<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/home_banner.png')] bg-no-repeat overflow-hidden bg-left-66-center bg-cover h-[350px] xl:w-full xl:h-[574px]"
      >
        <div class="pt-[55px] pr-[167px] pb-6 pl-4 xl:p-0">
          <span
            class="hidden w-64 h-5 text-xl break-words text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold text-left whitespace-nowrap leading-5 mt-36 ml-52 xl:block"
            >{{ Locale.Home.TgPlatform }}</span
          >
          <div
            class="break-words text-regal-black-200 font-['AlimamaShuHeiTi-Bold font-bold text-left whitespace-nowrap leading-[52px] text-2xl xl:text-[52px] xl:w-[416px] xl:h-13 xl:mt-[57px] xl:ml-[210px]"
            >{{ Locale.Home.Solutions }}</div
          >
          <div
            class="mt-4 mr-15 xl:m-0 xl:flex xl:flex-row justify-between items-center xl:w-[704px] xl:h-4 xl:mt-[23px] xl:ml-[210px]"
          >
            <template v-for="(item, index) in list" :key="index">
              <span class="flex items-center">
                <nuxt-img
                  src="/img/dot.png"
                  alt="icon"
                  class="inline-block w-[6px] h-[6px] mr-3 xl:hidden"
                />
                <span
                  class="block text-base font-light font-['PingFangSC-Light'] leading-7 text-regal-gary whitespace-nowrap xl:font-normal xl:leading-4"
                  >{{ item }}</span
                >
              </span>
              <div
                v-show="index !== list.length - 1"
                class="hidden xl:block w-[1px] h-3 bg-regal-black-100 border-[1px] border-solid border-regal-black mt-[2px]"
              ></div>
            </template>
          </div>
          <div
            class="flex flex-row justify-between w-[188px] mt-8 mr-1 xl:w-[328px] xl:h-12 xl:mt-16 xl:ml-[210px]"
          >
            <div
              class="flex flex-col items-center justify-center rounded bg-regal-green py-2 px-4 xl:p-0 xl:h-12 xl:w-[152px] cursor-pointer"
            >
              <span
                class="text-base font-light leading-4 text-white break-words xl:h-4 xl:font-normal whitespace-nowrap"
              >
                {{ Locale.Home.FreeTrial }}
              </span>
            </div>
            <div
              class="flex flex-col items-center justify-center rounded bg-white py-2 px-4 ml-3 xl:p-0 xl:h-12 xl:w-[152px] border-regal-blue border-[0.5px] xl:border-[1px] cursor-pointer"
            >
              <span
                class="text-base font-light leading-4 break-words xl:h-4 text-regal-blue xl:font-normal whitespace-nowrap"
              >
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
    </div>
    <!-- 平台功能 -->
    <div class="w-moblie-w text-center self-center mt-6 xl:w-[720px] xl:mt-14">
      <div
        class="break-words text-regal-black-200 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center xl:leading-8 xl:text-[32px]"
      >
        {{ Locale.Home.Platform }}
      </div>
      <div
        class="self-center w-moblie-w h-12 break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light leading-6 mt-3 xl:w-[720px] xl:h-4 xl:text-base xl:leading-4 xl:mt-6"
      >
        {{ Locale.Home.PlatformFunction }}
      </div>
    </div>
    <BasicTab v-model="activeName">
      <BasicTabPane :label="Locale.Home.Production.DataProduction" name="production">
        <!-- Web端：数据资源管理 -->
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row justify-center">
            <div class="ml-[210px]">
              <div
                class="break-words text-5xl w-full text-left h-12 text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-[48px]"
              >
                {{ Locale.Home.DataManagement }}
              </div>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="border-l-[1px] border-l-regal-black-400 mt-9">
                <ul>
                  <li v-for="(item, index) in data1" :key="index" :class="`w-[542px] h-[108px] bg-[100% 100%] flex items-center ${index_1 === index ? 'bg-liner-blue' : '' }`">
                    <div class="w-[480px] h-15 ml-6">
                      <div :class="`w-24 h-6 break-words text-2xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-6 ${index_1 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.title }}</div>
                      <div :class="`w-full h-6 break-words text-base font-normal whitespace-nowrap leading-6 mt-3 ${index_1 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.describe }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
        <!-- 移动端：数据资源管理 -->
        <div class="self-center mx-auto mt-6 w-moblie-w xl:hidden">
          <div
            class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
          >
            {{ Locale.Home.DataManagement }}
          </div>
          <div class="self-center mt-4">
            <MobileCarousel :imglist="data1" />
          </div>
        </div>
      </BasicTabPane>
      <BasicTabPane :label="Locale.Home.Production.DataService" name="service">
        <!-- Web端：数据服务门户 -->
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row items-center justify-center">
            <div class="ml-[210px]">
              <div
                class="break-words text-5xl w-full text-left h-12 text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-[48px]"
              >
                {{ Locale.Home.DataProtals }}
              </div>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="border-l-[1px] border-l-regal-black-400 mt-9">
                <span class="block w-[542px] ml-6 pr-[100px]">描述文字描述文字，描述文字描述文字描述文字描述文字描述文字，描述文字描述文字描述文字描述文字描述文字，描述文字描述文字描述文字描述文字描述文字</span>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
      </BasicTabPane>
      <BasicTabPane :label="Locale.Home.Production.SupportPlatform" name="supporting">
        <!-- Web端：数据资源管理 -->
        <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
          <div class="flex flex-row justify-center">
            <div class="ml-[210px]">
              <div
                class="break-words text-5xl w-full text-left h-12 text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-[48px]"
              >
                {{ Locale.Home.Production.SupportPlatform }}
              </div>
              <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
              <div class="border-l-[1px] border-l-regal-black-400 mt-9">
                <ul>
                  <li v-for="(item, index) in data1" :key="index" :class="`w-[542px] h-[108px] bg-[100% 100%] flex items-center ${index_1 === index ? 'bg-liner-blue' : '' }`">
                    <div class="w-[480px] h-15 ml-6">
                      <div :class="`w-24 h-6 break-words text-2xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-6 ${index_1 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.title }}</div>
                      <div :class="`w-full h-6 break-words text-base font-normal whitespace-nowrap leading-6 mt-3 ${index_1 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.describe }}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="height-[610px] w-[973px] flex items-center">
              <BaseCarousel :imglist="data1" @change="(val) => updateIndex1(val)" />
            </div>
          </div>
        </div>
        <!-- 移动端：数据资源管理 -->
        <div class="self-center mx-auto mt-6 w-moblie-w xl:hidden">
          <div
            class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
          >
            {{ Locale.Home.Production.SupportPlatform }}
          </div>
          <div class="self-center mt-4">
            <MobileCarousel :imglist="data1" />
          </div>
        </div>
      </BasicTabPane>
    </BasicTab>
    <!-- Web端：数据分析处理 -->
    <div class="mt-[160px] mx-auto mb-[120px] w-[1707px] hidden xl:block">
      <div class="flex flex-row justify-center">
        <div class="height-[610px] w-[973px] flex items-center">
          <BaseCarousel :imglist="data2" @change="(val) => updateIndex2(val)" />
        </div>
        <div class="flex flex-col items-end">
          <div
            class="break-words text-5xl w-full text-right h-12 text-regal-black-200 font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap leading-[48px]"
          >
            {{ Locale.Home.DataAnalysis }}
          </div>
          <div class="w-[46px] h-[6px] mt-9 bg-regal-blue"></div>
          <div class="border-r-[1px] border-r-regal-black-400 mt-9">
            <ul>
              <li v-for="(item, index) in data2" :key="index" :class="`w-[542px] h-[108px] bg-[100% 100%] flex items-center ${index_2 === index ? 'bg-liner-blue-reverse' : '' }`">
                <div class="w-[480px] h-15 ml-6">
                  <div :class="`w-24 h-6 break-words text-2xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-6 ${index_2 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.title }}</div>
                  <div :class="`w-full h-6 break-words text-base font-normal whitespace-nowrap leading-6 mt-3 ${index_2 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.describe }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动端：数据分析处理 -->
    <div class="self-center mx-auto my-6 w-moblie-w xl:hidden">
      <div
        class="break-words text-regal-black-200 text-xl text-center font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center"
      >
        {{ Locale.Home.DataAnalysis }}
      </div>
      <div class="self-center mt-4">
        <MobileCarousel :imglist="data2" />
      </div>
    </div>
    <!-- 数据治理服务 -->
    <div class="w-full bg-regal-gary-100 pb-9 xl:pb-[102px]">
      <!-- 标题 -->
      <div class="w-moblie-w text-center self-center mx-auto mt-6 pt-6 xl:pt-14 xl:w-[928px] xl:mt-14">
        <div
          class="break-words text-regal-black-200 text-xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-5 self-center xl:leading-8 xl:text-[32px]"
        >
          {{ Locale.Home.DataGovernance }}
        </div>
        <div
          class="self-center w-moblie-w h-16 break-words text-regal-gary text-sm font-['PingFangSC-Light'] font-light leading-6 mt-3 xl:w-[928px] xl:h-4 xl:text-base xl:leading-4 xl:mt-6"
        >
          {{ Locale.Home.DataGovernanceDescrible }}
        </div>
      </div>
      <!-- 移动端：数据治理服务 -->
      <div class="mt-5 xl:hidden">
        <BasicTab v-model="activeName2">
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPReport" name="report">
            <div class="mt-9">
              <MobileCarousel :imglist="data3" />
            </div>
          </BasicTabPane>
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPBigScreen" name="bigscreen">
            <div class="h-96">经济运行大屏</div>
          </BasicTabPane>
        </BasicTab>
      </div>
      <!-- Web端：数据治理服务 -->
      <div class="hidden xl:block">
        <BasicTab v-model="activeName2">
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPReport" name="report">
            <div class="mt-[126px] mx-auto w-[1707px] hidden xl:block">
              <div class="flex flex-row justify-center">
                <div class="ml-[210px]">
                  <div class="border-l-[1px] border-l-regal-black-400 mt-9">
                    <ul>
                      <li v-for="(item, index) in data3" :key="index" :class="`w-[542px] h-[108px] bg-[100% 100%] flex items-center ${index_3 === index ? 'bg-liner-blue' : '' }`">
                        <div class="w-[480px] h-15 ml-6">
                          <div :class="`w-24 h-6 break-words text-2xl font-['PingFangSC-Medium'] font-medium whitespace-nowrap leading-6 ${index_3 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.title }}</div>
                          <div :class="`w-full h-6 break-words text-base font-normal whitespace-nowrap leading-6 mt-3 ${index_3 === index ? 'text-regal-blue' : 'text-regal-black-200' }`">{{ item.describe }}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="height-[610px] w-[973px] flex items-center">
                  <BaseCarousel :imglist="data3" @change="(val) => updateIndex3(val)" />
                </div>
              </div>
            </div>
          </BasicTabPane>
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPBigScreen" name="bigscreen">
            <div class="w-[888px] mx-auto">
              <div class="w-[384px] h-12 break-words text-regal-black-200 text-[48px] font-['PingFangSC-Semibold'] font-semibold whitespace-nowrap mx-auto mt-[100px]">
                {{ Locale.Home.DataGovernanceManagement.ISMPBigScreen }}
              </div>
              <div class="w-[888px] h-10 break-words text-regal-gary text-2xl font-normal whitespace-nowrap leading-10 mx-auto mt-3 mb-9">
                描述文字描述文字，描述文字描述文字描述文字描述文字描述文字描述文字描述文。
              </div>
              <BaseCarousel
                :imglist="data4"
                :show-bg="false"
                @change="(val) => updateIndex4(val)"
              />
            </div>
          </BasicTabPane>
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPMap" name="map">
            <div class="h-96">数据地图</div>
          </BasicTabPane>
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPLibrary" name="library">
            <div class="h-96">主题库建设</div>
          </BasicTabPane>
          <BasicTabPane :label="Locale.Home.DataGovernanceManagement.ISMPIndex" name="index">
            <div class="h-96">统计指标编制</div>
          </BasicTabPane>
        </BasicTab>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Locale from '@/locales';
  import { computed, ref } from 'vue';

  const activeName22 = ref('service');

  const list = computed(() => [
    Locale.Home.Describe.DataSecurity,
    Locale.Home.Describe.DataAcquisition,
    Locale.Home.Describe.MetaData,
    Locale.Home.Describe.DataAutomation,
  ]);

  const activeName = ref('production');

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
      title: Locale.Home.DataAnalysisManagement.DataSummary,
      describe: '一键汇总分析，快速生成宏观数据报告。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataAnalysisManagement.ProcessingTask,
      describe: '流程自动化，提升数据处理与分析的效率。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataAnalysisManagement.DataPublishing,
      describe: '即时发布，确保数据共享的时效性和便捷性。',
      banner: '/img/banner/home_banner.png',
    },
  ])

  const index_2 = ref(0);

  const updateIndex2 = (val: number) => {
    index_2.value = val;
  }

  const activeName2 = ref('report');

  const data3 = computed(() => [
    {
      title: Locale.Home.DataGovernanceReport.Comprehensive,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Industry,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.LaborManagement,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Service,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Investment,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Energy,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/banner/home_banner.png',
    },
  ])

  const index_3 = ref(0);

  const updateIndex3 = (val: number) => {
    index_3.value = val;
  }

  const data4 = computed(() => [
    {
      title: Locale.Home.DataGovernanceReport.Comprehensive,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/demo/economic-map.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Industry,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/demo/economic-map.png',
    },
    {
      title: Locale.Home.DataGovernanceReport.Industry,
      describe: '描述文字描述文字，描述文字描述文字文。',
      banner: '/img/demo/economic-map.png',
    }
  ])

  const index_4 = ref(0);

  const updateIndex4 = (val: number) => {
    index_4.value = val;
  }
</script>
