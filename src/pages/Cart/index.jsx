import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { CartContext } from '../../contexts/cart';

import trashIcon from '../../assets/trash-2.svg';

import './styles.css';

export function Cart() {
  const { cart, removeProduct, changeQuantity } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main id='cart-page'>
        <h2>Dê uma olhada no seu carrinho!</h2>
        <ul id='list'>
          {
            cart.length > 0 ? cart.map(product => (
              <li key={product.id} className='cart-item'>
                <Link to={'/products/' + product.id}>{product.title}</Link>
                <div>
                  <strong>R$ {(product.price * product.quantity).toFixed(2)}</strong>
                  <input type='number' min='1' value={product.quantity} onChange={(e) => changeQuantity(product.id, e.target.value)} />
                  <button onClick={() => removeProduct(product.id)}>
                    <img src={trashIcon} alt='Trash Icon' />
                  </button>
                </div>
              </li>
            )) :
            <p>Bem...</p>
          }
        </ul>
        <div id='total'>
          <p><strong>Total:</strong> R$ {cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2)}</p>
          <button>Finalizar Compra</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}