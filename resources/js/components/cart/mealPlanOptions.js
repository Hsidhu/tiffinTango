import React, { useState, useEffect } from 'react';
import {
    Radio, Select
} from 'antd';

const MealPlanOptions = ({options})=>{

    // const optionItems = mealplans.map((item) => ({
    //     value: item.id,
    //     label: `${item.name} - $${item.price}`
    // }));

    const buildRadioOptions = (values) =>{
        const buildData = values.map((item)=>({
            value: item.id,
            label: `${item.value} - $${item.price}`
        }))
        return<Radio.Group options={buildData} />;
    }

    const buildSelectOptions = (values) => {
        const buildData = values.map((item)=>({
            value: item.id,
            label: `${item.value} - $${item.price}`
        }))
        return <Select 
        placeholder = "Select Extra Options"
            style={{
                width: 160,
            }}
            options={buildData} 
        />;
    }
    
    const optionView = options.map((option, index ) => 
        
        <div key={option.meal_plan_option_id}>
            {option.name} - {option.display}

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
