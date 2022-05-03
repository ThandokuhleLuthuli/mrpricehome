import React from 'react';
import Desk from '../../assets/images/desk.jpeg';
import officeDesk from '../../assets/images/office-desk.jpg';
import officeladder from '../../assets/images/office-laddar.jpg';
import officelamp from '../../assets/images/desk-lamp.jpg';

function Carousel() {

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"  data-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={officeDesk} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={officelamp} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={officeladder} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    ) 
}

export default  Carousel;