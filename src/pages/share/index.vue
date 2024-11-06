<template>
  <view class="p-20rpx">
    <ContentSection :content="contents[category]" />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { contents } from './data';
import ContentSection from './components/ContentSection.vue';

const category = ref('');



onLoad((options) => {
  if (options.category) {
    category.value = options.category;
  }
});
</script>

<style lang="scss" scoped></style>