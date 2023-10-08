import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Typography,
    Space, Button, Descriptions,
    Card, Table
} from 'antd';

import { getOrder } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';

const { Title } = Typography;

const View = ({ }) => {
    const history = useHistory()
    const { id } = useParams();
    const order = useSelector(state => state.order)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder(id))
    }, [])

    if (isEmpty(order)) {
        return null;
    }

    const onChange = (key) => {
        console.log(key);
    };

    const clickHandler = () => {
        history.push('/admin/drivers/edit')
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

    let data2 = order.items?.map((item) => ({
        key: `items-${item.meal_plan_id}`,
        name: item.meal_plan_name,
        price: item.price,
        subtotal: item.subtotal,
        options: item.options
    }));

    let totals = order.totals?.map((item) => ({
        key: `total-${item.id}`,
        name: item.title,
        price: 0,
        subtotal: item.value,
        options: []
    }));
    console.log(totals);
    data2.push(...totals)

    return (
        <>
            <Row>
                <Col flex={2}>
                    <Title level={3}>
                        Order Edit - #{id}
                    </Title>
                </Col>
                <Col flex={3}>
                    <Space align='center' style={{
                        display: "flex",
                        justifyContent: 'end',
                    }}>
                        <Button type="primary" onClick={() => history.push('/admin/orders')} >
                            Back
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Descriptions title="" bordered layout="vertical"
                        column={5}
                        labelStyle={{ fontSize: "20px" }}
                        contentStyle={{ fontSize: "20px" }}
                    >
                        <Descriptions.Item
                            label="OrderID"
                        >
                            {order?.id}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label="Order Type">
                            {order?.order_type}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label="Start Date">{order?.start_date}</Descriptions.Item>

                        <Descriptions.Item
                            label="Total Price">{order?.total_price}</Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={18}>
                    <Card
                        title="Order Detail"
                        extra={<a href="#">More</a>}
                    >
                        <br />
                        <Table
                            columns={columns2}
                            dataSource={data2}
                            pagination={false}
                            bordered
                            className="mb-0" // Add any additional styling classes here
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        title="Customer details"
                        extra={<a href="#">More</a>}

                    >
                        <p>Name: {order.customer_name}</p>
                        <p>Email: {order.email}</p>
                        <p>Phone: {order.phone}</p>
                        <p>Start Date: {order.start_date}</p>
                        <p>End Date: {order.end_date}</p>
                        <p>Created Date: {order.created_date}</p>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default View;
