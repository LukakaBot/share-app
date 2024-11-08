<template>
  <view class="card" :style="cardWrapperStyle">
    <view class="card-header" v-if="$slots.header">
      <slot name="header">
        {{ title }}
      </slot>
    </view>
    <view class="card-content" :style="cardContentStyle">
      <slot name="default">
        <view> 暂无内容 </view>
      </slot>
    </view>
    <view class="card-footer" :style="cardFooterStyle" v-if="$slots.footer">
      <slot name="footer">
      </slot>
    </view>
  </view>
</template>

<script setup>
import { unref, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  segmented: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});

const cardWrapperStyle = computed(() => {
  const { bordered, shadow } = unref(props);

  return {
    border: bordered ? '1px solid #efeff5' : 'none',
    boxShadow: shadow ? 'rgba(0, 0, 0, 0.08) 0px 0px 3px 1px' : 'none',
  };
});

const segmentedStyle = computed(() => {
  const { segmented } = unref(props);

  return {
    borderTop: segmented ? '1px solid #efeff5' : 'none',
  };
});

const cardContentStyle = computed(() => {
  return {
    ...segmentedStyle.value,
  }
});

const cardFooterStyle = computed(() => {
  return {
    ...segmentedStyle.value,
  }
});
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 6rpx;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  padding: 40rpx 48rpx;
  font-size: 36rpx;
}

.card-content {
  margin: 0 48rpx;
  padding: 40rpx 0;
  font-size: 28rpx;
  // border-top: 1px solid #efeff5;
}

.card-footer {
  margin: 0 48rpx;
  padding: 40rpx 0;
  font-size: 28rpx;
  border-top: 1px solid #efeff5;
}
</style>