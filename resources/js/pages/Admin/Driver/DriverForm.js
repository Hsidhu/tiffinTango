import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Button,
    Form, Input, Switch
} from 'antd';
import { usePlacesWidget } from "react-google-autocomplete";
import { GOOGLE_API_KEY } from '../../../config/constants';
import { phonePattern } from '../../../validationHelper';
import FileUploadListView from '../../../components/fileUploadListView';
import FileUpload from '../../../components/fileUpload';

import { addMedia, removeMedia } from '../../../redux/Driver/actions';

const DriverForm = ({form, onFormChange, driver, onFormSubmit }) => {
    
    const antInputRef = useRef(null);

    const { ref: antRef } = usePlacesWidget({
        apiKey: GOOGLE_API_KEY,
        options: {
            componentRestrictions: { country: ["ca"] },
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
                            form.setFieldsValue({address:{ address: street1 }});
                            break;
                        case "postal_code":
                            zip = `${component.long_name}${zip}`;
                            form.setFieldsValue({address:{ postal_code: zip }});
                            break;
                        case "locality":
                            city = `${component.long_name}${city}`;
                            form.setFieldsValue({address:{ city: city }});
                            break;
                        case "administrative_area_level_1":
                            state = `${component.short_name}${state}`;
                            form.setFieldsValue({address:{ state: state }});
                            break;
                        case "country":
                            country = `${component.short_name}${country}`;
                            form.setFieldsValue({address: { country: country }});
                            break;
                        default:
                            break;
                    }
                }

                form.setFieldsValue({address:{ lat: place.geometry.location.lat() }});
                form.setFieldsValue({address:{ lng: place.geometry.location.lng() }});
            }
        }
    });

    const mapSwitchValue = (value) => (value ? 1 : 0);
    const handleFormSubmission = (values) => {
        values.status = mapSwitchValue(values.status);

        onFormSubmit(values);
    }


    return (
        <>
            <Form
                form={form}
                labelCol={{ span: 4, }}
                wrapperCol={{ span: 14, }}
                layout="horizontal"
                initialValues={{}}
                onValuesChange={onFormChange}
                style={{}}
                onFinish={handleFormSubmission}
            >
                <Row>
                    <Col xs = {{
                            span:24,
                        }}
                        md = {{
                            span:12
                        }}>
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
                        <Form.Item name="license" label="License"
                            rules={[ { required: true } ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Status" name="status" valuePropName="checked">
                            <Switch />
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
                                    antInputRef.current = c;
                                    if (c)
                                        antRef.current = c.input;
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Address" name={["address", "address"]}
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="City" name={["address", "city"]}
                            rules={[{ required: true },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="State" name={["address", "state"]}
                            rules={[{ required: true },]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={["address",'postal_code']}
                            label="Postal Code"
                            rules={[{ required: true, }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Country" name={["address", "country"]}
                            rules={[{
                                required: true,
                                message: 'Please input your Country!',
                            }
                            ]}
                        >
                            <Input style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item name={["address", "lat"]} hidden>
                            <Input type="hidden" />
                        </Form.Item>
                        <Form.Item name={["address", "lng"]} hidden>
                            <Input type="hidden" />
                        </Form.Item>

                        {driver && 
                            <Form.Item label="Avatar">
                                {
                                    <FileUpload objectID={driver.id} type={'avatar'} buttonText={'Upload Profile pic'} limiter={1} onAdd={addMedia} />
                                }
                                
                                {driver?.avatar && (
                                    <FileUploadListView fileListArray={[driver.avatar]} type="images" onRemove={removeMedia} objectID={driver.id} />
                                )}
                            </Form.Item>
                        }

                        { driver &&
                            <Form.Item label="Documents">
                                <FileUpload objectID={driver.id} type={'document'} buttonText={'Upload Documents'} limiter={1} onAdd={addMedia} />
                                {driver?.documents && (
                                    <FileUploadListView fileListArray={driver?.documents} onRemove={removeMedia} objectID={driver.id} />
                                )}
                            </Form.Item>
                        }

                        {
                            driver &&
                            <Form.Item name="id" hidden>
                                <Input type="hidden" />
                            </Form.Item>
                        }

                        {
                            driver &&
                            <Form.Item name="address_id" hidden>
                                <Input type="hidden" />
                            </Form.Item>
                        }
                    
                    </Col>
                </Row>

                <Row>
                    <Col xs = {{
                            span:24,
                        }}
                        md = {{
                            span:12
                        }}>
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </>

    );
}

export default DriverForm;
