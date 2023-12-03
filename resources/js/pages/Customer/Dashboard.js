import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Table, Button, Statistic, Card } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

const Dashboard = ({ }) => {
    return (
        <>
            <h1>Customer Dashboard</h1>

            <Row gutter={16}>
                <Col span={8}>
                    <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={8}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                </Col>
                <Col span={8}>
                    <Statistic title="Orders" value={112893} loading />
                </Col>
            </Row>

            <div className="site-statistic-demo-card">
                <Row gutter={16}>
                    <Col span={8}>
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
                    <Col span={8}>
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
                    <Col span={8}>
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
            </div>
        </>
    );
}

export default Dashboard;
