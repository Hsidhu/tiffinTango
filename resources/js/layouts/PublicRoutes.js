import { Route, Switch, useHistory } from 'react-router-dom';
import { Layout, Row, Col, Menu, Space } from 'antd';
import {publicRouteList} from '../routes/routes';
import {  publicTopMenu } from '../routes/menu'
import HeaderLogo from '../components/headerLogo';


const { Header, Sider, Content, Footer } = Layout;

// Layout for public pages
const PublicRoutes = () => {

    const history = useHistory();
    const handleMenuClick = ({key}) => {
        if (key) {
          history.push(key)
        }
    };

    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={8}>
                        <HeaderLogo />
                    </Col>
                    <Col span={8}>

                    </Col>
                    <Col span={8}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['home']}
                            items={publicTopMenu}
                            onClick={handleMenuClick}
                        />
                    </Col>
                </Row>
                
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                        display: 'flex',
                        margin: '14px 14px'
                    }}
                >
                    <Switch>
                        {publicRouteList.map(({ component: Component, path, exact }, index) => (
                            <Route path={`/${path}`} key={index} exact={exact}>
                                <Component />
                            </Route>
                        ))}
                    </Switch>
                </Space>
                
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    );
}

export default PublicRoutes;
