import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart-container'>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Cart;