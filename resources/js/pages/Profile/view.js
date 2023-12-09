import React from 'react';
import {
    Tabs, Divider
} from 'antd';

import TableHeaderLink from '../../components/tableHeaderLink';
import UserDetails from './userDetails';
import PasswordUpdate from './passwordUpdate';

const View = () => {

    const tabItems = [
        { 
            key: 'details',
            label: 'Details',
            children: <UserDetails />
        },
        { 
            key: 'update_password',
            label: 'Update Password',
            children: <PasswordUpdate />
        },
    ];
    return (
        <>
            <TableHeaderLink
                name="Profile view"
                subTitle="User Details"
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

export default View;
