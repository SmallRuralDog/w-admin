import FlexView from '@/components/View/FlexView';
import { NoticeIcon } from 'ant-design-pro';
import { Avatar, Dropdown, Icon, Menu, Tooltip } from 'antd';
import React, { PureComponent } from 'react';
const styles = require('./index.less');
export default class GlobalHeader extends PureComponent {

    render() {
        return (
            <FlexView align='center' className={styles.right}>
                <Tooltip title={'文档'}>
                    <a
                        target="_blank"
                        href="https://pro.ant.design/docs/getting-started"
                        rel="noopener noreferrer"
                        className={styles.action}
                    >
                        <Icon type="question-circle-o" />
                    </a>
                </Tooltip>
                <Dropdown
                    placement="bottomLeft"
                    overlay={
                        <Menu>
                            <Menu.Item><Icon type="user" />个人中心</Menu.Item>
                            <Menu.Item><Icon type="setting" />个人设置</Menu.Item>
                            <Menu.Divider />
                            <Menu.Item><Icon type="logout" />退出登录</Menu.Item>
                        </Menu>
                    }>
                    <span className={`${styles.action} ${styles.account}`}>
                        <Avatar size='small' className={styles.avatar} icon="user" />
                        <span className={styles.name}>我是小土狗</span>
                    </span>
                </Dropdown>
            </FlexView>
        );
    }
}