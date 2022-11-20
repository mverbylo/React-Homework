import React, { Component } from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import SectionAbout from '../../components/SectionAbout';
class SignupPage extends Component {
  render() {
    return (
      <>
        <Header path="/" namePath="Login" />
        <Section
          contentHeadering="CREATE AN ACCOUNT"
          contentText="We always keep your name and email address private."
        />
        <SectionAbout
          headeringContent="About SignUp.com"
          textContent="At SignUp.com, we believe that when people get together, great things happen. That’s why parents and teachers, business and community leaders, and friends and coworkers trust our coordination resources and applications to save time and achieve remarkable outcomes. Our simple, intuitive SignUp sheets and scheduling tools make it easy for people to join together and say YES to pitching in, signing up, and helping out. No waiting for approvals and passwords, no software to install—just free, easy scheduling and SignUp tools for everyday heroes. Use SignUp.com for anything including school activities, potlucks, service projects, carnivals and walk-a-thons, class parties, teacher appreciation events, swim meets, tournaments, charity races, office hours, car pool, parent-teacher conference SignUps and more. Automatic reminders help participants keep their commitments, and easy online calendar editing, reporting and messaging saves time and energy, so everyone can do more GOOD!"
        />
      </>
    );
  }
}

export default SignupPage;
