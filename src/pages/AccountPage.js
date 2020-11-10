import React from 'react';

import Header from '../components/Header';
import Account from '../components/Account';
import Footer from '../components/Footer';

const AccountPage = () => {
  return (
    <>
      <Header isLogin={true} />
      <Account />
      <Footer />
    </>
  );
};

export default AccountPage;