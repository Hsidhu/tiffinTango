import React, {useEffect, useState} from 'react';
import StickerSheet from '../../../components/containers/stickerSheet';
import { Row, Col, Space, Divider, Select, Button, Spin, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Papa from 'papaparse';
import dayjs from 'dayjs';

import { getStickerData } from "../../../redux/Order/actions";
import { getDeliveryWindowsList } from '../../../redux/Common/actions'
import { isEmpty } from 'lodash';

import { postRequest } from '../../../config/axiosClient';
import MapViewOfRoute from './MapViewOfRoute';

const StickerView = ({}) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const {deliveryZoneList, deliveryWindows, deliveryStickers  } = useSelector(state => state)

    const [deliveryZoneID, setDeliveryZoneID] = useState('');
    const [deliveryWindowID, setDeliveryWindowID] = useState('');
    const [directionResponse, setDirectionResponse] = useState({});

    useEffect(() => {
        dispatch(getDeliveryWindowsList())
    }, [])

    

    const updateDeliveryZone = (value) => {
        setDeliveryZoneID(value)
    }
    const updateDeliveryWindow = (value) => {
        setDeliveryWindowID(value)
    }

    const fetchStickers = () => {
        if (deliveryWindowID && deliveryZoneID) {
            dispatch(getStickerData({
                delivery_zone_id: deliveryZoneID,
                delivery_window_id: deliveryWindowID
            }))
        }
    }

    const stickerData = [
        'Label 1', 'Label 2', 'Label 3', 'Label 4','Label 5', 'Label 6', 'Label 7', 'Label 8',
        'Label 9', 'Label 10', 'Label 11', 'Label 12','Label 13', 'Label 14', 'Label 15', 'Label 16',
        'Label 17', 'Label 18', 'Label 19', 'Label 20','Label 21', 'Label 22', 'Label 23', 'Label 24',
        'Label 25', 'Label 26', 'Label 27', 'Label 28','Label 29', 'Label 30', 
        'NEXT 31', 'NEXT 32', 'NEXT 1', 'NEXT 2', 'NEXT 3', 'NEXT 4','NEXT 5', 'NEXT 6', 'NEXT 7', 
        'NEXT 8'
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

    const selectValidation = () =>{
        if (!deliveryWindowID || !deliveryZoneID) {
            message.error('Please select Delivery Zone and Window')
            return;
        }
    }

    const handleOptimizeRoute = async () => {
        selectValidation();
        try {
            setLoading(true);
            const response = await postRequest('order/optimizeRoute', {
                delivery_zone_id: deliveryZoneID,
                delivery_window_id: deliveryWindowID
            });
            setDirectionResponse(response.data)

            setLoading(false);
            fetchStickers();
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    const handleDownloadCSV = () => {
        selectValidation();
        if(_.isEmpty(deliveryStickers.data)){
            message.error('No deliveries fetch to download')
            return;
        }
        const csvData = deliveryStickers.data.map(({ customer_name, customer_email, customer_phone,  address, items }) => {
            //const itemDetails = items.map(item => `Name: ${item.name}, Quantity: Quantity`).join(' | ');
            const itemName = items.name;
            return {
                customer_name, customer_email, customer_phone,  address, itemName
            };
        });

        const csv = Papa.unparse(csvData);
        const blob = new Blob([csv], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `route_csv_${deliveryZoneID}_${deliveryWindowID}_${dayjs(new Date()).format("DD_MM_YYYY")}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    const printStickerSheet = () => {
        selectValidation();
        window.print();
    }
    
    const pages = splitStickerDataIntoPages(deliveryStickers?.data ?? stickerData, labelsPerPage)
    return (
        <>
            {loading && <Spin tip="Loading..." />}
            <Row gutter={16} className='sticker_page_header'>
                <Col span={18}>
                    <Space>
                        {!isEmpty(deliveryWindows) ?
                            <Select
                                placeholder="Select Delivery Zone"
                                defaultValue={deliveryWindowID}
                                size={'medium'}
                                style={{
                                    width: 300,
                                }}
                                options={deliveryWindows}
                                onChange={updateDeliveryWindow}
                            />
                            : null
                        }
                        {!isEmpty(deliveryZoneList) ?
                            <Select
                                placeholder="Select Delivery Zone"
                                defaultValue={deliveryZoneID}
                                size={'medium'}
                                style={{
                                    width: 300,
                                }}
                                options={deliveryZoneList}
                                onChange={updateDeliveryZone}
                            />
                            : null
                        }
                        <Button type={'primary'} onClick={fetchStickers}>
                            Fetch Stickers
                        </Button>

                    </Space>
                </Col>
            </Row>
            <br/>
            <Row gutter={16} className='sticker_page_header'>
                <Col span={18}>
                    <Space>
                        
                        <Button type={'primary'} onClick={handleOptimizeRoute}>
                            Optimize Route
                        </Button>

                        <Button type={'primary'} onClick={handleDownloadCSV}>
                            Download CSV
                        </Button>
                        <Button type={'primary'} onClick={printStickerSheet}>
                            Print
                        </Button>
                    </Space>
                </Col>
            </Row>

            <Row className='sticker_page_header'>
                <Col span={14}>
                    <MapViewOfRoute directionResponse={directionResponse} />
                </Col>
            </Row>
            
            <StickerSheet pages={pages} />
        </>
    );
}

export default StickerView;
