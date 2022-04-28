import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import emmanuel from '../images/emmanuel.jpeg';
import nemwel from '../images/nemwel.jpeg';
import souad from '../images/souad.jpeg';
import soufiane from '../images/soufiane.jpeg';
import './Testimonials.css'

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
          <p className="desc">
            David is a great developer and coding partner. I had an opportunity to build a project with Him through remote paired programming and the experience was one of the best. As a team player, he helps when requested and participates in all group activities making sure the goal of the team is achieved.
          </p>
        </div>
        <div className="myCarousel">
          <img src={emmanuel} alt='Emmanuel Jolugbo' />
          <h3 className='name'>Emmanuel Jolugboi</h3>
          <h4 className="job">Software Engineer</h4>
          <p>
            David is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed several times together while enrolled at Microverse a software development program, and during that time his work ethic blew me away. David views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI.
          </p>
        </div>
        <div className="myCarousel">
          <img src={nemwel} alt='Nemwel Nyandoro' />
          <h3 className='name'>Nemwel Nyandoro</h3>
          <h4 className="job">Front-end Developer</h4>
          <p className="desc">
            ...David played the role of the team leader in a project that we worked on while students at Microverse and aside from his technical skills his people skills shined. He is an empathetic team leader who understands that things are not always easy for everyone and he uses his communication skills to encourage you and helps you come to par with the rest of the team.
          </p>
        </div>
        <div className="myCarousel">
          <img src={soufiane} alt='Soufiane Boursen' />
          <h3 className='name'>Soufiane Boursen</h3>
          <h4 className="job">Full-stack developer</h4>
          <p className="desc">
            When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset
          </p>
        </div>
      </div>
    </Carousel>
  )
}

export default Testimonials