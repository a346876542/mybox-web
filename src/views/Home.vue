<template>
  <div>
    Hello
  </div>
  <div style="text-align: center;font-size: 30px">
    {{ a }}
    {{ b }}
    {{ data.a }}
    {{ data.b }}
  </div>
  <div>
    <input v-model="data.a"/>
    <input v-model="b"/>
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

  <div>
    <button v-on:click="add">点我加好运</button>
    <button @click="add">点我加好运</button>
    <button @click="add1(100)">点我加好运</button>
  </div>

  <div>
    <div :style="{'with':'100px','height':'100px','backgroundColor':'yellow'}"></div>
    <div :style="data.box"></div>
    <img :src="'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'" alt="icon">
  </div>
  <div>
    <img :src="data.img" alt="icon">
  </div>

</template>
<!--不写 setup 会报错 -->
<script setup>
//先要导包a
import {reactive, ref} from "vue"

let a = ref(1)

let b = ref(100)


const data = reactive({
  a: 1,
  b: 3,
  name: '小李广花荣',
  arr: ['香蕉', '苹果', '橘子'],
  box: {
    width: "100px",
    height: "100px",
    backgroundColor: 'red',
  },
  img: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'

})

const add = () => {
  a.value++
}

const add1 = (item) => {
  b.value += item
}

</script>