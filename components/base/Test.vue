<template>
  <div style="width: 300px">
    <BaseTabs v-model="activeName">
      <BaseTabPane v-for="tab in tabs" :label="tab" :name="tab" :key="tab">
        {{ tab }}
      </BaseTabPane>
    </BaseTabs>
    <button @click="activeName = 't6'">激活t6</button>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data() {
      return {
        activeName: 't1',
        tabs: ['t1', 't2', 't3', 't4', 't5', 't6'],
      };
    },
  };
</script>
