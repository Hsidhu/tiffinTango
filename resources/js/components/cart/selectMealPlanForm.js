import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash';
import {
    Row, Col, Button,
    Form, Input,
    Radio, Space
} from 'antd';
import { getMealPlan, updateMealPlan } from '../../redux/MealPlan/actions';


const SelectMealPlanForm = ({ mealplans }) => {
    const history = useHistory()
    let { id } = useParams();
    const [componentSize, setComponentSize] = useState();

    const dispatch = useDispatch();

    if (!mealplans) {
        return null;
    }

    const [form] = Form.useForm()

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
        setComponentSize(first_name);
    };

    const onFormSubmit = (values) => {
        // formData.append("file", this.state.fileList[0].originFileObj);
    }

    useEffect(() => {
        form.setFieldsValue({ ...mealplans })
    }, [form, mealplans])

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
                <Col span={14}>
                    <Form.Item label="Name" name="name"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Radio.Group name={'mealplan'}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                        </Space>
                    </Radio.Group>

                </Col>
                <Col span={10}>

                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default SelectMealPlanForm;
