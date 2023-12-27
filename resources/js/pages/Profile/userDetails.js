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
                <Descriptions.Item label="User name">{authenticateReducer.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{authenticateReducer.email}</Descriptions.Item>
                <Descriptions.Item label="Phone">{authenticateReducer?.phone}</Descriptions.Item>
                <Descriptions.Item label="Info" span={2}>
                        
                </Descriptions.Item>
            </Descriptions>
        </>
    )
}

export default UserDetails;
