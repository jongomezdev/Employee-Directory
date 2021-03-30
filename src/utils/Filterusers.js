// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

//
// export default function Filterusers() {
//   const [user, setUser] = useState('');
//   useEffect(() => {
//     async function getData() {
//       const response = await axios.get(
//         `https://randomuser.me/api/?gender=${user}`
//       );
//       console.log(response);
//     }
//     getData();
//   }, [user]);
//   return (
//     <>
//       <h1>Select A Filter</h1>
//       <select value={user} onChange={(e) => setUser(e.target.value)}>
//         <option>Male</option>
//         <option>Female</option>
//       </select>
//     </>
//   );
// }
