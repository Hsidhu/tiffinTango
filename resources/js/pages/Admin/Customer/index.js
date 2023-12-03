import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Row, Col, Button, Divider } from 'antd';
import { getCustomers } from "../../../redux/Customer/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Customer = ({ }) => {
    const history = useHistory();
    const {customers} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomers())
    }, [])

    if(!customers){
        return null;
    }

    const handleEditClick = (id) => {
        history.push(`/admin/customer/edit/${id}`)
    }

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
            sorter: (a, b) => a.full_name.length - b.full_name.length,
            render: (_, record) => (
                <a onClick={ () => handleEditClick(record.id)} >{record.full_name}</a>
            ),
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Full Address',
            dataIndex: 'full_address',
            key: 'full_address',
        },
        {
            title: 'Delivery Zone',
            dataIndex: 'delivery_zone_id',
            key: 'delivery_zone_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const expandedRowRender = (record) =>{
        const columns = [
            {
                key: 'order_type',
                title: 'Order Type',
                dataIndex: 'order_type',
            },
            {
                key: 'start_date',
                title: 'Start Date',
                dataIndex: 'start_date'
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        <Link to={`/admin/order/view/${record.id}`}>View order</Link>
                    </Space>
                ),
            },
        ];

        const data = record.mealplanorders;
        return <Table rowKey="id" columns={columns} dataSource={data} pagination={false} />;
    }

    return (
        <>
            <TableHeaderLink
                name="Customers"
                HeaderButtons = {[
                    <Link key={'customer_create'} to="/admin/customer/create">
                        <Button type='primary'>Create</Button>
                    </Link>,
                ]}
            />
            <Divider />
            <Table rowKey="id" 
                columns={columns} 
                dataSource={customers.data} 
                expandable={{ expandedRowRender }}
            />
        </>
    );
}

export default Customer;
