<template>
<div class="father">
  我是父元素
  <!-- 原生dom事件在dom标签上 -->
  <div>
    <button  @click="handler1">dom元素上的原生dom事件</button>
  </div>
  <!-- 自定义事件在组件标签上 -->
  <!-- 
    vue2框架当中：这种写法是自定义事件，可以通过.native修饰符变为原生dom事件
    vue3框架当中：这种写法就是原生dom事件

    vue3：原生的dom事件不管放在标签上还是组件标签上，都是原生dom事件
   -->
  <div>
    <Child1 @click="handler2" />
  </div>

  <!-- 绑定自定义事件handler3，实现子组件向父组件传递数据 -->
  <div>
    <Child2 @handler3="handler3" />
  </div>

</div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import Child1 from './Child1.vue';
import Child2 from './Child2.vue';


let toy = ref('变形金刚')

let changeToy = (value:string) => {
  toy.value = value || '奥特曼'
}


// 原生dom事件不管写在dom上还是组件上，都是原生dom事件
const handler1 = () => {
  alert('我是原生dom事件，在dom元素上')
}
const handler2 = () => {
  alert('我是原生dom事件, 在组件标签上')
}


const handler3 = (value) => {
  alert('我是自定义事件'+ value)
}


</script>

<style scoped lang='scss'>
.father{
  width: 200px;
  height: 500px;
  background-color: lightblue;
  color: #333;
}
</style>