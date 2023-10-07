import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button } from 'antd';
import { getOrders } from "../../../redux/Order/actions"

const Order = ({ }) => {
    const history = useHistory();
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    if(!orders){
        return null;
    }

    const handleEditClick = (id) => {
        history.push(`/admin/order/view/${id}`)
    }

    const columns = [
        {
            key: 'customer_name',
            title: 'Full Name',
            dataIndex: 'customer_name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.customer_name.length - b.customer_name.length
        },
        {
            key: 'order_type',
            title: 'Order Type',
            dataIndex: 'order_type',
        },
        {
            key: 'start_date',
            title: 'Start Date',
            dataIndex: 'start_date',
        },
        {
            key: 'action',
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >View</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Row>
                <Col flex={2}>Orders</Col>
                <Col flex={3}>
                    <Space align='center' style={{
                            display: "flex",
                            justifyContent: 'end',
                        }}>
                        <Button type="primary" onClick={() => history.push('/admin/customer/create')} >
                            Create
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Table rowKey="id" columns={columns} dataSource={orders.data} />
        </>
    );
}

export default Order;
