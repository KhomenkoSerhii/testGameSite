import React, {useState} from 'react';
import './index.scss';

import cross from '../../../assets/forms/cross.svg';
import Input from '../../LoginModal/Input';
import Button from '../../Button';
import emails from '../../../assets/forms/emails.svg';

const ChangeEmail = ({ setChangeEmail }) => {
  const [isSent, setIsSent] = useState(false);

  return (
    <div className="change-email" onClick={() => setChangeEmail(false)}>
      <span className="modal__back">back</span>
      <div className="change-email__message-border" onClick={(event) => event.stopPropagation()}>
        <div className="change-email__message">
          <img
            className="change-email__cross"
            src={cross} alt="cross"
            onClick={() => setChangeEmail(false)}
          />

          {!isSent
            ? (
              <>
                <h1 className="change-email__title">Enter new email</h1>
                <div className="change-email__content">
                  <Input type="text" placeholder="Email" />
                  <Button text="change" onClick={() => setIsSent(true)} />
                </div>
              </>)
            : (
              <>
                <img className="change-email__img" src={emails} alt="sent email" />
                <h1 className="change-email__title">Almost done!</h1>
                <p className="change-email__text">
                  Please verify your new email now
                </p>
              </>
            )}
         

        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;