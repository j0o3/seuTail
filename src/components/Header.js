import React from 'react';
import logo from '../assets/logo-header.png';
import { Link } from 'react-router-dom';
import '../components/header.css';

function Header() {
  return (
    <>
    <div className='navbar_products'>

        <img className="navprod_logo" src={logo} />

        <div className='navprod_link'>     
        <div><Link to={"/"} className="navprod_text">Home</Link></div>
        <div><Link to={"/screens/Products"} className="navprod_text">Product</Link></div>
        <div><Link to="/screens/About" className="navprod_text">About</Link></div>               
        </div>

        <div><Link to="#" className='nav_btn'>Log In</Link></div> 
    
    </div>
    </>
  );
}

export default Header;
