import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Row, Col, Space,
    Button, Typography
} from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const TableHeaderLink = ({name, backUri, toUri, toText}) => {
    const history = useHistory();
    const navTo = (uri) => {
        history.push(uri)
    }

    return (
        <Row>
            <Col flex={2}>
                <Typography.Title level={2}>
                    {name}
                </Typography.Title>
            </Col>
            <Col flex={3}>
                <Space align='center' style={{
                    display: "flex",
                    justifyContent: 'end',
                }}>
                    {
                        !backUri ? null:
                        <Button type="primary" onClick={() => navTo(backUri)} >
                            <ArrowLeftOutlined />
                        </Button>
                    }
                    {
                        !toUri ? null:
                        <Button type="primary" onClick={() => navTo(toUri)} >
                            {toText}
                        </Button>
                    }
                </Space>
            </Col>
        </Row>
    );
}

export default TableHeaderLink 
