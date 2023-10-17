import React from 'react';



const StickerSheet = ({pages}) => {
    
    return (
        <div className='print-section'>
        {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="sticker-sheet">
            {page.map((label, labelIndex) => (
                <div key={labelIndex} className="sticker">
                {label}
                </div>
            ))}
            </div>
        ))}
        </div>
    );
}

export default StickerSheet;