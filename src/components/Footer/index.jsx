import React from 'react';

import github from '../../assets/github.svg';
import './styles.css';

export function Footer() {
  return (
    <footer id='main-footer'>
      <p>Criado por <a href='https://github.com/ArthurMTS' target='_blank' rel='noreferrer'>ArthurMTS</a></p>
      <a href='https://github.com/ArthurMTS/catalogo-fones' target='_blank' rel='noreferrer'><img src={github} alt='github icon' /></a>
    </footer>
  );
}