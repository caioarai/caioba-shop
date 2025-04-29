import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { CiLogin } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <span>
          <NavLink to="/" className={styles.brand}>
            <img src="/logo_caioba.png" alt="Logo da loja" />
          </NavLink>
          <h1>CAIOBA&apos;S SHOP</h1>
        </span>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">PRODUTOS</NavLink>
          </li>
          <li>
            <NavLink to="/contato">CONTATO</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.login}>
              ENTRAR <CiLogin />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
