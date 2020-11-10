import React from 'react';
import './index.scss';

import melighar from '../../assets/about/melighar.png';
import carax from '../../assets/about/carax.png';
import fario from '../../assets/about/fario.png';
import traveller from '../../assets/about/traveller.png';

const Heroes = () => {
  return (
    <div className="heroes">
      <div className="heroes__content">

        <div className="heroes__block block">
          <h1 className="heading block__heading">heroes</h1>
          <p className="block__text">
            Players have access to special summonable heroes to act as their avatars in-game. Each hero comes with a special ability,
            and can also be customized with Heroic Gear to make them even stronger
          </p>

          <div className="block__row"> 
            <div className="block__hero">
              <img src={fario} alt="farion" />
              <span>farion</span>
            </div>

            <div className="block__hero">
              <img src={melighar} alt="melighar" />
              <span>melighar</span>
            </div>

            <div className="block__hero">
              <img src={carax} alt="carax" />
              <span>carax</span>
            </div>      
          </div>

        </div>

        <div className="heroes__block block">
          <h1 className="heading block__heading">gear</h1>
          <p className="block__text">
            Summoning a hero is just half of the task! Once you have a hero you can equip it with three
            special items one for offense, one for defense, and one for support. 
          </p>

          <div className="block__row"> 
            <div className="block__hero block__hero--locked">
              <img src={traveller} alt="traveller" />
              <span>offensive item</span>
            </div>

            <div className="block__hero block__hero--locked">
              <img src={traveller} alt="traveller" />
              <span>defensive item</span>
            </div>

            <div className="block__hero block__hero--locked">
              <img src={traveller} alt="traveller" />
              <span>support item</span>
            </div>      
          </div>

        </div>
      </div>
    </div>
  );
};

export default Heroes;