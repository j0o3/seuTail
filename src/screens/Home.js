import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-header.png';
import '../screens/home.css';
import '../components/CardTrend';
import CardTrend from '../components/CardTrend';
import Explore from '../components/Explore';
import BoxAbout from '../components/BoxAbout';
import Footer from '../components/Footer';

function Home() {
  return (
    <>

    <header>
        <div className='navbar'>

        <img className="nav_logo" src={logo} />

            <div className='nav_link'>     
              <div><Link to={"/"} className="nav_text">Home</Link></div>
              <div><Link to={"/screens/Products"} className="nav_text">Product</Link></div>
              <div><Link to="/screens/About" className="nav_text">About</Link></div>               
            </div>
            
            <div><Link to="#" className='nav_btn'>Log In</Link></div> 
                
        </div>

        <div className="hero_section">
            <h3>it's time to step up</h3>
            <p>Lorem ipsum dolor sit amet adipiscing elit. Sed urna sed neque quis quam aliquam Nec.</p>
            <div><Link to={"/screens/Products"} className='btn_shopnow'>Shop Now</Link></div> 
        </div>

    </header>

    <CardTrend />
    <Explore />
    <BoxAbout />
    <Footer />

    
    </>
  );
}

export default Home;
