import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider, Tabs, Statistic 
} from 'antd';
import TableHeaderLink from '../../../components/tableHeaderLink';
import BulkEmailNotification from '../../../components/containers/bulkEmailNotification';

const Marketing = () => {
    const navigate = useNavigate();

    const tabItems = [
        { 
            key: 'Customer_Email',
            label: 'Customer Emails',
            children: <BulkEmailNotification history={navigate} />
        },
    ]

    return (
        <>
            <TableHeaderLink
                name="Marketing"
                HeaderButtons = {[
                ]}
            />
            <Divider />
            <Tabs
                type="card"
                items={tabItems}
            />
        </>
    )

}

export default Marketing
