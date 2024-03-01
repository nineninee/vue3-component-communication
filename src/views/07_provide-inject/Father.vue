<template>
  <div class="father">
    <div>
      <h1>我是父组件</h1>
      <p>money: {{ money }}</p>
      <div>
      </div>
    </div>

    <div class="content">
      <Child/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { provide } from "vue";
import Child from "./Child.vue";


const money = ref(1000);

provide("money", money);
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
