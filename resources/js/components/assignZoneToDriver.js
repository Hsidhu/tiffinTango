import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Row, Col,
    Button, Form,
    Select, Input
} from 'antd';

const AssignZoneToDriver = ({ zone_id, driverSelect, getDriverSelect, assignDriverToZone }) => {
    const navigate = useNavigate()

    const [form] = Form.useForm()

    useEffect(() => {
        getDriverSelect();
    }, [])

    if (!driverSelect) {
        return null;
    }

    useEffect(() => {
        form.setFieldsValue({zone_id:zone_id})
    }, [form, driverSelect])

    const onFormSubmit = (values) => {
        assignDriverToZone(values);
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            onFinish={onFormSubmit}
        >

            <Form.Item name="zone_id" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Row>
                <Col span={24}>
                    <Form.Item size={'large'} label="Drivers" name="driver_id">
                        <Select
                            placeholder={'Select Driver'}
                            style={{
                                width: 400,
                            }}
                            options={driverSelect}
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

export default AssignZoneToDriver;
