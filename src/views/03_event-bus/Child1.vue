<template>
  <div class="child1">
    <div>
      <h1>我是子组件1</h1>
    </div>
    <div>
      <h1>{{ car }}</h1>
    </div>


  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import $bus from '@/bus'

import { onMounted } from 'vue';

const car = ref()
onMounted(()=>{
  $bus.on('car',(data:any)=>{
    car.value = data.name
  })
})
</script>

<style scoped lang='scss'>
.child1{
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>