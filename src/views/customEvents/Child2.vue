<template>
  <div class="child">
    我是子元素2
    <button @click="send">向父元素发送数据</button>
  </div>
  </template>
  <script setup lang='ts'>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';

  let $emit = defineEmits(['handler3'])
  
  const send = () => {
    $emit('handler3', '我是子元素2的数据')
  }
  </script>
  
  <style scoped lang='scss'>
  .child{
  width: 100px;
  height: 100px;
  background-color: yellow;
}
  </style>