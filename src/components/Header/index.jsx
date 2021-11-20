import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';

import headPhone from '../../assets/headphones.svg';
import shoppingCart from '../../assets/shopping-cart.svg';
import './styles.css';

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header id='main-header'>
      <Link id='home-link' to='/'>
        <img src={headPhone} alt='bag icon' />
        <h1>BlueFones</h1>
      </Link>
      <nav id='navbar'>
        <ul>
          <li className='nav-link'><Link to='/'>Início</Link></li>
          <li className='nav-link'><Link to='/products'>Produtos</Link></li>
          <li id='cart' className='nav-link'><Link to='/cart'><img src={shoppingCart} alt='cart icon'/>{cart.length}</Link></li>
        </ul>
      </nav>
    </header>
  );
}