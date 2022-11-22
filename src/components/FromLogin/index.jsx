import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './FromLogin.module.scss';

import createInput from '../../functions/createInput';
import login from '../../functions/login';

import Btn from '../Btn';
import Checkbox from '../Checkbox';

const { form, input, wrapper } = styles;
const initialState = {
  email: '',
  password: '',
  isRememberMe: false,
  type: 'password',
};

class FromLogin extends Component {
  state = {
    ...initialState,
  };
  submitHandler = (e) => {
    e.preventDefault();
    login(this.state);
    this.setState({ ...initialState });
  };
  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  render() {
    const { email, password, isRememberMe, type } = this.state;
    const inputData = [
      {
        name: 'email',
        type: 'email',
        value: email,
        placeholder: 'Email address',
        pattern: '[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+',
      },
      {
        name: 'password',
        type: type,
        value: password,
        placeholder: 'Password',
        pattern:
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
      },
    ];
    const showHidePassword = () => {
      const { type } = this.state;
      if (type === 'password') {
        this.setState({ type: 'text' });
      } else {
        this.setState({ type: 'password' });
      }
    };
    return (
      <form className={form} onSubmit={this.submitHandler}>
        {createInput(inputData, input, this.handleChange)}

        <div className={wrapper}>
          <Checkbox
            content="Remember Me"
            onChange={this.handleChange}
            checked={isRememberMe}
            name="isRememberMe"
          />
          <button onClick={showHidePassword}>
            {type === 'password' ? 'Show' : 'Hide'} password
          </button>
          <Link to="/">Forgot Password</Link>
        </div>
        <Btn content="LOGIN" />
      </form>
    );
  }
}

export default FromLogin;
