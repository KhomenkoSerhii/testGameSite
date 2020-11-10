import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.scss';

import logo from '../../assets/images/logo.png';
import ava from '../../assets/about/ava.png';
import download from '../../assets/about/download.svg';
import burger from '../../assets/responsive/burger.png';
import cross from '../../assets/forms/cross.svg';
import rc from '../../assets/about/rc.svg';
import hc from '../../assets/about/hc.svg';

import HeaderTablet from './HeaderTablet';
import DropDown from './DropDown';
import AccountDropdown from '../Account/AccountDropdown';

const Header = ({ isLogin, username }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'initial';
  }

  return (
    <header className="header">
      {isOpen && <HeaderTablet isLogin={isLogin} />}
      <div className="header__wrapper container">
        <div className="header__left">
          {isOpen
            ? <img className="header__burger" src={cross} alt="burger menu" onClick={() => setIsOpen(false)} />
            : <img className="header__burger" src={burger} alt="burger menu" onClick={() => setIsOpen(true)} />
          }

          <div className="header__logo-wrapper">
            <Link to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="header__navigation navigation">
            <li className="navigation__item"><Link to="/about">about</Link></li>
            {/* <li className="navigation__item">store</li>
            <li className="navigation__item">leaderboard</li> */}
            <li className="navigation__item">
              community<div className="triangle"></div>
              <DropDown />
            </li>
          </ul>
        </div>

        <div className="header__right">
          {username
            ? (
              <>
                <div className="header__choice">
                  <span
                    className={'header__choice--active'}
                  >
                    <img className="header__choice-icon" src={rc} alt="rc" />23
                    </span>
                  <span
                    className={'header__choice--active'}
                  ><img className="header__choice-icon" src={hc} alt="hc" />142</span>
                </div>

                <div className="header__user user">
                  <Link to="/account">
                    <div className="user__img--wrapper">
                      <img className="user__img" src={ava} alt="user avatar" />
                    </div>
                  </Link>
                  <span className="user__name">{username}</span>
                  <div className="triangle"></div>
                  <AccountDropdown />
                </div>

                <div className="header__register button__border">
                  <a href="/" download>
                    <span className="button">
                      <img className="button__img" src={download} alt="download" />
                      <span className="button__text-visible">download game</span>
                    </span>
                  </a>
                </div>
              </>
            )
            : (
              <>
                <Link to="/login"><span className="header__login">login</span></Link>
                <div className="header__register button__border">
                  <Link to="/createaccount"><span className="button">register now</span></Link>
                </div>
              </>
            )}
        </div>
      </div>
    </header>
  );
};

function mapStateToProps({ userInfo }) {
  return {
    username: userInfo.Name,
  };
}

export default connect(mapStateToProps, null)(Header);