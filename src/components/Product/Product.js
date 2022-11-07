import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
  const {id, name, img, seller, price, ratings} = product;
  return (
    <div className='product' id={id}>
      <img src={img} alt="product" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Ratings: {ratings}</small></p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='cart-btn'>
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
}

export default Product;
