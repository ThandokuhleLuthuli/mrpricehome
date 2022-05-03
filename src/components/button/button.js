import React from 'react';

function Button({type,name,modifer,image,handleClick,img}) {
    return(
        <button  className={`button button--${modifer} button--${image}`} type={type} onClick={handleClick}  >
            {name} <img src={img} alt="shopping basket"/>
        </button>
    )
}

export default Button;