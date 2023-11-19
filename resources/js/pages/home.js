import React from 'react';
import {Typography, Space} from 'antd'
import ContentCards from '../components/contentCards';
import FeatureCards from '../components/featureCards';

function Home() {
    return (
        <>
            <div style={{ display:'flex', justifyContent: 'center', margin: '10px' }}>
                <Typography.Title level={1} style={{margin: "14px 8px"}}>
                    Welcome To AB Catering
                </Typography.Title>
            </div>
            
            <ContentCards />

            <div style={{ display:'flex', justifyContent: 'center', margin: '10px' }}>
                <Typography.Title level={1} style={{margin: "14px 8px"}}>
                    Feature Menu Items
                </Typography.Title>
            </div>
            <FeatureCards/>
        </>
    );
  }
  
  export default Home;
  