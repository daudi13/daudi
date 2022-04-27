import React from "react";
import { Carousel } from "react-bootstrap";
import './Casourel.css'
import img from './images/FaceApp_1646036824892.jpg'

const Casourel = () => (
      <div className="carosel">
        <img src={img} className="profilePic" alt="David ouma" />
        <div className="content">
          <p className="text">
            When I think of David, the first thing that comes to mind is Solid Foundations. He is always striving to use the best practices in his websites, writing good quality code all while meeting deadlines. He is a diligent programmer, with a keen eye for details, and a goal-oriented mindset. Highly recommended!!
          </p>
        </div>
      </div>
)

export default Casourel