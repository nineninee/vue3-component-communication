<template>
  <div class="child1">
    <div>
      <h1>我是孩子</h1>
    </div>
    <div>
      <GrandChild />
    </div>
  </div>
</template>
<script setup lang='ts'>
import GrandChild from "./GrandChild.vue";
import { ref } from 'vue';

</script>

<style scoped lang='scss'>
.child1{
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>