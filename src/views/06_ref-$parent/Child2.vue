<template>
  <div class="child2">
    <div>
      <h1>我是子组件2</h1>
      <h1>money: {{ money }}</h1>
    </div>
    <div>
      <button @click="handler1($parent)">向父亲要20块钱</button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const money = ref(2300);

const handler1 = ($parent:any)=>{
  $parent.money -= 20;
  money.value += 20;
}
</script>

<style scoped lang='scss'>
.child2{
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
</style>