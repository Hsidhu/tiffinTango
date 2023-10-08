import React, { useState, useRef } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Input,
    Switch,
    InputNumber,
    Space,
    Radio
} from 'antd';
import { createMealPlanOption } from '../../redux/MealPlan/actions';

const CreateMealPlanOptions = ({ }) => {
    const history = useHistory()
    const [componentSize, setComponentSize] = useState();

    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    const onFormSubmit = (values) => {
        dispatch(createMealPlanOption(values));
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            initialValues={{ display_type: 'radio', optionValues:[{value : " ", price:1.00}] }}
            style={{}}
            onFinish={onFormSubmit}
        >
            <Row>
                <Col span={24}>
                    <Form.Item label="Name" name="name"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Display Type" name="display_type"
                        rules={[
                            {
                                required: true
                            },
                        ]}
                    > 
                        <Radio.Group buttonStyle="solid" >
                            <Radio.Button value="radio">radio</Radio.Button>
                            <Radio.Button value="select">select</Radio.Button>
                            <Radio.Button value="input">input</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Option Values" >
                        <Form.List name="optionValues" >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'value']}
                                                rules={[{ required: true, message: 'Missing Value Name' }]}
                                            >
                                                <Input placeholder="Value Name e.g 10 oz" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'price']}
                                                rules={[{ required: true, message: 'Missing price' }]}
                                            >
                                                <InputNumber
                                                    min={1}
                                                    precision={2}
                                                    step={1.00}
                                                    stringMode
                                                />
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add('asdf', 1.00)} block icon={<PlusOutlined />}>
                                            Add field
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>
                    


                    <Form.Item label="Status" name="status" valuePropName="checked">
                        <Switch />
                    </Form.Item>

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

export default CreateMealPlanOptions;
