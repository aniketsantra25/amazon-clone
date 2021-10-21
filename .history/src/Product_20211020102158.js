import React from 'react'
import "./Product.css";
function Product({ id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info"></div>
            
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product
