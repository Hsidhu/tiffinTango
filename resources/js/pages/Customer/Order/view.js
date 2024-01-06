import React, { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import {
    Row, Col, Typography, Descriptions,
    Card, Table, Divider
} from 'antd';

import { getCustomerOrder } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';
import TableHeaderLink from '../../../components/tableHeaderLink';

import OrderStatus from '../../../components/containers/orderStatus';

import PickupOrder from './PickupOrder';
import DailyDeliveryTable from '../../../components/dailyDeliveryTable';

const View = ({ }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const {order} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomerOrder(id))
    }, [])


    if (isEmpty(order)) {
        return null;
    }

    const sharedOnCell = (_, index) => {
        if (index >= 1) {
          return {
            colSpan: 0,
          };
        }
        return {};
    };

    const columns2 = [
        {
            title: 'Name/Options',
            dataIndex: 'name',
            key: 'name',
            width: '65%',
            onCell: (_, index) => ({
                colSpan: index < 1 ? 1 : 2,
            }),
            render: (text, record) => (
                <div>
                    <b>{record.name}</b>
                    {
                        !isEmpty(record.options) ? 
                        <ul className="list-unstyled mb-0 mt-2">
                            <li>
                                <u className="text-muted">Options:</u>
                                <ul className="list-unstyled">
                                    {record.options?.map((option, index) => (
                                        <li key={index}>
                                            {option.option_name}<br />
                                            {option.value_name} - ${option.value_price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        : null
                    }
                    
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            className: 'text-left',
            onCell: sharedOnCell
        },
        {
            title: 'Total',
            dataIndex: 'subtotal',
            key: 'subtotal',
            className: 'text-right',
            render: (text, record) => (
                <b>${record.subtotal}</b>
            ),
        },
    ];

    let pickupQuota = 0;
    let invoiceData = order.items?.map((item) => {
        pickupQuota += item.quota
        return {
            key: `items-${item.meal_plan_id}`,
            name: `${item.meal_plan_name} - $${item.price.toFixed(2)}`,
            price: item.price,
            subtotal: item.subtotal.toFixed(2),
            options: item.options
        }
    });

    let totals = order.totals?.map((item) => ({
        key: `total-${item.id}`,
        name: item.title,
        price: 0,
        subtotal: item.value,
        options: []
    }));
    invoiceData.push(...totals)

    return (
        <>
            <TableHeaderLink
                name="View Order"
                subTitle="Order Detail"
                backUri="/admin/orders"
                HeaderButtons = {[
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="OrderID">{order?.id}</Descriptions.Item>
                    <Descriptions.Item label="Creation At">{order?.created_at}</Descriptions.Item>
                    <Descriptions.Item label="Last Updated at ">{order?.updated_at}</Descriptions.Item>
                </Descriptions>

            </TableHeaderLink>
            <Divider />
            <Row>
                <Col span={24}>
                    <Descriptions title="" bordered layout="vertical"
                        column={6}
                        labelStyle={{ fontSize: "20px" }}
                        contentStyle={{ fontSize: "20px" }}
                    >
                        <Descriptions.Item label="Order Type">
                            {order?.order_type}
                        </Descriptions.Item>
                        <Descriptions.Item label="Start Date">
                            {dayjs(order.start_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}
                        </Descriptions.Item>
                        <Descriptions.Item label="End Date">
                            {dayjs(order.end_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <OrderStatus order_id={order.id} statusID={order?.order_status_id} disabled={true} />
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

            <Row gutter={12}>
                <Col span={18}>
                    <Card
                        title="Order Detail"
                        extra={<span>extra</span>}
                    >
                        <br />
                        <Table
                            columns={columns2}
                            dataSource={invoiceData}
                            pagination={false}
                            bordered
                            className="mb-0" // Add any additional styling classes here
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        title="Customer details"
                    >
                        <p>Name: {order.customer_name}</p>
                        <p>Email: {order.email}</p>
                        <p>Phone: {order.phone}</p>
                        <p>Start Date: {dayjs(order.start_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                        <p>End Date: {dayjs(order.end_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                        <p>Created Date: {dayjs(order.created_at, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                    </Card>
                </Col>
            </Row>
            <Divider />
            {
                order.order_type == 'pickup' ?
                <PickupOrder order_id={order.id} customer_id={order.customer_id} pickups={order.pickups} pickupQuota={pickupQuota} />
                :
                <Row gutter={6}>

                </Row>
            }
            {
                order.order_type == 'pickup' ?
                null
                :<>
                    <Divider/>
                    <DailyDeliveryTable dailyDeliveryLogs={order.deliveries} />
                </>
            }
            
        </>
    );
}

export default View;
