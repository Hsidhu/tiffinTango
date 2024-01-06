import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate, useLocation, Link, Outlet } from 'react-router-dom';
import {
    Layout, Row, Col, Menu, Button, Divider
} from 'antd';
import { publicRouteList } from '../routes/routes';
import { publicTopMenu } from '../routes/menu'
import HeaderLogo from '../components/headerLogo';
import CarouselSlider from '../components/CarouselSlider';
import { ArrowUpOutlined, MenuFoldOutlined } from '@ant-design/icons';

import CookieConsent from '../components/cookieConsent';
import { getSiteSettings } from '../redux/Common/actions';
import PageSetup from '../components/pageSetup'

const { Header, Sider, Content, Footer } = Layout;

// Layout for public pages
const PublicLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getSiteSettings())
    },[]);


    const handleMenuClick = ({ key }) => {
        if (key) {
            navigate(key)
        }
    };
    const renderSlider = () => {
        return location.pathname === '/' ? <CarouselSlider /> : null;
    }

    return (
        <Layout>
            <Header style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                <Row>
                    <Col span={8}>
                        <HeaderLogo  uri="/" />
                    </Col>
                    <Col span={4}>

                    </Col>
                    <Col span={12}>
                        <Menu
                            mode="horizontal"
                            style={{ 
                                display: 'flex', justifyContent: 'flex-end', 
                                backgroundColor:"transparent", borderBottom:'none',  fontSize:"20px" 
                            }}
                            defaultSelectedKeys={['home']}
                            items={publicTopMenu}
                            onClick={handleMenuClick}
                            overflowedIndicator={<MenuFoldOutlined/>}
                        />
                    </Col>
                </Row>
            </Header>

            {renderSlider()}

            <Content>
                
                <Outlet/>

            </Content>
            <Footer>
                <Row justify="center">
                    <Col sm={24} md={6} lg={8}>
                        <h2>Contacts</h2>
                        <div>
                            <a target="_blank" href="mailto:info@abcatering.ca">
                                Email : info@abcatering.ca
                            </a>
                        </div>
                        <div>
                            <a target="_blank" href="tel:6479673831">
                                Tel : 6479673831
                            </a>
                        </div>
                    </Col>
                    
                    <Col sm={24} md={6} lg={8}>
                        <h2>Opening time</h2>
                        <p> Monday - Sunday 11am - 12pm </p>
                    </Col>
                    <Col sm={24} md={6} lg={8}>
                        <h2>Follow Us</h2>
                        <ul>
                            <li>
                                <Link to="/policies">Policies</Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions">Terms</Link>
                            </li>
                            <li>
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link to="/admin/login">Admin login</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Divider/>
                    AB Catering ©2024 Created by FirstWish.ca
                <CookieConsent/>
            </Footer>
        </Layout>
    );
}

export default PublicLayout;
