<template>
  <el-input v-model="input" placeholder="Please input"/>
  {{ data.input }}
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'

const input = ref('')

const data = reactive({
  input: null
})

</script>
