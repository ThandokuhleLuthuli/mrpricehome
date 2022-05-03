import React from 'react';
import Button  from '../button/button';
import Chair from '../../assets/images/chair.jpeg';
import { useState, useEffect } from 'react';
import Form from '../form/form';
import Carousel from '../carousel/carousel';



function Hero() {

    const [isOpen,setOpen] = useState(true)
    
    const handleShow = () => {
        setOpen(false)
     }
     
    const handleClose = () => {
        setOpen(true);
    }

    return (
        
        <div className="hero"> 
        <Form isHidden={isOpen} handleClick={handleClose}/>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="col-6 hero-heading">
                        <h1 className="hero-headline">Kit Out Your Home Office Or Digs Prize: Win 1 of 5 <span>R2000</span> Mr Price Home vouchers T’s & C’s:</h1>
                        <h2 className="hero-subheading">Now for the nitty gritty...</h2>
                        <p className="hero-copy">Competition runs from <strong>11 May – 11 June 2022</strong> only at Mr Price Home. Winners will be drawn by 14 June 2022 and announced on socials. T’s & C’s apply.</p>
                        < Button type="button" name="Enter now" modifer="primary" toggle="modal "target="form" handleClick={handleShow}/>
                    </div>
                    <div className="col-6 hero-carousel">
                        {/* <img src={Chair} alt=""/> */}
                        <Carousel/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;