import React, { useState } from 'react';
import {
    Row, Col, Button, message, Steps,
    Layout, Divider
} from 'antd';


import CustomerDetailForm from '../../components/containers/cart/customerDetailForm';
import OrderSummary from '../../components/containers/cart/orderSummary';


const Customer = ({ prevForm }) => {

    return (
        <Row gutter={16} justify={'center'} align={'center'}>
            <Col xs = {{
                    span:24,
                }}
                md = {{
                    span:16
                }}
            >
                <CustomerDetailForm  prevForm ={prevForm} />
            </Col>
            <Col xs = {{
                    span:24,
                }}
                md = {{
                    span:6
                }}
            >
                <OrderSummary />
            </Col>
        </Row>
    )
}

export default Customer