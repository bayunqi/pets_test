<template>
  <view class="top-container">
    <view class="buttons-container">
      <view class="button" v-for="(button, index) in buttons" :key="index" @tap="handleTap(button.action)">
        <view class="button-label">{{ button.label }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { label: '按钮1', action: 'action1' },
        { label: '按钮2', action: 'action2' },
        { label: '按钮3', action: 'action3' },
        { label: '按钮4', action: 'action4' }
      ]
    };
  },
  methods: {
    handleTap(action) {
      console.log('Button tapped:', action);
      // 这里可以添加导航或其他逻辑
    }
  }
}
</script>

<style lang="scss" scoped>
.top-container {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
  height: 300px; // 可根据实际需要调整
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.buttons-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
}

.button {
  width: 60px; // 按钮宽度
  height: 60px; // 按钮高度
  background-color: rgba(255, 255, 255, 0.3); // 毛玻璃效果
  backdrop-filter: blur(10px); // 毛玻璃效果
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; // 圆角
}

.button-label {
  position: absolute;
  top: 100%; // 位于按钮正下方
  width: 100%;
  text-align: center;
  color: white;
  font-size: 14px;
}
</style>