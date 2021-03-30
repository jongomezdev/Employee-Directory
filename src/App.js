import React from 'react';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
// import Filterusers from './utils/Filterusers';
import 'normalize.css';
import Data from './components/Data';
import Header from './components/Header';
// import Table from './components/Table';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Data />
      {/* <Table /> */}
      {/* <Filterusers /> */}
      <Footer />
    </>
  );
}
