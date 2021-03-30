import React, { useState, useEffect } from 'react';

export default function Data() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=500`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
}
