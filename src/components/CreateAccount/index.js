import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import logo from '../../assets/images/logo.png';

import Input from '../LoginModal/Input';
import CheckBox from '../LoginModal/CheckBox';
import Button from '../Button';

import './index.scss';

const CreateAccount = () => {
  const history = useHistory();

  const handleSubmit = (e) => {
    const { username, email, repeatedEmail, password } = e.target;

    if (!email.value || !repeatedEmail.value || !username.value || !password.value) return;

    if (email.value !== repeatedEmail.value) return;

    const data = JSON.stringify({
      username: username.value,
      email: email.value,
      repeatedEmail: repeatedEmail.value,
      password: password.value
    });

    axios.post('http://localhost:3002/registerAccount', data, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        history.push('/thanks-register');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="modal register">
      <Link to="/"><span className="modal__back">back</span></Link>
      <Link to="/"><img className="modal__logo" src={logo} alt="logo" /></Link>

      <div className="register__content">
        <h1 className="modal__heading">Create account</h1>
        <p className="modal__text">Sign up </p>

        <form onSubmit={handleSubmit}>
          <Input type="text" id="username" placeholder="Username" />
          <Input type="text" id="email" placeholder="Email" />
          <Input type="text" id="repeatedEmail" placeholder="Repeat email" />
          <Input type="password" id="password" placeholder="Password" />

          <div className="modal__helpers">
            <CheckBox label="Subscribe to newsletter" id="subscribe" />
          </div>

          <Button text="create account" classPosition="modal__button" type="submit" />
        </form>

        <div className="login__account">
          <h2 className="login__subheading">Already have an account?</h2>

          <div className="account__button">
            <div className="account__border-top"></div>
            <Link to="/login"><span className="account__text">Log in</span></Link>
            <div className="account__border-bottom"></div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CreateAccount;