<template>
  <div class="child1">
    <div>
      <h1>我是子组件1</h1>
    </div>
    <div>
      <h1>money: {{ money }}</h1>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';


const money = ref(78);


defineExpose({money})
</script>

<style scoped lang='scss'>
.child1{
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>