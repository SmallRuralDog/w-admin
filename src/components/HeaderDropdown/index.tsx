import React, { PureComponent } from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
const styles = require('./index.less');

interface IProps {
    overlayClassName?;
    overlay;
}

export default class HeaderDropdown extends PureComponent<IProps, {}> {
    render() {
        const { overlayClassName, overlay, ...props } = this.props;
        return (
            <Dropdown overlay={overlay} overlayClassName={classNames(styles.container, overlayClassName)} {...props} />
        );
    }
}