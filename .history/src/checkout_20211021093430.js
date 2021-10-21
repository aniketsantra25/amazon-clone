import React from 'react';
import { useStateValue } from './State'

function Checkout() {
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            
        </div>
    )
}

export default Checkout
