import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider
} from 'antd';
import { getDeliveryZones } from "../../../redux/DeliveryZone/actions"
import TableHeaderLink from '../../../components/tableHeaderLink';

const Driver = ({ }) => {
    const history = useHistory();
    const deliveryZones = useSelector(state => state.deliveryZones)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDeliveryZones())
    }, [])

    if(!deliveryZones){
        return null;
    }

    const handleEditClick = (id) => {
        history.push(`/admin/delivery_zone/edit/${id}`)
    }

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.full_name.length - b.full_name.length,
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
            title: 'Created_at',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={ () => handleEditClick(record.id)} >Edit</a>
                    <a onClick={ () => handleEditClick(record.id)} >Delete</a>
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
                dataSource={deliveryZones}
                pagination={false}
             />
        </>
    );
}

export default Driver;
