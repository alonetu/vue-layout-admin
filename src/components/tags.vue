<template>
  <div class="tag-router">
    <el-tag
      size="small"
      effect="plain"
      v-for="item in tags"
      :key="item.path"
      :type="item.type"
      :class="item.path === path? 'active-tag': ''"
      :closable="item.label==='首页'? false: true"
      @click="switchPage(item.path)"
      @close="handleClose(item)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getAllOpenPage} from '@/utils/'

export default {
  name: 'tag-router',
  data() {
    return {
      path: '/home',
      tags: [
        {
          icon: 'el-icon-tickets',
          label: '首页',
          path: '/home'
        }
      ]
    }
  },
  mounted() {
    this.path = window.location.hash.replace('#', '');
    // 如果sessionStorage中保存了所有打开的页面，则从sessionStage中取值
    this.tags = getAllOpenPage();
  },
  computed: {
    ...mapGetters(['allOpenPage'])
  },
  watch: {
    /**
     * 监听路由变化
     * 记录当前路由赋给当前tag
     */
    $route() {
      this.path = window.location.hash.replace('#', '');
    },
    /**
     * 监听vuex中保存所有打开页面
     */
    allOpenPage() {
      this.tags = this.allOpenPage;
    }
  },
  methods: {
    /**
     * 切换标签
     */
    switchPage(path) {
      this.path = path;
      this.$router.push({ path });
      this.$emit('switchPage', path);
    },
    /**
     * 关闭标签时跳转到前一个页面
     */
    handleClose(tag) {
      let index = this.tags.indexOf(tag);
      let preTag = this.tags[index - 1];
      this.tags.splice(index, 1);
      this.path = preTag.path;
      this.$store.commit('allOpenPage', this.tags);
      // 如果关闭标签的前一个标签是当前页面则不做跳转
      if(this.path === window.location.hash.replace('#', '')) { return }
      this.$router.push(this.path);
    }
  }
}
</script>

<style lang="scss">
.tag-router {
  height: 30px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 11px;
  padding-right: 16px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  .el-tag--plain {
    color: #495060;
    border: 1px solid #d8dce5;
    margin-top: 3px;
    margin-left: 5px;
  }
  .active-tag {
    background-color: #409eff;
    color: #fff;
    border-color: #409eff;
  }
  .el-tag--plain .el-tag__close {
    color: #fff;
    &:hover {
      background-color: #363636;
    }
  }
}
</style>