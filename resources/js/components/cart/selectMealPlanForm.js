import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col, Button,
    Form, Card,
    Radio, Space
} from 'antd';


const SelectMealPlanForm = ({ mealplans, getMealPlanForOrder }) => {

    const [componentSize, setComponentSize] = useState();

    useEffect(() => {
        getMealPlanForOrder()
    }, [])

    if (isEmpty(mealplans)) {
        return null;
    }

    const optionItems = mealplans.data.map((item)=>({
        label: item.name,
        value: item.id
    }));

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
    };

    return (
        <Row>
            <Col span={14}>
                <Radio.Group name={'mealplan'} options={optionItems} onChange={onChange}>
                    <Space direction="vertical">
                        <Radio value={1}>Option A</Radio>
                    </Space>
                </Radio.Group>
            </Col>
            <Col span={10}>
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Col>
        </Row>
    );
}

export default SelectMealPlanForm;
