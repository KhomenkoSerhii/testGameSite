import React from 'react';
import './index.scss';
import cookies from '../../assets/responsive-mob/cookie.svg';
import tick from '../../assets/forms/tick.svg';

const Cookies = ({ setIsCookiesAgreed }) => {
  return (
    <div className="cookies__border cookies">
      <div className="cookies__content"> 
        <div className="cookies__top">
          <img className="cookies__img" src={cookies} alt="cookies" />
          <p className="cookies__text">We use cookies to ensure you get the best experience.</p>
        </div>

        <div className="header__register button__border" onClick={() => setIsCookiesAgreed(true)}>
          <span className="button">
            <img className="button__img" src={tick} alt="tick" /> agree
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cookies;