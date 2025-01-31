import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoc.png';

function Footer() {
  return (
    <footer>
      <img style={{ objectFit: "contain" }} id="logo" src={Logo} alt="Logo" />
      <span>Todos os direitos reservados©</span>
      <span>Desenvolvido por: Gustavo Fernando Vilani</span>

      <nav class="footer-navigation">
      <ul class="footer-list">
          <Link style={{ textDecoration: 'none' }} to='/'>
            <li>Home</li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/fotos'>
            <li>Fotos</li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/coringatwo'>
            <li>Coringa 2</li>
          </Link>

          <Link style={{ textDecoration: 'none' }} to='/comentarios'>
            <li>Comentários</li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
