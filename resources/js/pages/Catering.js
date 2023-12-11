import React from 'react';
import { Row, Col, Typography, Space } from 'antd'
import ContentCards from '../components/contentCards';
import SitePageHeader from '../components/sitePageHeader';
import CateringOrderForm from '../components/cateringOrderForm';

const Catering = ({ }) => {
    return (
        <>
            <SitePageHeader pageTitle={'Catering'}/>
            <div style={{ padding: '0 50px' }}>
                <Row>
                    <Col span={16}>
                        <CateringOrderForm />
                    </Col>    
                </Row>    
                
                <ContentCards />

            </div>
        </>
    );
}

export default Catering;
