import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { 
    Space, Table, Divider, Tabs, Statistic 
} from 'antd';
import TableHeaderLink from '../../../components/tableHeaderLink';

const Marketing = () => {

    const tabItems = [
        { 
            key: 'Customer_Email',
            label: 'Customer Emails',
            children: <span>send email to customers</span>
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
