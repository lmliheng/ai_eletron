<script setup>
import inputCom from './components/inputCom.vue'
import outputCom from './components/outputCom.vue'
</script>

<template>
  <div style="height: 100vh; box-shadow: var(--el-border-color-light) 0px 0px 10px">
    <el-splitter>
      <el-splitter-panel size="50%">
        <inputCom></inputCom>
      </el-splitter-panel>
      <el-splitter-panel :min="200">
        <outputCom></outputCom>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<style scoped></style>
