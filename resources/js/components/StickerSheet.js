import React from 'react';
import { Button, Table, Divider } from 'antd';


const StickerSheet = ({pages}) => {
    
    return (
        <div className='print-section'>
        {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="label-sheet">
            {page.map((label, labelIndex) => (
                <div key={labelIndex} className="label">
                    Customer<br/> 
                    {label} <br/>
                </div>
            ))}
            </div>
        ))}
        </div>
    );
}

export default StickerSheet;