import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Overview from '../components/Overview';
import Basics from '../components/Basics';
import GalaxyPoints from '../components/GalaxyPoints';
import HeroStrategic from '../components/HeroStrategic';
import Heroes from '../components/Heroes';
import System from '../components/System';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <Header isLogin={true} />
      <Overview />
      <Basics />
      <GalaxyPoints />
      <HeroStrategic />
      <Heroes />
      <System />
      <Footer />
    </ParallaxProvider>
  );
};

export default AboutPage;