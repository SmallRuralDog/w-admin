import React, { PureComponent } from 'react';
import RightContent from './RightContent'
import FlexView from '@/components/View/FlexView'
import { Tag } from 'antd';
const styles = require('./index.less');
export default class GlobalHeader extends PureComponent {
    render() {
        return (
            <FlexView direction='row' justify='space-between'>
                <div>
                    <strong className='text-16 text-bold mr-10'>小小特工的店铺</strong>
                    <Tag color="#ff4343">打烊</Tag>
                    <Tag color="">SVIP</Tag>
                    <Tag color="">达不溜商城担保</Tag>
                </div>
                <RightContent {...this.props} />
            </FlexView >
        );
    }
}