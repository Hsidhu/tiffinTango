import React from 'react';
import { Typography, Space, Form } from 'antd'
import ContentCards from '../components/contentCards';
import SitePageHeader from '../components/sitePageHeader';

const Catering = ({ }) => {
    return (
        <>
            <div>
                <SitePageHeader pageTitle={'Catering'}/>
                {/* 
                    Snacks
                    Item, price, Qty, amount
                    Bread pakora 
                    Mix veg pakora
                    Gobhi Pakora
                    Panner Pakora
                    Spring Rolls
                    Samosa
                    Aloo Tikki per pcs
                    Dhokla
                    Noodles -> order by tray
                    Manchurian
                    */

                }
                <Typography.Title level={1} style={{ margin: "14px 8px" }}>
                    Catering
                </Typography.Title>
            </div>

            <ContentCards />
        </>
    );
}

export default Catering;
