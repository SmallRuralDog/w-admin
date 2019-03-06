import React, { Component } from 'react';
import ContentPage from '@/components/ContentPage'
import FlexView from '@/components/View/FlexView'
import GlobalHeader from '@/components/GlobalHeader'
import { Button } from 'antd';
class Overview extends Component {
    render() {
        return <ContentPage
            headerChildren={<GlobalHeader/>}
        >

        </ContentPage>
    }
}

const alert = {
    showIcon: false,
    type: 'error',
    message: <FlexView align='center'>
        <div className='mr-10'>
            <div>店铺免费试用结束，已打烊。如需恢复正常营业，请订购达不溜商城。</div>
            <div>官方咨询电话：8888-8888888</div>
        </div>
        <Button type='danger'>立即续费</Button>
    </FlexView>
}


export default Overview