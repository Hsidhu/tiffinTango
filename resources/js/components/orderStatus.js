import React, {useEffect} from 'react';
import { Button, Result, Select } from 'antd';
import { Route, Switch, useHistory, Link } from 'react-router-dom';

import { axiosConfig } from '../config/constants';
import { isEmpty } from 'lodash';

const styles = {
    logoLink:{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        height: "50px",
        marginRight: "16px",
        verticalAlign: "top"
    }

};

const OrderStatus = ({order_id, statusID, disabled = false, orderStatuses, getOrderStatuses, updateOrderStatus}) => {

    useEffect(()=>{
        getOrderStatuses()
    }, [])

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
