import React from 'react';
import { Carousel, Button, Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { imageUrl } from '../config/helpers';

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
    };
    return (
        <Carousel afterChange={onChange} autoplay={true} dotPosition={'right'} >
            <div>
                <div style={{position:"relative"}}>
                    <img width={'100%'} src={imageUrl('images/site/slider_440.png')} />
                    <div style={textOverLay}>

                        <Flex justify={'flex-start'} align={'flex-start'} vertical gap={16} style={{ width: '100%', padding:"6em 8em" }}>
                            <Typography.Title level={1}  type="danger" style={{margin: "14px 8px"}}>
                                Food Like Home
                            </Typography.Title>
                            <Link to={"order/mealplan"}>
                                <Button type={'primary'} size={'large'}>Order Tiffin Now!</Button>
                            </Link>
                        </Flex>
                        
                    </div>
                </div>
                
            </div>

            <div>
                <div style={{position:"relative"}}>
                    <img width={'100%'} src={imageUrl('images/site/slider_show_2.png')} />
                    <div style={textOverLay}>

                        <Flex justify={'flex-start'} align={'flex-start'} vertical gap={16} style={{ width: '100%', padding:"6em 8em" }}>
                            <Typography.Title level={1}  type="danger" style={{margin: "14px 8px"}}>
                                Get Your Tiffin Today
                            </Typography.Title>
                        </Flex>
                    </div>
                </div>
                
            </div>

            <div>
                <div style={{position:"relative"}}>
                    <img width={'100%'} src={imageUrl('images/site/slider_show_3.png')} />
                    <div style={textOverLay}>
                        <Flex justify={'flex-start'} align={'flex-start'} vertical gap={16} style={{ width: '100%', padding:"6em 8em" }}>
                                <Typography.Title level={1}  type="danger" style={{margin: "14px 8px"}}>
                                    You are one step close
                                </Typography.Title>
                        </Flex>
                    </div>
                </div>
                
            </div>

        </Carousel>
    );
};
export default CarouselSlider;