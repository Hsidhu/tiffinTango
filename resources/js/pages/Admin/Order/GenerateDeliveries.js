import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Space, Select, Divider,
    Typography, Table

} from 'antd'
import TableHeaderLink from '../../../components/tableHeaderLink';

import { getDeliveryWindowsList } from '../../../redux/Common/actions'
import { getDeliveryZoneList } from '../../../redux/DeliveryZone/actions'
import { createDailyDeliveries, getDailyDeliveries } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';

const GenerateDeliveries = ({ }) => {

    const history = useHistory()
    const { deliveryZoneList, deliveryWindows, dailyDeliveries } = useSelector(state => state)
    const dispatch = useDispatch();

    const [deliveryZoneID, setDeliveryZoneID] = useState('');
    const [deliveryWindowID, setDeliveryWindowID] = useState('');


    useEffect(() => {
        dispatch(getDeliveryWindowsList())
        dispatch(getDeliveryZoneList())
        dispatch(getDailyDeliveries())
    }, [])

    const updateDeliveryZone = (value) => {
        setDeliveryZoneID(value)
    }
    const updateDeliveryWindow = (value) => {
        setDeliveryWindowID(value)
    }

    const createDeliveries = () => {
        if (deliveryZoneID && deliveryWindowID) {
            dispatch(createDailyDeliveries({
                delivery_zone_id: deliveryZoneID,
                delivery_window_id: deliveryWindowID
            }))
        }
    }

    const columns = [
        { title: 'Customer Name', dataIndex: 'customer_name', key: 'customer_name',},
        { title: 'Driver Name', dataIndex: 'driver_name', key: 'driver_name', },
        {
            title: 'Customer Phone',
            dataIndex: 'customer_phone',
            key: 'customer_phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Delivery Zone',
            dataIndex: 'delivery_zone_name',
            key: 'delivery_zone_name',
        },
        {
            title: 'Meal Plan',
            dataIndex: 'mealplan_name',
            key: 'mealplan_name',
            render: (_, record) => (
                <span>{record.items.name}</span>
            ),
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="GenerateDeliveries"
                HeaderButtons = {[
                    <Link key={"sticker_link"} to="/admin/order/sticker_view">Sticker View</Link>
                ]}
            />
            <Divider />

            <div>
                <Typography.Title level={1} style={{ margin: "14px 8px" }}>
                    Generate Today's Deliveries
                </Typography.Title>
            </div>

            <Row>
                <Col span={14}>
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
                        <Button type={'primary'} onClick={createDeliveries}>
                            Generate Deliveries
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Divider />
            {
                !isEmpty(dailyDeliveries) ?
                    <Table rowKey='id' columns={columns} dataSource={dailyDeliveries.data} />
                    : null
            }
            

        </>
    );
}

export default GenerateDeliveries;
