import React, {useEffect} from 'react';
import { Select } from 'antd';
import { isEmpty } from 'lodash';

const OrderStatus = ({order_id, statusID, disabled = false, orderStatuses, updateOrderStatus}) => {

    if(isEmpty(orderStatuses)){
        return null;
    }

    const update = (value) =>{
        updateOrderStatus({
            id:order_id,
            order_status_id:value
        })
    }

    return(
        <>
            <Select
                disabled = {disabled}
                size={'large'}
                defaultValue={statusID}
                style={{
                    width: 120,
                }}
                bordered={false}
                options = {orderStatuses}
                onChange={update}
            />
        </>
    )
};

export default OrderStatus;
