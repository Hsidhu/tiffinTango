import React, { useState } from 'react';
import {
    Button, message, Steps,
    Layout, Divider, Row, Col
} from 'antd';

import MealPlan from './_cart/mealPlan';
import Customer from './_cart/customer';

const contentStyle = {
    color: '#000000',
    borderRadius: '8px',
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
            content: <MealPlan nextForm={next} />,
        },
        {
            title: 'Details',
            description: "Customer Detail",
            content: <Customer prevForm={prev} />,
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
                <Col span={24}>
                    <Steps current={current} items={items} />
                    <Divider />
                    <div style={contentStyle}>

                        {steps[current].content}

                    </div>
                </Col>

            </Row>


        </>
    );
};
export default OrderMealPlan;