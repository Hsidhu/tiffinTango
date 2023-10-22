import React from 'react';
import {
    Image, Descriptions
} from 'antd';
import {imageUrl} from '../../config/helpers'
import { isEmpty } from 'lodash';

const SelectedMealPlanView = ({selectedMealPlan}) => {
    
    return (
        <>
            {
                !isEmpty(selectedMealPlan) ? 
                    <Image
                            width={200}
                            src={imageUrl(`/images/${selectedMealPlan.image}`)}
                    /> 
                    : 
                    <Image
                        width={200}
                        src={imageUrl(`/images/site/tiffin_shape.jpeg`)}
                    /> 
            }
            {
                    !isEmpty(selectedMealPlan) ? 
                        <Descriptions title="Selected Meal Plan Description" bordered layout="vertical">
                            <Descriptions.Item label="Name">{selectedMealPlan.name}</Descriptions.Item>
                            <Descriptions.Item label="Description">{selectedMealPlan.description}</Descriptions.Item>
                            <Descriptions.Item label="Billing">Monthly</Descriptions.Item>
                        </Descriptions>
                        : 
                        <Descriptions title="Selected Meal Plan Description" bordered layout="vertical">
                            <Descriptions.Item label="Name">Select your mealPlan</Descriptions.Item>
                            <Descriptions.Item label="Description">Select your mealPlan</Descriptions.Item>
                            <Descriptions.Item label="Billing">Monthly</Descriptions.Item>
                        </Descriptions>
                }
                <br/>
        </>
    )
};

export default SelectedMealPlanView;