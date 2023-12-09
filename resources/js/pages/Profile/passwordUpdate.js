import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    Row, Col, Typography, Descriptions,
    Form, Input, Button
} from 'antd';
import actions from '../../redux/Authenticate/actions';

const PasswordUpdate = ({}) => {

    const history = useHistory()
    const dispatch = useDispatch();

    const {authenticateReducer} = useSelector(state => state)

    const onFinish = async (values) => {
        dispatch({
            type: actions.UPDATE_PASSWORD,
            payload: {
                'password': values.password,
                'password_confirmation': values.password_confirmation
            },
        });
    };

    return (
        <>
            <Form
                name="updatePasswordForm"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
            >
                <Form.Item
                    label="New Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your new password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="password_confirmation"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
                    <Button type="primary" htmlType="submit">
                        Update Password
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}

export default PasswordUpdate;
