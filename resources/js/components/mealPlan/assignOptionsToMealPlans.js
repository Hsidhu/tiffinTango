
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Row, Col, Button,
    Form, Select, Input,
    List, Typography
} from 'antd';
import { isEmpty } from 'lodash';

import { getMealPlanSelectData, getMealPlanOptions, createMealPlanAddon} from '../../redux/MealPlan/actions'

const AssignOptionsToMealPlans = ({}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [form] = Form.useForm()

    const mealplanSelectList  = useSelector(state => state.mealplanSelectList)
    const mealplanOptions  = useSelector(state => state.mealplanOptions)

    useEffect(() => {
        dispatch(getMealPlanSelectData());
        dispatch(getMealPlanOptions());
    }, [])

    if (isEmpty(mealplanSelectList) || isEmpty(mealplanOptions) ) {
        return null;
    }

    const onFormSubmit = (values) => {
        dispatch(createMealPlanAddon(values, navigate));
    }

    return (
        <>
            <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onFinish={onFormSubmit}
        >
            <Row>
                <Col span={24}>
                    <Form.Item size={'large'} label="Option" name="meal_plan_option_id">
                        <Select
                            placeholder={'Select Option'}
                            style={{
                                width: 400,
                            }}
                            options={mealplanOptions}
                        />
                    </Form.Item>

                    <Form.Item size={'large'} label="MealPlan IDs" name="meal_plan_ids">
                        <Select
                            mode="multiple"
                            showArrow
                            placeholder={'Select Mealplans'}
                            style={{
                                width: 400,
                            }}
                            options={mealplanSelectList}
                        />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>

                </Col>
            </Row>

        </Form>
        </>
    )

}

export default AssignOptionsToMealPlans
