import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider, Popconfirm
} from 'antd';
import {
    MinusCircleTwoTone, PlusCircleTwoTone
} from '@ant-design/icons';
import { getDrivers, deleteDriverZone } from "../../../redux/Driver/actions"
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
                <a onClick={ () => history.push(`/admin/driver/edit/${record.id}`) } >{record.full_name}</a>
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
            title: '#Delivery zone/shift',
            dataIndex: '#Delivery zone/shift',
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
                    <a onClick={ () => history.push(`/admin/driver/edit/${record.id}`) } >Edit</a>
                    <a onClick={ () => history.push(`/admin/driver/workForm/${record.id}`)} >Work Form</a>
                </Space>
            ),
        },
    ];

    const handelDeleteZone = (e, deliveryWindowAndZoneId) => {
        deleteDriverZone(deliveryWindowAndZoneId)
        history.go(0);
    };
    const handelDeleteZoneCancel = (e) => {
        console.log(e);
    };

    const expandedRowRender = (record) =>{
        const columns = [
            {
                key: 'delivery_window_name',
                title: 'Delivery Window Name',
                dataIndex: 'delivery_window_name',
            },
            {
                key: 'delivery_zone_name',
                title: 'Delivery Zone Name',
                dataIndex: 'delivery_zone_name'
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={(e) =>  handelDeleteZone(e, record.id)}
                        onCancel={handelDeleteZoneCancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a href="#">Delete</a>
                    </Popconfirm>
                ),
            },
        ];

        const data = record.driverZones;
        return <Table rowKey="id" columns={columns} dataSource={data} pagination={false} size="small" bordered />;
    }

    return (
        <>
            <TableHeaderLink
                name="Drivers"
                toUri="/admin/driver/create"
                toText="Create"
            />
            <Divider />
            <Table
                rowKey="id"
                columns={columns}
                dataSource={drivers.data}
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

export default Driver;
