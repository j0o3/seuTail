import React from 'react';
import '../screens/about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Header />

    <div className="aboutus_wrap">
        <div className="aboutus_text">
            <h1>about us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Semper lorem facilisis sed scelerisque eu tellus, sed. 
            Proin velit ac malesuada ac nibh aliquam tristi
            </p>
        </div>

        <div className="big_logo">
            <img src={require('../assets/logo-about.png')}/>
        </div>
    </div>

    <div className="blackbox">
        <div className="blackbox_text">
            <span>with seuTail</span>
            <h1>make your fashion more perfect</h1>
        </div>

        <div className="groupbox_warp">

                 <img src={require('../assets/about-img1.jpg')}/>

                <img src={require('../assets/about-img2.jpg')}/>

                <img src={require('../assets/about-img3.jpg')}/>

        </div>
    </div>

    <Footer />
    </>
  );
}

export default About;
