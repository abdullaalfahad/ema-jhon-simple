import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = (props) => {
    const { handleRemove, product } = props;
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='item-details'>
                <div className='item-text'>
                    <h5>{name}</h5>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Shipping: {shipping}</p>
                </div>
                <div>
                    <button onClick={() => handleRemove(product)} className='delete'>
                        <FontAwesomeIcon className='delete-btn' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;  