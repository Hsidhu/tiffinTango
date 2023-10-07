import React, { useState } from 'react';
import {
    Button, message, Steps,
    Layout, Divider, Row, Col
} from 'antd';

import SelectMealPlanForm from '../components/containers/cart/selectMealPlanForm';
import CustomerDetailForm from '../components/containers/cart/customerDetailForm';
import OrderSummary from '../components/containers/cart/orderSummary';

const contentStyle = {
    color: '#000000',
    borderRadius: '8px',
    border: `1px dashed #494848`,
    marginTop: 16
};

const OrderMealPlan = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'MealPlans',
            description: "Select your mealplan",
            content: <SelectMealPlanForm nextForm={next} />,
        },
        {
            title: 'Details',
            description: "Customer Detail",
            content: <CustomerDetailForm prevForm={prev} />,
        }
    ];
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        description: item.description
    }));

    return (
        <>
        
            <Row gutter={16}>

                <Col span={16}>
                    <Steps current={current} items={items} />
                    <Divider />
                    <div style={contentStyle}>

                        {steps[current].content}

                        <div>
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