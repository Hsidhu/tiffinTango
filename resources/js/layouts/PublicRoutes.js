import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { Layout, Row, Col, Menu, Space } from 'antd';
import {publicRouteList} from '../routes/routes';
import {  publicTopMenu } from '../routes/menu'
import HeaderLogo from '../components/headerLogo';
import CarouselSlider from '../components/CarouselSlider';

const { Header, Sider, Content, Footer } = Layout;

// Layout for public pages
const PublicRoutes = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location);

    const handleMenuClick = ({key}) => {
        if (key) {
          history.push(key)
        }
    };
    const renderSlider = () => {
        return location.pathname === '/' ? <CarouselSlider/> : null;
    }

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
                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                            defaultSelectedKeys={['home']}
                            items={publicTopMenu}
                            onClick={handleMenuClick}
                        />
                    </Col>
                </Row>
            </Header>
            
            {renderSlider()}

            <Content style={{ padding: '0 50px' }}>
                <Space
                    direction="vertical"
                    size="large"
                    style={{
                        display: 'flex',
                        margin: '18px 14px'
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
