<template>
  <div class="relative carousel">
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
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

export default defineComponent({
  name: 'BaseCarousel',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    imglist: {
      type: Array,
      default: () => []
    },
  },
  setup(props, { emit }) {
    const current = ref(0);
    const timer = ref(null);

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
      clearInterval(timer.value);
      timer.value = setInterval(()=>{
        current.value++;
        if(current.value > props.imglist.length-1){
          current.value = 0
        }
      }, 1500)
    }

    function changeImg(index) {
      current.value = index
    }

    function changeInterval(val){
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
</script>
