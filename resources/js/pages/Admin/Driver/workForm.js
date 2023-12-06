import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form, Select
} from 'antd';
import {isEmpty} from 'lodash'

// get shifts and zones

const WorkForm = ({ }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const {deliveryWindows, deliveryZoneList} = useSelector(state => state)

    if(isEmpty(deliveryWindows) && isEmpty(deliveryZoneList) ){
        return null
    }
    // useEffect(() => {
    //     form.setFieldsValue({
    //         address_id:address_id,
    //         delivery_zone_id:delivery_zone_id
    //     })
    // }, [form, deliveryZoneList])

    const onFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                initialValues={{}}
                style={{}}
                onFinish={onFormSubmit}
            >
                <Form.Item label="Delivery Window" name="delivery_window_id"
                    rules={[ { required: true },
                    ]}
                >
                    <Select
                        mode="multiple"
                        showArrow
                        style={{
                            width: '100%',
                        }}
                        options={deliveryWindows}
                    />
                </Form.Item>

                <Form.Item label="Delivery Zone" name="delivery_zone_id"
                    rules={[ { required: true },
                    ]}
                >
                    <Select
                        mode="multiple"
                        showArrow
                        style={{
                            width: '100%',
                        }}
                        options={deliveryZoneList}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>

            </Form>

        </>
    )
}

export default WorkForm
