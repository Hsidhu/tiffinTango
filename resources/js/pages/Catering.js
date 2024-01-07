import React from 'react';
import { Flex, Col, Typography, Space, Divider, Row } from 'antd'
import ContentCards from '../components/contentCards';
import SitePageHeader from '../components/sitePageHeader';
import CateringOrderForm from '../components/cateringOrderForm';

const Catering = ({ }) => {
    return (
        <>
            <SitePageHeader pageTitle={'Catering'}/>
            <Divider/>

            <Flex justify={'center'} align={'center'} vertical gap={16}>
                
                <CateringOrderForm />
                
                <ContentCards />

            </Flex>
        </>
    );
}

export default Catering;
