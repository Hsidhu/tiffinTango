import React from 'react';
import StickerSheet from '../../../components/StickerSheet';
import { Button, Table, Divider } from 'antd';

const StickerView = () => {

    const printStickerSheet = () => {
        window.print();
    }

    const stickerData = [
        'Label 1', 'Label 2', 'Label 3', 'Label 4','Label 5', 'Label 6', 'Label 7', 'Label 8',
        'Label 9', 'Label 10', 'Label 11', 'Label 12','Label 13', 'Label 14', 'Label 15', 'Label 16',
        'Label 17', 'Label 18', 'Label 19', 'Label 20','Label 21', 'Label 22', 'Label 23', 'Label 24',
        'Label 25', 'Label 26', 'Label 27', 'Label 28','Label 29', 'Label 30', 'Label 31', 'Label 32',

        'NEXT 1', 'NEXT 2', 'NEXT 3', 'NEXT 4','NEXT 5', 'NEXT 6', 'NEXT 7', 'NEXT 8'
    ];
    const labelsPerPage = 30;
    const splitStickerDataIntoPages = (stickerData, labelsPerPage) => {
        const pages = [];
        for (let i = 0; i < stickerData.length; i += labelsPerPage) {
            const page = stickerData.slice(i, i + labelsPerPage);
            if (page.length < labelsPerPage) {
                const remainingSpace = labelsPerPage - page.length;
                // Fill the remaining space with placeholder data or null, if needed
                for (let j = 0; j < remainingSpace; j++) {
                    page.push(null); // You can use any placeholder data you prefer
                }
            }
            pages.push(page);
        }
        return pages;
    }
    
    const pages = splitStickerDataIntoPages(stickerData, labelsPerPage)
    return (
        <>
            <Button onClick={printStickerSheet}>Print</Button>
            <StickerSheet pages={pages} />
        </>
    );
}

export default StickerView;
