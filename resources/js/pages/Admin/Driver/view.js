import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Avatar, Divider, Button, Row, Col } from 'antd';
import {
    ContactsOutlined,
    PhoneOutlined,
    HomeOutlined,
    FileOutlined,
    MailOutlined,
    FileTextOutlined,
} from '@ant-design/icons';

import { getDriver } from '../../../redux/Driver/actions'
import TableHeaderLink from '../../../components/tableHeaderLink';

const View = ({ }) => {
    const history = useHistory();
    let { id } = useParams();
    const { driver } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDriver(id))
    }, [])

    if (!driver) {
        return null;
    }


    return (
        <>
            <TableHeaderLink
                name="View Driver"
                backUri="/admin/drivers"
                HeaderButtons = {[
                    <Link key={'edit_driver'} to={`/admin/driver/edit/${id}`}>
                        <Button type='primary'>Edit Driver</Button>
                    </Link>,
                ]}
            />
            <Divider />

            <Card className="ant-card" style={{ marginBottom: '24px' }}>
                <div className="ant-card-body">
                    <div>
                        <div className="acss-2izdy5">
                            <Avatar 
                                shape="square" size={100}
                                alt="Avatar"
                                src={driver.avatar?.url}
                            />
                            <div className="acss-rbfzfg">{driver.full_name}</div>
                        </div>
                        <Divider className="acss-1o07c3f" />
                        <h3> <ContactsOutlined /> Contacts</h3>
                        <p>
                            <span role="img" aria-label="Email" className="anticon anticon-contacts" style={{ marginRight: '8px' }}>
                                <MailOutlined />
                            </span>
                            {driver.email}
                        </p>
                        <p>
                            <span role="img" aria-label="Phone Number" className="anticon anticon-cluster" style={{ marginRight: '8px' }}>
                                <PhoneOutlined />
                            </span>
                            {driver.phone}
                        </p>
                        <p>
                            <span role="img" aria-label="Address" className="anticon anticon-home" style={{ marginRight: '8px' }}>
                                <HomeOutlined />
                            </span>
                            {driver.full_address}
                        </p>
                    </div>
                    <Divider className="ant-divider css-1vhzkyp ant-divider-horizontal ant-divider-dashed" role="separator" style={{ marginTop: '16px' }} />
                    <div className="acss-yhyal8">
                        <h3><FileTextOutlined /> Documents</h3>
                        <Row gutter={[16, 16]}>

                            {driver.documents?.map((document, index) => (
                                <Col lg={24} xl={12} key={index}>
                                    <a href={document.url} target="_blank" rel="noopener noreferrer">
                                    <FileOutlined /> {document.name}
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Card>

        </>

    );
}

export default View;
