import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { 
    Layout, Menu, MenuProps, Col, Row, Space,
    Badge
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BellOutlined } from '@ant-design/icons';

import {privateRouteList} from '../routes/routes';

import actions from '../redux/Authenticate/actions';

import { protectedSideMenu } from '../routes/menu';
import HeaderProfileDorpdown from '../components/headerProfileDorpdown';
import HeaderLogo from '../components/headerLogo';

const { Header, Sider, Content, Footer } = Layout;


function ProtectedRoutes() {
    const { name } = useSelector(state => state.authenticateReducer)

    const dispatch = useDispatch();
    const history = useHistory()

    const sidebarOnClickHandler = ({key}) => {
        if(key){
            history.push(key)
        }
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Header>
                <Row justify="space-between" align="center">
                    <Col flex={2}>
                        <HeaderLogo />
                    </Col>
                    <Col flex={3}>
                        <div style={{ display: 'flex', alignItems:'center', justifyContent:'end' }}>
                            <Space size={"middle"}>
                                <a href="#">
                                    <Badge count={5}>
                                        <BellOutlined />
                                    </Badge>
                                </a>
                            </Space>
                            <Space>
                                <HeaderProfileDorpdown />
                            </Space>
                        </div>
                    </Col>
                </Row>
                
            </Header>
            <Layout hasSider>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['/admin/dashboard']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={protectedSideMenu}
                        onClick={sidebarOnClickHandler}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280}}>
                        <Switch>
                            {privateRouteList.map(({ component: Component, path, exact }, index) => (
                                <Route path={`/${path}`} key={index} exact={exact}>
                                    <Component />
                                </Route>
                            ))}
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center'}}>
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>

            </Layout>

        </Layout>
    );
}

export default ProtectedRoutes;
