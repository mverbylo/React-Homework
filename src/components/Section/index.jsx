import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './Section.module.scss';
import FormLogin from '../FromLogin';
import FormSignup from '../FormSignup';
const { section, heading, text } = styles;
const Section = () => {
  return (
    <section className={section}>
      <Switch>
        <Route path="/signup" exact>
          <h1 className={heading}>CREATE AN ACCOUNT</h1>
          <p className={text}>
            We always keep your name and email address private.
          </p>
          <FormSignup />
        </Route>
        <Route path="/" exact>
          <h1 className={heading}>LOGIN TO YOUR ACCOUNT</h1>
          <FormLogin />
        </Route>
      </Switch>
    </section>
  );
};

export default Section;
