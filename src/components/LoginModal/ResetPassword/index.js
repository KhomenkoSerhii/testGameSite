import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';
import Input from '../Input';
import Button from '../../Button';

const ResetPassword = () => {
  return (
    <div className="login__content">
      <h1 className="modal__heading reset__heading">Reset password</h1>
      <p className="modal__text">Password reset instructions will be sent to your registered email address.</p>

      <form>
        <Input type="text" placeholder="Username or email address" />
        <Button text="submit" classPosition="modal__button" />
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

export default ResetPassword;