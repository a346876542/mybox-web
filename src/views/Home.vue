<template>
  <div>
    Hello -> Test
    <RouterLink to="/test">点我跳转</RouterLink>
    <div> |</div>
    <a href="/test">通过a标签的方式跳转</a>
    <div> |</div>
    <el-button type="primary" @click="router.push('/test')"> button push 方式跳转</el-button>
    <el-button type="primary" @click="router.replace('/test')"> button replace 方式跳转</el-button>
    <!--  push 跳转相当于 加了一个页面，可以返回。
          replace 相当于替换 就不能返回了，
       -->
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
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <div>
    <p>
      with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
      seconds, you can also override this
    </p>
    <el-icon :size="20">
      <Edit/>
    </el-icon>
    <el-icon color="#409EFC" class="no-inherit">
      <Share/>
    </el-icon>
  </div>

  <div style="margin-top: 10px">
    <el-input v-model="input" style="width: 300px" placeholder="Please input" disabled/>
    {{ input }}
    <el-input v-model="input" style="width: 300px" placeholder="Please input" :prefix-icon="Search" readonly/>
  </div>

  <div>
    <el-input v-model="input" style="width: 300px" placeholder="Please input" :suffix-icon="Calendar" readonly/>

  </div>

  <div class="demo-datetime-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="Select date and time"
      />
    </div>
  </div>
</template>
<!--不写 setup 会报错 -->
<script setup>
//先要导包a
import {reactive, ref} from "vue"
//icons
import {Calendar, Edit, Search, Share} from "@element-plus/icons-vue";
// 路由
import router from "@/router/index.js";


const value1 = ref('')


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
  img: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
  input: null

})

const add = () => {
  a.value++
}

const add1 = (item) => {
  b.value += item
}

const input = ref('')


</script>