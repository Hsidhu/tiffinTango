import React, { useState, useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Select,
    Input
} from 'antd';
import { getMealPlanOptions } from '../redux/MealPlan/actions';

const MealPlanAddonCreate = ({ }) => {
    const history = useHistory()

    const { mealplan, mealplanOptions } = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
    };

    const onFormSubmit = (values) => {
        console.log(values);
        // dispatch(createMealPlanOption(values));
    }

    useEffect(() => {
        dispatch(getMealPlanOptions());
    }, [mealplan])

    if (!mealplanOptions) {
        return null;
    }

    useEffect(() => {
        form.setFieldsValue({id:mealplan.id, mealplan_option_id:1})
    }, [form, mealplan])

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
            onFinish={onFormSubmit}
        >

            <Form.Item name="id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item label="options" name="mealplan_option_id">
                        <Select
                            style={{
                                width: 120,
                            }}
                            options={mealplanOptions}
                        />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>

                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    {
                        mealplan.add_ons.map((value, index)=>{
                            <span key={index}>
                                {value.meal_plan_id}
                            </span>
                        })
                    }
                </Col>
            </Row>

        </Form>
    );
}

export default MealPlanAddonCreate;
