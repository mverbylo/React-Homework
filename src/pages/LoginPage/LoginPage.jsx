import React, { Component } from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionAbout from '../../components/SectionAbout';

class LoginPage extends Component {
  render() {
    return (
      <>
        <Header path="/signup" namePath="Signup" />
        <Section contentHeadering="LOGIN TO YOUR ACCOUNT" />
        <SectionAbout
          headeringContent="Login"
          textContent="Logging in is usually used to enter a specific page, website or application, which trespassers cannot see. Once the user is logged in, the login token may be used to track what actions the user has taken while connected to the site. Logging out may be performed explicitly by the user taking some actions, such as entering the appropriate command or clicking a website link label as such. It can also be done implicitly, such as by the user powering off his or her workstation, closing a web browser window, leaving a website, or not refreshing a website within a defined period."
        />
      </>
    );
  }
}

export default LoginPage;
