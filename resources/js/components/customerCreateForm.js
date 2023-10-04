import React, { useState, useRef } from 'react';
import {
    Row, Col, Button,
    Form,
    Input, Radio, DatePicker
} from 'antd';
import moment from "moment";

import { usePlacesWidget } from "react-google-autocomplete";
import { GOOGLE_API_KEY, orderTypeOptions } from '../config/constants';
import { phonePattern } from '../validationHelper'

const CustomerCreateForm = ({ form }) => {
    const [componentSize, setComponentSize] = useState();
    const antInputRef = useRef(null);

    const { ref: antRef } = usePlacesWidget({
        apiKey: GOOGLE_API_KEY,
        options: {
            componentRestrictions: { country: ["ca"] },
            fields: ["address_components", "geometry"],
            types: ["address"]
        },
        onPlaceSelected: (place) => {
            console.log(place)
            const address = place.address_components;
            let { street1, city, state, zip, country } = {
                street1: '',
                city: '',
                zip: '',
                state: '',
                country: ''
            };
            if (address) {
                for (const component of address) {
                    const type = component.types[0];
                    switch (type) {
                        case "street_number":
                            street1 = `${component.long_name} ${street1}`;
                            break;
                        case "route":
                            street1 += component.short_name;
                            const value = form.getFieldValue("address")
                            form.setFieldsValue({ address: street1 });
                            break;
                        case "postal_code":
                            zip = `${component.long_name}${zip}`;
                            form.setFieldsValue({ postal_code: zip });
                            break;
                        case "locality":
                            city = `${component.long_name}${city}`;
                            form.setFieldsValue({ city: city });
                            break;
                        case "administrative_area_level_1":
                            state = `${component.short_name}${state}`;
                            form.setFieldsValue({ state: state });
                            break;
                        case "country":
                            country = `${component.short_name}${country}`;
                            form.setFieldsValue({ country: country });
                            break;
                        default:
                            break;
                    }
                }

                form.setFieldsValue({ lat: place.geometry.location.lat() });
                form.setFieldsValue({ lng: place.geometry.location.lng() });
            }
        }
    });

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
        setComponentSize(first_name);
    };

    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
        setStartDate(date)
    }

    return (
        <Form
            form={form}
            labelCol={{ span: 6, }}
            wrapperCol={{ span: 16, }}
            layout="vertical"
            initialValues={{ size: componentSize, }}
            onValuesChange={onFormLayoutChange}
            style={{}}
            // onFinish={onFormSubmit}
        >

            <Form.Item label="Order Type" name="order_type" >
                    <Radio.Group size="large" optionType="button" options={orderTypeOptions}  />
            </Form.Item>

            <Form.Item label="Start Date" name="start_date" 
                rules={[{ required: true, message: 'Please select Start Date!' }]}
                >
                <DatePicker size="large" style={{width: "100%"}} format={'YYYY/MM/DD'}
                    disabledDate={current => {
                        return current && current < moment().add(1, "day");
                    }}
                />
            </Form.Item>
            
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="First Name" name="first_name"
                        rules={[{ required: true }, ]}
                        >
                            <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Last Name" name="last_name"
                        rules={[{required: true}]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item name={['email']} label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="phone" label="Phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                            { phonePattern, message: 'Phone must be in the right format' }
                        ]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item label="Search Address" name="search_address" >
                        <Input
                            ref={(c) => {
                                console.log(c)
                                antInputRef.current = c;
                                if (c)
                                    antRef.current = c.input;
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item label="Address" name="address"
                        labelCol={{span:6}} wrapperCol={{span:16}}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item label="City" name="city"
                        rules={[{ required: true },]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="State" name="state"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={12}>
                    <Form.Item name={['postal_code']} label="Postal Code" labelCol={{span:6}}
                        rules={[{ required: true, }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="country" label="Country"
                        rules={[{
                            required: true,
                            message: 'Please input your phone number!',
                        }
                        ]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item name="lat" hidden>
                <Input type="hidden" />
            </Form.Item>
            <Form.Item name="lng" hidden>
                <Input type="hidden" />
            </Form.Item>

        </Form>
    );
}

export default CustomerCreateForm;
