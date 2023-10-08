import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Tabs, Typography,
    Space, Button
} from 'antd';
import { getMealPlan } from '../../../redux/MealPlan/actions';

const { Title } = Typography;

import MealPlanForm from '../../../components/mealPlan/mealPlanForm';
import MealPlanAddonCreate from '../../../components/mealPlan/mealPlanAddonCreate';
import CreateMealPlanOptions from '../../../components/mealPlan/createMealPlanOptions';

const Edit = ({ }) => {
    const history = useHistory()
    let { id } = useParams();

    const mealplan = useSelector(state => state.mealplan)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMealPlan(id))
    }, [])

    if(!mealplan){
        return null;
    }

    const items = [
        { 
            label: 'MealPlan', key: 'mealplan_edit', 
            children: <MealPlanForm /> 
        },
        { 
            label: 'Add Options', key: 'Options', 
            children: <MealPlanAddonCreate /> 
        },
        { 
            label: 'Create Options', key: 'create_option', 
            children: <CreateMealPlanOptions /> 
        }
    ];

    return (
        <>
            <Row>
                <Col flex={2}>
                    <Title level={3}>
                        MealPans Edit
                    </Title>
                </Col>
                <Col flex={3}>
                    <Space align='center' style={{
                            display: "flex",
                            justifyContent: 'end',
                        }}>
                        <Button type="link" onClick={() => history.push('/admin/mealplan')} >
                            Back
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Tabs items={items} />
                </Col>
            </Row>
        </>
        
    );
}

export default Edit;
