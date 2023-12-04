import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
const { Content } = Layout;
import SitePageHeader from '../components/sitePageHeader';

const About = () => {
    return (
        <>
            <SitePageHeader pageTitle={'About Us'}/>
            <div style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>
                    <Content className='site-layout-background'>
                        <Row align='middle' justify='space-between'>
                            <Col md={14} sm={24}>
                                <Divider>About Us</Divider>
                                <p>
                                    Welcome to AB Catering, where the warmth of home meets the flair of professional catering. 
                                    At the heart of our business is a profound passion for creating unforgettable dining experiences that feel like a meal served right from your family's kitchen.
                                </p>
                                <Divider>Our Story</Divider>
                                <p>
                                    AB Catering was born from the desire to share the joy of home-cooked meals with a wider community. 
                                    Our journey began with a simple idea: to offer a taste of home in every dish we serve, whether it's a comforting tiffin for a busy day, a lavish spread for special occasions, or a quick yet wholesome takeout meal.
                                </p>
                                <p>
                                    Whether you're looking for a comforting meal during a busy week, planning an event, or simply craving a taste of home, we are here to serve you. 
                                    At AB Catering, every meal is more than just food; it's an experience of homely warmth, rich flavors, and shared joy.
                                    <br/>
                                    <b>Welcome to our family at AB Catering - where every meal feels like coming home.</b>
                                </p>
                            </Col>
                            <Col
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                md={10}
                                sm={24}
                            >
                                <img
                                    alt='Shopping Cart '
                                    style={{ paddingBottom: 20 }}
                                    src='https://img.icons8.com/color/240/000000/shopaholic.png'
                                />
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </div>
        </>

    );
};

export default About;
