<template>
  <view class="w-100dvw h-100dvh flex justify-center items-center">
    <view>
      <wd-button class="mb-2 !font-bold" type="info" size="large" :round="false" block v-for="(btn, index) in buttons"
        :key="index" @click="handleNavigation(btn.category)">
        {{ btn.label }}
      </wd-button>
    </view>
  </view>
</template>

<script setup>
const buttons = [
  { label: '信用卡', category: 0 },
  { label: '电商', category: 1 },
  { label: '5G风景', category: 2 },
];

function handleNavigation(category) {
  uni.navigateTo({
    url: `/pages/share/index?category=${category}`,
  });
}
</script>

<style lang="scss" scoped></style>