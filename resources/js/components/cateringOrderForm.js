import React, { useState } from 'react';
import { Row, Col, Form, Button, Input, DatePicker, Steps } from 'antd';

const { Step } = Steps;

const CateringOrderForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [form] = Form.useForm();

    const steps = [
        {
            title: 'Customer Information',
            content: (
                <>
                    <Form.Item label="Customer Name" name="customerName" rules={[{ required: true, message: 'Please enter customer name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Event Date" name="eventDate" rules={[{ required: true, message: 'Please select event date' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Number of Guests" name="numberOfGuests" rules={[{ required: true, message: 'Please enter number of guests' }]}>
                        <Input type="number" />
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Appetizers/Snacks',
            content: (
                <>
                    <Form.Item label="Appetizer 1" name="appetizer1" rules={[{ required: true, message: 'Please enter appetizer 1' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Appetizer 2" name="appetizer2" rules={[{ required: true, message: 'Please enter appetizer 2' }]}>
                        <Input />
                    </Form.Item>
                </>
            ),
        },
        {
            title: 'Main Course',
            content: (
                <>
                    <Form.Item label="Vegetarian Main Course" name="vegetarianMainCourse" rules={[{ required: true, message: 'Please enter vegetarian main course' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Non-Vegetarian Main Course" name="nonVegetarianMainCourse" rules={[{ required: true, message: 'Please enter non-vegetarian main course' }]}>
                        <Input />
                    </Form.Item>
                </>
            ),
        },
    ];

    const handleNext = () => {
        form.validateFields().then(() => {
            setCurrentStep(currentStep + 1);
        });
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <Form 
            form={form} 
            onFinish={handleFinish}
            layout='vertical'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
        >
            <Steps current={currentStep}>
                {steps.map((step) => (
                    <Step key={step.title} title={step.title} />
                ))}
            </Steps>

            <div style={{ marginTop: '20px' }}>{steps[currentStep].content}</div>

            <div style={{ marginTop: '20px' }}>
                {currentStep > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={handlePrev}>
                        Previous
                    </Button>
                )}
                {currentStep < steps.length - 1 && (
                    <Button type="primary" onClick={handleNext}>
                        Next
                    </Button>
                )}
                {currentStep === steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                        Submit Order
                    </Button>
                )}
            </div>
        </Form>
    );
};

export default CateringOrderForm;

