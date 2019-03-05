const routers: router[] = [{
  path: '/',
  component: '../layouts/BasicLayout',
  redirect:'/store',
  routers: [
    {
      path: '/',
      name: 'dashboard',
      title: '概况',
      component: './Dashboard/Overview'
    }, {
      path: '/store',
      name: 'store',
      title: '店铺',
      routers: [{
        path: '/store/manage',
        name: 'store.manage',
        title: '店铺管理',
        routers: [{
          path: '/store/manage/index',
          name: 'store.manage.index',
          title: '移动店铺',
          component: './Store/Index'
        },
        {
          path: '/store/manage/weapp',
          name: 'store.manage.weapp',
          title: '移动店铺',
          component: './Store/WeApp'
        }]
      }]
    }
  ]
}]

export default routers
