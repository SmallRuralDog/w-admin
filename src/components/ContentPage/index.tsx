import React from "react";
import { Layout, Alert } from "antd";
const styles = require('./index.less')
interface IProps {
    /**
     * 头部布局
     */
    headerChildren?
    /**
     * 头部样式
     */
    headerStyle?: React.CSSProperties

    /**
     * 内容区域边距
     */
    contentPadding?: number;
    /**
     * 头部Alert
     */
    alert?: {
        message
        type?: 'error' | 'info' | 'warning' | 'success'
        showIcon?: boolean
    }
}

class ContentPage extends React.Component<IProps, {}> {
    render() {
        const { headerChildren, headerStyle, contentPadding, alert } = this.props
        return <Layout tagName='section'>
            {alert && <Alert type={alert.type} message={alert.message} banner showIcon={alert.showIcon} />}
            {headerChildren && <Layout.Header tagName='header' className={styles.header} style={headerStyle}>{headerChildren}</Layout.Header>}
            <Layout.Content tagName='main' style={{ padding: contentPadding }}>{this.props.children}</Layout.Content>
        </Layout>
    }
}
export default ContentPage