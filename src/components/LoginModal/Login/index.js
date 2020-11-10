import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";

import './index.scss';

import { signIn } from '../../../actions/signIn';

import Button from '../../Button';
import Input from '../Input';
import CheckBox from '../CheckBox';

const Login = ({ setForgotPassword, signIn }) => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = e.target;

    if (!username.value || !password.value) return;

    const err = await signIn(username, password);

    if (err) return;

    history.push('/about');
  };

  return (
    <div className="login__content">
      <h1 className="modal__heading">Welcome back!</h1>
      <p className="modal__text">Login</p>

      <form onSubmit={handleSubmit}>
        <Input type="text" id="username" placeholder="Username" />
        <Input type="password" id="password" placeholder="Password" />

        <div className="modal__helpers">
          <CheckBox label="Remember me" id="remember" />
          <span className="login__forget" onClick={() => setForgotPassword(true)}>Forgot password?</span>
        </div>

        <Button text="login" classPosition="modal__button" />
      </form>

      <div className="login__account">
        <h2 className="login__subheading">Don’t have an account yet?</h2>

        <div className="account__button">
          <div className="account__border-top"></div>
          <Link to="/createaccount"><span className="account__text">create account</span></Link>
          <div className="account__border-bottom"></div>
        </div>

      </div>
    </div>
  );
};

const mapActionToProps = {
  signIn
};

export default connect(null, mapActionToProps)(Login);