import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Typography, Descriptions, Card
} from 'antd';

const UserDetails = ({}) => {
    const history = useHistory()
    const dispatch = useDispatch();

    const {authenticateReducer} = useSelector(state => state)

    return (
        <>
            <Descriptions title="User Info" layout="vertical">
                <Descriptions.Item label="UserName">{authenticateReducer.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{authenticateReducer.email}</Descriptions.Item>
                <Descriptions.Item label="Telephone">{authenticateReducer?.phone}</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default UserDetails;
