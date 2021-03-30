import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const Data = () => {
  const [users, setUsers] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=50&nat=us'
      );
      setUsers(res.data.results);
    };
    getUserData();
  }, []);
  return (
    <>
      <Table data={users} />
    </>
  );
};

export default Data;
