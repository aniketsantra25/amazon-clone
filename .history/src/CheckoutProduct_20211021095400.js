import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="CheckoutProduct">
            <img src={image} alt="" />
            
        </div>
    )
}

export default CheckoutProduct
