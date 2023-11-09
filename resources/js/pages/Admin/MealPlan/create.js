import React, { useState, useRef } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form, Input, Select,
    Switch, InputNumber, Upload
} from 'antd';

import { mapSwitchValue } from '../../../config/helpers'
import { createMealPlan } from '../../../redux/MealPlan/actions';
import TableHeaderLink from '../../../components/tableHeaderLink';

import MealPlanForm from './mealPlanForm';

const { TextArea } = Input;

const Create = ({ }) => {
    const history = useHistory()
    const [fileList, setFileList] = useState([]);

    const dispatch = useDispatch();

    const [form] = Form.useForm()

    
    const onFormChange = ({ first_name }) => {
        console.log(first_name);
    };

    const onFormSubmit = (values) => {
        // Map the "status" value before submission
        values.status = mapSwitchValue(values.status);
        dispatch(createMealPlan(values));
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
