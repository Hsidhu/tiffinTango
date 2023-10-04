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

    const triggerSubmit = () => {
        form
        .validateFields()
        .then((values) => {
            values.start_date = err.values.start_date.format('YYYY-MM-DD')
            console.log(values)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    return (
        <Card title="Details" >

            <Row>
                <Col span={24}>
                    <CustomerCreateForm form={form} />
                    <Button type="primary" onClick={triggerSubmit}>Submit</Button>
                </Col>
            </Row>

        </Card>
    );
}

export default CustomerDetailForm;
