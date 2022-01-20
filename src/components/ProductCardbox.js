import React from 'react';
import { Link } from 'react-router-dom';
import '../components/productcardbox.css';

function ProductCardbox(props) {
  return (
    <>
        <div className="product_cardbox">
              <img className="img_product" src={props.image}/>
              <div className="product_cardbox_items">
                <h4>{props.title}</h4>
                <span>{props.cost}</span>
                <div><Link to="#" className='buy_btn'>Buy Now</Link></div> 
              </div>
          </div>
    </>
  );
}

export default ProductCardbox;
