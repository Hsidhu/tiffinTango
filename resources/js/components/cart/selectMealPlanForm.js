import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col,
    Select, Card,
    Image, Descriptions,
    Typography, Button
} from 'antd';

const { Text } = Typography;

import { axiosConfig } from '../../config/constants';
import MealPlanOptions from "../containers/cart/mealPlanOptions"

const SelectMealPlanForm = ({ nextForm, orderData, cart, getMealPlanForOrder, addToCartselectMealPlan }) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();

    useEffect(() => {
        getMealPlanForOrder()
    }, [])

    if (isEmpty(orderData)) {
        return null;
    }

    const optionItems = orderData.map((item) => ({
        value: item.meal_id,
        label: `${item.name} - $${item.price}`
    }));

    const defaultValue = cart?.items ? cart?.items[0] : null

    const handleChange = (value) => {
        console.log('Select checked', value);
        const meal = _.find(orderData, { meal_id: value });
        setSelectedMealPlan(meal);
        // selected mealPlan
        addToCartselectMealPlan(meal);
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
                        defaultValue={selectedMealPlan?.meal_id}
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionItems}
                    />
                </Col>
            </Row>
            
            <div>
                {
                    !isEmpty(selectedMealPlan) ? <Descriptions title="Selected Meal Plan Description" bordered layout="vertical">
                            <Descriptions.Item label="Name">{selectedMealPlan.name}</Descriptions.Item>
                            <Descriptions.Item label="Description">{selectedMealPlan.description}</Descriptions.Item>
                            <Descriptions.Item label="Billing">Monthly</Descriptions.Item>
                            <Descriptions.Item label="Price">${selectedMealPlan.price}</Descriptions.Item>
                    </Descriptions>: null
                }
                <br/>
                {
                    !isEmpty(selectedMealPlan) ? <Image
                                width={200}
                                src={`${axiosConfig.HOST_URL}/${selectedMealPlan.image}`}
                            /> : null
                }
                <br/>
                {
                    !isEmpty(selectedMealPlan) ? <MealPlanOptions mealPlanID={selectedMealPlan.meal_id} /> : null
                }
                
                <Button type="primary" onClick={nextForm}>
                    Next
                </Button>
            </div>
        </Card>
    );
}

export default SelectMealPlanForm;
