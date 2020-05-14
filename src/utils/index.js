// 通过session获取所有已打开页面
function getAllOpenPage() {
  const firstPage = {
    icon: 'el-icon-tickets',
    label: '首页',
    path: '/home'
  }
  const state = sessionStorage.getItem('vuex');
  if(state && JSON.parse(state).allOpenPage) {
    return JSON.parse(state).allOpenPage;
  }
  return [firstPage];
}

export { getAllOpenPage }