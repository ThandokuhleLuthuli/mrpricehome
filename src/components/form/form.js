import React from 'react';
import Button from '../button/button';

function Form({isHidden,handleClick}) {
    return (
        <div className="form-overlay" id="form" hidden={isHidden}>
            <span className="close" onClick={handleClick}>close</span>
            <form className="form" id="formModal">
                <div className="form-wrapper">
                <h2 className="form-heading">Enter and stand a chance to win a <span className="highlight">R2000</span> Mr price home voucher</h2>
                <div className="form-group">
                    <label>
                        <input type="text" placeholder="Name"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Surname"/>
                    </label>
                </div>
                <label className="form-label">
                    <input type="text" placeholder="Phone number"/>
                </label>
                <label className="form-label">
                    <input type="text" placeholder="Email address"/>
                </label>
                <label className="form-label">
                    <input type="text" placeholder="Date of birth"/>
                </label>
                <Button type="link" name="Enter now" modifer="primary"/>
                <p className="form-text"> By entering this competition, you are agreeing to our <span className="terms"><u>T's & C's</u></span></p>
                </div>
            </form>
        </div>
    )
}

export default Form;