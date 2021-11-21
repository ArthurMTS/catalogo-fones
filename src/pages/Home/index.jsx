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
        <section id='info'>
          <h2>BlueFones</h2>
          <p>Encontre o fone bluetooth certo para as suas necessidades.</p>
          <Link to='/products'>Olhar produtos agora</Link>
        </section>
        <section id='sobre'>
          <h2>Sobre a tecnologia</h2>
          <p>O Bluetooth provê uma maneira de conectar e trocar informações entre dispositivos como telefones celulares, notebooks, computadores, impressoras, câmeras digitais e consoles de videogames digitais através de uma frequência de rádio de curto alcance globalmente licenciada e segura. As especificações do Bluetooth foram desenvolvidas e licenciadas pelo "Bluetooth Special Interest Group".</p>
  
          <strong>Aplicações</strong>
          <ul>
            <li>Controle sem fio e comunicação entre celulares e fones de ouvido sem fio ou sistemas viva voz para carros. Essa foi uma das mais antigas aplicações da tecnologia a se tornar popular;</li>
            <li>Comunicação sem fio entre PCs em um espaço pequeno onde pequena banda é necessária;</li>
            <li>Comunicação sem fio entre PCs e dispositivos de entrada e saída, como mouse, teclados e impressoras;</li>
            <li>Consoles de videogames da nova geração – Wii U, PlayStation 3 e 4, Xbox One S e Xbox One X usam Bluetooth para seus respectivos controles sem fio;</li>
            <li>E outras mais.</li>
          </ul>
          <span>Para saber mais clique em <a href='https://pt.wikipedia.org/wiki/Bluetooth' target='_blank' rel='noreferrer'>Bluetooth</a>.</span>
        </section>
      </main>
      <Footer />
    </div>
  );
}