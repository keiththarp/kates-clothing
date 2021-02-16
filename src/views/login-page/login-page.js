import React from 'react';

import Login from '../../components/login/login'
import SignUp from '../../components/sign-up/sign-up'

import './login-page.scss';

const LoginPage = () => (
  <div className='login-page'>
    <Login />
    <SignUp />
  </div>
);

export default LoginPage;