import React from 'react';
import './index.scss';
import discordIcon from '../../assets/social-media/discord.svg';

const characteristics = ['os', 'processor', 'memory', 'graphics', 'directx', 'storage'];

const Characteristics = () => {
  return (
    <ul className="characteristics">
      <li className="characteristics__item">os:</li>
      <li className="characteristics__item">processor:</li>
      <li className="characteristics__item">memory:</li>
      <li className="characteristics__item">graphics:</li>
      <li className="characteristics__item">directx:</li>
      <li className="characteristics__item">storage:</li>
    </ul>
  );
};

const Requirements = ({ data }) => {
  return (
    <ul className="requirements">
      {data.map((item, index) => (
        <li className="requirements__item"><span className="characteristics__item-mob">{characteristics[index]}:</span>{item}</li>
      ))}
    </ul>
  );
};

const minimum = ['Windows 7 64-Bit SP1, Windows 8.1 64-Bit, Windows 10 64-Bit', 'Intel Core i5-4570T 2.9 GHz / AMD FX-6100 3.3 GHz', '4 GB RAM',
  'NVIDIA GeForce GTX 560 Ti / AMD Radeon HD 6850', 'Version 11', '4 GB available space'];
const recommended = ['Windows 7 64-Bit SP1, Windows 8.1 64-Bit, Windows 10 64-Bit', 'Intel Core i7-4770S 3.1 GHz / AMD FX-8320 3.5 GHz', '8 GB RAM',
  'NVIDIA GeForce GTX 770 / AMD Radeon HD 7970', 'Version 11', '4 GB available space'];

const System = () => {
  return (
    <div className="system">
      <h1 className="heading system__heading">system information</h1>

      <div className="system__row">
        <div className="system__block">
          <div className="system__border"></div>
          <span className="system__title">Minimum</span>
          <div className="system__content">
            <Characteristics />
            <Requirements data={minimum} />
          </div>
          <div className="system__border"></div>
        </div>

        <div className="system__block">
          <div className="system__border"></div>
          <span className="system__title">Recommended</span>
          <div className="system__content">
            <Characteristics />
            <Requirements data={recommended} />
          </div>
          <div className="system__border"></div>
        </div>

      </div>

      <div className="system__prepare">
        <div className="system__prepare-content">
          <h1 className="heading system__heading">prepare yourself!</h1>
          <h2 className="system__subtitle">the Crystal Scourge is upon us</h2>
          <p className="system__text">Join our Discord server</p>
          <div className="button__border questions__button-bottom">
            <span className="button">
              <img className="questions__icon" src={discordIcon} alt="discord icon" />chat now
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default System;