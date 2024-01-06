import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Upload, Button } from 'antd';

import Zone from './Zones/index'
import CoreSettings from '../../components/containers/coreSettings';
import CreateZones from '../../components/CreateZones';

const Settings = () => {
    const navigate = useNavigate()

    const onChange = (key) => {
        console.log(key);
    };

    const tabContent = [
        { 
            key: 'general',
            label: 'General',
            children: <div>
                <CoreSettings/>
            </div>
        },
        {
            key: 'sales',
            label: 'Sales',
            children: <div>
                <CreateZones />
            </div>
        },
        { 
            label: 'Delivery zones', 
            key: 'zone', 
            children: <div style={{height:'400px'}}>
                    <Zone />
            </div>
        }
    ];

    return (
        <Tabs
            onChange={onChange}
            type="card"
            items={tabContent}
        />
    );
}

export default Settings;
