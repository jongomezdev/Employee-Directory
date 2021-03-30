import React from 'react';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
// import Filterusers from './utils/Filterusers';
import 'normalize.css';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Table />
      {/* <Filterusers /> */}
      <Footer />
    </>
  );
}
