<template>
  <div class="child2">
    <div>
      <h1>我是子组件2</h1>
    </div>
    <div>
      <button @click="handler">点击向外发送数据</button>
    </div>


  </div>
</template>
<script setup lang='ts'>
import $bus from '@/bus'
const handler =  ()=>{
  $bus.emit('car',{name:'即可001'})
}
</script>

<style scoped lang='scss'>
.child2{
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
</style>