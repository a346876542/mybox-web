<template>
  <div>
    Hello
  </div>
  <div style="text-align: center;font-size: 30px">
    {{ a }}
    {{ data.a }}
    {{ data.b }}
  </div>
  <div>
    <input v-model="data.a"/>
  </div>
  <div>
    <span style="color: red" v-if="data.name==='双鞭呼延灼'">双鞭呼延灼</span>
    <span style="color: aqua" v-if="data.name==='小李广花荣'">小李广花荣</span>
  </div>

  <div>
    <select style="width: 100%">
      <option v-for="item in data.arr">{{ item }}</option>
    </select>
  </div>


</template>
<!--不写 setup 会报错 -->
<script setup>
//先要导包a
import {reactive, ref} from "vue"

const a = ref(1)

const data = reactive({
  a: 1,
  b: 3,
  name: '小李广花荣',
  arr: ['香蕉', '苹果', '橘子']
})

</script>