import React, {useEffect, useState} from 'react';
import StickerSheet from '../../../components/containers/stickerSheet';
import { Row, Col, Space, Divider, Select, Button, Spin, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'

import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDailyDeliveries, getStickerData } from "../../../redux/Order/actions";
import { getDeliveryWindowsList } from '../../../redux/Common/actions'
import { getDeliveryZoneList } from '../../../redux/DeliveryZone/actions'
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
        dispatch(getDeliveryZoneList())
    }, [])

    const printStickerSheet = () => {
        window.print();
    }

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

    const handleOptimizeRoute = async () => {
        if (!deliveryWindowID || !deliveryZoneID) {
            message.info('Please select Delivery Zone and Window')
            return;
        }
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
    
    const pages = splitStickerDataIntoPages(deliveryStickers?.data ?? stickerData, labelsPerPage)
    return (
        <>
            {loading && <Spin tip="Loading..." />}
            <Row className='sticker_page_header'>
                <Col span={18}>
                <Space>
                        {!isEmpty(deliveryZoneList) ?
                            <Select
                                placeholder={"Select Delivery Zone"}
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
                        {!isEmpty(deliveryWindows) ?
                            <Select
                                placeholder={"Select Delivery Zone"}
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
                        <Button type={'primary'} onClick={fetchStickers}>
                            Fetch Stickers
                        </Button>

                        <Button type={'primary'} onClick={handleOptimizeRoute}>
                            Optimize Route
                        </Button>
                    </Space>
                </Col>
            </Row>

            <Row className='sticker_page_header'>
                <Col span={14}>
                    <MapViewOfRoute directionResponse={directionResponse} />
                </Col>
            </Row>
            
            <Button onClick={printStickerSheet}>Print</Button>
            <StickerSheet pages={pages} />
        </>
    );
}

export default StickerView;
