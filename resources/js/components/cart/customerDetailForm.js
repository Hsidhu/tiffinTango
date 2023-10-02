import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import moment from "moment";
import {
    Row, Col, Button,
    Select, Card,
    Radio,
    DatePicker
} from 'antd';
import { axiosConfig } from '../../config/constants';

const CustomerDetailForm = ({ cart}) => {

    const [selectedMealPlan, setSelectedMealPlan] = useState();
    const [orderType, setOrderType] = useState('pickup');

    if (isEmpty(cart)) {
        return null;
    }

    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setOrderType(value)
    };
    const orderTypeOptions = [
        { label: 'Delivery', value: 'delivery' },
        { label: 'Pickup', value: 'pickup' }
    ];

    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
    }

    return (
        <Card title="Details" >
            <div>
                <br />
                <Radio.Group optionType="button" options={orderTypeOptions} 
                    onChange={onChange3} value={orderType} />
                <br />
                <DatePicker onChange={onDateChange} 
                    disabledDate={current => {
                        return current && current < moment().add(1, "day");
                    }}
                />
            </div>

        </Card>
    );
}

export default CustomerDetailForm;
