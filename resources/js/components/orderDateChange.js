import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';

const OrderDateChange = ({order_id, field, defaultDate, updateOrderStatus}) => {

    if(isEmpty(defaultDate)){
        return null;
    }

    const handleDateChange = (date, dateString) => {
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
                defaultValue={dayjs(defaultDate, 'YYYY-MM-DD HH:mm:ss')}
                onChange={handleDateChange}
                disabledDate={current => {
                    return (current.day() === 0);
                }}
            />
        </>
    )
};

export default OrderDateChange;
