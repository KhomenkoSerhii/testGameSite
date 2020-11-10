import React from 'react';
import './index.scss';

const SliderArrow = ({ direction, onClick }) => { 
  return (
    <div onClick={onClick} className={`slider-arrow--border position-${direction}`}>
      <div className={`slider-arrow arrow-${direction}`}>
      </div>
    </div>
  );
};

export default  SliderArrow;