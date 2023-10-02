import React, { useState } from 'react';
import {
    Button, message, Steps,
    Layout, Divider, Row, Col
} from 'antd';

import SelectMealPlanForm from '../components/containers/cart/selectMealPlanForm';
import CustomerDetailForm from '../components/containers/cart/customerDetailForm';
import OrderSummary from '../components/containers/cart/orderSummary';
const { Content } = Layout;

const steps = [
    {
        title: 'MealPlans',
        description: "Select your mealplan",
        content: <SelectMealPlanForm />,
    },
    {
        title: 'Details',
        description: "Customer Detail",
        content: <CustomerDetailForm />,
    }
];

const OrderMealPlan = () => {

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        description: item.description
    }));

    const contentStyle = {
        color: '#000000',
        borderRadius: '8px',
        border: `1px dashed #494848`,
        marginTop: 16,
    };

    return (
        <>
            <Steps current={current} items={items} />

            <Divider />
            <Row gutter={16}>
                <Col span={16}>

                    <div style={contentStyle}>

                        {steps[current].content}

                        <div>
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    style={{
                                        margin: '0 8px',
                                    }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                        </div>

                    </div>
                </Col>

                <Col span={8} >
                    <OrderSummary />
                </Col>

            </Row>


        </>
    );
};
export default OrderMealPlan;