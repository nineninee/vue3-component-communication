<template>
  <div class="father">
    <div>
      <h1>我是父组件</h1>
      <p>money: {{ money }}</p>
      <div>
        <button @click="handleClick">给孩子10块钱</button>
      </div>
    </div>

    <div class="content">
      <Child1 ref="child1"/>
      <Child2 />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

const money = ref(1000);


const child1:any = ref<InstanceType<typeof Child1>>();
const handleClick = () => {
  money.value -= 10;
  child1.value.money += 10;
}


defineExpose({money})
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
