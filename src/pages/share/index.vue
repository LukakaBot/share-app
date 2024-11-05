<template>
  <view class="p-20rpx">
    <ContentSection :content="contents[id]" />
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import ContentSection from './components/ContentSection.vue';

const id = ref('');

const contents = [
  {
    title: '立即开卡，解锁美好生活！',
    texts: [
      '便捷生活：在线轻松开卡，享受一键支付的快捷，让生活更简单。',
      '专属优惠：海量优惠随心享，从日常消费到旅行娱乐，每笔都超值。',
      '安全保障：高级加密技术，全方位守护您的资金安全，购物无忧。',
    ],
    images: [
      'img-01.png',
      'img-02.png',
      'img-03.png',
    ],
    link: 'https://mp.weixin.qq.com/s/Jcajz28j0Gu0xqQJWp9m3w'
  },
  {
    title: '探店奇遇，从这里开始！',
    texts: [
      '一键进店：轻松点击，即刻踏入精彩纷呈的购物世界，发现心仪好物。',
      '专属福利：进店即享会员专享折扣，更有满减、赠品等多重惊喜等你拿。',
      '品质保证：严选商品，品质有保障，让你买得放心，用得舒心。',
    ],
    images: [
      'img-04.png',
      'img-05.png',
      'img-06.png',
    ],
    link: 'https://mp.weixin.qq.com/s/jfiwa69yjtH2NHLDS5M0bQ'
  },
  {
    title: '5G探园，未来已来！',
    texts: [
      '瞬息入园：5G高速连接，一扫即进，告别排队等待，园区美景触手可及。',
      '沉浸体验：高清直播，360°全景视角，身临其境感受园区的每一处精彩。',
      '智能导航：实时定位，精准路线规划，不错过任何一个角落的奇妙。',
    ],
    images: [
      'img-07.png',
      'img-08.png',
      'img-09.png',
    ],
    link: 'https://mp.weixin.qq.com/s/Q-Qlj1vYbUShlJVShsWxlA',
  }
];

onLoad((options) => {
  if (options.id) {
    id.value = options.id;
  }
});
</script>

<style lang="scss" scoped></style>