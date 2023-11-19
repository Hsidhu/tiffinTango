import React from 'react';
import { 
    Card, Col, Row
} from 'antd';
import { imageUrl } from '../config/helpers';
import { Link } from 'react-router-dom';

const FeatureCards = () => (
    <Row gutter={16} style={{display:'flex'}}>
        <Col span={8}>

            <Link to={`order/mealplan`}>
                <Card
                    hoverable
                    bordered={false}
                    cover={
                        <div style={{ display:'flex', justifyContent: 'center', padding: '10px' }}>
                            <img alt="Tiffin - mealplan" src={imageUrl('images/site/feature_one.jpeg')} />
                        </div>
                    }
                >
                    <Card.Meta title="Order Your Tiffin today!" description="We provide Tiffin pickup and delivery." />
                </Card>
            </Link>

        </Col>
        <Col span={8}>
            
            <Link to={`order/takeout`}>
                <Card
                    hoverable
                    bordered={false}
                    cover={
                        <div style={{ display:'flex', justifyContent: 'center', padding: '10px' }}>
                            <img alt="Tiffin - mealplan" src={imageUrl('images/site/feature_one.jpeg')} />
                        </div>
                    }
                >
                    <Card.Meta title="Order Your Tiffin today!" description="We provide Tiffin pickup and delivery." />
                </Card>
            </Link>

        </Col>
        <Col span={8}>

            <Link to={`order/catering`}>
                <Card
                    hoverable
                    bordered={false}
                    cover={
                        <div style={{ display:'flex', justifyContent: 'center', padding: '10px' }}>
                            <img alt="Tiffin - mealplan" src={imageUrl('images/site/feature_one.jpeg')} />
                        </div>
                    }
                >
                    <Card.Meta title="Order Your Tiffin today!" description="We provide Tiffin pickup and delivery." />
                </Card>
            </Link>

        </Col>
    </Row>
);

export default FeatureCards;
