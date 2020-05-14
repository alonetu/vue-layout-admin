<template>
  <div class="left-upanddown-layout">
    <div class="left-upanddown-layout-left"></div>
    <div class="left-upanddown-layout-content">
      <div class="left-upanddown-layout-up"></div>
      <div class="left-upanddown-layout-down"></div>
    </div>
  </div>
</template>

<style lang="scss">
.left-upanddown-layout {
  width: 100%;
  height: 100%;
  display: flex;
  .left-upanddown-layout-left {
    width: 240px;
    height: 100%;
    background-color: #f9d89c;
  }
  .left-upanddown-layout-content {
    margin-left: 16px;
    width: calc(100% - 256px);
    height: 100%;
    .left-upanddown-layout-up {
      height: 120px;
      background-color: #cceabb;
    }
    .left-upanddown-layout-down {
      margin-top: 16px;
      height: calc(100% - 136px);
      background-color: #82c4c3;
    }
  }
}
</style>
