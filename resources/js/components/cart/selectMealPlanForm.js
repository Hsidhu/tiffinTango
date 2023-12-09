import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
    Row, Col, Select, Card, Radio,
    Typography, Button
} from 'antd';
import { orderTypeOptions } from '../../config/constants';
import MealPlanOptions from "../containers/cart/mealPlanOptions"
const { Text } = Typography;

const SelectMealPlanForm = ({ nextForm, orderType, orderData, selectedMealPlan, setOrderType, getMealPlanForOrder, addToCartselectMealPlan, clearCartselectMealPlan }) => {

    useEffect(() => {
        getMealPlanForOrder(orderType)
    }, [])

    if (isEmpty(orderData)) {
        return null;
    }

    const optionItems = orderData.map((item) => ({
        value: item.meal_id,
        label: `${item.name} - $${item.price}`
    }));

    const handleOrderTypeChange = ({ target: { value } }) => {
        clearCartselectMealPlan()
        setOrderType(value)
        getMealPlanForOrder(value)
    }
    const handleChange = (value) => {
        const meal = _.find(orderData, { meal_id: value });
        addToCartselectMealPlan(meal);
    };

    return (
        <Card title="Select Mealpan"  >

            <Row>
                <Col>
                    <Text>Select Order Type:</Text> <br/>
                    <Radio.Group 
                        size="large" 
                        optionType="button"
                        value={orderType}
                        onChange={handleOrderTypeChange}
                        options={orderTypeOptions} 
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Text>Select your Plan:</Text>
                    <Select size="large"
                        placeholder = "Select MealPlan"
                        value={selectedMealPlan?.meal_id}
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionItems ?? null}
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
