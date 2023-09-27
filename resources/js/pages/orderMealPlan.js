import React, { useState } from 'react';
import { Button, message, Steps, Space, Divider } from 'antd';

import SelectMealPlanForm from '../components/containers/cart/selectMealPlanForm';

const steps = [
    {
        title: 'Select MealPlan',
        description:"subtitle",
        content: <SelectMealPlanForm />,
    },
    {
        title: 'Add Ons',
        description:"subtitle",
        content: 'Second-content',
    },
    {
        title: 'Details',
        description:"subtitle",
        content: 'Last-content',
    },
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
        lineHeight: '260px',
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '#d9d9d9',
        borderRadius: '8px',
        border: `1px dashed #494848`,
        marginTop: 16,
    };

    console.log(process.env.APP_NAME, 'test', process)
    return (
        <>
            <Steps current={current} items={items} />
            
                <Divider />
                <div style={contentStyle}>{steps[current].content}</div>

            <div
                style={{
                    marginTop: 24,
                }}
            >
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
        </>
    );
};
export default OrderMealPlan;