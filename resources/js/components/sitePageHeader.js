import React from 'react';
import { 
    Col, Row, Typography
} from 'antd';
import { imageUrl } from '../config/helpers';
import { Link } from 'react-router-dom';


const breadcrumbBG = {
    background:  ` url('${imageUrl('images/site/slider_440.png')}') no-repeat center center rgb(108 30 30 / 70%)`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'multiply',
    display:'flex',
    justifyContent: 'center',
    padding:"60px"
}

const SitePageHeader = ({pageTitle}) => {

    return (
        <>
            <Row>
                <Col span={24}>
                    <div style={breadcrumbBG}>
                        <Typography.Title level={1} style={{margin: "14px 8px", color:"#ffffff"}}>
                            {pageTitle}
                        </Typography.Title>
                    </div>
                </Col>
            </Row>
        </>
    )

};

export default SitePageHeader;
