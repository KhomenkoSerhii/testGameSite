import React from 'react';
import './index.scss';

const CheckBox = ({ label, id}) => {
  return (
    <div className="checkbox__position">
      <div className="checkbox__wrapper">
        <div className="input__bg"></div>
        <input className="checkbox" type="checkbox" id={id} />
        <span className="checkmark">
          {/* <div className="checkmark__stem"></div>
          <div className="checkmark__kick"></div> */}
        </span>
      </div>

      <label className="checkbox__label" for={id}>{label}</label>
    </div>
  );
};

export default CheckBox;