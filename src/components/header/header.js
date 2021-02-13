import React from 'react';
import './header.scss'

import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <h1>Kate's Clothes</h1>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
);

export default Header;