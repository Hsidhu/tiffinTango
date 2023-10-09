import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button, Divider } from 'antd';
import { getCustomers } from "../../../redux/Customer/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Customer = ({ }) => {
    const history = useHistory();
    const customers = useSelector(state => state.customers)
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

    return (
        <>
            <TableHeaderLink
                name="Customers"
                toUri="/admin/customer/create"
                toText="Create"
            />
            <Divider />
            <Table rowKey="id" columns={columns} dataSource={customers.data} />
        </>
    );
}

export default Customer;
