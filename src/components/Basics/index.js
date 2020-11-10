import React from 'react';
import './index.scss';
import Block from './Block';

import combat from '../../assets/about/combat.png';
import building from '../../assets/about/building.png';
import exploring from '../../assets/about/exploring.png';
import leaderboard from '../../assets/about/leadervboards.png';

import tome from '../../assets/about/tome-of-conflict.png';
import arrow from '../../assets/about/arrow-gold.svg';
import points from '../../assets/about/galaxy-points.png';

const Basics = () => {
  const text1 = `The Crystal Scourge has mutated and corrupted the flora and fauna of almost every planet in the Hermeian Galaxy. 
    The surviving races will need to quickly learn to defend themselves or fall to the Crystal Scourge’s onslaught`;
  const text2 = `To defeat the Crystal Scourge, the player will need to build a well-defended and functioning base. Gather basic resources,
    refine them into their advance form, and prepare yourselves for waves of monsters.`;
  const text3 = `The player will have one week to explore their own planetoid and defeat the crystal scourge. Though at first everything will
    look peaceful, things will quickly become dangerous. But - the longer you last, the better resources you will find!`;
  const text4 = `A truly competitive scene awaits you. Will you earn the crown of the Monster Slayer, or will you be the
    crystal mining overlord? A fun fill challenge awaits you in our various high score categories!`;
  const title1 = 'Combat';
  const title2 = 'Building and Crafting';
  const title3 = 'Exploring';
  const title4 = 'Leaderboard';

  return (
    <div className="basics">
      <div className="container">
        <h1 className="heading">basics</h1>
        <p className="basics__subtitle">
          The core features of / Rush are:
        </p>

        <div className="basics__content">
          <div className="basics__blocks">
            <div className="basics__cross">
              <div className="cross-horizontal"></div>
              <div className="cross-vertical"></div>
            </div>

            <Block position="left" img={combat} text={text1} title={title1} />
            <Block position="right" img={building} text={text2} title={title2} />
            <Block position="left" img={exploring} text={text3} title={title3} />
            <Block position="right" img={leaderboard} text={text4} title={title4} />
          </div>
        </div>

        <div className="galaxy__content">
          <h1 className="heading galaxy__heading">Galaxy Points &amp;&nbsp;the Leaderboard</h1>
          <p className="galaxy__text">
            All major actions taken by the player will generate special points known as Galaxy Points (GP).
            The player’s position in the / Rush high score table will be primarily based on how many Galaxy Points they have accumulated.
          </p>

          <div className="galaxy__questions">
            <div className="galaxy__border"></div>

            <p className="galaxy__question">Defeated an enemy monster?<span> Get Galaxy Points!</span></p>
            <p className="galaxy__question">Gathered Crystals?<span> Trade them for Galaxy Points!</span></p>

            <div className="galaxy__border"></div>
          </div>

          <div className="galaxy__exchange">
            <div className="galaxy__images">
              <img className="galaxy__tome" src={tome} alt="tome of conflict" />
              <img className="galaxy__arrow" src={arrow} alt="arrow" />
              <img src={points} alt="galaxy points" />
            </div>

            <p className="galaxy__text">The leaderboard is reset every week and players will win exciting prizes based on their overall position!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basics;