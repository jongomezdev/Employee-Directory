import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const Data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=50&nat=us'
      );
      setUsers(res.data.results);
    };
    getUserData();
  }, []);

  function sortByName() {
    const sorted = users.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      } else {
        return 0;
      }
    });
    setUsers([...sorted]);
  }

  return (
    <>
      <Table data={users} sortByName={sortByName} />
    </>
  );
};

export default Data;
