import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Tabs, Typography, Divider, Form
} from 'antd';
import { mapSwitchValue } from '../../../config/helpers'
import { getMealPlan, updateMealPlan } from '../../../redux/MealPlan/actions';

import MealPlanAddonList from '../../../components/mealPlan/mealPlanAddonList';
import TableHeaderLink from '../../../components/tableHeaderLink';

import MealPlanForm from './mealPlanForm';

const Edit = ({ }) => {
    const history = useHistory()
    let { id } = useParams();

    const mealplan = useSelector(state => state.mealplan)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    useEffect(() => {
        dispatch(getMealPlan(id))
    }, [])

    const onFormChange = ({ first_name }) => {
        console.log(first_name);
    };

    const onFormSubmit = (values) => {
        values.status = mapSwitchValue(values.status);
        dispatch(updateMealPlan(values, history));
    }

    if(!mealplan){
        return null;
    }

    useEffect(() => {
        form.setFieldsValue({...mealplan})
    }, [form, mealplan])


    const items = [
        { 
            label: 'MealPlan', key: 'mealplan_edit',
            children: <MealPlanForm form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={true} />
        },
        { 
            label: 'Options', key: 'Options', 
            children: <MealPlanAddonList /> 
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
