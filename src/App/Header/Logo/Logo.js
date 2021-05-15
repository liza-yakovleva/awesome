import React from "react";
import logo from './logo.jpg'
import '../../../common/style/base.css'
import {Link} from "react-router-dom"

const Logo = () => {
  return (
   	 
   	  <Link to="/">	<img width="128" src={logo} alt="Awesome" className="logo-image"/></Link>
   	  
  )
}

export default Logo