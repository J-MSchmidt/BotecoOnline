import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.bmp';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="SOS Recicle" />
        </header>

        <main>
          <h1>BotecoOnline.</h1>
          <p>
            Encontre seu ponto de coleta ideal.
          </p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre aqui</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
