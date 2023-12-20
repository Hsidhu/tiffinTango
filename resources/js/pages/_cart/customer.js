import React from 'react';
import {
    Row, Col
} from 'antd';

import CustomerDetailForm from '../../components/containers/cart/customerDetailForm';
import OrderSummary from '../../components/containers/cart/orderSummary';


const Customer = ({ }) => {

    return (
        <Row gutter={16} justify={'center'} align={'center'}>
            <Col xs = {{
                    span:24,
                }}
                md = {{
                    span:16
                }}
            >
                <CustomerDetailForm />
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