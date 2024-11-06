<template>
  <view class="flex flex-col justify-center items-center w-100dvw h-100dvh">
    <view class="mb-4 w-600rpx rounded overflow-hidden border-solid border-1px border-#ccc">
      <wd-form ref="form" :model="formData">
        <wd-cell-group border>
          <wd-cell title="是否渲染日期" title-width="200rpx" center>
            <wd-radio-group class="flex items-center" v-model="formData.isRenderDate" inline shape="dot" size="large"
              @change="handleChangeRadioGroup">
              <wd-radio :value="false">否</wd-radio>
              <wd-radio :value="true">是</wd-radio>
            </wd-radio-group>
          </wd-cell>
          <wd-datetime-picker v-model="formData.date" :default-value="today" label="日期" label-width="200rpx" type="date"
            v-if="formData.isRenderDate" />
        </wd-cell-group>
      </wd-form>
    </view>

    <view>
      <wd-button class="mb-2 !font-bold" type="info" size="large" :round="false" block v-for="(btn, index) in buttons"
        :key="index" @click="handleNavigation(btn.category)">
        {{ btn.label }}
      </wd-button>
    </view>
  </view>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import dayjs from 'dayjs';

const formData = ref({});

const today = Date.now();

const buttons = [
  { label: '信用卡', category: 0 },
  { label: '电商', category: 1 },
  { label: '5G风景', category: 2 },
];

function handleChangeRadioGroup({ value }) {
  // if (value) formData.value.date = dayjs().format('YYYY-MM-DD');
}

function handleNavigation(category) {
  // let params = `category=${category}`
  // const isRenderDate = formData.value.isRenderDate;
  // if (isRenderDate && formData.value.date) params += `&date=${formData.value.date}`;

  // uni.navigateTo({
  //   url: `/pages/share/index$?{params}`,
  // });

  let params = new URLSearchParams({ category });
  const { isRenderDate, date } = formData.value;

  if (isRenderDate && date) {
    const formatDate = dayjs(date).format('YYYYMMDD');
    params.append('date', formatDate);
  }
  
  uni.navigateTo({
    url: `/pages/share/index?${params.toString()}`,
  });
}

function init() {
  formData.value = {
    isRenderDate: false,
    date: '',
  }
}

onMounted(() => init());
</script>

<style lang="scss" scoped></style>