<template>
  <div>
    <h2></h2>
    <button :="$attrs">提示按钮</button>
  </div>
</template>
<script setup lang='ts'>
import { useAttrs } from 'vue';

let $attrs = useAttrs();

// 引入useAttrs方法：获取组件标签身上的属性和事件（包括原生事件和自定义事件）
// 此方法会返回一个对象

// 万一用props接收title
// props与useAttrs方法都可以获取父组件传递过来的属性和属性值
// 但是props接收了以后 useAttrs方法就获取不到了
</script>

<style scoped lang='scss'>

</style>