import React, {useEffect, useState} from 'react';
import { 
    Row, Col, Form, Button,
    Input, Radio, InputNumber,
    Select, Switch
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
        saveSettings(values)
    };

    const initialValues = {
        core: {},
    };

    useEffect(() => {
        if(settings){
            settings.forEach((setting, index) => {
                let item = setting;
                // switch (item.key) {
                //     case 'include_tax':
                //         item.value = (item.value != 0);
                //         break;
                //     case 'include_delivery_charge':
                //         item.value = (item.value != 0)
                //         break;
                // }
                // Map each object's properties to form fields
                initialValues.core[`${item.key}`] = item.value || '';
            });
            console.log(initialValues)
            form.setFieldsValue(initialValues);
        }
    },[settings])

    return (
        <>
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

                <Form.Item label="Tax Included" name={['core', 'include_tax']} valuePropName="checked" >
                    <Switch />
                </Form.Item>

                <Form.Item label="Delivery charge included" name={['core', 'include_delivery_charge']} valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item label="distance_unit" name={['core', 'distance_unit']} wrapperCol={{ span: 4 }} >
                    <Select
                        options={[
                            { value:"km",  label:"KM" },
                            { value:"m",  label:"Miles" }
                        ]}
                        placeholder = "Select Extra Options"
                    />
                </Form.Item>
                
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


                <Form.Item label="maps_api_key" name={['core', 'maps_api_key']} wrapperCol={{ span: 8 }}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
        </Form>
        </>
        
    )
};

export default CoreSettings;