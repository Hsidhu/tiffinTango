import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Divider, Button } from 'antd';
import { getOrders } from "../../../redux/Order/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Order = ({ }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getOrders())
    }, [])

    if(!orders){
        return null;
    }

    const handleEditClick = (id) => {
        navigate(`/admin/order/view/${id}`)
    }

    const getRowClassName = (record) => {
        if(record.status=='Canceled'){
            return 'row-status-canceled'
        }
        if(record.order_type=='pickup'){
            return 'row-orderType-pickup'
        }
        // Default row color
        return '';
    };

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
            filters: [
                { text: 'pickup', value: 'pickup' },
                { text: 'delivery', value: 'delivery'},
              ],
              onFilter: (value, record) => record.order_type.indexOf(value) === 0,
            sorter: (a, b) => a.order_type.length - b.order_type.length,
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
                pagination={{ defaultPageSize: 20}}
                rowKey="id" columns={columns} 
                dataSource={orders.data} 
                rowClassName={getRowClassName}
            />
        </>
    );
}

export default Order;
