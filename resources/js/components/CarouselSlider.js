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

const textOverLay = {
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Semi-transparent background */
    color: '#fff', /* Text color */
    padding: '20px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
}

const CarouselSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay={false} >
            <div>
                <div style={{position:"relative"}}>
                    <img width={'100%'} src={`${axiosConfig.HOST_URL}/images/site/slider_440.png`} />
                    <div style={textOverLay}>
                        <h3>Title 1</h3>
                        <p>Description 1</p>
                    </div>
                </div>
                
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