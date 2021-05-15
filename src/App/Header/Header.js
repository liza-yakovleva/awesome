import React from "react";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Cart from './Cart/Cart';
import '../../common/style/base.css'
import './Menu/menu.css'


const Header = ({handleShowModalBin}) => {
  return (
   

	<header id="sec1" className="container header px-4 px-md-0">
		<div className="row justify-content-between align-items-center">
			<div className="col-lg-2 col-6">
				<Logo/>
			</div>
			<div className="col-lg-6 d-none d-lg-block">
				<nav>
					<ul className="navigation d-flex justify-content-around">
						<Menu/>

					</ul>
				</nav>
			</div>
			<div className="col-lg-2 col-6 d-flex justify-content-end">
			<Cart handleShowModalBin={handleShowModalBin}/>
			</div>
		</div>
	</header>




   
  )
}

export default Header