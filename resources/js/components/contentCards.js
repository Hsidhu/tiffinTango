import React from 'react';
import { 
    Card, Col, 
    Row, Avatar,
    Image
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { imageUrl } from '../config/helpers';

const { Meta } = Card;

const ContentCards = () => (
    <Row gutter={16} style={{display:'flex'}}>
        <Col span={8}>
            <Card title="Tiffin"
                bordered={false}
                >
                <img src={imageUrl('/images/site/tiffin_shape.jpeg')} />
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Take Away" bordered={false}>
                <img src={imageUrl('/images/site/take_away_shape.jpeg')} />
            </Card>
        </Col>
        <Col span={8}>
            <Card 
                title="Catering"
                bordered={false}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />
                ]}
                >
                    <img src={imageUrl('/images/site/catering_shape.jpeg')} />
                {/* <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                /> */}
            </Card>
        </Col>
    </Row>
);

export default ContentCards;