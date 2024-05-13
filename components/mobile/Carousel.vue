<template>
  <div class="carousel">
    <ul class="flex flex-row justify-center space-x-1">
      <li
        v-for="(item, index) in imglist"
        :key="index"
        :class="`w-[14px] h-[5px] border-[1px] ${index === current ? 'bg-regal-blue border-regal-blue' : ''}`"
        @click="changeImg(index)"
      />
    </ul>
    <div
      class="break-words text-regal-blue text-base font-['PingFangSC-Medium'] whitespace-nowrap leading-4 mt-6 text-center"
    >
      {{ imglist[current].title }}
    </div>
    <div class="mt-2 mb-3 text-xs leading-4 text-center break-words text-regal-blue opacity-60 z-0">
      {{ imglist[current].describe }}
    </div>
    <nuxt-img
      v-for="(item, index) in imglist"
      :key="index"
      :src="item.banner"
      v-show="index === current"
      alt="none"
      class="mt-3 mx-auto rounded shadow-regal-2xl w-[327px] h-[184px]"
      @mouseleave="changeInterval(false)"
      @mouseover="changeInterval(true)"
    />
  </div>
</template>

<!-- <script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'BaseCarousel',
  props: {
    imglist: {
      type: Array as any,
      default: () => []
    },
  },
  setup(props) {
    const current = ref(0);
    const timer = ref(null) as any;

    onMounted(() => {
      startInterval();
    });

    function startInterval(){
      // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
      clearInterval(timer.value);
      timer.value = setInterval(()=>{
        current.value++;
        if(current.value > props.imglist.length-1){
          current.value = 0
        }
      }, 1500)
    }

    function changeImg(index: number) {
      current.value = index
    }

    function changeInterval(val: any){
      if(val) {
        clearInterval(timer.value)
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
</script> -->

<script>
  export default {
    name: 'Carousel',
    props: {
      imglist: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        current: 0, // 当前所在图片下标
        timer: null, // 定时轮询
      };
    },
    //进入页面后启动定时轮询
    mounted() {
      this.startInterval();
    },
    methods: {
      //开启定时器
      startInterval() {
        // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.current++;
          if (this.current > this.imglist.length - 1) {
            this.current = 0;
          }
        }, 1500);
      },
      // 点击控制圆点
      changeImg(index) {
        this.current = index;
      },
      //鼠标移入移出控制
      changeInterval(val) {
        if (val) {
          clearInterval(this.timer);
        } else {
          this.startInterval();
        }
      },
    },
  };
</script>
