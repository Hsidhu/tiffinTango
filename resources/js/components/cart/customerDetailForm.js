import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import {
    Row, Col, Button, Card, Form
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CustomerCreateForm from '../containers/customerCreateForm';

const CustomerDetailForm = ({orderType, cart, placeOrder, prevStep }) => {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    if (isEmpty(cart)) {
        return null;
    }

    const triggerSubmit = () => {
        form.validateFields()
        .then((values) => {
            values.start_date = values.start_date.format('YYYY-MM-DD')
            values.order_type = orderType
            placeOrder({...values,...cart }, navigate)
        }).catch((err) => {
            console.log(err)
        });
    }

    return (
        <Card title="Customer Details" 
            extra={<Button key="go_back" onClick={prevStep}>
                    <ArrowLeftOutlined />
                </Button>
            }
        >

            <Row>
                <Col span={24}>
                    
                    <CustomerCreateForm form={form} />
                    <Button type="primary" onClick={triggerSubmit}>Submit</Button>
                    <br/>
                </Col>
            </Row>

        </Card>
    );
}

export default CustomerDetailForm;
