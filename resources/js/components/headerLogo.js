import React from 'react';
import { Button, Result } from 'antd';
import { Route, Switch, useHistory, Link } from 'react-router-dom';

import { axiosConfig } from '../config/constants';

const styles = {
    logoLink:{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        height: "50px",
        marginRight: "16px",
        verticalAlign: "top"
    }

};

const HeaderLogo = ({uri}) => (
    <Link to={uri} style={styles.logoLink}>
        <img alt="logo" style={styles.logo} src={`${axiosConfig.HOST_URL}/images/site/ab_catering_logo.png`} />
    </Link>
);

export default HeaderLogo;
