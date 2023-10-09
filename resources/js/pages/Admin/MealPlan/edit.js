import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Tabs, Typography, Divider
} from 'antd';
import { getMealPlan } from '../../../redux/MealPlan/actions';

import MealPlanForm from '../../../components/mealPlan/mealPlanForm';
import MealPlanAddonCreate from '../../../components/mealPlan/mealPlanAddonCreate';
import CreateMealPlanOptions from '../../../components/mealPlan/createMealPlanOptions';
import TableHeaderLink from '../../../components/tableHeaderLink';

const Edit = ({ }) => {
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
            <TableHeaderLink
                name="Edit MealPlan"
                backUri="/admin/mealplans"
            />
            <Divider />
            <Row>
                <Col span={24}>
                    <Tabs items={items} />
                </Col>
            </Row>
        </>
        
    );
}

export default Edit;
