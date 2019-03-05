import React, { Component } from 'react';
import ContentPage from '@/components/ContentPage'
import FlexView from '@/components/View/FlexView'
import { Card, Tag, Avatar, Badge, Button, Dropdown, Menu } from 'antd';
class Overview extends Component {
    render() {
        return <ContentPage
            alert={{
                showIcon: false,
                type: 'error',
                message: <FlexView align='center'>
                    <div className='mr-10'>
                        <div>店铺免费试用结束，已打烊。如需恢复正常营业，请订购有达不溜商城。</div>
                        <div>官方咨询电话：0571-86857988</div>
                    </div>
                    <Button type='danger'>立即续费</Button>
                </FlexView>
            }}
            headerChildren={headerChildren}
        >

        </ContentPage>
    }
}


const headerChildren = <FlexView direction='row' justify='space-between'>
    <div>
        <strong className='text-16 text-bold mr-10'>小小特工的店铺</strong>
        <Tag color="#ff4343">打烊</Tag>
        <Tag color="">SVIP</Tag>
        <Tag color="">达不溜商城担保</Tag>
    </div>

    <FlexView align='center'>
        <Badge dot>
            <Avatar size='small' shape="square" icon="user" />
        </Badge>
        <Dropdown
            placement="bottomLeft"
            overlay={
                <Menu>
                    <Menu.Item>退出登录</Menu.Item>
                </Menu>
            }>
            <a className='ml-10'>我是小土狗</a>
        </Dropdown>
    </FlexView>

</FlexView >

export default Overview