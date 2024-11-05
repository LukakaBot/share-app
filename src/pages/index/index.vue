<template>
  <view class="w-100dvw h-100dvh flex justify-center items-center">
    <view>
      <wd-button class="mb-2 !font-bold" type="info" size="large" :round="false" block v-for="(btn, index) in buttons"
        :key="index" @click="handleNavigation(btn.id)">
        {{ btn.label }}
      </wd-button>
    </view>
  </view>
</template>

<script setup>
const buttons = [
  { label: '信用卡', id: 0 },
  { label: '电商', id: 1 },
  { label: '5G风景', id: 2 },
];

function handleNavigation(id) {
  uni.navigateTo({
    url: `/pages/share/index?id=${id}`,
  });
}
</script>

<style lang="scss" scoped></style>