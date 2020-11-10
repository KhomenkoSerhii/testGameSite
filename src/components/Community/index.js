import React, { useState, useEffect } from 'react';
import './index.scss';
import ButtonRounded from './ButtonRounded';
import facebook from '../../assets/social-media/facebook.svg';
import tw from '../../assets/social-media/twitter.svg';
import discord from '../../assets/social-media/discord.svg';
import telegram from '../../assets/social-media/tlgrm.svg';

import bg from '../../assets/images/fores.png';

import { Parallax } from 'react-scroll-parallax';

import NewsBlock from '../News/NewsBlock';
import platformHead from '../../assets/images/platform-head.png';

const date = '12 may 2020';
const title = '/ Rush February Update';
const text = 'The / Rush Lore Spotlight series returns. This week we are continuing with the topic of looking at the…';

const ParallaxImg = () => {
  return (
    <Parallax y={[25, -5]} styleInner={{ transform: 'translate3d(0%, 24.1057%, 0px)' }}>
      <img className="community__bg" src={bg} />
    </Parallax>
  );
};

const Community = () => {
  const [screnWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize, screnWidth])

  return (
    <div className="community">
      <div className="news__blocks">
        <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
        <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
        {(screnWidth > 1024 || screnWidth < 415) && <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />}
      </div>
      <ParallaxImg />

      <div className="community__content">
        <h1 className="community__heading heading">join our community</h1>
        <div className="community__buttons">
          <ButtonRounded imgUrl={facebook} alt="face" />
          <ButtonRounded imgUrl={tw} alt="twitt" />
          <ButtonRounded imgUrl={discord} alt="discord" />
          <ButtonRounded imgUrl={telegram} alt="telegram" />
        </div>
      </div>

      <div className="community__about-pos">
        <h1 className="community__about heading">About / Rush</h1>
        <p className="about__text">
          An online sci-fi/fantasy RTS set in the fictional Hermeian galaxy, / Rush sees players build,
          fight and trade their way to victory as they grow and manage their small mining colony, battle monsters, and trade valuable items and resources.
          Tasked with accumulating the much sought-after Crypto Crystals on their planet, successful players will earn themselves tokenized blockchain rewards as well
          as in-game items, bonuses and other prizes.
          </p>
      </div>
    </div>
  )
};

export default Community;



