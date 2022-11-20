import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const { header, link } = styles;

const Header = ({ path, namePath }) => {
  return (
    <header className={header}>
      <Link to="/">
        <img src="https://www.squadhelp.com/img/logo.png" alt="logo" />
      </Link>
      <Link className={link} to={path}>
        {namePath}
      </Link>
    </header>
  );
};

export default Header;
