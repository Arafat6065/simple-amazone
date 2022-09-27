import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { handleAddToCart, product } = props;
    const { name, img, seller, price, ratings } = product;



    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p>Manufacturar:{seller}</p>
                <p>Ratting:{ratings}stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;