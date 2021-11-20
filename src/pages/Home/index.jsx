import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import './styles.css';

export function Home() {
  return (
    <div>
      <Header />
      <main id='home'>
        <div id='info'>
          <h2>BlueFones</h2>
          <p>Encontre o fone bluetooth certo para as suas necessidades.</p>
          <Link to='/products'>Olhar produtos agora</Link>
        </div>
        <aside></aside>
      </main>
      <Footer />
    </div>
  );
}