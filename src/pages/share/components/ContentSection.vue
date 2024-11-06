<template>
  <view>
    <Card title="我是银行标题">
      <template #header>
        <view>
          <h4 class="mb-3 text-2xl">{{ content.title }}</h4>
          <p class="mb-4 text-base text-#0000004D" v-if="isRenderDate">{{ formatDate }}</p>
          <ul class="pl-40rpx text-base text-#888">
            <li v-for="(text, index) in content.texts" :key="`text-${index}`">
              {{ text }}
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
import { computed } from 'vue';
import dayjs from 'dayjs';
import { getImageUrl } from '@/utils/tools';
import Card from './Card.vue';

const props = defineProps({
  content: {
    type: Object,
    default: () => ({})
  },
  date: {
    type: String,
    default: ''
  }
});

function handleNavigation(link) {
  window.open(link, '_self', 'noopener,noreferrer');
}

const isRenderDate = computed(() => !!props.date);

const formatDate = computed(() => dayjs(props.date).format('YYYY年MM月DD日'));
</script>

<style lang="scss" scoped></style>