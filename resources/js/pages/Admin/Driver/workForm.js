import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Input, Divider, Form, Select
} from 'antd';
import {isEmpty} from 'lodash'
import {getDriver, updateWorkForm } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';
import { getDeliveryWindowsList } from '../../../redux/Common/actions';
import { getDeliveryZoneList } from '../../../redux/DeliveryZone/actions';

// get shifts and zones
const WorkForm = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const {driver, deliveryWindows, deliveryZoneList} = useSelector(state => state)

    useEffect(() => {
        dispatch(getDriver(id))
        dispatch(getDeliveryWindowsList());
        dispatch(getDeliveryZoneList());
    }, [])

    useEffect(() => {
        form.setFieldsValue({
            driver_id:id,
        })
    }, [id])

    if(isEmpty(deliveryWindows) || isEmpty(deliveryZoneList) ){
        return null
    }

    const onFormSubmit = (values) => {
        dispatch(updateWorkForm(values, history))
    }

    return (
        <>
            <TableHeaderLink
                name="Assign Shift and Zone"
                backUri="/admin/drivers"
            />
            
            <Divider />

            <Form
                form={form}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                initialValues={{}}
                style={{}}
                onFinish={onFormSubmit}
            >
                <Form.Item name="driver_id" hidden>
                    <Input type="hidden" />
                </Form.Item>

                <Form.Item label="Delivery Window" name="delivery_window_id"
                    rules={[ { required: true },
                    ]}
                >
                    <Select
                        showArrow
                        style={{
                            width: '100%',
                        }}
                        options={deliveryWindows ?? []}
                    />
                </Form.Item>

                <Form.Item label="Delivery Zone" name="delivery_zone_id"
                    rules={[ { required: true },
                    ]}
                >
                    <Select
                        showArrow
                        style={{
                            width: '100%',
                        }}
                        options={deliveryZoneList ?? []}
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
