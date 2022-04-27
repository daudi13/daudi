import React from "react";
import Slider from "react-slick"
import './Casourel.css'
import Card from "./Card";
import imgi from './images/FaceApp_1646036824892.jpg'

const Casourel = () => (
  <Slider>
    <Card img={imgi}/>
  </Slider>
)

export default Casourel