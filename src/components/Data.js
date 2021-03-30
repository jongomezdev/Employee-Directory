import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Table from './components/Table';

const Data = () => {
  const [userState, setUserState] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios('https://randomuser.me/api/?results=500&nat=us');
      setUserState(res.data.results);
    };
    getUserData();
  }, []);
  console.log(userState);
  return (
    <>
      yer
      {/* <Table /> */}
    </>
  );
};

export default Data;
