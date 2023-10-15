import React, { useState, useEffect } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Select,
    Input,
    List, Typography
} from 'antd';
import { getMealPlanOptions, createMealPlanAddon } from '../../redux/MealPlan/actions';
import { isEmpty } from 'lodash';

const MealPlanAddonCreate = ({ }) => {
    const history = useHistory()

    const { mealplan, mealplanOptions } = useSelector(state => state)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormSubmit = (values) => {
        dispatch(createMealPlanAddon(values));
        dispatch(getMealPlanOptions(mealplan.id));
    }

    useEffect(() => {
        dispatch(getMealPlanOptions(mealplan.id));
    }, [mealplan])

    if (!mealplanOptions) {
        return null;
    }

    useEffect(() => {
        form.setFieldsValue({meal_plan_id:mealplan.id})
    }, [form, mealplan])

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onFinish={onFormSubmit}
        >

            <Form.Item name="meal_plan_id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item size={'large'} label="Options" name="meal_plan_option_id">
                        <Select
                            placeholder={'Select options'}
                            style={{
                                width: 400,
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
                    {mealplan.name} - Options:
                    <br/>
                    <List
                        bordered
                        dataSource={mealplan.options}
                        renderItem={item => (
                            <List.Item>
                              <Typography.Text mark>{item.name} - {item.display_type}</Typography.Text>
                              <List
                                dataSource={item.values}
                                renderItem={value => (
                                    <List.Item>
                                        <Typography.Text mark>{value.value} - ${value.price.toFixed(2)}</Typography.Text>
                                    </List.Item>
                                )}
                              />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>

        </Form>
    );
}

export default MealPlanAddonCreate;
