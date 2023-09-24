import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Tabs
} from 'antd';
import { getMealPlan, updateMealPlan } from '../../../redux/MealPlan/actions';

import MealPlanForm from '../../../components/mealPlanForm';
import MealPlanAddonCreate from '../../../components/mealPlanAddonCreate';

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
            label: 'MealPlan', key: 'MealPlan-1', 
            children: <MealPlanForm /> 
        },
        { 
            label: 'Add Options', key: 'Options', 
            children: <MealPlanAddonCreate /> 
        }
      ];

    return (
        <Row>
            <Col span={24}>
                <Tabs items={items} />
            </Col>
        </Row>
    );
}

export default Edit;
