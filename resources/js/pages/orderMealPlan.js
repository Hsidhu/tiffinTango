import React, { useState } from 'react';
import {
    Button, message, Steps,
    Space, Divider, Row, Col
} from 'antd';
import SitePageHeader from '../components/sitePageHeader';
import MealPlan from './_cart/mealPlan';
import Customer from './_cart/customer';

const contentStyle = {
    color: '#000000',
    borderRadius: '8px',
    marginTop: 16
};

// move to order sucess page
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
            <SitePageHeader pageTitle={'Order Tiffin'}/>
            <Space
                direction="vertical"
                size="large"
                style={{
                    display: 'flex',
                    margin: '18px 14px',
                    padding: '0 50px'
                }}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Steps current={current} items={items} />
                        <Divider />
                        <div style={contentStyle}>

                            {steps[current].content}

                        </div>
                    </Col>

                </Row>

            </Space>
        </>
    );
};
export default OrderMealPlan;