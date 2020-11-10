import React from 'react';
import './index.scss';

const Button = ({ classPosition, text, layout, type, onClick }) => {
  return (
    <div onClick={onClick} className={`button__border-black ${classPosition ? classPosition : ''}`}>
      <div className="button__border-black-inside">
        <button type={type} className="button__border">
          <span className="button welcome__button">{layout}{text}</span>
        </button>
      </div>
    </div>
  );
};

export default Button;