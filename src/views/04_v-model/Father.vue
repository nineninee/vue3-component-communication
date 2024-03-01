<template>
  <div class="father">
    <div>
      <h1>我是父组件</h1>                                                                                                                                              
      <h1>sum: {{ sum }}</h1>

      <h1>pageNo: {{ pageNo }}</h1>
      <h1>pageSize: {{ pageSize }}</h1>
    </div>

    <div class="content">
      <!-- 
        v-model: 在组件身上使用
        第一：相当于有给子组件传递props[modelValue] = 100
        第二：相当于给子组件绑定自定义事件update:modelValue
       -->
      <!-- <Child1 :modelValue="sum" @update:modelValue="handler"></Child1> -->

      <!-- 和上面的写法相同 -->
      <Child1 v-model="sum"></Child1>

      <!-- v-model可以双向绑定多个数据 -->
      <Child2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child2>
    </div>
  </div>
</template>
<script setup lang="ts">
// v-model指令：收集表单数据，数据双向绑定
// v-model也可以实现组件之间的通信，实现父子组件数据同步的业务
// 父亲给子组件数据用props
// 子组件给父亲数据用emit自定义事件


import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

import { ref, provide, reactive } from "vue";

let sum = ref(100);
const handler = (value: number) => {
  sum.value = value;
}


let pageNo = ref(0);
let pageSize = ref(10);
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
