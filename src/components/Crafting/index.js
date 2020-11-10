import React from 'react';
import './index.scss';

import borlium from '../../assets/about/crafting-material-borlium.png';
import sandstone from '../../assets/about/sandstone.png';
import warts from '../../assets/about/warts.png';
import arrow from '../../assets/about/arrow-gold.svg';
import tome from '../../assets/about/tome-of-conflict.png';

const Crafting = () => {
  return (
    <div className="crafting">
      <h1 className="heading crafting__heading">crafting</h1>

      <div className="crafting__content">
        <p className="galaxy__text">As well as the regular resources used in the day to day running of your base, players will be able to craft special items.</p>
        <p className="galaxy__text">Craftable items include special tombes that grant you Galaxy Points, equipment for your heroes, and even skins to customize your game.</p>

        <div className="crafting__exchange">
          <div className="galaxy__border"></div>
          <div className="crafting__row"> 
            <div className="crafting__items-wrapper">
              <div className="crafting__item">
                <img src={sandstone} alt="sandstone" />
                <span>sand salts</span>
              </div>
              <div className="crafting__item">
                <img src={warts} alt="warts" />
                <span>toad warts</span>
              </div>
              <div className="crafting__item">
                <img src={borlium} alt="borlium" />
                <span>Borrlium</span>
              </div>
            </div>

            <img className="crafting__arrow" src={arrow} alt="arrow" />
            <img className="crafting__tome" src={tome} alt="tome of conflict" />
          </div>
          <div className="galaxy__border"></div>
        </div>

        <p className="galaxy__text">Craft this item and gain extra Galaxy Points to catapult you up the leaderboard!</p>
      </div>

    </div>
  );
};

export default Crafting;