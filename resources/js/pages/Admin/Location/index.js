import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag, Row, Col, Button } from 'antd';
import { getLocations } from "../../../redux/Location/actions";
import TableHeaderLink from '../../../components/tableHeaderLink';

const Locations = ({ }) => {
    const navigate = useNavigate();
    const {locations} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations())
    }, [])

    if(!locations){
        return null;
    }

    const handleEditClick = (id) => {
        navigate(`/admin/location/edit/${id}`)
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
                name="Locations"
                toUri="/admin/location/create"
                toText="Create"
            />
            <Table rowKey="id" columns={columns} dataSource={locations.data} />
        </>
    );
}

export default Locations;
