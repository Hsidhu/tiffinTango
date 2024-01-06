import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Table, Button, Statistic, Card } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const Dashboard = ({ }) => {
    return (
        <>
            <h1>Customer Dashboard</h1>

            <Row gutter={16}>
                <Col sm={24} md={8} >
                    <Statistic title="Total Active Customers" value={112893} />
                </Col>
                <Col sm={24} md={8}>
                    <Statistic title="Total Orders this Month" value={112893}  />
                </Col>
                <Col sm={24} md={8}>
                    <Statistic title="Orders" value={112893} />
                </Col>
            </Row>

            <Row gutter={16}>
                    <Col sm={24} md={8}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={21.28}
                                precision={2}
                                valueStyle={{
                                    color: '#3f8600',
                                }}
                                prefix={<ArrowUpOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col sm={24} md={8}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={2.3}
                                precision={2}
                                valueStyle={{
                                    color: '#cf1322',
                                }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col sm={24} md={8}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={2.3}
                                precision={2}
                                valueStyle={{
                                    color: '#cf1322',
                                }}
                                prefix={<ArrowDownOutlined />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
            </Row>
        </>
    );
}

export default Dashboard;
