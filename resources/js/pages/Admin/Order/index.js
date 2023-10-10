import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Divider } from 'antd';
import { getOrders } from "../../../redux/Order/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

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
            title: 'Customer Name',
            dataIndex: 'customer_name',
            sorter: (a, b) => a.customer_name.length - b.customer_name.length,
            render: (_, record) => (
                <a onClick={ () => handleEditClick(record.id)} >{record.customer_name}</a>
            )
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
            <TableHeaderLink
                name="Orders"
            />
            <Divider />
            <Table rowKey="id" columns={columns} dataSource={orders.data} />
        </>
    );
}

export default Order;
