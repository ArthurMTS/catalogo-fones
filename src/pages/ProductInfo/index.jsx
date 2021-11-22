import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

import { CartContext } from '../../contexts/cart';

import './styles.css';

export function ProductInfo({ products }) {
  const { id } = useParams();
  const [ product ] = products.filter(product => product.id === Number(id));

  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Header />
      <main id='product-info'>
        <img id='product-image' src={product.image} alt={product.title} />
        <p id='title'>{product.title}</p>
        <p id='description'>{product.description}</p>
        <div id='colors'>
          {
            product.colors.map((color, index) => 
              <div key={index} style={{ backgroundColor: color }}></div>)
          }
        </div>
        <span id='branding'>Marca: {product.branding}</span>
        <strong>R$ {product.price.toFixed(2)}</strong>
        <Button onClick={() => addProduct(product)}>Adicionar ao carrinho</Button>
      </main>
      <Footer />
    </>
  );
}