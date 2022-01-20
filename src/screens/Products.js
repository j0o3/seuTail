import React from 'react';
import '../screens/products.css'
import ProductCardbox from '../components/ProductCardbox';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Products() {
  return (
    <>
       <Header />

        <div className="container_textprod">
          <h4>Our Product</h4>

          <div className="navprod_menu">
            <span>all product</span>
            <span>t-shirt</span>
            <span>dress</span>
            <span>hoodie</span>
            <span>coat</span>
            <span>jacket</span>
          </div>
        </div>

        <div className="container_menuprod">
          
          <ProductCardbox image={require('../assets/product-img1.png')} title="Hoodie Pink New York City" cost="$33.00" />

          <ProductCardbox image={require('../assets/product-img2.png')} title="White Maxi Dress Flower" cost="$66.00" />

          <ProductCardbox image={require('../assets/product-img3.png')} title=" Elegant White Maxi Dress" cost="$69.00" />

          <ProductCardbox image={require('../assets/product-img4.png')} title="White Casual Shirt" cost="20.00" />

        </div>

        <div className="container_menuprod">

        <ProductCardbox image={require('../assets/product-img5.jpg')} title="Black Jacket sigma style" cost="$66.00" />

        <ProductCardbox image={require('../assets/product-img4.jpg')} title="White shirt" cost="$60.00" />

        <ProductCardbox image={require('../assets/product-img6.jpg')} title="Young Brown Coat" cost="$72.00" />

        <ProductCardbox image={require('../assets/product-img7.jpg')} title="White feather Sweater " cost="$70.00" />

        </div>

        <div className="suggestion_container">

          <div className="minibox_wrap">
              <div className="heading"><span>you may also like</span></div>
              <div className="minibox">
                  <img src={require('../assets/bohemian.jpg')} />
                  <div className="textsuggest_wrap">
                    <h3>bohemian style</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam </p>
                  </div>
              </div>

              <div className="minibox">
                  <img src={require('../assets/street.jpg')} />
                  <div className="textsuggest_wrap">
                    <h3>street style</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam </p>
                  </div>
              </div>

              <div className="minibox">
                  <img src={require('../assets/casual.jpg')} />
                  <div className="textsuggest_wrap">
                  <h3>casual style</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam </p>
                  </div>
                  
              </div>
          </div>

          <div className="bigbox">
              <img src={require('../assets/coat.jpg')} />
          </div>


        </div>


        <Footer />

    </>
  ); 
}

export default Products;
