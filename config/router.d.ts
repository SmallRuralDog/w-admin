interface IRouter {
    path: string;//路径
    component?: string;//组件
    name: string;//名称
    title?: string;//标题
    desc?:string;//段描述
    icon?: string;//图标
    redirect?: string;//重定向
    routes?: IRouter[];//子路由
    hideInMenu?:boolean;//隐藏不显示
    isMenu?:boolean;//是否一级menu
    menuName?:string;//一级menu名称
    secondMenuName?:string;//二级menu名称
    selectMenuName?:string;//要选择的二级menu名称，适用于hideInMenu=true的时候
}