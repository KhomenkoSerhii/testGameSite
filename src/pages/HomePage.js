import React, {useState} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import News from '../components/News';
import Community from '../components/Community';
import About from '../components/About';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';

const HomePage = () => {
  const [isCookiesAgreed, setIsCookiesAgreed] = useState(false);

  return (
    <ParallaxProvider>
      <Header isLogin={false} />
      <Parallax />
      <News />
      <Community />
      <About />
      <Questions />
      <Footer />
     {!isCookiesAgreed && <Cookies setIsCookiesAgreed={setIsCookiesAgreed} />}
    </ParallaxProvider>
  );
}; 

export default HomePage;