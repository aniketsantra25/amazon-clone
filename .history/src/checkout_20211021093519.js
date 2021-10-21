import React from 'react';
import { useStateValue } from './StateProvider';

function Checkout() {
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            <img className=""
        </div>
    )
}

export default Checkout
