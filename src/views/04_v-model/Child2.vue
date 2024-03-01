<template>
  <div class="child2">
    <div>
      <h1>我是子组件2</h1>
    </div>
    <div>
      <h1>pageNo: {{ pageNo }}</h1>
      <h1>pageSize: {{ pageSize }}</h1>

      <button @click="handler1">子组件2修改pageNo</button>
      <button @click="handler2">子组件2修改pageSize</button>
    </div>


  </div>
</template>
<script setup lang='ts'>

let props = defineProps(['pageNo', 'pageSize'])
let $emit = defineEmits(['update:pageNo', 'update:pageSize'])

const handler1 = () => {
  $emit('update:pageNo', props.pageNo + 1)
}

const handler2 = () => {
  $emit('update:pageSize', props.pageSize + 10)
}
</script>

<style scoped lang='scss'>
.child2{
  width: 300px;
  height: 300px;
  background-color: hotpink;
}
</style>