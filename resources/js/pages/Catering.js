import React from 'react';
import { Typography, Space, Form } from 'antd'
import ContentCards from '../components/contentCards';

const Catering = ({ }) => {
    return (
        <>
            <div>
                <Typography.Title level={1} style={{ margin: "14px 8px" }}>
                    Catering
                </Typography.Title>
            </div>

            <ContentCards />
        </>
    );
}

export default Catering;
