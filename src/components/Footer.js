import React from 'react';
import '../components/footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
      <div><img className="logo_footer" src={require('../assets/logo-footer.png')}/></div>
      
      <div className="footer_icon_container">
        <img className="icon_footer" src={require('../assets/facebook.png')}/>
        <img className="icon_footer" src={require('../assets/insta.png')}/>
        <img className="icon_footer" src={require('../assets/twitter.png')}/>
      </div>

    </div>
    </>
  );
}

export default Footer;
