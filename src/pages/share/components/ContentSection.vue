<template>
  <view>
    <Card title="我是银行标题">
      <template #header>
        <view>
          <h4 class="mb-3 text-xl">{{ content.title }}</h4>
          <ul class="pl-40rpx">
            <li class="text-base text-gray-500" v-for="(text, index) in content.texts" :key="`text-${index}`">{{ text }}
            </li>
          </ul>
        </view>
      </template>
      <template #default>
        <view class="flex flex-col gap-4">
          <wd-img width="100%" mode="widthFix" :src="getImageUrl(image.name)" v-for="(image, index) in content.images"
            :key="`image-${index}`" @click="handleNavigation(image.link)" />
        </view>
      </template>
    </Card>
  </view>
</template>

<script setup>
import { getImageUrl } from '@/utils/tools';
import Card from './Card.vue';

defineProps({
  content: {
    type: Object,
    default: () => ({})
  }
});

function handleNavigation(link) {
  window.open(link, '_self');
}
</script>

<style lang="scss" scoped></style>