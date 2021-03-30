import React from 'react';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';

import 'normalize.css';
import Data from './components/Data';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Data />
      <Footer />
    </>
  );
}
