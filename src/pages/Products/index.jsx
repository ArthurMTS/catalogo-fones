import React from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';

import arrowIcon from '../../assets/chevrons-up.svg';

import './styles.css';

export function Products({ products }) {
  return (
    <div>
      <Header />
      <main id='product-list'>
        {
          products.map(product => (
            <Product key={product.id} info={product} />
          ))
        }
        <a href='#main-header' id='go-up'>
          <img src={arrowIcon} alt='Chevrons up' />
        </a>
      </main>
      <Footer />
    </div>
  );
}