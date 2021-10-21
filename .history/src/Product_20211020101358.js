import React from 'react'
import "./Product.css";
function Product({ id, title, image, price, rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                Array
            </div>
        </div>
    )
}

export default Product