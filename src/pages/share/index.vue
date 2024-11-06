<template>
  <view class="p-20rpx">
    <ContentSection :content="contents[category]" :date="date" />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { contents } from './data';
import ContentSection from './components/ContentSection.vue';

const category = ref('');

const date = ref('');

onLoad((options) => {
  category.value = options.category || category.value;
  date.value = options.date || date.value;
});
</script>

<style lang="scss" scoped></style>