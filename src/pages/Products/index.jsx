import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';

import arrowIcon from '../../assets/chevrons-up.svg';

import './styles.css';

export function Products({ products }) {
  const [filter, setFilter] = useState('');

  function handleInput({ target: { value } }) {
    setFilter(value.toLowerCase());
  }

  return (
    <>
      <Header />
      <main id='product-list'>
        <input
          id='filter'
          type='text' 
          placeholder='Pesquisar...' 
          onChange={handleInput}
        />
        {
          products.filter(({ title, branding }) => (
            (title.toLowerCase().includes(filter) ||
            branding.toLowerCase().includes(filter)) ?
              true :
              false
          )).map(product =>
            <Product key={product.id} info={product} />
          )
        }
        <a href='#product-list' id='go-up'>
          <img src={arrowIcon} alt='Chevrons up' />
        </a>
      </main>
      <Footer />
    </>
  );
}