import React, {useEffect} from 'react';
import { useNavigate, Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Layout, Menu, Col, Row, Space
} from 'antd';

import Spinner from '../components/Spinner';
import actions from '../redux/Authenticate/actions';
import {USER_TYPE_CUSTOMER } from '../config/constants';

import { customerSideMenu } from '../routes/menu';
import HeaderProfileDorpdown from '../components/headerProfileDorpdown';
import HeaderLogo from '../components/headerLogo';

const { Header, Sider, Content, Footer } = Layout;

function CustomerLayout() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { isAuthenticated, validateUserLoader, userType, name } = useSelector(state => state.authenticateReducer)
    
    useEffect(() => {
        if (!isAuthenticated) {
            dispatch({
                type: actions.GET_AUTH_USER,
            });
        }
    }, [])

    if (validateUserLoader) {
        return <Spinner />;
    }

    const sidebarOnClickHandler = ({key}) => {
        if(key){
            navigate(key)
        }
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            
            <Header>
                <Row justify="space-between" align="center">
                    <Col flex={2}>
                        <HeaderLogo uri="/admin/dashboard" />
                    </Col>
                    <Col flex={3}>
                        <div style={{ display: 'flex', alignItems:'center', justifyContent:'end' }}>
                            <Space size={"large"}>
                                <HeaderProfileDorpdown />
                            </Space>
                        </div>
                    </Col>
                </Row>
                
            </Header>
            <Layout hasSider>
                
                <Sider width={200}
                    breakpoint="md"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                      console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                      console.log(collapsed, type);
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['/admin/dashboard']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={customerSideMenu}
                        onClick={sidebarOnClickHandler}
                    />
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280}}>
                        
                        {
                            isAuthenticated && userType == USER_TYPE_CUSTOMER ? 
                            <Outlet />
                            :
                            <Navigate to="/customer/login" replace />
                        }

                    </Content>
                    <Footer style={{ textAlign: 'center'}}>
                        AB Catering ©2024 Created by FirstWish.ca
                    </Footer>
                </Layout>

            </Layout>

        </Layout>
    );
}

export default CustomerLayout;
