import React from "react"
import {Link} from "react-scroll"
import '../../common/style/base.css'

import visa from './img/visa.png'
import master from './img/master-card.png'
import paypal from './img/paypal.png'
import twitter from './img/Twitter.svg'
import facebook from './img/Facebook.svg'
import instagram from './img/Instagram.svg'
import bitcoin from './img/bitcoin.png'
import top from './img/top.svg'

const Footer = () => {
	
  return (
    <footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col-xl-7 mb-4 mb-xl-0">
					<nav>
						<ul className="footer-menu d-sm-flex">
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">Shop</Link></li>
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">About Us</Link></li>
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">Careers</Link></li>
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">FAQ </Link></li>
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">Blog</Link></li>
							<li className="footer-menu-item"><Link to="/" className="footer-menu-link">Contacts</Link></li>
						</ul>
					</nav>
				</div>

				<div className="col-lg-3 d-flex align-items-center">
					<span className="footer-text">Follow Us</span>
					<span className="footer-social d-inline-flex align-items-center">
            <a href="https://www.facebook.com/" className="social-link">
              <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://twitter.com/" className="social-link">
              <img src={twitter} alt="Twitter"/>
            </a>
            <a href="https://www.instagram.com" className="social-link">
              <img src={instagram} alt="Instagram"/>
            </a>
          </span>
				</div>
			
				<div className="col-xl-2 col-lg-3 d-flex justify-content-lg-end mt-4 mt-lg-0">
					<span className="footer-text">© 2021 Universal UI Kit</span>
				</div>
				
			</div>
	
			<hr className="footer-line mt-4 mb-4"/>
			<div className="row justify-content-between">
				<div className="col-lg-4 col-sm-9">
					<img className="payment-logo" src={visa} alt="visa logo"/>
					<img className="payment-logo" src={master} alt="master card logo"/>
					<img className="payment-logo" src={paypal} alt="paypal logo "/>
					<img className="payment-logo" src={bitcoin} alt="bitcoin logo"/>
				</div>
			
				<div className="col-lg-2 col-sm-1 d-flex justify-content-end">
					 <div  className="scroll-link top-link d-flex align-items-center">
						<span className="top-link-text">Top</span>
						
						

		<Link 
    	spy={true}
    	smooth={true}
    	offset={-70}
   	 	duration={2000} to="start">
			<img src={top} alt="icon: arrow top"/>
		</Link>
		</div>
		</div>
		</div>
		</div>
	</footer>
  )
}

export default Footer


