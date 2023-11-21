import React from 'react';
import { Typography, Space, Form } from 'antd'
import ContentCards from '../components/contentCards';
import SitePageHeader from '../components/sitePageHeader';

const Takeout = ({ }) => {
    return (
        <>
            <SitePageHeader pageTitle={'Catering'}/>
            <div style={{ padding: '0 50px' }}>
                

                <ContentCards />

            </div>
        </>
    );
}

export default Takeout;
