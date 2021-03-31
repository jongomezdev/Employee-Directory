import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import SearchForm from '../components/SearchForm';

const Data = () => {
  const [results, setResults] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=50&nat=us'
      );
      setUsers(res.data.results);
      setResults(res.data.results);
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

  function handleInputChange(e) {
    const { value } = e.target;
    setUsers(
      results.filter((user) => {
        return (
          user.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
          user.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1
        );
      })
    );
  }

  return (
    <>
      <SearchForm handleInputChange={handleInputChange} />
      <Table data={users} sortByName={sortByName} />
    </>
  );
};

export default Data;
