import React from 'react';
import './index.scss';

const Block = ({ position, img, text, title }) => {
  return (
    <div className="basics__block">
      {position ==='right' && <img className="block__img" src={img} alt={title} />}
      <div className="block__read">
        <h2 className="block__title">{title}</h2>
        <p className="block__text">{text}</p>
      </div>
      {position ==='left' && <img className="block__img" src={img} alt={title} />}
    </div>
  );
};

export default Block;
