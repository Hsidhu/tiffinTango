import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';

import Zone from './Zones/index'
import PlacesAutoComplete from '../../components/PlacesAutoComplete';

const Settings = () => {
    const history = useHistory()

    const onChange = (key) => {
        console.log(key);
    };

    const clickHandler = () => {
        history.push('/admin/drivers/edit')
    }

    const tabContent = [
        { 
            label: 'Location', 
            key: 'location-1', 
            children: <div>
                triggerSubmit
                <PlacesAutoComplete/>
            </div>
        },
        { 
            label: 'Tab 2', 
            key: 'item-2', 
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
