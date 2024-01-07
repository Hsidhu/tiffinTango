import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
    Row, Col, Select, Card, Radio,
    Typography, Button, Space, Flex
} from 'antd';
import { orderTypeOptions } from '../../config/constants';
import MealPlanOptions from "../containers/cart/mealPlanOptions"


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

    const renderMealOptions = () => {
        return !isEmpty(selectedMealPlan) ? <MealPlanOptions mealPlanID={selectedMealPlan.meal_id} /> : null
    }

    return (
        <Card title="Order Mealpan"  >
            <Flex justify={'flex-start'} align={'flex-start'} vertical gap={16}>

                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <Typography.Text strong >Select Order Type:</Typography.Text>
                    <Radio.Group
                        style={{ width: '100%' }}
                        size="large" 
                        optionType="button"
                        value={orderType}
                        onChange={handleOrderTypeChange}
                        options={orderTypeOptions} 
                    />
                </Space>

                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                    <Typography.Text strong>Select your Plan:</Typography.Text>
                    <Select size="large"
                        placeholder = "Select MealPlan"
                        value={selectedMealPlan?.meal_id}
                        style={{ width: '100%' }}
                        onChange={handleChange}
                        options={optionItems ?? null}
                    />
                </Space>

                { renderMealOptions() }

                <Button block disabled={isEmpty(selectedMealPlan) ? true : false} size={'large'} type="primary" onClick={nextForm}>
                    Next
                </Button>

            </Flex>
        </Card>
    );
}

export default SelectMealPlanForm;
