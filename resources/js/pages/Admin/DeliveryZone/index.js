import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider
} from 'antd';
import { getDeliveryZones } from "../../../redux/DeliveryZone/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';
import { isEmpty } from 'lodash';

const Driver = ({ }) => {
    const navigate = useNavigate();
    const deliveryZones = useSelector(state => state.deliveryZones)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeliveryZones())
    }, [])

    if(isEmpty(deliveryZones)){
        return null;
    }

    const handleEditClick = (id) => {
        navigate(`/admin/delivery_zone/edit/${id}`)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            render: (_, record) => (
                <a onClick={ () => handleEditClick(record.id)} >{record.name}</a>
            ),
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '#Address',
            dataIndex: '#Address',
            key: '#Address',
            render: (_, record) => (
               <span>{record.addresses.length}</span>
            ),
        },
        {
            title: '#Drivers',
            dataIndex: '#Drivers',
            key: '#Drivers',
            render: (_, record) => (
               <span>{record.drivers.length}</span>
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
                toUri="/admin/delivery_zone/create"
                toText="Create"
            />
            <Divider />
            <Table rowKey="id" 
                columns={columns} 
                dataSource={deliveryZones.data}
                pagination={false}
             />
        </>
    );
}

export default Driver;
