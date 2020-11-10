import React from 'react';
import platform from '../../../assets/images/tile.svg';

const NewsBlock = ({ imgUrl, date, title, text}) => {
  return (
    <div className="news__block">
      <img className="news__platform" src={platform} alt="platform" />
      <div className="platform">
        <img src={imgUrl} alt="news image" />
        <div className="platform__content">
          <span className="platform__date">{date}</span>
          <span className="platform__title">{title}</span>
          <p className="platform__text">{text}</p>
          
          <div className="platform__button">
            <div className="platform__border-top"></div>
              <span className="platform__btn-text">read more</span>
            <div className="platform__border-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;