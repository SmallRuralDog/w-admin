//一级菜单路由
const menu: IRouter[] = [
  {
    path: '/',
    isMenu: true,
    name: 'dashboard',
    title: '概况',
    icon: 'bar-chart',
    component: './Dashboard/Overview'
  },
  {
    path: '/store',
    isMenu: true,
    name: 'store',
    title: '店铺',
    desc: '店铺管理',
    icon: 'shop',
    redirect: '/store/manage/index'
  }
]
//二级菜单路由
const secondMenu: IRouter[] = [
  {
    path: '/store/manage',
    name: 'store.manage',
    title: '店铺管理',
    menuName: 'store',
    routes: [{
      path: '/store/manage/index',
      name: 'store.manage.index',
      title: '移动店铺',
      menuName: 'store',
      secondMenuName: 'store.manage',
      component: './Store/Index'
    },
    {
      path: '/store/manage/weapp',
      name: 'store.manage.weapp',
      title: '移动店铺',
      menuName: 'store',
      secondMenuName: 'store.manage',
      component: './Store/WeApp'
    }]
  }
]


const routers: IRouter[] = [
  
  {
    path: '/',
    name: 'index',
    component: '../layouts/BasicLayout',
    routes: [
      ...menu,
      ...secondMenu
    ]
  }
]

export default routers
