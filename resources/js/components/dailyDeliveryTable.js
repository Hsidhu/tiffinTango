import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Table } from 'antd';



const DailyDeliveryTable = ({dailyDeliveryLogs}) => {
    const history = useHistory();

    if(!dailyDeliveryLogs){
        return null;
    }

    const columns = [
        {
            key: 'driver_name',
            title: 'Driver',
            dataIndex: 'driver_name',
            render: (_, record) => (
                <a onClick={ () => handleEditClick(record.id)} >{record.driver_name}</a>
            )
        },
        {
            key: 'driver_email',
            title: 'Driver Email',
            dataIndex: 'driver_name',
        },
        {
            key: 'driver_phone',
            title: 'Driver Phone',
            dataIndex: 'driver_phone',
        },
        {
            key: 'created_at',
            title: 'Delivery created',
            dataIndex: 'created_at',
        }
    ];

    return (
        <>
            <Table
                rowKey="id" 
                columns={columns}
                dataSource={dailyDeliveryLogs}
            />
        </>
    )

}

export default DailyDeliveryTable;
