import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col, Button,
    Select, Card,
    Radio, Space,
    List, Skeleton,
    Avatar,
    Image
} from 'antd';

import { axiosConfig } from '../../config/constants';


const SelectMealPlanForm = ({ mealplans, getMealPlanForOrder }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();
    const [selectedMealPlanOption, setSelectedMealPlanOption] = useState();

    useEffect(() => {
        getMealPlanForOrder()
    }, [])

    if (isEmpty(mealplans)) {
        return null;
    }

    const optionItems = mealplans.map((item) => ({
        label: item.name,
        value: item.id
    }));

    const handleChange = (value) => {
        console.log('Select checked', value);
        const meal = _.find(mealplans, { id: value });
        setSelectedMealPlan(meal)
    };

    return (
        <Row gutter={16}>
            <Col span={16}>
                <Card title="Select Mealpan"  >
                    <Select
                        defaultValue="1"
                        style={{ width: 400 }}
                        onChange={handleChange}
                        options={optionItems}
                    />
                    <div>
                        {
                            selectedMealPlan ? selectedMealPlan.name : null
                        }
                        {
                            selectedMealPlan ? 
                                <Image
                                    width={200}
                                    src={`${axiosConfig.HOST_URL}/${selectedMealPlan.image}`}
                                />
                            : null
                        }
                    </div>
                </Card>

            </Col>
            <Col span={8} >

                    <Card title="Selected MealPlan" style={{ width: 400 }}>
                        
                        <List itemLayout="horizontal">
                            <List.Item
                                actions={[<a key="list-loadmore-edit">Price</a>]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={'https://randomuser.me/api/portraits/men/66.jpg'} />}
                                        title={<a href="https://ant.design">{'test'}</a>}
                                        description="Ant Design"
                                    />
                            </List.Item>
                        </List>

                    </Card>

            </Col>
        </Row>
    );
}

export default SelectMealPlanForm;
