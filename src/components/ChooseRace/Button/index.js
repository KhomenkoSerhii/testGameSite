import React from 'react';
import './index.scss';
import crystals from '../../../assets/about/crystals.png';

const Button = ({ text, number, active }) => {
  return (
    <>
      {active 
        ? (
          <div className="chooserace__button-wrapper">
            <span className="chooserace__button-number">{number}</span>
            <div className="chooserace__button chooserace__button--active">
              <img className="chooserace__button-img" src={crystals} alt="crystals" />
              <div className="chooserace__button-inside">
                <span>{text}</span>
              </div>
            </div>
          </div>
        )

        : (
          <div className="chooserace__button">
            <span className="chooserace__button-number">{number}</span>
            <div className="chooserace__button-border"></div>
            <span>{text}</span>
            <div className="chooserace__button-border"></div>
          </div>
        )
      }
    </>
   
  );
};

export default Button;