import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Space, Select, Divider,
    Typography, Collapse
} from 'antd'
import TableHeaderLink from '../../../components/tableHeaderLink';

import { getDeliveryWindowsList } from '../../../redux/Common/actions'
import { createDailyDeliveries, getDailyDeliveries, updatedOrderOfDailyDelivery } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';

import DndSortTable from '../../../components/dndSortTable';

const { Panel } = Collapse;

const GenerateDeliveries = ({ }) => {
    const navigate = useNavigate()
    const { deliveryWindows, dailyDeliveries } = useSelector(state => state)
    const dispatch = useDispatch();

    const [deliveryWindowID, setDeliveryWindowID] = useState('');

    useEffect(() => {
        dispatch(getDeliveryWindowsList())
        dispatch(getDailyDeliveries())
    }, [])

    const updateDeliveryWindow = (value) => {
        setDeliveryWindowID(value)
    }

    const createDeliveries = () => {
        if (deliveryWindowID) {
            dispatch(createDailyDeliveries({
                delivery_window_id: deliveryWindowID
            }))
            location.reload();
        }
    }

    const deliveryUpdate = (data) => {
        dispatch(updatedOrderOfDailyDelivery(data))
    }

    const columns = [
        { title: 'Customer Name', dataIndex: 'customer_name', key: 'customer_name',
            render: (_, record) => (
                <a onClick={ () => navigate(`/admin/customer/edit/${record.customer_id}`)} >{record.id} - {record.customer_name}</a>
            ),
        },
        { title: 'Driver Name', dataIndex: 'driver_name', key: 'driver_name' },
        { title: 'Customer Phone', dataIndex: 'customer_phone', key: 'customer_phone' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Delivery Zone', dataIndex: 'delivery_zone_name', key: 'delivery_zone_name' },
        { title: 'Meal Plan', dataIndex: 'mealplan_name', key: 'mealplan_name',
            render: (_, record) => (
                <span>{record.items.name}</span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => navigate(`/admin/order/view/${record.order_id}`)} >View Order</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="GenerateDeliveries"
                HeaderButtons = {[
                    <Link key={'sticker_link'} to="/admin/order/sticker_view">
                        <Button type='primary'>Sticker View</Button>
                    </Link>,
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
                    <Collapse accordion defaultActiveKey={Object.keys(dailyDeliveries)[0]}>
                        {Object.keys(dailyDeliveries).map((key) => (
                            <Panel header={`Zone Deliveries - ${key}`} key={key}>
                                <DndSortTable tableColumns={columns} tableData={dailyDeliveries[key]} onDragfinish={deliveryUpdate} />
                            </Panel>
                        ))}
                    </Collapse>

                    : null
            }
            
        </>
    );
}

export default GenerateDeliveries;
