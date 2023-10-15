import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import moment from "moment";
import {
    Row, Col, Button, Select, Card,
    Radio, DatePicker, Form
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { axiosConfig } from '../../config/constants';
import CustomerCreateForm from '../containers/customerCreateForm';

const CustomerDetailForm = ({prevForm, cart, placeOrder }) => {

    const [orderType, setOrderType] = useState('pickup');
    const [form] = Form.useForm();

    if (isEmpty(cart)) {
        return null;
    }

    const triggerSubmit = () => {
        form.validateFields()
        .then((values) => {
            values.start_date = values.start_date.format('YYYY-MM-DD')
            console.log(values)
            placeOrder({...values,...cart })
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Card title="Details" >

            <Row>
                <Col span={24}>
                    <Button onClick={prevForm}>
                        <ArrowLeftOutlined />
                    </Button>
                    <CustomerCreateForm form={form} />
                    <Button type="primary" onClick={triggerSubmit}>Submit</Button>
                    <br/>
                </Col>
            </Row>

        </Card>
    );
}

export default CustomerDetailForm;
