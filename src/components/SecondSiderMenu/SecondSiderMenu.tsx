import React from "react";
import { Layout, Menu } from "antd";
import Link from 'umi/link';
const styles = require('./index.less');
interface IProps {
    secondMenuData: IRouter[];
    menuInfo: IRouter;
    selectKey: string[];
}

const getOpenKeys = (secondMenuData: IRouter[]) => {
    return secondMenuData.map(item => {
        return item.name
    })
}

class SecondSiderMenu extends React.Component<IProps, {}> {
    render() {
        const { secondMenuData, selectKey, menuInfo } = this.props

        return <Layout.Sider width={132} theme='light' >
            <div className={styles.second_sidebar}>
                <div className={styles.second_sidebar_title}>{menuInfo.desc}</div>
                <Menu
                    className={styles.second_sidebar_menu}
                    mode="inline"
                    inlineIndent={0}
                    inlineCollapsed={false}
                    defaultOpenKeys={getOpenKeys(secondMenuData)}
                    defaultSelectedKeys={selectKey}
                >
                    {
                        secondMenuData.map(item => {
                            return item.routes && item.routes.length > 0 ?
                                <Menu.SubMenu
                                    key={item.name}
                                    title={<div style={{ textAlign: 'left', marginLeft: 16 }}>{item.title}</div>}
                                >
                                    {item.routes.map(item_s => {
                                        return <Menu.Item key={item_s.name}><Link to={item_s.path}><div style={{ textAlign: 'center' }}>{item_s.title}</div></Link></Menu.Item>
                                    })}
                                </Menu.SubMenu> :
                                <Menu.Item key={item.name}><Link to={item.path}><div style={{ textAlign: 'left', marginLeft: 16 }}>{item.title}</div></Link></Menu.Item>
                        })
                    }

                </Menu>
            </div>
        </Layout.Sider>
    }
}
export default SecondSiderMenu;