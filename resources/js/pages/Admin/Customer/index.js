import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Row, Col, Button, Divider, Input } from 'antd';
import {
    MinusCircleTwoTone, PlusCircleTwoTone
} from '@ant-design/icons';
import { getCustomers } from "../../../redux/Customer/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';
import { isEmpty } from 'lodash';

const Customer = ({ }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const customers = useSelector(state => state.customers)
    const deliveryZoneList = useSelector(state => state.deliveryZoneList)

    useEffect(() => {
        dispatch(getCustomers())
    }, [])

    if(isEmpty(customers)){
        return null;
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = customers.data.filter(
        entry =>
          entry.full_name.toLowerCase().includes(searchText.toLowerCase()) ||
          entry.email.toLowerCase().includes(searchText.toLowerCase()) ||
          entry.phone.toLowerCase().includes(searchText.toLowerCase())
      );

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
            sorter: (a, b) => a.full_name.length - b.full_name.length,
            render: (_, record) => (
                <a onClick={ () => navigate(`/admin/customer/edit/${record.id}`)} >{record.full_name}</a>
            )
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
            render: (_, record) => {
                const zone = deliveryZoneList.find(option => option.value === record.delivery_zone_id);
                return <span>{zone.label}</span>
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => navigate(`/admin/customer/edit/${record.id}`)} >Edit</a>
                    <a onClick={ () => navigate(`/admin/customer/createOrder/${record.id}`)} >New Order</a>
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
                key: 'end_date',
                title: 'End Date',
                dataIndex: 'end_date'
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
        return <Table rowKey="id" columns={columns} dataSource={data} pagination={false} bordered />;
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
            <Input
                placeholder="Search customers"
                value={searchText}
                onChange={handleSearch}
            />
            <Table rowKey="id"
                pagination={{ defaultPageSize: 20}}
                columns={columns} 
                dataSource={filteredData} 
                expandable={{
                    expandedRowRender,
                    expandIcon: ({ expanded, onExpand, record }) =>
                        expanded ? (
                        <MinusCircleTwoTone onClick={e => onExpand(record, e)} style={{fontSize:"24px"}} />
                        ) : (
                        <PlusCircleTwoTone onClick={e => onExpand(record, e)} style={{fontSize:"24px"}} />
                        )
                }}
            />
        </>
    );
}

export default Customer;
