<template>
  <div class="up-leftandright-layout">
    <div class="up-leftandright-layout-up"></div>
    <div class="up-leftandright-layout-content">
      <div class="up-leftandright-layout-left"></div>
      <div class="up-leftandright-layout-right"></div>
    </div>
  </div>
</template>

<style lang="scss">
.up-leftandright-layout {
  width: 100%;
  height: 100%;
  .up-leftandright-layout-up {
    height: 120px;
    width: 100%;
    background-color: #cceabb;
  }
  .up-leftandright-layout-content {
    margin-top: 16px;
    height: calc(100% - 136px);
    width: 100%;
    display: flex;
    .up-leftandright-layout-left {
      width: 240px;
      background-color: #f9d89c;
    }
    .up-leftandright-layout-right {
      margin-left: 16px;
      width: calc(100% - 256px);
      background-color: #82c4c3;
    }
  }
}
</style>
