import React from 'react';
import { Typography, Space, Form } from 'antd'
import ContentCards from '../components/contentCards';
import SitePageHeader from '../components/sitePageHeader';

const Catering = ({ }) => {
    return (
        <>
            <SitePageHeader pageTitle={'Catering'}/>
            <div style={{ padding: '0 50px' }}>
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

                <ContentCards />

            </div>
        </>
    );
}

export default Catering;
