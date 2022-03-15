<script setup lang="ts">
import { ref,reactive,onMounted, getCurrentInstance } from 'vue'
import API from '../request/index.js'

const color:String = ref('red')
let data:Object = reactive({
  cityData: {}
})

onMounted(() =>{
  // console.log(getCurrentInstance());
  API.httpReq.getCityList({
    city_code: 110116
  }).then(res => {
    data.cityData = res
  })

})

</script>

<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <el-card class="box-card">
          <h1>城市代码：{{ data.cityData.city_code }}</h1>
          <h1>城市名：{{ data.cityData.city_name }}</h1>
          <el-button type="primary">2323</el-button>
        </el-card>

      </el-main>
    </el-container>
  </el-container>

</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
