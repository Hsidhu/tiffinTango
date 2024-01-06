import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Divider, Button, Space,
    Tabs
} from 'antd';
import TableHeaderLink from '../../../components/tableHeaderLink';
import CreateZones from '../../../components/CreateZones';
import AssignZoneToDriver from '../../../components/containers/assignZoneToDriver';

const Create = ({ }) => {
    const navigate = useNavigate()

    const openExternalLink = (URL) => {
        window.open(URL, '_blank');
    };

    const items = [
        { label: 'Create', key: 'create', children: <CreateZones/> },
        { label: 'Assign Driver To Zone', key: 'assign_driver_to_zone', children: '<AssignZoneToDriver/>' },
    ];

    return (
        <>
            <TableHeaderLink
                name="Create Driver"
                backUri="/admin/delivery_zones"
            />
            <Divider />
            <Space>
                <Button type="primary" onClick={() => openExternalLink(' https://mapsengine.google.com/map/')}>
                    Create zones here
                </Button>
                <br/>
                <Button type="primary" onClick={() => openExternalLink('https://indicaonline.zendesk.com/hc/en-us/articles/115012507087-Creating-Delivery-Zones-Using-Google-Maps')}>
                    How to create zones here
                </Button>
            
            </Space>
            <br/>
            <Tabs items={items} />
            
        </>

    );
}

export default Create;
