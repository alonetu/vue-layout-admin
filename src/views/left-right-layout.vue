<template>
  <div class="left-right-layout">
    <div class="left-right-layout-left"></div>
    <div class="left-right-layout-right"></div>
  </div>
</template>

<style lang="scss">
.left-right-layout {
  width: 100%;
  height: 100%;
  display: flex;
  .left-right-layout-left {
    width: 240px;
    height: 100%;
    background-color: #f9d89c;
  }
  .left-right-layout-right {
    margin-left: 16px;
    width: calc(100% - 256px);
    height: 100%;
    background-color: #82c4c3;
  }
}
</style>
