import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle }) => {
    const { img } = bottle;
    console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;