import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Space, Select, Divider,
    Typography, Table, Collapse

} from 'antd'
import TableHeaderLink from '../../../components/tableHeaderLink';

import { getDeliveryWindowsList } from '../../../redux/Common/actions'
import { createDailyDeliveries, getDailyDeliveries } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';

import DndSortTable from '../../../components/dndSortTable';

const { Panel } = Collapse;

const GenerateDeliveries = ({ }) => {
    const history = useHistory()
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

    const columns = [
        { title: 'Customer Name', dataIndex: 'customer_name', key: 'customer_name' },
        { title: 'Driver Name', dataIndex: 'driver_name', key: 'driver_name' },
        { title: 'Customer Phone', dataIndex: 'customer_phone', key: 'customer_phone' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Delivery Zone', dataIndex: 'delivery_zone_name', key: 'delivery_zone_name' },
        { title: 'Meal Plan', dataIndex: 'mealplan_name', key: 'mealplan_name',
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
                            <Panel header="Zone Deliveries 1" key={key}>
                                <DndSortTable tableColumns={columns} tableData={dailyDeliveries[key]} />
                            </Panel>
                        ))}
                    </Collapse>

                    : null
            }
            

        </>
    );
}

export default GenerateDeliveries;
