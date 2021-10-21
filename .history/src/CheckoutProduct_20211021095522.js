import React from 'react'

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info"></div>
        </div>
    )
}

export default CheckoutProduct
