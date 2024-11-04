<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-content">
      <slot name="default">
        <div> 暂无内容 </div>
      </slot>
    </div>
    <div class="card-footer">
      <div class="text-#9c9d9f">
        <wd-row>
          <wd-col :span="12">
            <p class="text-left">{{ `阅读 ${randomReadCount}` }}</p>
          </wd-col>
          <wd-col :span="12">
            <p class="text-right" @click="handleComplaint">投诉</p>
          </wd-col>
        </wd-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({
  title: {
    type: String,
    default: '我是标题',
  },
});


/** @type Ref<String | Number> */
const randomReadCount = ref('--');

function handleComplaint() {
  uni.showToast({
    title: '投诉成功',
    icon: 'success',
    duration: 2000,
  });
}

/**
 * 生成随机阅读数量
 * @param {number} min - 最小阅读数量
 * @param {number} max - 最大阅读数量
 * @returns {number} 随机生成的阅读数量
 */
function generateRandomReadCount(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {
  randomReadCount.value = generateRandomReadCount(1, 100); // 生成 1 到 100 之间的随机阅读数量s
}

onMounted(() => init());
</script>

<style lang="scss" scoped>
.card {
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 3px 1px;
}

.card-header {
  display: flex;
  align-items: center;
  padding: 40rpx 48rpx;
  font-size: 36rpx;
}

.card-content {
  margin: 0 48rpx;
  padding: 40rpx 0;
  font-size: 28rpx;
  border-top: 1px solid rgb(239, 239, 245);
}

.card-footer {
  margin: 0 48rpx;
  padding: 40rpx 0;
  font-size: 28rpx;
  border-top: 1px solid rgb(239, 239, 245);
}
</style>