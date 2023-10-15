import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import {
    Layout, Row, Col, Menu, Space,
    BackTop, Button, Divider
} from 'antd';
import { publicRouteList } from '../routes/routes';
import { publicTopMenu } from '../routes/menu'
import HeaderLogo from '../components/headerLogo';
import CarouselSlider from '../components/CarouselSlider';
import { ArrowUpOutlined } from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

// Layout for public pages
const PublicRoutes = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location);

    const handleMenuClick = ({ key }) => {
        if (key) {
            history.push(key)
        }
    };
    const renderSlider = () => {
        return location.pathname === '/' ? <CarouselSlider /> : null;
    }

    return (
        <Layout>
            <Header>
                <Row>
                    <Col span={8}>
                        <HeaderLogo  uri="/" />
                    </Col>
                    <Col span={6}>

                    </Col>
                    <Col span={10}>
                        <Menu
                            mode="horizontal"
                            style={{ 
                                display: 'flex', justifyContent: 'flex-end', 
                                backgroundColor:"transparent", borderBottom:'none',  fontSize:"20px" 
                            }}
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
            <Footer>
                <Row justify="center">
                    <Col span={6}>
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
                    
                    <Col span={6}>
                        <h2>Opening time</h2>
                        <p class="text-white fs-12"> Tuesday - Wednesday 11pm - 10pm </p>
                        <p class="text-white fs-12"> Thursday  - Saturday 11pm - 11pm </p>
                        <p class="text-white fs-12"> Sunday - Monday 11pm - 10pm</p>
                    </Col>
                    <Col span={6}>
                        <h2>Follow Us</h2>
                    </Col>
                </Row>
                <BackTop>
                    <Button size={'large'} icon={<ArrowUpOutlined />} />
                </BackTop>
                <Divider/>
                AB Catering ©2024 Created by FirstWish.ca
            </Footer>
        </Layout>
    );
}

export default PublicRoutes;
