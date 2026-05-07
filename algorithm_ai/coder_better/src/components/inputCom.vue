<script setup>
import { ref } from 'vue'
import markdown from './markdown.vue'
import {useMessageStore} from '../stores/message'
import{requestHunyuanAi}from '../composables/useRequest'
import { ElLoading,ElMessage } from 'element-plus'



const messageStore = useMessageStore();

const markdownRef = ref(null)
const getMarkdown = () => {
    return markdownRef.value.getMarkdown();
}

const submit = async () => {
    const markdown = getMarkdown();
    messageStore.setMessage(markdown);
    const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
    const res = await requestHunyuanAi(markdown);
    loading.close()
    if(res.data){
      ElMessage.success('发送成功');
    }else{
      ElMessage.error('发送失败');
    }
    messageStore.setOutput(res.data.response);
}




</script>

<template>
  <div id="input-header">输入要检测的算法</div>
  <markdown  ref="markdownRef"></markdown>
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
