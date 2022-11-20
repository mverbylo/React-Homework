import React from 'react';
import styles from './SectionAbout.module.scss';
const { section, headering, text} = styles;
const SectionAbout = ({ headeringContent, textContent }) => {
  return (
    <section className={section}>
      <h1 className={headering}>{headeringContent}</h1>
      <p className={text}>{textContent}</p>
    </section>
  );
};

export default SectionAbout;
