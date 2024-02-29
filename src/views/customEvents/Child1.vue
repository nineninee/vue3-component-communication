<template>
  <div class="child">
    我是子元素1
  </div>
  </template>
  <script setup lang='ts'>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  </script>
  
  <style scoped lang='scss'>
  .child{
  width: 100px;
  height: 100px;
  background-color: pink;
}
  </style>