<template>
  <view class="p-20rpx">
    <wd-status-tip class="h-[calc(100dvh-40rpx)] justify-center" image="content" tip="暂无内容" v-if="isNoContent" />
    <ContentSection :content="contents[category]" :date="date" v-else />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { contents } from './data';
import ContentSection from './components/ContentSection.vue';

const category = ref('1');

const date = ref('');

const isNoContent = ref(false);

onLoad((options) => {
  // if (!options.category) isNoContent.value = true;
  category.value = options.category || category.value;
  date.value = options.date || date.value;
});
</script>

<style lang="scss" scoped></style>