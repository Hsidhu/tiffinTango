import React, { useState, useEffect } from 'react';
import {
    Space, Radio, Select, Flex, Typography
} from 'antd';

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

        const defaultValue = cart.items[0].selectedOptions.find((selectedOption) =>
            values.some((option) => option.value_id === selectedOption.value_id)
        );

        const onChange = (e) => {
            const optionValue = _.find(values, {value_id: Number(e.target.value) });
            selectMealPlanOption(optionValue)
        }

        return <Radio.Group size="large"
                options={buildData}
                onChange={onChange}
                value={ defaultValue ? defaultValue.value_id : null }
            />;
    }

    const buildSelectOptions = (values) => {
        const buildData = values.map((item) => ({
            value: item.value_id,
            label: `${item.value} - $${item.price}`
        }))
        
        const defaultValue = cart.items[0].selectedOptions.find((cartItem) =>
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
        <Space key={option.meal_plan_option_id} direction="vertical" size="middle" style={{ width: '100%' }}>
            
                <Typography.Text strong>{option.name}: </Typography.Text>

                {option.display == 'select' ? buildSelectOptions(option.values) : null}
                {option.display == 'radio' ? buildRadioOptions(option.values) : null}
                    
        </Space>
    )

    return (
        <>
            <Flex justify={'flex-start'} align={'flex-start'} vertical gap={16} style={{ width: '100%' }}>
                {optionView}
            </Flex>
        </>
    )
}

export default MealPlanOptions;
