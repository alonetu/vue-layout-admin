<template>
  <div class="left-card-layout-layout">
    <div class="left-card-layout-layout-left"></div>
    <div class="left-card-layout-layout-container">
      <template v-for="(item, index) in cardList">
        <div :key="index" class="left-card-layout-layout-item">
          <div class="left-card-layout-layout-item-container"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-card-layout-layout',
  data() {
    return {
      cardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }
}
</script>

<style lang="scss">
.left-card-layout-layout {
  width: 100%;
  height: 100%;
  display: flex;
  .left-card-layout-layout-left {
    width: 240px;
    height: 100%;
    background-color: #f9d89c;
  }
  .left-card-layout-layout-container {
    flex: 1;
    margin-left: 8px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    .left-card-layout-layout-item {
      width: 25%;
      min-width: 280px;
      height: 200px;
      padding: 8px;
      box-sizing: border-box;
      .left-card-layout-layout-item-container {
        width: 100%;
        height: 100%;
        background-color: #82c4c3;
      }
    }
  }
}
</style>