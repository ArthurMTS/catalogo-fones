import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductInfo } from './pages/ProductInfo';
import { Cart } from './pages/Cart';

import { CartProvider } from './contexts/cart';

import './global.css';

export function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/products' element={<Products />}>
            <Route path=':id' element={<ProductInfo />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}