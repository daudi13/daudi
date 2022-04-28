import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import emmanuel from '../images/emmanuel.jpeg';
import nemwel from '../images/nemwel.jpeg';
import souad from '../images/souad.jpeg';
import soufiane from '../images/soufiane.jpeg';

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      <div className="carosel-wrapper">
        <div className="myCarousel">
          <img src={souad} alt='souad' />
          <h3 className='name'>Souad El Mansouri</h3>
          <h4 className="job">Full-stack developer</h4>
        </div>
        <div className="myCarousel">
          <img src={emmanuel} alt='Emmanuel Jolugbo' />
          <h3 className='name'>Emmanuel Jolugboi</h3>
          <h4 className="job">Software Engineer</h4>
        </div>
        <div className="myCarousel">
          <img src={nemwel} alt='Nemwel Nyandoro' />
          <h3 className='name'>Nemwel Nyandoro</h3>
          <h4 className="job">Front-end Developer</h4>
        </div>
        <div className="myCarousel">
          <img src={soufiane} alt='Soufiane Boursen' />
          <h3 className='name'>Soufiane Boursen</h3>
          <h4 className="job">Full-stack developer</h4>
        </div>
      </div>
    </Carousel>
  )
}

export default Testimonials