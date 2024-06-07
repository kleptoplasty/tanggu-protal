<template>
  <section class="flex flex-col h-full">
    <div class="flex flex-col w-full">
      <div
        class="bg-[url('/img/banner/cases_banner.png')] bg-no-repeat overflow-hidden bg-left-82-center bg-cover h-[350px] xl:w-full xl:h-[574px] xl:bg-top"
      >
        <div class="pt-[160px] pb-6 xl:pt-[210px]">
          <div class="break-words text-regal-black-200 mb-6 font-['AlimamaShuHeiTi-Bold font-bold text-center whitespace-nowrap text-2xl xl:text-[52px] xl:w-[416px] xl:h-13 xl:mt-[57px] xl:ml-[210px]">数据统计领域，客户遍及各地</div>
          <div class="text-sm break-words text-regal-black-200 font-light font-['PingFangSC-Light'] text-center whitespace-nowrap leading-[14px] mt-[1px] xl:w-[440px] xl:h-6 xl:text-2xl xl:font-normal xl:leading-6 xl:mt-9 xl:ml-[210px]">为企业客户提供行业领先的敏捷协作方案</div>
        </div>
      </div>
    </div>
    <div class="xl:w-32 xl:h-8 xl:text-3xl xl:mt-[117px] xl:mb-6 xl:leading-8 mx-auto break-words text-regal-black-200 font-['PingFangSC-Medium'] font-medium whitespace-nowrap">
      精选案例
    </div>
    <div class="block xl:hidden">
      <div class="flex flex-col items-center justify-center mx-auto mb-9 xl:grid xl:grid-cols-3 xl:gap-x-16 xl:gap-y-8">
        <BaseCard v-for="(item, index) in casesMobile" :key="index" :info="item" />
      </div>
    </div>
    <div class="hidden xl:block">
      <div class="w-full border-b-regal-gary-300 border-b-[1px] border-solid">
        <div class="flex mx-auto w-max">
          <div v-for="(item, index) in cases" :key="index" :class="`xl:w-[376px] cursor-pointer ${currentTab === index ? 'text-regal-blue-5 border-b-regal-blue-5 border-b-[1px]': ''}`" @click="changeTab(item)">
            <div :class="`whitespace-nowrap break-words w-max mx-auto text-regal-gary xl:h-6 xl:text-2xl xl:leading-6 xl:font-medium xl:my-[35px] ${currentTab === index ? 'text-regal-blue-5' : ''}`">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="xl:my-9">
        <div class="flex">
          <nuxt-img :src="cases[currentTab].banner" class="w-full h-[409px]"/>
          <div class="absolute right-14">
            <div class="xl:w-[824px] mt-14">
              <nuxt-img :src="cases[currentTab].icon" class="w-[223px] h-14"/>
              <div class="xl:mt-4">
                <p v-for="(item, index) in cases[currentTab].introduction" :key="index" class="mt-3 text-base font-normal leading-8 break-words text-regal-gary">{{ item }}</p>
              </div>
              <div class="xl:mt-12 xl:leading-5 xl:text-xl text-regal-black-200 font-['PingFangSC-Medium'] font-medium whitespace-nowrap break-words ">使用产品 / 解决方案</div>
              <div class="break-words xl:mt-4 xl:text-base xl:leading-8 font-noraml text-regal-gary">{{ cases[currentTab].productions.join() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CASEITEM {
  title: string;
  icon: string;
  banner: string;
  introduction: string[];
  productions: string[];
}

const casesMobile = computed(() => [
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

const cases = [
  {
    title: '珠海市统计局',
    icon: '/img/cases/zh_icon.png',
    banner: '/img/cases/zh_bg.png',
    introduction: [
      '与珠海市统计局的紧密合作已持续近10年，期间成功建立了微观库系统、宏观库系统和门户系统等多个关键平台。',
      '此外，还为第七次全国人口普查（七人普）和第五次全国经济普查（五经普）提供了数据处理系统，并开发了智慧统计系统。这些系统的建设不仅优化了珠海市统计局的日常工作流程，还显著提高了其普查工作的质量和效率。'
    ],
    productions: ['xxxx产品'],
  },
  {
    title: '江门市统计局',
    icon: '/img/cases/jm_icon.png',
    banner: '/img/cases/jm_bg.png',
    introduction: [
      '在江门统计局的指导下，已成功开展了两期智慧统计平台的建设。该平台实现了对局内数据的全面统一管理，并自动化了日常的数据分析工作。', 
      '此外，通过数据地图和数据大屏等应用成果，有效展示了数据分析的直观性和实用性。与此同时，该平台还构建了江门统计数据的完整指标体系，为数据决策提供了坚实的基础。'
    ],
    productions: ['xxxx产品'],
  },
  {
    title: '珠海市发展和改革局',
    icon: '/img/cases/zhfg_icon.png',
    banner: '/img/cases/zh_bg.png',
    introduction: [
      '利用智慧统计平台中的文档资料管理模块，为珠海市发展和改革局量身打造了全面的文档库管理系统。',
      '该系统实现了局内文档资料的集中管理，并支持对资料内容的全文检索。这种高效的文档管理方式显著提升了查找文档资料的效率，有效促进了内部信息的共享与利用。'
    ],
    productions: ['xxxx产品'],
  },
  {
    title: '中国华电集团有限公司',
    icon: '/img/cases/hd_icon.png',
    banner: '/img/cases/hd_bg.png',
    introduction: [
      '为中国华电集团建设了大宗物资电缆集中采购系统，该系统全面实现了华电集团旗下所有电缆采购单位的电缆线上采购功能，确保了采购流程的高效和透明。',
      '此外，系统还配备了采购数据的统计分析大屏展示功能，以及操作简便、功能强大的数据自助分析工具，极大地提升了采购数据的可视化及分析效率。'
    ],
    productions: ['xxxx产品'],
  },
]

const currentTab = ref(0);

const changeTab = (item: CASEITEM) => {
  const idx = cases.findIndex(i => i.title === item.title)
  currentTab.value = idx;
}

onMounted(() => {
  startInterval();
});
let timer: number;

function startInterval(){
  // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
  clearInterval(timer);
  timer = Number(setInterval(()=>{
    currentTab.value++;
    if(currentTab.value > cases.length - 1){
      currentTab.value = 0
    }
  }, 1500))
}
</script>
