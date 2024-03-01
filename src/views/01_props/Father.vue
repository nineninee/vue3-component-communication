<template>
<div class="father">
  我是父元素
  <Child :toy="toy"  :changeToy="changeToy"/>
</div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Child from './Child.vue';


let toy = ref('变形金刚')

let changeToy = (value:string) => {
  toy.value = value || '奥特曼'
}

</script>

<style scoped lang='scss'>
.father{
  width: 200px;
  height: 200px;
  background-color: lightblue;
  color: #333;
}
</style>