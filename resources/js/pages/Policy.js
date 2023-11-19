import React from 'react';
import { Layout, Row, Col, Divider } from 'antd';
const { Content } = Layout;

const Policy = () => {
    return (
        <div>
            <Layout style={{ padding: '24px 0' }}>
                <Content className='site-layout-background'>
                    <h1>Privacy Policy</h1>
                    <Row align='middle' justify='space-between'>
                        <Col md={12} sm={24}>
                            <Divider orientation='left'>INFORMATION COLLECTED</Divider>
                            <p>
                                WE COLLECT PERSONAL INFORMATION WHEN YOU REGISTER WITH ANY OF OUR FAMILY OF BRANDS VIA OUR WEBSITES, MOBILE SITES OR MOBILE APPLICATIONS (COLLECTIVELY, OUR "SITES AND APPS") AND WHEN YOU USE ANY OF OUR PRODUCTS OR SERVICES. PERSONAL INFORMATION IS ANY INFORMATION ABOUT YOU THAT IS PERSONALLY IDENTIFIABLE, SUCH AS YOUR NAME, ADDRESS, EMAIL ADDRESS OR PHONE NUMBER, FACEBOOK CONNECT SIGN-IN INFORMATION (IF APPLICABLE), AND ANY OTHER INFORMATION THAT IS NOT OTHERWISE PUBLICLY AVAILABLE.

                                YOUR ACCOUNT INCLUDES AN ADDRESS BOOK, WHICH YOU CAN USE TO STORE EMAIL ADDRESSES OF FRIENDS AND FAMILY, AND THOSE EMAILS ARE PERSONAL INFORMATION.

                                OUR THIRD PARTY SERVICE PROVIDERS OR WE MAY ALSO COLLECT INFORMATION RELATING TO YOUR DEVICES, INCLUDING YOUR DEVICE MODEL, OPERATING SYSTEM, BROWSER TYPE, UNIQUE DEVICE IDENTIFIER, IP ADDRESS, MOBILE PHONE NUMBER, MOBILE NETWORK CARRIER, LOCATION, AND EVENT INFORMATION (SUCH AS APPLICATION INSTALLATIONS).

                                IF YOU ORDER PRODUCTS OR PAY FOR SERVICES, WE WILL NEED YOUR SHIPPING ADDRESS, BILLING NAME AND ADDRESS, AS WELL AS YOUR CREDIT CARD NUMBER AND EXPIRATION DATE.

                                IF YOU TAG YOURSELF, FRIENDS, FAMILY, OR OTHERS IN PICTURES, WE MAY USE FACIAL RECOGNITION TECHNOLOGY TO HELP YOU TAG AND ORGANIZE YOUR PICTURES. THESE TAGS ARE BASED ON THE INFORMATION YOU HAVE PROVIDED TO US AND YOUR RECOGNITION OF INDIVIDUALS IN CERTAIN PHOTOS. USING THIS INFORMATION, WE MAY SUGGEST TAGS FOR YOUR OTHER PHOTOS. BY USING THIS TAGGING FEATURE, YOU CONSENT TO RECEIVING THESE SUGGESTIONS. YOU, AND NOT 24 SEVEN, ARE RESPONSIBLE FOR ANY TAGS YOU CREATE.
                            </p>
                            <Divider orientation='left'>COOKIES AND SIMILAR TECHNOLOGIES</Divider>
                            <p>
                                WE USE COOKIES, PIXEL TAGS, AND/OR OTHER SIMILAR TECHNOLOGIES TO COLLECT VISITOR INFORMATION.

                                COOKIES, FOR EXAMPLE, ARE ALPHANUMERIC IDENTIFIERS THAT WE TRANSFER TO YOUR COMPUTER'S HARD DRIVE THROUGH YOUR WEB BROWSER.
                                THEY MAKE IT POSSIBLE FOR US TO STORE THE CONTENTS OF YOUR SHOPPING CART UNTIL YOU ARE READY TO CHECK OUT,
                                RECOGNIZE YOUR BROWSER WHEN YOU VISIT AND PROVIDE YOU WITH INFORMATION ABOUT PRODUCTS THAT INTEREST YOU.
                                BY DOING THIS, WE CAN PERSONALIZE YOUR RETURN VISITS AND SAVE YOU TIME DURING CHECKOUT. IT IS POSSIBLE TO PREVENT COOKIES FROM BEING USED IN YOUR BROWSER BY TURNING THE FEATURE OFF, BUT IN ORDER TO ENJOY THE BENEFITS OF BEING A REGISTERED USER; YOUR BROWSER MUST BE SET TO ACCEPT COOKIES.
                            </p>
                            <Divider orientation='left'>AUTHORIZED THIRD PARTIES</Divider>
                            <p>
                                WE USE THIRD-PARTY SERVICE PROVIDERS TO SERVE ADS ON OUR BEHALF ACROSS THE INTERNET AND SOMETIMES ON OUR SITES AND APPS. THEY MAY COLLECT ANONYMOUS INFORMATION ABOUT YOUR VISITS TO OUR SITES AND APPS AND YOUR INTERACTION WITH OUR PRODUCTS AND SERVICES. THEY MAY ALSO USE INFORMATION ABOUT YOUR VISITS TO OUR SITES AND APPS AND OTHER SITES AND MOBILE APPLICATIONS TO TARGET ADS FOR PRODUCTS AND SERVICES. FOR INSTANCE, THEY MAY COLLECT WEB LOG DATA FROM YOU (SUCH AS IP ADDRESS AND INFORMATION ABOUT YOUR BROWSER OR OPERATING SYSTEM) OR PLACE OR RECOGNIZE A UNIQUE COOKIE ON YOUR BROWSER TO ENABLE YOU TO RECEIVE CUSTOMIZED ADS. THROUGH THIS PROCESS, DEMOGRAPHIC OR OTHER INTEREST DATA MAY BE ASSOCIATED WITH YOUR BROWSER OR DEVICE IN A NON-PERSONALLY IDENTIFIABLE MANNER. NO PERSONALLY IDENTIFIABLE INFORMATION IS COLLECTED IN THIS PROCESS. THEY DO NOT KNOW THE NAME, ADDRESS, EMAIL ADDRESS, PHONE NUMBER OR ANY PERSONALLY IDENTIFIABLE INFORMATION ABOUT THE USER.

                                WE ALSO WORK WITH THIRD PARTY SERVICE PROVIDERS TO MONITOR CERTAIN PAGES OF OUR SITES AND APPS FOR SUCH PURPOSES AS REPORTING TRAFFIC AND OTHER ADVERTISING STATISTICS. WHERE AUTHORIZED BY US, THESE THIRD PARTY PROVIDERS MAY USE COOKIES AND/OR OTHER MONITORING TECHNOLOGIES TO COMPILE ANONYMOUS STATISTICS ABOUT OUR VISITORS. NO PERSONALLY IDENTIFIABLE INFORMATION IS TRANSFERRED TO THESE THIRD PARTY SERVICE PROVIDERS.

                                WE MAY ALSO ALLOW THIRD PARTIES TO PROVIDE US WITH ANALYTICS ABOUT YOUR VISITS TO OUR SITES AND APPS. THE THIRD PARTY ANALYTICS SERVICES MAY USE COOKIES, WEB BEACONS AND OTHER TECHNOLOGIES TO COLLECT INFORMATION ABOUT YOUR USE OF THE SITES AND APPS AND OTHER WEBSITES, INCLUDING YOUR IP ADDRESS, WEB BROWSER, PAGES VIEWED, TIME SPENT ON PAGES, AND LINKS CLICKED. THIS INFORMATION IS PROVIDED TO US ON AN AGGREGATED, NON-PII BASIS, AND MAY BE USED TO, AMONG OTHER THINGS, ANALYZE AND TRACK DATA, DETERMINE THE POPULARITY OF CERTAIN CONTENT AND BETTER UNDERSTAND OUR USERS' ONLINE ACTIVITY.
                            </p>
                            <Divider orientation='left'>Refund Policy</Divider>
                            <p>We are committed to providing you with the best possible service for your tiffin delivery needs. Please take a moment to review our refund policy.</p>
                            <Divider orientation='left'>Refund Eligibility:</Divider>
                            <p>Technical Errors: In the rare event that a technical glitch results in a duplicate order being placed, a refund will be promptly issued for the duplicate transaction.</p>
                            <Divider orientation='left'>Non-Refundable Circumstances:</Divider>
                            <p>Order Placement: Once an order has been successfully placed and processed, we regret to inform you that we do not entertain refunds for any other reason besides a technical error leading to a duplicate order.</p>
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
    );
};

export default Policy;
