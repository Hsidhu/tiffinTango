import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
    Row, Col, Select, Card,
    Typography, Button
} from 'antd';
import MealPlanOptions from "../containers/cart/mealPlanOptions"
const { Text } = Typography;

const SelectMealPlanForm = ({ nextForm, orderData, selectedMealPlan, getMealPlanForOrder, addToCartselectMealPlan }) => {

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

    const handleChange = (value) => {
        const meal = _.find(orderData, { meal_id: value });
        addToCartselectMealPlan(meal);
    };

    return (
        <Card title="Select Mealpan"  >

            <Row>
                <Col span={24}>
                    <Text>Select your Plan:</Text>
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
                    !isEmpty(selectedMealPlan) ? <MealPlanOptions mealPlanID={selectedMealPlan.meal_id} /> : null
                }
                <br/>

                <Button block disabled={isEmpty(selectedMealPlan) ? true : false} size={'large'} type="primary" onClick={nextForm}>
                    Next
                </Button>
            </div>
        </Card>
    );
}

export default SelectMealPlanForm;
