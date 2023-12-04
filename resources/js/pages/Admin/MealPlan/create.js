import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider, Form
} from 'antd';

import { mapSwitchValue } from '../../../config/helpers'
import { createMealPlan } from '../../../redux/MealPlan/actions';
import TableHeaderLink from '../../../components/tableHeaderLink';

import MealPlanForm from './mealPlanForm';

const Create = ({ }) => {
    const history = useHistory()

    const dispatch = useDispatch();
    const [form] = Form.useForm()

    
    const onFormChange = ({ first_name }) => {
        console.log(first_name);
    };

    const onFormSubmit = (values) => {
        // Map the "status" value before submission
        values.status = mapSwitchValue(values.status);
        dispatch(createMealPlan(values, history));
    }

    return (
        <>
            <TableHeaderLink
                name="Create MealPlan"
                backUri="/admin/mealplans"
            />
            <Divider/>

            <MealPlanForm
                form={form} onFormChange={onFormChange}  onFormSubmit={onFormSubmit} hasId={false}
            />
        </>

    );
}

export default Create;
