import React from 'react';
import { Button, Table, Divider } from 'antd';


const StickerSheet = ({pages, dailyDeliveries}) => {
    
    return (
        <div className='print-section'>
        {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="label-sheet">
            {page.map((label, labelIndex) => (
                <div key={labelIndex} className="label">
                    {label?.address ?? 'no_address'}<br/>
                    {label?.customer_name ?? 'customer_name'} - {label?.customer_phone ?? 'customer_phone'}<br/>
                    {labelIndex}
                </div>
            ))}
            </div>
        ))}
        </div>
    );
}

export default StickerSheet;