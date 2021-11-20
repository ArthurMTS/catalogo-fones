import React, { useState } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Product } from '../../components/Product';
import { Loading } from '../../components/Loading';

import arrowIcon from '../../assets/chevrons-up.svg';

import './styles.css';

export function Products() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Header />
      <main id='product-list'>
        {
          products.length > 0 ? 
            products.map(product => (
              <Product key={product.id} info={product} />
            )) :
            <Loading />
        }
        <a href='#main-header' id='go-up'>
          <img src={arrowIcon} alt='Chevrons up' />
        </a>
      </main>
      <Footer />
    </div>
  );
}