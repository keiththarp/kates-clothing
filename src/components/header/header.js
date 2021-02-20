import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='crown' /><h1 className='logo'>Kate's Clothes</h1>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/art'>
        Art
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>

      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>Logout</div>
          :
          <Link className='option' to='/login'>
            Login
          </Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
// destructuring state.user.currentUser & state.cart.hidden
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);