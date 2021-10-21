import React from 'react'
import "./Product.css";
function Product({ id, title, image, price, rating}) {
    
    const addToBasket = () => {};

    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_)=>(
                    <p>⭐</p>
                ))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
