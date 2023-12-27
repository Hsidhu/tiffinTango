import React from 'react';
import {
    Row, Col,
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
                        preview={false}
                        width={200}
                        src={selectedMealPlan.media_url}
                    /> 
                    : 
                    <Image
                        preview={false}
                        width={200}
                        src={imageUrl(`images/site/feature_one.jpeg`)}
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