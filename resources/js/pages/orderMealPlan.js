import React from 'react';
import {
    Steps,
    Space, Divider, Row, Col
} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import SitePageHeader from '../components/sitePageHeader';
import MealPlan from './_cart/mealPlan';
import Customer from './_cart/customer';
import OrderPlaced from './_cart/orderPlaced';
import { nextStep } from '../redux/Cart/actions';

const contentStyle = {
    color: '#000000',
    borderRadius: '8px',
    marginTop: 16
};

// move to order sucess page
const OrderMealPlan = () => {

    const dispatch = useDispatch();
    const stepReducer = useSelector(state => state.stepReducer)

    const next = () => {
        dispatch(nextStep());
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
            content: <Customer />,
        },
        {
            title: 'Order Placed',
            description: "Order state",
            content: <OrderPlaced />,
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
                        <Steps current={stepReducer.currentStep} items={items} />
                        <Divider />
                        <div style={contentStyle}>

                            {steps[stepReducer.currentStep].content}

                        </div>
                    </Col>

                </Row>

            </Space>
        </>
    );
};
export default OrderMealPlan;