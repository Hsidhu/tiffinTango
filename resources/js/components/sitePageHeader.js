import React from 'react';
import { 
    Col, Row, Typography
} from 'antd';
import { imageUrl } from '../config/helpers';
import { Link } from 'react-router-dom';


const breadcrumbBG = {
    background: `url('${imageUrl('images/site/slider_440.png')}') no-repeat center center`,
    backgroundSize: 'cover',
    display:'flex', justifyContent: 'center', margin: '10px'
}

const SitePageHeader = ({pageTitle}) => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <div style={breadcrumbBG}>
                        <Typography.Title level={1} style={{margin: "14px 8px"}}>
                            {pageTitle}
                        </Typography.Title>
                    </div>
                </Col>
            </Row>
        </>
    )

};

export default SitePageHeader;
