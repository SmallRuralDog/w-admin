import React from 'react';
import { connect } from 'dva';
import { Layout, } from 'antd';
import Media from 'react-media';
import SiderMenu from '@/components/SiderMenu/SiderMenu'
import SecondSiderMenu from '@/components/SecondSiderMenu/SecondSiderMenu'
const styles = require('./BasicLayout.less');
const {
    Header, Footer, Content,
} = Layout;

interface IProps {
    route?: any
    menuData?: IRouter[]
    allRoutes?: IRouter[]
    dispatch?: IDispatch
    location?: ILocation
}
interface IState {

}

/**
 * 获取menu选中项
 * @param pathname 
 * @param allRoutes 
 */
const getSelectKey = (pathname: string, allRoutes: IRouter[]) => {
    const selectKey = []
    try {
        const router = allRoutes.filter(item => {
            return item.path == pathname
        })[0]
        selectKey.push(router.name)
        router.menuName && selectKey.push(router.menuName)
        router.selectMenuName && selectKey.push(router.selectMenuName)
    } catch (error) {

    }
    return selectKey;
}
/**
 * 
 * @param pathname 获取子目录
 * @param allRoutes 
 * @param menuData 
 */
const getSecondMenu = (pathname: string, allRoutes: IRouter[], menuData: IRouter[]) => {
    let secondMenuData: IRouter[] = [];
    let menuInfo: IRouter
    const router = allRoutes.filter(item => {
        return item.path == pathname
    })[0]
    if (router) {
        secondMenuData = menuData.filter(item => {
            return item.menuName == router.menuName && !item.isMenu && !item.hideInMenu
        })
        menuInfo = getMenu(router.menuName, menuData)
    }
    return { secondMenuData, menuInfo }

}
/**
 * 获取顶级目录
 * @param name 
 * @param menuData 
 */
const getMenu = (name: string, menuData: IRouter[]) => {
    return menuData.filter(item => {
        return item.name == name
    })[0]
}

class BasicLayout extends React.Component<IProps, IState> {

    componentDidMount() {
        const { route: { routes }, dispatch } = this.props
        dispatch({
            type: 'menu/getMenuData',
            payload: { routes },
        });
    }

    render() {
        const { menuData, allRoutes, location: { pathname } } = this.props
        const selectKey = getSelectKey(pathname, allRoutes)
        const { secondMenuData, menuInfo } = getSecondMenu(pathname, allRoutes, menuData)
        const layout = (
            <Layout tagName='section'>
                <SiderMenu menuData={menuData} selectKey={selectKey} {...this.props} />
                <Layout tagName='section' className={styles.container}>
                    {secondMenuData.length > 0 && <SecondSiderMenu secondMenuData={secondMenuData} menuInfo={menuInfo} selectKey={selectKey} {...this.props} />}
                    {this.props.children}
                </Layout>
            </Layout>
        )
        return (
            <React.Fragment>
                <div>{layout}</div>
            </React.Fragment>
        )
    }
}
export default connect(({ menu }) => ({
    menuData: menu.menuData,
    allRoutes: menu.allRoutes
}))(props => (
    <Media query="(max-width: 599px)">
        {isMobile => <BasicLayout {...props} />}
    </Media>
))
