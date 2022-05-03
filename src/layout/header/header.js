import React from 'react';
import Button from '../../components/button/button';
import Logo from '../../assets/images/Mr-Price-Home.png';
import basket from '../../assets/images/shopping-basket.svg';



function Header() {
    return (
        <header className="header">
            <div className="container">
                    <div className="header-wrapper">

                      <img className="header-logo" src={Logo} alt="Mr price home logo"/>

                        <Button type="link" name="Shop" modifer="secondary" image="yes" img={basket}/>
                    </div>
            </div>

        </header>
    )
}

export default Header;