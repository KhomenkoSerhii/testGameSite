import React from 'react';

const RoundedButton = ({ imgUrl, alt }) => {
  return (
    <div className="button__border-black button__rounded">
      <div className="button__border-black-inside button__rounded">
        <div className="button__border button__rounded">
          <span className="button button__rounded community__button">
            <img className="community__icon" src={imgUrl} alt={alt} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoundedButton;