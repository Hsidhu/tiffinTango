import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

const OrderPlaced = () => (
    <Result
        status="success"
        title="Order Placed successFully"
        subTitle="Thanks for placing your order with AB Catering. Your default password will be sent in your Email!"
        extra={[
            <Link to="/">
                <Button type="primary" key="home">Home</Button>
            </Link>,
            <Link to="/customer/login">
                <Button key="buy">Login</Button>
            </Link>
            
        ]}
    />
);
export default OrderPlaced;
