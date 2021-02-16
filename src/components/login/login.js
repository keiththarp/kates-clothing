import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import './login.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.error(err);
    }

  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className='login'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleBtn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default Login;