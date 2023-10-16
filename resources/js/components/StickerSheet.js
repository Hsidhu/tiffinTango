import React from 'react';



const StickerSheet = ({pages}) => {
    
    return (
        <div>
        {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="sticker-sheet print-section">
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