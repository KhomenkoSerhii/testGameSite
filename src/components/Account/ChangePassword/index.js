import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './index.scss';

import Input from '../../LoginModal/Input';
import Button from '../../Button';

import muskernack from '../../../assets/forms/3-muskernack-smaller-size.png';
import cross from '../../../assets/forms/cross.svg';


const ChangePassword = ({ setChangePassword, id, username, email }) => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { password, newpassword } = e.target;

    if (!password.value || !newpassword.value) return;

    const data = JSON.stringify({
      userid: id,
      username,
      newpassword: newpassword.value,
      password: password.value,
      email
    });

    axios.post('http://localhost:3002/changePassword', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setIsSent(true);
      })
      .catch(err => {
        console.log(err);
      });

  };

  return (
    <div className="change-email change-password" onClick={() => setChangePassword(false)}>
      <span className="modal__back">back</span>
      <div className="change-email__message-border" onClick={(event) => event.stopPropagation()}>
        <div className="change-email__message">
          <img
            className="change-email__cross"
            src={cross} alt="cross"
            onClick={() => setChangePassword(false)}
          />
          {!isSent
            ? (
              <>
                <h1 className="change-email__title">Change password</h1>
                <div className="change-email__content">
                  <form onSubmit={handleSubmit}>
                    <Input type="password" id="password" placeholder="Current password" />
                    <Input type="password" id="newpassword" placeholder="New password" />
                    <Button text="change password" />
                  </form>
                </div>
              </>)
            : (
              <>
                {/* <img className="change-email__img" src={emails} alt="sent email" /> */}
                <h1 className="change-email__title">Password changed!</h1>
                <img className="change-email__img" src={muskernack} alt="sent password" />
              </>
            )}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ userInfo }) {
  return {
    id: userInfo.Id,
    username: userInfo.Name,
    email: userInfo.Email,
  }
};

export default connect(mapStateToProps, null)(ChangePassword);