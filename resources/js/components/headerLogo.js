import React from 'react';
import { Button, Result } from 'antd';
import { Route, Switch, useHistory, Link } from 'react-router-dom';

const styles = {
    logoLink:{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        height: "44px",
        marginRight: "16px",
        verticalAlign: "top"
    }

};

const HeaderLogo = ({}) => (
    <Link to="/" style={styles.logoLink}>
        <img alt="logo" style={styles.logo} src={'https://jkfoodservices.dvl.to/assets/media/uploads/ab_catering_logo.png'} />
    </Link>
);

export default HeaderLogo;
