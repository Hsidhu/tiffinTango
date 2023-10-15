import React from 'react';
import { Avatar, Menu, Typography, Dropdown, Button } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";
import actions from '../redux/Authenticate/actions';

import { useDispatch, useSelector } from 'react-redux';

const { Text } = Typography;

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const styles = {
    logo: {
        display: 'inline-block',
        padding: '0 0 0 24px',
        fontSize: '20px',
        verticalAlign: 'top',
        cursor: 'pointer',
        img: {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    },
    menu: {
        marginRight: '8px'
    }
}

const HeaderProfileDorpdown = () => {

    const dispatch = useDispatch();
    const { name, logOutLoader } = useSelector(state => state.authenticateReducer)

    const onLogout = () => {
        dispatch({
            type: actions.LOGOUT,
        });
    };

    const onClick = (e) => {
        console.log(e.key);
    };

    const items = [
        {
            key: 'profile',
            label: (
                <Link to='/admin/locations'>
                    Profile
                </Link>
            ),
        },
        {
            key: 'logout',
            label: (
                <Button
                    danger
                    type="link"
                    loading={logOutLoader}
                    onClick={onLogout}
                >Logout</Button>
            ),
        }
    ];

    return (
        <div>
            <Dropdown menu={{ items }} placement="bottom">
                <Avatar icon={<UserOutlined />} />
            </Dropdown>
        </div>
    );
};
export default HeaderProfileDorpdown;