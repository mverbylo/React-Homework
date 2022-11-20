import React, { Component } from 'react';

import styles from './FormSignup.module.scss';

import createInput from '../../functions/createInput';
import signup from '../../functions/signup';
import Btn from '../Btn';
import RadioBtn from '../RadioBtn';
import Checkbox from '../Checkbox';

const { form, input, wrapper } = styles;
const initialState = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  isBuyer: false,
  isAllow: false,
};

class FormSignup extends Component {
  state = {
    ...initialState,
  };
  submitHandler = (e) => {
    e.preventDefault();
    signup(this.state);
    this.setState({ ...initialState });
  };
  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
  render() {
    const {
      firstName,
      lastName,
      displayName,
      email,
      password,
      passwordConfirmation,
      isBuyer,
      isAllow,
    } = this.state;
    const pattern = {
      name: '[a-zA-Z]{3,30}',
      userName: '^[a-z0-9_-]{3,15}$',
      email: '[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+',
      password:
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
    };
    const inputData = [
      {
        name: 'firstName',
        type: 'text',
        value: firstName,
        placeholder: 'First name',
        pattern: pattern.name,
      },
      {
        name: 'lastName',
        type: 'text',
        value: lastName,
        placeholder: 'Last name',
        pattern: pattern.name,
      },
      {
        name: 'displayName',
        type: 'text',
        value: displayName,
        placeholder: 'Display name',
        pattern: pattern.userName,
      },
      {
        name: 'email',
        value: email,
        type: 'email',
        placeholder: 'Email address',
        pattern: pattern.email,
      },
      {
        name: 'password',
        value: password,
        type: 'password',
        placeholder: 'Password',
        pattern: pattern.password,
      },
      {
        name: 'passwordConfirmation',
        value: passwordConfirmation,
        type: 'password',
        placeholder: 'Password Confirmation',
        pattern: pattern.password,
      },
    ];

    return (
      <form className={form} onSubmit={this.submitHandler}>
        {createInput(inputData, input, this.handleChange)}
        <div className={wrapper}>
          <RadioBtn
            name={isBuyer}
            value="buyer"
            onChange={this.handleChange}
            content="Join As a Buyer"
            description="I am looking for a Name, Logo or Tagline for my business, brand or product."
          />
          <RadioBtn
            name={isBuyer}
            value="seller"
            onChange={this.handleChange}
            content="Join As a Creative or Marketplace Seller"
            description="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace."
          />
          <Checkbox
            content="Allow Squadhelp to send marketing/promotional offers from time to time"
            onChange={this.handleChange}
            checked={isAllow}
            name="isAllow"
          />
        </div>
        <Btn content="Create account" />
      </form>
    );
  }
}

export default FormSignup;
