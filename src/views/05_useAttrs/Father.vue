<template>
  <div class="father">
    <div>
      <h1>我是父组件</h1>
    </div>

    <div class="content">
      <MyButton type="primary" title="纯爱就是最吊的" @click="handler1" @myevent="handler2"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import MyButton from "./MyButton.vue";

const handler1 = () => {
}

const handler2 = () => {
}
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
