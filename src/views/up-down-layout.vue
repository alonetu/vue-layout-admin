<template>
  <div class="up-down-layout">
    <div class="up-down-layout-up"></div>
    <div class="up-down-layout-down"></div>
  </div>
</template>

<style lang="scss">
.up-down-layout {
  width: 100%;
  height: 100%;
  .up-down-layout-up {
    height: 120px;
    width: 100%;
    background-color: #cceabb;
  }
  .up-down-layout-down {
    margin-top: 16px;
    width: 100%;
    height: calc(100% - 136px);
    background-color: #82c4c3;
  }
}
</style>