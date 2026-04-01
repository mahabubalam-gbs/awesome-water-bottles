import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);
    const bottles = use(bottlesPromise);

    // useEffect
    useEffect(() => {
        const StoredCartIds = getStoredCart();

        const storedCart = [];

        for (const id of StoredCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);

    }, [bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle]
        setCart(newCart)

        // save the bottle id in the storage
        addToStoredCart(bottle.id)
    }

    const handleRemoveCart = (id) => {
        console.log('remove item from the cart', id);
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart
                handleRemoveCart={handleRemoveCart}
                cart={cart}
            ></Cart>
            <div className='bottles-container '>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;