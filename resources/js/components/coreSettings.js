import React, {useEffect, useState} from 'react';
import { 
    Row, Col, Form, Button,
    Input, Radio, InputNumber
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const CoreSettings = ({settings, getSettings, saveSettings}) => {
    const [orderType, setOrderType] = useState('pickup');
    const [form] = Form.useForm();

    useEffect(() => {
        getSettings('core');
    },[])

    const onFormLayoutChange = ({ order_type }) => {
        console.log(order_type);
    };

    const onFormSubmit = (values) => {
        console.log(values);
        saveSettings(values)
    };

    const initialValues = {
        core: {},
    };

    useEffect(() => {
        if(settings.data){
            settings.data.forEach((item, index) => {
                // Map each object's properties to form fields
                initialValues.core[`${item.key}`] = item.value || '';
            });
            form.setFieldsValue(initialValues);
        }
    },[settings])

    return (
        <Form
                form={form}
                labelCol={{ span: 6, }}
                wrapperCol={{ span: 16, }}
                layout="vertical"
                initialValues={initialValues}
                onValuesChange={onFormLayoutChange}
                style={{}}
                onFinish={onFormSubmit}
            >
                // enable or disable tax
                // enable or disable Delivery charge

                <Form.Item label="Delivery Charge per KM" name={['core', 'deliveryCharge']} >
                    <InputNumber
                        min={0}
                    />
                </Form.Item>

                <Form.Item label="Tax in percentage" name={['core', 'tax']} >
                    <InputNumber
                        min={0}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
        </Form>
    )
};

export default CoreSettings;