import React from 'react';
import { Link } from 'react-router-dom';
import '../components/cardtren.css';

function CardTrend() {
  return (
    <>

    <div className="section_trend">

        <div className="header-trend">
            <h4>Trending Clothes</h4>
            <div><Link to="./screens/Products" class="btn_more">See More</Link> </div>
        </div>

        <div className="container_card_trend">
            <div className="card_trend">
                <div><img className="img_card" src={require('../assets/card-trend1.jpg')}/></div>
                <div className="card-text">            
                    <h2>Title Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor quis congue</p>
                    <Link to="#" className="btn_view">View More</Link>
                </div>
            </div>

            <div className="card_trend">
                <div><img className="img_card" src={require('../assets/card-trend2.jpg')}/></div>
                <div className="card-text">            
                    <h2>Title Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor quis congue</p>
                    <Link to="#" className="btn_view">View More</Link>
                </div>
            </div>

            <div className="card_trend">
                <div><img className="img_card" src={require('../assets/card-trend3.jpg')}/></div>
                <div className="card-text">            
                    <h2>Title Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor quis congue</p>
                    <Link to="#" className="btn_view">View More</Link>
                </div>
            </div>

            <div className="card_trend">
                <div><img className="img_card" src={require('../assets/card-trend4.jpg')}/></div>
                <div className="card-text">            
                    <h2>Title Card</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque dolor quis congue</p>
                    <Link to="#" className="btn_view">View More</Link>
                </div>
            </div>


        </div>        
    
    </div>

    </>
  );
}

export default CardTrend;
