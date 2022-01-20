import React from 'react';
import { Link } from 'react-router-dom';
import '../components/boxabout.css';

function BoxAbout() {
  return (
    <>

    <div className="cardbox_about">
        <Link to="/screens/About"></Link>
    </div>

    </>
  );
}

export default BoxAbout;
