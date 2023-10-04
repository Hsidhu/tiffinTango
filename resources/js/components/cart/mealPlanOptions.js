import React, { useState, useEffect } from 'react';
import {
    Row, Col, Space,
    Radio, Select,
    Typography
} from 'antd';

const { Text, Link } = Typography;
import { isEmpty } from 'lodash';

const MealPlanOptions = ({mealPlanID, orderData, cart, selectMealPlanOption}) => {

    if(isEmpty(cart.items)){
        return null;
    }
    const mealPlan = orderData.find((mealPlan) => mealPlan.meal_id === mealPlanID )

    if(isEmpty(mealPlan.mealPlanOptions)){
        return null;
    }

    const options = mealPlan.mealPlanOptions;

    const buildRadioOptions = (values) =>{
        const buildData = values.map((item)=>({
            value: item.value_id,
            label: `${item.value} - $${item.price}`
        }))

        const defaultValue = cart.items.find((selectedOption) =>
            values.some((option) => option.value_id === selectedOption.value_id)
        );

        const onChange = (e) => {
            const optionValue = _.find(values, {value_id: Number(e.target.value) });
            selectMealPlanOption(optionValue)
        }

        return <Radio.Group size="large"
                options={buildData}
                onChange={onChange}
                defaultValue={ defaultValue ? defaultValue.value_id : null }
            />;
    }

    const buildSelectOptions = (values) => {
        const buildData = values.map((item)=>({
            value: item.value_id,
            label: `${item.value} - $${item.price}`
        }))
        
        const defaultValue = cart.items.find((cartItem) =>
            values.some((option) => option.value_id === cartItem.value_id)
        );

        const onChange = (value) => {
            const optionValue = _.find(values, {value_id: Number(value) });
            selectMealPlanOption(optionValue)
        }

        return <Select size="large"
                options={buildData}
                defaultValue={ defaultValue ? defaultValue.value_id : null }
                onChange={onChange}
                placeholder = "Select Extra Options"
                style={{
                    width: "100%"
                }}
        />;
    }
    
    const optionView = options.map((option, index ) =>
        <Space key={option.meal_plan_option_id} direction="vertical" size="middle" style={{ display: 'flex', margin: "12px 0px" }}>
            <Row>
                <Col span={3}>
                    <Text>{option.name}: </Text>
                </Col>

                <Col span={8}>
                    {option.display == 'select' ? buildSelectOptions(option.values) : null}
                    {option.display == 'radio' ? buildRadioOptions(option.values) : null}
                </Col>
            </Row>
        </Space>
    )

    return (
        <>
            {optionView}
        </>
    )
}

export default MealPlanOptions;
