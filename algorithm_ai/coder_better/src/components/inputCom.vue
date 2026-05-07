<script setup>
import markdown from './markdown.vue'


const submit = () => {
    console.log('提交')
}


</script>

<template>
  <div id="input-header">输入要检测的算法</div>
  <markdown></markdown>
  <div id="submit">
<el-button type="success" size="large" @click="submit">提交</el-button>
  </div>

</template>

<style scoped>
#input-header {
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 10px;
}
#submit {
    margin-top: 20px;
    padding-right: 50px;
  text-align: right;
}



</style>
