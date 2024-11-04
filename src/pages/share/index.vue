<template>
  <div class="p-20rpx">
    <component :is="renderComponentName" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import CreditSection from './components/CreditSection.vue';
import ECommerceSection from './components/ECommerceSection.vue';
import ScenerySection from './components/ScenerySection.vue';

const id = ref('');

const renderComponentName = computed(() => {
  if (id.value === '1') {
    return CreditSection;
  }
  else if (id.value === '2') {
    return ECommerceSection;
  }
  else if (id.value === '3') {
    return ScenerySection;
  }
  else {
    throw new Error('Invalid component ID');
  }
});

onLoad((options) => {
  console.log(options);
  if (options.id) {
    id.value = options.id;
  }
});
</script>

<style lang="scss" scoped></style>