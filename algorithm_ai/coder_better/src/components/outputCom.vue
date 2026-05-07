<script setup>
import {useMessageStore} from '../stores/message'
import {watch,ref,onMounted,computed} from 'vue'
const messageStore = useMessageStore();

const outputData = ref(null)

watch(
    () =>  messageStore.output,
    (newMessage) => {
        try {
            outputData.value = JSON.parse(newMessage);
        } catch (e) {
            outputData.value = null;
        }
        console.log("outputData.value:",outputData.value);
    }
,{
    immediate: true,
    deep: true,
})

onMounted(() => {
    if (messageStore.output) {
        try {
            outputData.value = JSON.parse(messageStore.output);
        } catch (e) {
            outputData.value = null;
        }
    }
    
})

const rating = computed(() => outputData.value?.评分 || 0);

</script>
<template>
    <div id="output-container">
        <el-descriptions title="算法分析结果" border :column="3"  v-if="outputData">
            <el-descriptions-item label-width="100px" label="算法分析" :span="3">
                {{ outputData['问题'] }}
            </el-descriptions-item>
            <el-descriptions-item label="算法分析"  :span="3">
                {{ outputData['算法分析'] }}
            </el-descriptions-item>
            <el-descriptions-item label="算法标签" :span="1">
                <el-tag v-for="tag in outputData['标签']" :key="tag" type="primary" size="large" class="output_tag">{{ tag }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="时间复杂度" :span="1">
                {{ outputData['复杂度分析']?.['时间复杂度'] }}
            </el-descriptions-item>
            <el-descriptions-item label="空间复杂度" :span="1">
                {{ outputData['复杂度分析']?.['空间复杂度'] }}
            </el-descriptions-item>
            <el-descriptions-item label="优化思路" :span="3">
                {{ outputData['优化思路'] }}
            </el-descriptions-item>
            <el-descriptions-item label="评分" :span="3">
                <el-rate v-model="rating" disabled show-score text-color="#ff9900" />
            </el-descriptions-item>
        </el-descriptions>
        <el-empty v-else description="暂无数据分析" />
    </div>
</template>
<style scoped>
#output-container {
    padding: 20px;
}
.output_tag {
    margin-right: 10px;
}
</style>