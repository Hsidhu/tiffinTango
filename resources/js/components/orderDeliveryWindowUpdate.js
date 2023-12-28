import React, {useEffect} from 'react';
import { Select } from 'antd';
import { isEmpty } from 'lodash';


const OrderDeliveryWindowUpdate = ({order_id, deliveryWindowId, disabled = false, deliveryWindows, getDeliveryWindowsList, updateOrderStatus}) => {

    useEffect(()=>{
        getDeliveryWindowsList()
    }, [])

    if(isEmpty(deliveryWindows)){
        return null;
    }

    const update = (value) =>{
        updateOrderStatus({
            id:order_id,
            delivery_window_id:value
        })
    }

    return(
        <>
            <Select
                disabled = {disabled}
                size={'large'}
                defaultValue={deliveryWindowId}
                style={{
                    width: 120,
                }}
                bordered={false}
                options = {deliveryWindows}
                onChange={update}
            />
        </>
    )
};

export default OrderDeliveryWindowUpdate;
