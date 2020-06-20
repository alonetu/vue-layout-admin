<template>
  <div class="card-layout">
    <template v-for="(item, index) in cardList">
      <div :key="index" class="card-layout-item">
        <div class="card-layout-item-container"></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'card-layout',
  data() {
    return {
      cardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }
}
</script>

<style lang="scss">
  .card-layout {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 100%;
    .card-layout-item {
      width: 25%;
      min-width: 280px;
      height: 200px;
      padding: 8px;
      box-sizing: border-box;
      .card-layout-item-container {
        width: 100%;
        height: 100%;
        background-color: #82c4c3;
      }
    }
  }
</style>
