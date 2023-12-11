import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import SitePageHeader from '../components/sitePageHeader';

const { Content } = Layout;

const Terms = () => {
    return (
        <>
            <SitePageHeader pageTitle={'Terms & Conditions'} />
            <div style={{  padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0' }}>
                    <Content className='site-layout-background'>
                        <Row align='middle' justify='space-between'>
                            <Col md={12} sm={24}>
                                <Divider>Terms and Conditions</Divider>
                                <p>
                                    Welcome to ABcatering. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use,
                                    which together with our privacy policy govern our relationship with you in relation to this website.
                                </p>
                                <Divider />
                                <p>
                                    Payment Terms: We accept payment through our website and payment is non-refundable. Once the payment is made, it cannot be refunded.
                                    Delivery: We aim to deliver your tiffin on time, but we cannot be held responsible for any delays due to traffic, weather, or other circumstances beyond our control.
                                    Menu Changes: We reserve the right to make changes to the menu or the price of our tiffin service without prior notice.
                                    Allergies and Dietary Restrictions: If you have any allergies or dietary restrictions, please inform us when placing your order. We will do our best to accommodate your needs, but we cannot guarantee that our tiffin service will be free from all allergens.
                                    Intellectual Property: This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                                    Disclaimer: We make no warranties or representations about the accuracy or completeness of the information provided on this website. Any reliance you place on such information is therefore strictly at your own risk.
                                    Limitation of Liability: We shall not be liable for any indirect or consequential loss or damage whatsoever arising from or in connection with the use of this website or our tiffin service.
                                    Governing Law: These terms and conditions are governed by and construed in accordance with the laws of Canada.
                                </p>
                            </Col>
                            <Col
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                md={12}
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

export default Terms;
