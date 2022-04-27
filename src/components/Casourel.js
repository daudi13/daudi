import React from "react";
import { Carousel } from "react-bootstrap";
import './Casourel.css'
import img from './images/FaceApp_1646036824892.jpg'

const Casourel = () => (
  <Carousel fade>
  <Carousel.Item>
      <div className="carosel">
        <img src={img} alt="David ouma" />
        <div className="content">
          <p>
            When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset. Highly recommended!!
          </p>
        </div>
      </div>
    
  </Carousel.Item>
    <Carousel.Item>
      <div className="carosel">
        <img src={img} alt="David ouma" />
        <div className="content">
          <p>
            When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset. Highly recommended!!
          </p>
        </div>
      </div>
  </Carousel.Item>
    <Carousel.Item>
      <div className="carosel">
        <img src={img} alt="David ouma" />
        <div className="content">
          <p>
            When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset. Highly recommended!!
          </p>
        </div>
      </div>
  </Carousel.Item>
</Carousel>
)

export default Casourel