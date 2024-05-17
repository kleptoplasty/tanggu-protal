<template>
  <div class="w-full bg-regal-blue">
    <div class="w-[327px] mx-auto xl:w-[1500px] xl:mb-[27px] xl:flex">
      <div class="flex flex-col items-center">
        <div class="w-[327px] flex flex-row justify-between mt-8 mb-6 xl:w-[210px] xl:h-[104px] xl:flex-col">
          <nuxt-img src="/img/white_LOGO.png" class="w-[135px] xl:w-full"></nuxt-img>
          <nuxt-img src="/img/btn_top_n.png" class="w-9 xl:mt-6" @click="toTop()"></nuxt-img>
        </div>
      </div>
      <div class="hidden text-white xl:flex xl:justify-between xl:mt-10">
        <div class="bg-regal-blue-4 w-[1px] h-[87px] mx-[100px] mt-[19px]"></div>
        <div v-for="(item, index) in data" :key="index" class="flex items-start">
          <div class="mr-14">
            <span class="text-base font-normal leading-4 break-words whitespace-nowrap">{{ item.title }}</span>
            <ul class="block mt-[27px]">
              <li v-for="(ele, idx) in item.content" :key="idx" class="mb-4">
                <span class="text-sm font-normal leading-[14px]">{{ ele }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-regal-blue-4 w-[1px] h-[87px] mx-[100px] mt-[19px]"></div>
        <div class="">
          <span class="text-base font-normal leading-4 break-words whitespace-nowrap">联系我们</span>
          <ul class="block mt-[27px]">
            <li class="flex items-center mb-4">
              <nuxt-img src="/img/icon_tel.png" class="w-4 h-4 mr-3"/>
              <span class="text-sm font-normal leading-[14px]">0756-30624700</span>
            </li>
            <li class="flex items-center mb-4">
              <nuxt-img src="/img/icon_mail.png" class="w-4 h-4 mr-3"/>
              <span class="text-sm font-normal leading-[14px]">xxxxx@vicson.com</span>
            </li>
            <li class="flex items-center mb-4">
              <nuxt-img src="/img/icon_address.png" class="w-4 h-4 mr-3"/>
              <span class="text-sm font-normal leading-[14px]">广东省珠海市香洲区唐家湾镇大学路101号清华科技园二期H栋二楼</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-white w-[327px] h-[1px] mx-auto xl:w-[1500px] xl:mt-[26px]"></div>
    <div class="w-[327px] mx-auto xl:hidden">
      <BaseCollapse v-model="activeName" accordion>
        <BaseCollapseItem v-for="(item, index) in data" :key="index" :title="item.title" :name="`${index + 1}`">
          <div class="grid grid-cols-3 gap-x-8">
            <span class="block w-[112px] text-sm leading-[14px] text-white" v-for="(ele, idx) in item.content" :key="idx">{{ ele }}</span>
          </div>
        </BaseCollapseItem>
        <BaseCollapseItem title="联系方式" name="4">
          <div class="text-sm leading-[14px] text-white mb-2">0756-30624700</div>
          <div class="text-sm leading-[14px] text-white mb-2">xxxxx@vicson.com</div>
          <div class="text-sm leading-[14px] text-white">
            广东省珠海市香洲区唐家湾镇大学路101号清华科技园二期H栋二楼
          </div>
        </BaseCollapseItem>
      </BaseCollapse>
    </div>
    <div class="w-[327px] mx-auto mt-4 text-xs bg-regal-blue pb-10 text-white font-['PingFangSC-Light'] font-light whitespace-nowrap leading-3 flex flex-col xl:flex-row xl:pb-6 xl:w-[461px] xl:text-sm xl:font-normal xl:leading-[14px]">
      <div class="break-words xl:mr-2">版权所有：珠海伟诚科技股份有限公司</div>
      <div class="hidden xl:block bg-white w-[1px] h-[10px] mr-2 mt-[2px]"></div>
      <div class="mt-2 xl:mt-0">备案号&nbsp;3062470030624770&nbsp;号</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}
const activeName = ref('1')

const data = computed(() => [
  {
    title: '我们的产品',
    content: ['汤谷数据治理平台', '汤谷数据统计平台'],
  },
  {
    title: '服务与支持',
    content: ['客服热线', '在线客服', '帮助中心'],
  },
  {
    title: '关于我们',
    content: ['公司介绍'],
  }
])
</script>
