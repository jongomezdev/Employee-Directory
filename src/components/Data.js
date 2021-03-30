import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';

const Data = () => {
  const [info, setInfo] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=50&nat=us'
      );
      setInfo(res.data.results);
    };
    getUserData();
  }, []);
  return (
    <>
      <Table info={info} />
    </>
  );
};

export default Data;
