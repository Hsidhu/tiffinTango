import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider
} from 'antd';
import { getDrivers } from "../../../redux/Driver/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Driver = ({ }) => {
    const history = useHistory();
    const drivers = useSelector(state => state.drivers)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrivers())
    }, [])

    if(!drivers){
        return null;
    }

    const handleEditClick = (id) => {
        history.push(`/admin/driver/edit/${id}`)
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
            title: '#Delivery Shift',
            dataIndex: '#Delivery Shift',
            key: '#Delivery Shift',
            render: (_, record) => (
                <>{record.shift.name}</>
            ),
        },
        {
            title: '#Delivery zone',
            dataIndex: '#Delivery zone',
            key: '#Delivery zone',
            render: (_, record) => (
                <>{record.driverZones.length}</>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >Edit</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <TableHeaderLink
                name="Drivers"
                toUri="/admin/driver/create"
                toText="Create"
            />
            <Divider />
            <Table rowKey="id" columns={columns} dataSource={drivers.data} />
        </>
    );
}

export default Driver;
