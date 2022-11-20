import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './FromLogin.module.scss';

import createInput from '../../functions/createInput';
import login from '../../functions/login';

import Btn from '../Btn';
import Checkbox from '../Checkbox';

const { form, input, smText, wrapper } = styles;
const initialState = {
  email: '',
  password: '',
  isRememberMe: false,
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
    const { email, password, isRememberMe } = this.state;
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
        type: 'password',
        value: password,
        placeholder: 'Password',
        pattern:
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
      },
    ];

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
          <Link className={smText} to="/">
            Forgot Password
          </Link>
        </div>
        <Btn content="LOGIN" />
      </form>
    );
  }
}

export default FromLogin;
