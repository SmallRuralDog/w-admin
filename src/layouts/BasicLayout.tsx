import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Avatar, Dropdown, Popover } from 'antd';
import Media from 'react-media';
import styles from './BasicLayout.less';
const {
    Header, Footer, Sider, Content,
} = Layout;

class BasicLayout extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const layout = (
            <Layout tagName='section'>
                <Sider trigger={null} className={styles.sider} width={100}>
                    <div className={styles.logo} />
                    <Menu theme='dark' defaultSelectedKeys={['1']} >
                        <Menu.Item key="1">
                            <Icon type="bar-chart" />
                            <span>概况</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="shop" />
                            <span>店铺</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="shopping-cart" />
                            <span>商品</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bars" />
                            <span>订单</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="team" />
                            <span>客户</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="stock" />
                            <span>数据</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="dollar" />
                            <span>资产</span>
                        </Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="8">
                            <Icon type="appstore" />
                            <span>应用</span>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Icon type="setting" />
                            <span>设置</span>
                        </Menu.Item>
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
                </Sider>
                <Layout tagName='section' className={styles.container}>
                    <Sider width={132} theme='light' >
                        <div className={styles.second_sidebar}>
                            <div className={styles.second_sidebar_title}>店铺管理</div>
                            <Menu
                                className={styles.second_sidebar_menu}
                                mode="inline"
                                inlineIndent={16}
                                inlineCollapsed={false}
                                defaultOpenKeys={["sub1", 'sub2']}
                                defaultSelectedKeys={["1"]}
                            >
                                <Menu.SubMenu key="sub1" title={<div style={{ textAlign: 'center' }}>店铺管理</div>}>
                                    <Menu.Item key="1">移动店铺</Menu.Item>
                                    <Menu.Item key="2">小程序店铺</Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="sub2" title={<div style={{ textAlign: 'center' }}>店铺管理</div>}>
                                    <Menu.Item key="3">微页面</Menu.Item>
                                    <Menu.Item key="4">自定义模块</Menu.Item>
                                    <Menu.Item key="5">悬浮窗</Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        </div>
                    </Sider>
                    <Layout tagName='section'>
                        <Header tagName='header' className={styles.header}>移动店铺</Header>
                        <Content tagName='main' className={styles.content}>
                            <div>{this.props.children}</div>
                        </Content>
                        <Footer tagName='footer' style={{ textAlign: 'center' }}>
                            Ant Design ©2019 Created by W-ADMIN
                        </Footer>
                    </Layout>
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
export default connect(({ }) => ({

}))(props => (
    <Media query="(max-width: 599px)">
        {isMobile => <BasicLayout {...props} />}
    </Media>
))
