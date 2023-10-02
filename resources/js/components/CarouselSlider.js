import React from 'react';
import { Carousel } from 'antd';

import { axiosConfig } from '../config/constants';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const CarouselSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <img src={`${axiosConfig.HOST_URL}/images/site/slider_440.png`} />
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};
export default CarouselSlider;