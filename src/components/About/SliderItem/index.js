import React from 'react';
import './index.scss';

const SliderItem = ({ imgUrl }) => {
  return (
    <div className="slide">
      <img className="slide__img" src={imgUrl} alt="slider picture" />
    </div>
  );
};

export default SliderItem;