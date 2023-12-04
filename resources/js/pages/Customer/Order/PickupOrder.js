import React, {useState} from 'react';
import {Row, Col, Statistic, List, Divider } from 'antd';

const PickupOrder = ({ pickups, pickupQuota}) => {


    const totalMealsPickedUp = () => {
        return pickups.reduce((sum, item) => sum + item.qty, 0);
    }

    const remainingPickups = () => {
        return ( pickupQuota - totalMealsPickedUp() )
    }

    return (
        <div>

            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Remaining" value={ remainingPickups() } />
                </Col>
                <Col span={6}>
                    <Statistic title="Total Meals Picked UP" value={ totalMealsPickedUp() } />
                </Col>
                <Col span={6}>
                    <Statistic title="Quota" value={ pickupQuota } />
                </Col>
                <Col span={6}>
                    <Statistic title="Total Pickups" value={pickups.length} />
                </Col>
            </Row>

            <Divider/>

            {pickups && <List
                itemLayout="horizontal"
                dataSource={pickups}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                        title={<strong>{item.comment} - { i + 1}</strong>}
                        />
                        {`Number of meals picked up [ ${item.qty} ] on ${item.created_at}`}
                    </List.Item>
                )}
            />}

        </div>
    );

}

export default PickupOrder;
