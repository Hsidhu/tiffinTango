import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Typography, Space} from 'antd'
import ContentCards from '../components/contentCards';
import FeatureCards from '../components/featureCards';
import { isEmpty } from 'lodash';
import usePageTitle  from '../hooks/usePageTitle'

const Home = ({}) => {

    const siteName = useSelector(state => state.siteName)

    usePageTitle('Home page')
    
    return (
        <>
            <div style={{ padding: '0 50px' }}>
                <div style={{ display:'flex', justifyContent: 'center', margin: '10px' }}>
                    <Typography.Title level={1} style={{margin: "14px 8px"}}>
                        Welcome To { siteName }
                    </Typography.Title>
                </div>
                
                <ContentCards />

                <div style={{ display:'flex', justifyContent: 'center', margin: '10px' }}>
                    <Typography.Title level={1} style={{margin: "14px 8px"}}>
                        Feature Menu Items
                    </Typography.Title>
                </div>
                <FeatureCards/>
            </div>
        </>
        
    );
  }
  
  export default Home;
  