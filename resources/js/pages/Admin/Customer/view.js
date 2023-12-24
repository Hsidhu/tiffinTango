import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Divider, Tag, Row, Col } from 'antd';
import {
    ContactsOutlined,
    PhoneOutlined,
    HomeOutlined,
    FileOutlined,
    MailOutlined,
    FileTextOutlined,
  } from '@ant-design/icons';

  import { getCustomer } from '../../../redux/Customer/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';

const View = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const { customer } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomer(id))
    }, [])

    if (!customer) {
        return null;
    }


    return (
        <>
            <TableHeaderLink
                name="View customer"
                backUri="/admin/customers"
            />
            <Divider />

            <Card className="ant-card" style={{ marginBottom: '24px' }}>
                <div className="ant-card-body">
                    <div>
                        <div className="acss-2izdy5">
                            <Avatar 
                                shape="square" size={100}
                                alt="Avatar"
                                src={customer.avatar?.url}
                            />
                            <div className="acss-rbfzfg">{customer.full_name}</div>
                        </div>
                        <Divider className="acss-1o07c3f" />
                        <h3> <ContactsOutlined /> Contacts</h3>
                        <p>
                            <span role="img" aria-label="Email" className="anticon anticon-contacts" style={{ marginRight: '8px' }}>
                                <MailOutlined />
                            </span>
                            {customer.email}
                        </p>
                        <p>
                            <span role="img" aria-label="Phone Number" className="anticon anticon-cluster" style={{ marginRight: '8px' }}>
                                <PhoneOutlined />
                            </span>
                            {customer.phone}
                        </p>
                        <p>
                            <span role="img" aria-label="Address" className="anticon anticon-home" style={{ marginRight: '8px' }}>
                                <HomeOutlined />
                            </span>
                            {customer.full_address}
                        </p>
                    </div>
                </div>
            </Card>

        </>

    );
}

export default View;
