import React from 'react';
import { useStateValue}

function Checkout() {
    
    const [{basket}] = useStateValue();
    
    return (
        <div className="checkout">
            
        </div>
    )
}

export default Checkout
