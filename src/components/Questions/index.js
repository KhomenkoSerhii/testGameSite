import React from 'react';
import Button from '../Button';
import './index.scss';
import { Parallax } from 'react-scroll-parallax';

import bg from '../../assets/images/baddies.png';
import discord from '../../assets/images/discord.svg';
import discordIcon from '../../assets/social-media/discord.svg';

const ParallaxImg = () => {
  return (
    <Parallax y={[20, -20]}>
      <img className="questions__bg" src={bg} />
    </Parallax>
  );
};

const Questions = () => {
  return (
    <div className="questions">
      <ParallaxImg />

      <Button text="discover more" classPosition="questions__button" />

      <div className="questions__content">
        <h1 className="questions__heading heading">questions?</h1>
        <span className="questions__text">Let's chat on<img className="questions__img" src={discord} alt="discord" /></span>
        <div className="button__border questions__button-bottom">
          <span className="button">
            <img className="questions__icon"  src={discordIcon} alt="discord icon" />chat now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Questions;