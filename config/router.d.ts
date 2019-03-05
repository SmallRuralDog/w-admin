interface router {
    path: string;//路径
    component?: string;//组件
    name?: string;//名称
    title?: string;//标题
    icon?: string;//图标
    redirect?: string;//重定向
    routers?: router[]//子路由
}