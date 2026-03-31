import React from 'react';

const Cart = ({ cart }) => {

    return (
        <div>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                </div>)
            }
        </div>
    );
};

export default Cart;