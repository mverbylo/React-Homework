import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './Section.module.scss';
import FormLogin from '../FromLogin';
import FormSignup from '../FormSignup';
const { section, headering, text} = styles;
const Section = ({ contentHeadering, contentText }) => {
  return (
    <section className={section}>
      <h1 className={headering}>{contentHeadering}</h1>
      {contentText && <p className={text}>{contentText}</p>}
      <Switch>
        <Route path="/signup" exact component={FormSignup} />
        <Route path="/" exact component={FormLogin} />
      </Switch>
    </section>
  );
};

export default Section;
