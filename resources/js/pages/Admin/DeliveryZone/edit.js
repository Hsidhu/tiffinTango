import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from "lodash"
import {
    Row, Col, Button, Divider,
    Form, Input
} from 'antd';
import GoogleMapReact from 'google-map-react';

import { GOOGLE_API_KEY } from '../../../config/constants';
import { updateDeliveryZone, getDeliveryZone } from '../../../redux/DeliveryZone/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';

const Edit = ({ }) => {
    const history = useHistory()
    let { id } = useParams();
    const deliveryZone = useSelector(state => state.deliveryZone)
    const dispatch = useDispatch();

    const [form] = Form.useForm()

    useEffect(() => {
        dispatch(getDeliveryZone(id))
    }, [])

    if (isEmpty(deliveryZone)) {
        return null;
    }

    useEffect(() => {
        form.setFieldsValue({ ...deliveryZone })
    }, [form, deliveryZone])


    const onFormSubmit = (values) => {
        dispatch(updateDeliveryZone(values, history));
    }
    console.log(typeof deliveryZone.boundaries)

    const handleApiLoaded = (map, maps) => {

        const bermudaTriangle = new maps.Polygon({
            paths: deliveryZone?.boundaries,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        });
        bermudaTriangle.setMap(map);
    }

    return (
        <>
            <TableHeaderLink
                name="Edit DeliveryZone"
                backUri="/admin/delivery_zones"
            />

            <Row>
                <Col span={12}>
                    <Form
                        form={form}
                        onFinish={onFormSubmit}
                        labelCol={{ span: 4, }}
                        wrapperCol={{ span: 14, }}
                        layout="horizontal"
                        style={{}}
                    >
                        <Form.Item name="id" hidden>
                            <Input type="hidden" />
                        </Form.Item>

                        <Form.Item label="Name" name="name"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>

                    </Form>
                </Col>

                <Col span={8}>

                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={18}>
                    <GoogleMapReact
                        style={{ height: '500px' }}
                        bootstrapURLKeys={{ libraries: ['drawing', 'geometry'], key: GOOGLE_API_KEY }}
                        defaultCenter={{ lat: 43.7829505, lng: -79.7494863 }}
                        defaultZoom={12}
                        yesIWantToUseGoogleMapApiInternals={true}
                        onGoogleApiLoaded={({ map, maps }) => {
                            //this.renderMarker(map, maps)
                            handleApiLoaded(map, maps)
                        }}
                    >
                    </GoogleMapReact>
                </Col>
            </Row>
        </>

    );
}

export default Edit;
