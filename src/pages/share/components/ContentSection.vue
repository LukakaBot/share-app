<template>
  <view>
    <Card :shadow='true' :segmented="true">
      <template #header>
        <view>
          <h4 class="text-2xl" :class="{ 'mb-3': isRenderDate }">{{ content.title }}</h4>
          <p class="text-base text-#0000004D" v-if="isRenderDate">{{ formatDate }}</p>
          <!-- <ul class="pl-40rpx text-base text-#888">
            <li v-for="(text, index) in content.texts" :key="`text-${index}`">
              {{ text }}
            </li>
          </ul> -->
        </view>
      </template>
      <template #default>
        <view class="flex flex-col gap-4">
          <wd-img width="100%" mode="widthFix" :src="getImageUrl(content.content.image)" v-if="content.content.image" />
          <Card :bordered="true" v-for="(item, index) in content.content.goods" :key="`image-item-${index}`">
            <p class="mb-4 text-#888 text-base" v-if="item.label && item.labelAlign === 'top'">{{ item.label }}</p>
            <wd-img width="100%" mode="widthFix" :src="getImageUrl(image)" v-for="(image, imageIndex) in item.names"
              :key="`image-${imageIndex}`" @click="handleNavigation(item.link)" />
            <p class="mt-4 text-#888 text-base" v-if="item.label && item.labelAlign === 'bottom'">{{ item.label }}</p>
          </Card>
        </view>
      </template>
      <template #footer>
        <view class="text-#9c9d9f">
          <wd-row>
            <wd-col :span="24">
              <p class="text-left">{{ `阅读 ${readNum}` }}</p>
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
import { fetchReadNum } from '@/api/share';
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

const isRenderDate = computed(() => !!props.date);

const formatDate = computed(() => dayjs(props.date).format('YYYY年MM月DD日'));

const readNum = ref('--');

function handleNavigation(link) {
  window.open(link, '_self', 'noopener,noreferrer');
}

/**
 * 生成随机阅读数量
 * @param {number} min - 最小阅读数量
 * @param {number} max - 最大阅读数量
 * @returns {number} 随机生成的阅读数量
 */
function generateRandomReadNum(min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getReadNum() {
  const { num } = await fetchReadNum();
  readNum.value = num;
}

function init() {
  getReadNum();
}

onMounted(() => init());
</script>

<style lang="scss" scoped></style>