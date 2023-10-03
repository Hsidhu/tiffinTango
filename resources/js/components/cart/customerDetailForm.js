import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import moment from "moment";
import {
    Row, Col, Button, Select, Card,
    Radio, DatePicker, Form
} from 'antd';
import { axiosConfig } from '../../config/constants';
import CustomerCreateForm from '../customerCreateForm';

const CustomerDetailForm = ({ cart }) => {

    const [orderType, setOrderType] = useState('pickup');
    const [form] = Form.useForm();

    if (isEmpty(cart)) {
        return null;
    }

    const onOrderTypeChange = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setOrderType(value)
    };

    const orderTypeOptions = [
        { label: 'Delivery', value: 'delivery' },
        { label: 'Pickup', value: 'pickup' }
    ];

    const triggerSubmit = () => {
        form
        .validateFields()
        .then((values) => {

            console.log(values)
        })
        .catch((err) => {
            err.values.start_date = err.values.start_date.format('YYYY-MM-DD')
            console.log(err)
        });
    }
    const onSubmitCustomerForm = (values) => {
        console.log(values)
    }

    return (
        <Card title="Details" >
            <Row>
                <Col span={3}>
                    Type:
                </Col>
                <Col span={8}>
                    <Radio.Group size="large" optionType="button" options={orderTypeOptions} 
                        onChange={onOrderTypeChange} value={orderType} />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <CustomerCreateForm form={form} onFormSubmit={onSubmitCustomerForm} />
                    <Button type="primary" onClick={triggerSubmit}>Submit</Button>
                </Col>
            </Row>

        </Card>
    );
}

export default CustomerDetailForm;
