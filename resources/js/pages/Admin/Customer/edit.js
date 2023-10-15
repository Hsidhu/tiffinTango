import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button, Divider,
    Form, Input, Switch
} from 'antd';

import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";
import { GOOGLE_API_KEY } from '../../../config/constants';
import { updateCustomer, getCustomer } from '../../../redux/Customer/actions'
import { phonePattern } from '../../../validationHelper'
import TableHeaderLink from '../../../components/tableHeaderLink';

const Edit = ({ }) => {
    const history = useHistory()
    let { id } = useParams();
    const [componentSize, setComponentSize] = useState();
    const customer = useSelector(state => state.customer)
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const antInputRef = useRef(null);

    useEffect(() => {
        dispatch(getCustomer(id))
    }, [])

    if (!customer) {
        return null;
    }
    

    
    const { ref: antRef } = usePlacesWidget({
        apiKey: GOOGLE_API_KEY,
        options: {
            componentRestrictions: { country: ["us", "ca"] },
            fields: ["address_components", "geometry"],
            types: ["address"]
        },
        onPlaceSelected: (place) => {
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
                //antInputRef.current.setValue(place?.formatted_address);
            }
        }
    });

    const onFormLayoutChange = ({ first_name }) => {
        console.log(first_name);
        setComponentSize(first_name);
    };

    const onFormSubmit = (values) => {
        dispatch(updateCustomer(values));
        history.push('/admin/customers')
    }

    useEffect(() => {
        form.setFieldsValue({ ...customer, ...customer.address })
    }, [form, customer])

    return (
        <>
            <TableHeaderLink
                name="Edit Customer"
                backUri="/admin/customers"
            />
            <Divider />
            <Form
                form={form}
                onFinish={onFormSubmit}
                onValuesChange={onFormLayoutChange}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                style={{}}
            >
                <Row>
                    <Col span={12}>
                        <Form.Item label="First Name" name="first_name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Last Name" name="last_name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['email']}
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
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
                        <Form.Item label="Status" name="status" valuePropName="checked">
                            <Switch />
                        </Form.Item>

                    </Col>
                    <Col span={12}>

                        <Form.Item label="Search Address" name="search_address" labelWrap>
                            <Input
                                ref={(c) => {
                                    antInputRef.current = c;
                                    if (c)
                                        antRef.current = c.input;
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Address" name="address"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="City" name="city"
                            rules={[{ required: true },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="State" name="state"
                            rules={[{ required: true },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['postal_code']}
                            label="Postal Code"
                            rules={[{ required: true, }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="country" label="Country"
                            rules={[{
                                required: true,
                                message: 'Please input your phone number!',
                            }
                            ]}
                        >
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item name="lat" hidden>
                            <Input type="hidden" />
                        </Form.Item>
                        <Form.Item name="lng" hidden>
                            <Input type="hidden" />
                        </Form.Item>
                        <Form.Item name="id" hidden>
                            <Input type="hidden" />
                        </Form.Item>
                        <Form.Item name="address_id" hidden>
                            <Input type="hidden" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </>

    );
}

export default Edit;
