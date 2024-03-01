<template>
  <div class="child2">
    <div>
      <h1>我是孙子</h1>
      <h1>money: {{ money }}</h1>
    </div>
    <div>
      <button @click="handler1">改钱</button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, inject } from 'vue';

let money:any = inject('money')

const handler1 = ()=>{
  money.value +=10
}
</script>

<style scoped lang='scss'>
.child2{
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
</style>