import React, {useState} from 'react';
import { List, Divider } from 'antd';

const PickupOrder = ({ pickups}) => {

    return (
        <div>

            <Divider/>

            {pickups && <List
                itemLayout="horizontal"
                dataSource={pickups}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                        title={<strong>{item.comment} - { i + 1}</strong>}
                        description={`Number of meals picked up ${item.qty} on ${item.created_at}`}
                        />
                    </List.Item>
                )}
            />}

        </div>
    );

}

export default PickupOrder;
