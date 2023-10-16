import React from 'react';
import StickerSheet from '../../../components/StickerSheet';


const StickerView = () => {

    const printStickerSheet = () => {
        window.print();
    }

    const stickerData = [
        'Label 1', 'Label 2', 'Label 3', 'Label 4','Label 5', 'Label 6', 'Label 7', 'Label 8',
        'Label 9', 'Label 2', 'Label 3', 'Label 4','Label 5', 'Label 6', 'Label 7', 'Label 16',
        'Label 17', 'Label 2', 'Label 3', 'Label 4','Label 5', 'Label 6', 'Label 7', 'Label 32'
    ];
    const labelsPerPage = 32;
    const splitStickerDataIntoPages = (stickerData, labelsPerPage) => {
        const pages = [];
        for (let i = 0; i < stickerData.length; i += labelsPerPage) {
            pages.push(stickerData.slice(i, i + labelsPerPage));
        }
        return pages;
    }

    const pages = splitStickerDataIntoPages(stickerData, labelsPerPage)

    return (
        <>
            <StickerSheet pages={pages} />
            <button onClick={printStickerSheet}>Print</button>
        </>
    );
}

export default StickerView;
