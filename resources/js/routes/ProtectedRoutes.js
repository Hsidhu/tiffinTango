import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Button, Layout, Menu, MenuProps, Col, Row, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/Authenticate/actions';
import {privateRouteList} from './routes';

import { LoginOutlined } from '@ant-design/icons';
import { protectedSideMenu } from './menu';
import HeaderProfileDorpdown from '../components/headerProfileDorpdown';

const { Header, Sider, Content, Footer } = Layout;

const headerMenuItems = ['logout', '2'].map((name, index) => ({
    key: `/${index}`,
    label: `${name}`,
    icon: <LoginOutlined />
}));


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
        <Layout>

            <Header>
                <Row justify="space-between" align="center">
                    <Col flex={2}>
                        <div className="demo-logo">{name}</div>
                    </Col>
                    <Col flex={3}>
                        <div style={{ display: 'flex', alignItems:'center', justifyContent:'end' }}>
                            <Menu mode="horizontal"
                                defaultSelectedKeys={['1']}
                                // defaultSelectedKeys={[this.props.location.pathname]}
                                style={{
                                    height: '100%',
                                    borderRight: 0,
                                }}
                                items={headerMenuItems} 
                            />
                            <HeaderProfileDorpdown />
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
