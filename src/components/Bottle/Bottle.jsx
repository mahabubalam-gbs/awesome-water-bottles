import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { img, name, price, stock } = bottle;

    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Stock Available: {stock}</p>
            <button onClick={() => { handleAddToCart(bottle) }} className='button'>Buy Now</button>
        </div>
    );
};

export default Bottle;