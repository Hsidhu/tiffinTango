import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button } from 'antd';
import { getCustomers } from "../../../redux/Customer/actions"

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
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.full_name.length - b.full_name.length
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
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
            <Row>
                <Col flex={2}>Customers</Col>
                <Col flex={3}>
                    <Space align='center' style={{
                            display: "flex",
                            justifyContent: 'end',
                        }}>
                        <Button type="link" onClick={() => history.push('/admin/customer/create')} >
                            Create
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Table rowKey="id" columns={columns} dataSource={customers.data} />
        </>
    );
}

export default Customer;
