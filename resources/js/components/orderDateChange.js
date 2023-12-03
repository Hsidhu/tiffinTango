import React from 'react';
import {DatePicker } from 'antd';
import moment from 'moment';
import { isEmpty } from 'lodash';

const OrderDateChange = ({order_id, field, defaultDate, updateOrderStatus}) => {

    if(isEmpty(defaultDate)){
        return null;
    }

    const handleDateChange = (date, dateString) =>{
        console.log(date, dateString);
        updateOrderStatus({
            id:order_id,
            [field]: date.format('YYYY-MM-DD')
        })
    }

    return(
        <>
            <DatePicker size="large" style={{width: "100%"}} format={'DD-MM-YYYY'}
                bordered={false}
                allowClear={false}
                defaultValue={moment(defaultDate, 'YYYY-MM-DD')}
                onChange={handleDateChange}
                disabledDate={current => {
                    return current && (current < moment().add(1, "day") || current.day() === 0);
                }}
            />
        </>
    )
};

export default OrderDateChange;
