import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import emmanuel from '../images/emmanuel.jpeg';
import nemwel from '../images/nemwel.jpeg';
import souad from '../images/souad.jpeg';
import soufiane from '../images/soufiane.jpeg';

const Testimonials = () => {
  return (
    <Carousel>
      <div>
        <img src={souad} alt='souad' />
        <p className='legend'>Software Developer</p>
      </div>
      <div>
        <img src={emmanuel} alt='souad' />
        <p className='legend'>Software Developer</p>
      </div>
      <div>
        <img src={nemwel} alt='souad' />
        <p className='legend'>Software Developer</p>
      </div>
      <div>
        <img src={soufiane} alt='souad' />
        <p className='legend'>Software Developer</p>
      </div>
    </Carousel>
  )
}

export default Testimonials