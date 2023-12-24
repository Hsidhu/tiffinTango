import React, { useState } from 'react';
import {
    Row, Col, Button,
    Form, Input, Select,
    Switch, InputNumber
} from 'antd';
import FileUploadListView from '../../../components/fileUploadListView';
import FileUpload from '../../../components/fileUpload';
import { addMedia, removeMedia } from '../../../redux/MealPlan/actions';

const { TextArea } = Input;

const MealPlanForm = ({form, onFormChange, mealplan, onFormSubmit }) => {

    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                initialValues={{ price: 1.00, discount: 0.00 }}
                onValuesChange={onFormChange}
                style={{}}
                onFinish={onFormSubmit}
            >
                {
                    mealplan &&
                    <Form.Item name="id" hidden>
                        <Input type="hidden" />
                    </Form.Item>
                }
                <Form.Item name="mediaFileId" hidden>
                    <Input type="hidden" />
                </Form.Item>
                <Row>
                    <Col span={12}>
                        <Form.Item label="Name" name="name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Description" name="description"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <TextArea rows={2} />
                        </Form.Item>
                        <Form.Item label="Short Description" name="short_description"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <TextArea rows={2} />
                        </Form.Item>
                        <Form.Item
                            name={['price']}
                            label="Price"
                            rules={[
                                { required: true },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                precision={2}
                                step={1.00}
                                stringMode
                            />
                        </Form.Item>
                        <Form.Item
                            name={['discount']}
                            label="Discount"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                precision={2}
                                step={1.00}
                                stringMode
                            />
                        </Form.Item>

                    </Col>
                    <Col span={12}>

                        <Form.Item label="Delivery Plan" name="delivery_days"
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select
                                placeholder={'Select Plan delivery'}
                                style={{
                                    width: 400,
                                }}
                                options={[
                                    {value: 'mon_to_friday', label: 'Monday to Friday'},
                                    {value: 'mon_to_saturday', label: 'Monday to Saturday'}
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Delivery Type" name="delivery_type"
                            rules={[{
                                required: true
                            }]}
                        >
                            <Select
                                placeholder={'Select Plan delivery'}
                                style={{
                                    width: 400,
                                }}
                                options={[
                                    {value: 'pickup', label: 'Pickup'},
                                    {value: 'delivery', label: 'Delivery'}
                                ]}
                            />
                        </Form.Item>

                        <Form.Item
                            name={['quota']}
                            label="Quota"
                            rules={[
                                {
                                    required: false
                                },
                            ]}
                        >
                            <InputNumber
                                min={1}
                                step={1}
                                stringMode
                            />
                        </Form.Item>

                        {mealplan && 
                            <Form.Item label="Upload image" name='image'>
                                {
                                    <FileUpload objectID={mealplan.id} type={'image'} buttonText={'Upload Image'} limiter={1} onAdd={addMedia} />
                                }
                                
                                {mealplan?.media_info && (
                                    <FileUploadListView fileListArray={[mealplan.media_info]} type="images" onRemove={removeMedia} objectID={mealplan.id} />
                                )}
                            </Form.Item>
                        }

                        <Form.Item label="Status" name="status" valuePropName="checked">
                            <Switch />
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>

        </>

    );
}

export default MealPlanForm;
