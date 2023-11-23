import React, {useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button, Form,
    Select, Input
} from 'antd';
import { isEmpty } from 'lodash';

const AssignZoneToAddress = ({ address_id, delivery_zone_id, deliveryZoneList, getDeliveryZoneList, assignAddressToZone }) => {
    const history = useHistory()

    const [form] = Form.useForm()

    useEffect(() => {
        getDeliveryZoneList();
    }, [])

    useEffect(() => {
        form.setFieldsValue({
            address_id:address_id,
            delivery_zone_id:delivery_zone_id
        })
    }, [form, deliveryZoneList])

    if (isEmpty(deliveryZoneList)) {
        return null;
    }

    const onFormSubmit = (values) => {
        assignAddressToZone(values);
        //window.location.reload();
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onFinish={onFormSubmit}
        >

            <Form.Item name="address_id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item size={'large'} label="Delivery Zones" name="delivery_zone_id">
                        <Select
                            placeholder={'Select Driver'}
                            style={{
                                width: 400,
                            }}
                            options={deliveryZoneList}
                        />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>

                </Col>
            </Row>

        </Form>
    );
}

export default AssignZoneToAddress;