<template>
  <div class="child1">
    <div>
      <h1>我是子组件1</h1>
    </div>
    <div>
      <h1>{{ modelValue }}</h1>
      <button @click="handler">点我修改sum</button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { onMounted } from 'vue';

let props = defineProps(['modelValue'])
let $emit = defineEmits(['update:modelValue'])
const handler = () => {
  $emit('update:modelValue', props.modelValue + 100)
}

</script>

<style scoped lang='scss'>
.child1{
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>