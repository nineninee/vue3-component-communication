<template>
  <div class="father">
    <div>
      <h1>我是父组件</h1>
    </div>

    <div class="content">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>
<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";


// 使用mitt插件实现
</script>

<style scoped lang="scss">
.father {
  height: 500px;
  color: #333;
  background-color: aquamarine;
}
.content{
  display: flex;
  justify-content: space-around;
}
</style>
