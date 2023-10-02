import React from 'react';
import CarouselSlider from '../components/CarouselSlider'
import ContentCards from '../components/contentCards';

function Welcome() {
    return (
        <>
            <CarouselSlider />
            
            <div className="dashboard">
                <h1>Welcome Page</h1>
            </div>

            <ContentCards />
        </>
    );
  }
  
  export default Welcome;
  