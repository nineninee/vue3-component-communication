<template>
  <div class="child">
    我是子元素
    <h6>玩具：{{ toy }}</h6>
    <button @click="changeToy('狗狗')" >改变玩具</button>
  </div>
  </template>
  <script setup lang='ts'>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';

  defineProps(['toy', 'changeToy'])

  
  </script>
  
  <style scoped lang='scss'>
  .child{
  width: 100px;
  height: 100px;
  background-color: pink;
}
  </style>