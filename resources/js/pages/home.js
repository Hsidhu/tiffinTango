import React from 'react';
import {Typography, Space} from 'antd'
import ContentCards from '../components/contentCards';

function Home() {
    return (
        <>
            <div>
                <Typography.Title level={1} style={{margin: "14px 8px"}}>
                    Welcome To AB Catering
                </Typography.Title>
            </div>
            
            <ContentCards />
        </>
    );
  }
  
  export default Home;
  