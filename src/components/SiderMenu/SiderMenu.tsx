import React from "react";
import { Layout, Menu, Icon, Popover, Avatar } from "antd";
import Link from 'umi/link';

const styles = require('./index.less');
interface IProps {
    menuData: IRouter[];
    selectKey: string[];
}



class SiderMenu extends React.Component<IProps, {}> {

    render() {
        const { menuData, selectKey } = this.props




        return <Layout.Sider trigger={null} className={styles.sider} width={100}>
            <div className={styles.logo} />
            <Menu theme='dark' selectedKeys={selectKey} >
                {menuData.filter(item => {
                    return item.isMenu
                }).map((item, index) => {
                    return <Menu.Item key={item.name}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                })}
            </Menu>
            <div className={styles.menu_footer}>
                <Popover
                    placement='rightTop'
                    title='个人设置'
                    content={<div>123</div>}
                >
                    <a>
                        <Avatar icon="user" />
                    </a>
                </Popover>
            </div>
        </Layout.Sider>
    }
}
export default SiderMenu;