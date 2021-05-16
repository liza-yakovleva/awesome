import React from "react";
import logo from './logo.jpg'
import '../../../common/style/base.css'
import {Link} from "react-router-dom"
import Tilt from 'react-parallax-tilt';
const Logo = () => {
  return (
   	 <Tilt
    className="track-on-window"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.75}
    glarePosition="all"
    scale={1.02}
    trackOnWindow={true}
  >
   	  <Link to="/" className="logo-image">	<img width="128" src={logo} alt="Awesome" /></Link>
   	</Tilt>  
  )
}

export default Logo