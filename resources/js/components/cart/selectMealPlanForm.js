import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col,
    Select, Card,
    Image, Descriptions,
    Typography
} from 'antd';

const { Text } = Typography;

import { axiosConfig } from '../../config/constants';
import MealPlanOptions from "../containers/cart/mealPlanOptions"

const SelectMealPlanForm = ({ orderData, cart, getMealPlanForOrder, selectMealPlan }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();

    useEffect(() => {
        getMealPlanForOrder()
    }, [])

    if (isEmpty(orderData)) {
        return null;
    }

    const optionItems = orderData.map((item) => ({
        value: item.id,
        label: `${item.name} - $${item.price}`
    }));

    const handleChange = (value) => {
        console.log('Select checked', value);
        const meal = _.find(orderData, { id: value });
        setSelectedMealPlan(meal);
        // selected mealPlan
        selectMealPlan(meal);
    };

    return (
        <Card title="Select Mealpan"  >

            <Row>
                <Col span={3}>
                    <Text>Select your Plan:</Text>
                </Col>
                <Col span={8}>
                    <Select size="large"
                        placeholder = "Select MealPlan"
                        defaultValue={cart?.id}
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionItems}
                    />
                </Col>
            </Row>
            
            <div>
                {
                    !isEmpty(cart) ? <Descriptions title="Selected Meal Plan Description" bordered layout="vertical">
                            <Descriptions.Item label="Name">{cart.name}</Descriptions.Item>
                            <Descriptions.Item label="Description">{cart.description}</Descriptions.Item>
                            <Descriptions.Item label="Billing">Monthly</Descriptions.Item>
                            <Descriptions.Item label="Price">${cart.price}</Descriptions.Item>
                    </Descriptions>: null
                }
                <br/>
                {
                    !isEmpty(cart) ? <Image
                                width={200}
                                src={`${axiosConfig.HOST_URL}/${cart.image}`}
                            /> : null
                }
                <br/>
                <MealPlanOptions />
            </div>
        </Card>
    );
}

export default SelectMealPlanForm;
