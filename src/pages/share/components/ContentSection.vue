<template>
  <view>
    <Card :shadow='true' :segmented="true">
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
          <Card :bordered="true" v-for="(imageItem, index) in content.images" :key="`image-item-${index}`">
            <h3 class="mb-4 text-lg text-center">{{ imageItem.label }}</h3>
            <wd-img width="100%" mode="widthFix" :src="getImageUrl(image)"
              v-for="(image, imageIndex) in imageItem.names" :key="`image-${imageIndex}`"
              @click="handleNavigation(imageItem.link)" />
          </Card>
          <wd-img width="100%" mode="widthFix" :src="getImageUrl('img-13.gif')" />
        </view>
      </template>
      <template #footer>
        <view class="text-#9c9d9f">
          <wd-row>
            <wd-col :span="24">
              <p class="text-left">{{ `阅读 ${randomReadCount}` }}</p>
            </wd-col>
          </wd-row>
        </view>
      </template>
    </Card>
  </view>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
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

const randomReadCount = ref('--');

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
  randomReadCount.value = generateRandomReadCount(500, 3000);
}

onMounted(() => init());
</script>

<style lang="scss" scoped></style>