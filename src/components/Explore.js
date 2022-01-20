import React from 'react';
import { Link } from 'react-router-dom';
import '../components/explore.css';

function Explore() {
  return (
    <>

    <div className="cardbox_explore">
        <span>Classy & Fabulous for you</span>
        <Link to="/screens/Products" className='btn_explore'>Explore More</Link>
    </div>

    </>
  );
}

export default Explore;
