import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button, Form,
    Radio, Input, Popconfirm
} from 'antd';


const BulkEmailNotification = ({bulkEmail}) => {

    const [userType, setUserType] = useState('customers');
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log(values)
        bulkEmail(values);
    }

    return (
        <>
            <Form
                form={form}
                layout='vertical'
                onFinish={handleSubmit}
            >

                <Form.Item label="Sent Email To All:" name="user_type">
                    <Radio.Group value={userType}>
                    <Radio.Button value="customers">Customers</Radio.Button>
                    <Radio.Button value="drivers">Drivers</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[
                        { required: true, },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Body"
                    name="body"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                    <Input.TextArea
                        rows={6}
                    />
                </Form.Item>
                
                <Form.Item label=" ">
                    <Popconfirm
                        title="Are you sure you want to submit the Sent Emails?"
                        onConfirm={() => form.submit()}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Popconfirm>
                </Form.Item>

            </Form>
        </>
    )

}

export default BulkEmailNotification
