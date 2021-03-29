import React, { useState, useEffect } from 'react';

export default function Filterusers() {
  const [filter, setFilter] = useState('');
  return (
    <>
      <h1>Select A Filter</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>Name A-Z</option>
        <option>Name Z-A</option>
      </select>
    </>
  );
}
