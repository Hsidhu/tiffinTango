import React from 'react';
import {
    Flex, List, Typography, Image, Row, Col
} from 'antd';
import {imageUrl} from '../../config/helpers'
import { isEmpty } from 'lodash';

const SelectedMealPlanView = ({selectedMealPlan}) => {
    
    const mealImage = () => {
        return !isEmpty(selectedMealPlan) ? selectedMealPlan.media_url : imageUrl(`images/site/feature_one.jpeg`)
    }

    const mealDescription = () => {
        return <>
            <List
                style={{ width:'80%' }}
                header={<Typography.Text strong>Description</Typography.Text>}
                >
                <List.Item>
                    <Typography.Text strong>Name:</Typography.Text> <Typography.Text>
                        { !isEmpty(selectedMealPlan) && selectedMealPlan.name }
                    </Typography.Text>
                </List.Item>
                <List.Item>
                    <Typography.Text strong>Plan Type:</Typography.Text> <Typography.Text>
                        Monthly
                    </Typography.Text>
                </List.Item>
                <List.Item>
                    <Typography.Text strong>Order Type:</Typography.Text> <Typography.Text>
                        Monthly
                    </Typography.Text>
                </List.Item>
                <List.Item>
                    <Typography.Text strong>Detail:</Typography.Text> <Typography.Text>
                    { !isEmpty(selectedMealPlan) && selectedMealPlan.description }
                    </Typography.Text>
                </List.Item>
            </List>
        </>
    }

    return (
        <>
            <Flex justify={'center'} align={'center'} vertical gap={16}>
                <Image
                    preview={false}
                    width={400}
                    src={mealImage()}
                />
            </Flex>

            <Flex justify={'center'} align={'center'}>
                { mealDescription() }
            </Flex>
            
        </>
    )
};

export default SelectedMealPlanView;