<template>
  <div :class="`w-[937px] h-[610px] flex items-center justify-center ${customClass} ${ showBg ? 'bg-[url(\'/img/box_bg.png\')] bg-contain bg-no-repeat' : ''}`">
    <div class="bg-white rounded-lg shadow-regal-3xl w-[764px] h-[430px]">
      <div class="relative">
        <nuxt-img
          v-for="(item, index) in imglist"
          :key="index"
          :src="item.banner"
          v-show="index === current"
          alt="none"
          class="h-[430px]"
          @mouseleave="changeInterval(false)"
          @mouseover="changeInterval(true)"
        />
        <ul class="absolute flex flex-row justify-center space-x-1 bottom-[10px] inset-x-2/4 w-[120px] left-[310px]">
          <li
            v-for="(_, index) in imglist"
            :key="index"
            :class="`w-[36px] h-[12px] border-[1px] ${index === current ? 'bg-regal-blue border-regal-blue' : ''}`"
            @click="changeImg(index)"
          />
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { type PropType, defineComponent, watch, ref } from 'vue';
interface ITEM {
  title: string;
  describe: string;
  banner: string;
}

export default defineComponent({
  name: 'BaseCarousel',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    imglist: {
      type: Array as PropType<Array <ITEM>>,
      default: () => [],
    },
    showBg: {
      type: Boolean,
      default: true,
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const current = ref(0);
    let timer: number;

    onMounted(() => {
      startInterval();
    });

    watch(
      () => current.value,
      (v) => {
        emit('update:value', v);
        emit('change', v);
      },
    );

    function startInterval(){
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(timer);
      timer = Number(setInterval(()=>{
        current.value++;
        let len = props.imglist && props.imglist.length - 1;
        if(current.value > len){
          current.value = 0
        }
      }, 1500))
    }

    function changeImg(index: number) {
      current.value = index
    }

    function changeInterval(val: Boolean){
      if(val) {
        clearInterval(timer)
      } else {
        startInterval()
      }
    }

    return {
      current,
      changeImg,
      changeInterval
    }
  }
});
</script>
