import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, seller, price, ratings, img } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p style={{ margin: '10px 0' }}>Price: ${price}</p>
                <p style={{ margin: '20px 0 0px' }}><small>Merchant: {seller}</small></p>
                <p style={{ margin: '0 0 15px' }}><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className="cart-btn">
                <p className="cart-text">Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;