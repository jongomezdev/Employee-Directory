import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const Data = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=50&nat=us'
      );
      setUsers(res.data.results);
    };
    getUserData();
  }, []);

  function search(props) {
    return props.filter((prop) => prop.name.first.toLowerCase().indexOf(query));
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button></button>
      </div>
      <Table data={search(users)} />
    </>
  );
};

export default Data;
