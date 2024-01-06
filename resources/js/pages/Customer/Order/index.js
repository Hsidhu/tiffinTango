import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Divider, Button } from 'antd';
import { getCustomerOrders } from "../../../redux/Order/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Order = ({ }) => {
    const navigate = useNavigate();
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomerOrders())
    }, [])

    if(!orders){
        return null;
    }

    const handleEditClick = (id) => {
        navigate(`/customer/order/view/${id}`)
    }

    const getRowClassName = (record) => {
        return record.status=='Canceled'? 'row-status-canceled' : '';
    };

    const columns = [
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
            key: 'end_date',
            title: 'End Date',
            dataIndex: 'end_date',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
        {
            key: 'action',
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >View</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="Orders"
                subTitle="MealPlan Orders"
                HeaderButtons = {[
                    <Link key={'generate_deliveries'} to="/admin/order/generateDeliveries">
                        <Button type='primary'>Generate Deliveries</Button>
                    </Link>,
                ]}
            />
            <Divider />
            <Table 
                rowKey="id" columns={columns} 
                dataSource={orders.data} 
                rowClassName={getRowClassName}
            />
        </>
    );
}

export default Order;
