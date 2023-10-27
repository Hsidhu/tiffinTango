import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import {
    Row, Col, Typography,
    Space, Button, Descriptions,
    Card, Table, Divider, Select
} from 'antd';

import { getOrder, addPickupLog } from "../../../redux/Order/actions"
import { isEmpty } from 'lodash';
import TableHeaderLink from '../../../components/tableHeaderLink';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_API_KEY } from '../../../config/constants';

import OrderStatus from '../../../components/containers/orderStatus';

import PickupOrder from './PickupOrder';

const { Title } = Typography;

const View = ({ }) => {
    const history = useHistory()
    const { id } = useParams();
    const {order} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder(id))
        return () => {
            const helperHeadScriptTags = document.head.querySelectorAll('script[src*="maps.googleapis.com/maps"]');
            helperHeadScriptTags.forEach((headScriptTag) => {
                headScriptTag.remove();
            })
        }
    }, [])


    if (isEmpty(order)) {
        return null;
    }

    const onChange = (key) => {
        console.log(key);
    };

    const clickHandler = () => {
        history.push('/admin/drivers/edit')
    }

    const sharedOnCell = (_, index) => {
        if (index >= 1) {
          return {
            colSpan: 0,
          };
        }
        return {};
    };

    const handleApiLoaded = (map, maps) => {

        const bermudaTriangle = new maps.Polygon({
            paths: order.customer_delivery_zone?.boundaries,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        });
        bermudaTriangle.setMap(map);
    }

    const renderMarkers = (map, maps) => {
        const myLatlng = new maps.LatLng(order.customer_lat, order.customer_lng);
        const customerLocation = new maps.Marker({
            position: myLatlng,
            title: order.customer_address
        });
        customerLocation.setMap(map);

        let infoWindow = new maps.InfoWindow({
            content: order.customer_address
        });

        customerLocation.addListener("click", ({domEvent, latLng})=>{
            console.log(domEvent, latLng);
            infoWindow.open(map, customerLocation);
        });
    };
    const columns2 = [
        {
            title: 'Name/Options',
            dataIndex: 'name',
            key: 'name',
            width: '65%',
            onCell: (_, index) => ({
                colSpan: index < 1 ? 1 : 2,
            }),
            render: (text, record) => (
                <div>
                    <b>{record.name}</b>
                    {
                        !isEmpty(record.options) ? 
                        <ul className="list-unstyled mb-0 mt-2">
                            <li>
                                <u className="text-muted">Options:</u>
                                <ul className="list-unstyled">
                                    {record.options?.map((option, index) => (
                                        <li key={index}>
                                            {option.option_name}<br />
                                            {option.value_name} - ${option.value_price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        : null
                    }
                    
                </div>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            className: 'text-left',
            onCell: sharedOnCell
        },
        {
            title: 'Total',
            dataIndex: 'subtotal',
            key: 'subtotal',
            className: 'text-right',
            render: (text, record) => (
                <b>${record.subtotal}</b>
            ),
        },
    ];

    let data2 = order.items?.map((item) => ({
        key: `items-${item.meal_plan_id}`,
        name: `${item.meal_plan_name} - $${item.price.toFixed(2)}`,
        price: item.price,
        subtotal: item.subtotal.toFixed(2),
        options: item.options
    }));

    let totals = order.totals?.map((item) => ({
        key: `total-${item.id}`,
        name: item.title,
        price: 0,
        subtotal: item.value,
        options: []
    }));
    data2.push(...totals)

    return (
        <>
            <TableHeaderLink
                name="View Order"
                backUri="/admin/orders"
            />
            <Divider />
            <Row>
                <Col span={24}>
                    <Descriptions title="" bordered layout="vertical"
                        column={6}
                        labelStyle={{ fontSize: "20px" }}
                        contentStyle={{ fontSize: "20px" }}
                    >
                        <Descriptions.Item
                            label="OrderID"
                        >
                            {order?.id}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label="Order Type">
                            {order?.order_type}
                        </Descriptions.Item>
                        <Descriptions.Item
                            label="Start Date">{moment(order.start_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <OrderStatus order_id={order.id} statusID={order?.order_status_id} />
                            
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
            </Row>

            <Row gutter={12}>
                <Col span={18}>
                    <Card
                        title="Order Detail"
                        extra={<a href="#">Invoice</a>}
                    >
                        <br />
                        <Table
                            columns={columns2}
                            dataSource={data2}
                            pagination={false}
                            bordered
                            className="mb-0" // Add any additional styling classes here
                        />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card
                        title="Customer details"
                    >
                        <p>Name: {order.customer_name}</p>
                        <p>Email: {order.email}</p>
                        <p>Phone: {order.phone}</p>
                        <p>Start Date: {moment(order.start_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                        <p>End Date: {moment(order.end_date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                        <p>Created Date: {moment(order.created_at, 'YYYY-MM-DD').format('DD-MM-YYYY')}</p>
                    </Card>
                </Col>
            </Row>
            <Divider />
            {
                order.order_type == 'pickup' ?
                <PickupOrder order_id={order.id} customer_id={order.customer_id} pickups={order.pickups} />
                :
                <Row gutter={6}>
                    <Col span={16}>
                        <GoogleMapReact
                            style={{ height: '500px' }}
                            bootstrapURLKeys={{ libraries: ['geometry'], key: GOOGLE_API_KEY }}
                            defaultCenter={{ lat: order.customer_lat, lng: order.customer_lng }}
                            defaultZoom={12}
                            yesIWantToUseGoogleMapApiInternals={true}
                            onGoogleApiLoaded={({ map, maps }) => {
                                renderMarkers(map, maps)
                                handleApiLoaded(map, maps)
                            }}
                        >
                        </GoogleMapReact>
                    </Col>
                    <Col span={6}>
                        Update zone
                    </Col>
                </Row>
            }
            
        </>
    );
}

export default View;
