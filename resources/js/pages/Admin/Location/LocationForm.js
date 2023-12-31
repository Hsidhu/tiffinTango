import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col,
    Button,
    Form,
    Input,
    InputNumber
} from 'antd';

import { usePlacesWidget } from "react-google-autocomplete";
import { GOOGLE_API_KEY } from '../../../config/constants';
import { phonePattern } from '../../../validationHelper'

const LocationForm = ({form, onFormChange, hasId, onFormSubmit }) => {
    const navigate = useNavigate()
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
                //antInputRef.current.setValue(place?.formatted_address);
            }
        }
    });

    useEffect(() => {
        // __REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__
        const mainScriptTags = document.querySelectorAll('script[src*="maps.googleapis.com/maps"]');
        
        return () => {
            mainScriptTags.forEach((scriptTag) => {
                scriptTag.remove();
            });
            const helperHeadScriptTags = document.head.querySelectorAll('script[src*="maps.googleapis.com/maps-api"]');
            helperHeadScriptTags.forEach((headScriptTag) => {
                headScriptTag.remove();
            });
    }}, []);

    return (
        <Form
            form={form}
            labelCol={{ span: 4, }}
            wrapperCol={{ span: 14, }}
            layout="horizontal"
            initialValues={{}}
            onValuesChange={onFormChange}
            style={{}}
            onFinish={onFormSubmit}
        >
            <Row>
                <Col xs = {{
                        span:24,
                    }}
                    md = {{
                        span:12
                    }}
                    >
                    <Form.Item label="Name" name="name"
                        rules={[
                            {
                                required: true
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

                    <Form.Item label="Description" name="description"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input.TextArea rows={2} />
                    </Form.Item>

                    <Form.Item
                        name={['radius']}
                        label="Radius"
                        rules={[{ required: true, }]}
                    >
                        <InputNumber
                            min={1}
                            step={5}
                            stringMode
                        />
                    </Form.Item>

                </Col>
                <Col xs = {{
                        span:24,
                    }}
                    md = {{
                        span:12
                    }}>

                    <Form.Item label="Search Address" name="search_address" labelWrap>
                        <Input
                            ref={(c) => {
                                console.log(c)
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

                    {
                        hasId && 
                        <Form.Item name="id" hidden>
                            <Input type="hidden" />
                        </Form.Item>
                    }
                    <Form.Item name="lat" hidden>
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item name="lng" hidden>
                        <Input type="hidden" />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs = {{
                        span:24,
                    }}
                    md = {{
                        span:12
                    }}>
                    <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    );
}

export default LocationForm;
