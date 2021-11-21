import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';

import './styles.css';

export function Product({ info }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className='product'>
      <Link to={'/products/' + info.id}><img src={info.image} alt={info.title} /></Link>
      <div className='info'>
        <Link to={'/products/' + info.id}>{info.title}</Link>
        <strong>R$ {info.price.toFixed(2)}</strong>
        <button onClick={() => addProduct(info)} >Add to Cart</button>
      </div>
    </div>
  );
}