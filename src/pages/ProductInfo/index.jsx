import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { CartContext } from '../../contexts/cart';

import './styles.css';

export function ProductInfo({ products }) {
  const { id } = useParams();
  const [ product ] = products.filter(product => product.id === Number(id));
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main id='product-info'>
        <img id='product-image' src={product.image} alt={product.title} />
        <p id='title'>{product.title}</p>
        <p id='description'>{product.description}</p>
        <div>cores</div>
        <span id='branding'>Marca: {product.branding}</span>
        <strong>R$ {product.price.toFixed(2)}</strong>
        <button onClick={() => addProduct(product)}>Add to Cart</button>
      </main>
      <Footer />
    </div>
  );
}