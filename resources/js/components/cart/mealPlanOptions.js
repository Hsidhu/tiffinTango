import React, { useState, useEffect } from 'react';
import {
    Radio, Select
} from 'antd';

const MealPlanOptions = ({ cart, selectMealPlanOption}) => {

    if(!cart.mealPlanOptions){
        return null;
    }
    const options = cart.mealPlanOptions;

    const buildRadioOptions = (values) =>{
        const buildData = values.map((item)=>({
            value: item.id,
            label: `${item.value} - $${item.price}`
        }))

        const defaultValue = cart.options.find((selectedOption) =>
            values.some((option) => option.id === selectedOption.id)
        );

        const onChange = (e) => {
            const optionValue = _.find(values, {id: Number(e.target.value) });
            selectMealPlanOption(optionValue)
        }

        return <Radio.Group
                options={buildData}
                onChange={onChange}
                defaultValue={ defaultValue ? defaultValue.id : null }
            />;
    }

    const buildSelectOptions = (values) => {
        const buildData = values.map((item)=>({
            value: item.id,
            label: `${item.value} - $${item.price}`
        }))
        
        const defaultValue = cart.options.find((selectedOption) =>
            values.some((option) => option.id === selectedOption.id)
        );

        const onChange = (value) => {
            const optionValue = _.find(values, {id: Number(value) });
            selectMealPlanOption(optionValue)
        }

        return <Select
                options={buildData}
                defaultValue={ defaultValue ? defaultValue.id : null }
                onChange={onChange}
                placeholder = "Select Extra Options"
                style={{
                    width: 200,
                }}
        />;
    }
    
    const optionView = options.map((option, index ) => 
        
        <div key={option.meal_plan_option_id}>
            {option.name} - {option.display}: 
            {option.display == 'select' ? buildSelectOptions(option.values) : null}
            {option.display == 'radio' ? buildRadioOptions(option.values) : null}
        </div>
    )

    return (
        <>
            {optionView}
        </>
    )
}

export default MealPlanOptions;
