import React, { useEffect } from 'react';
import axios from 'axios';

const Data = () => {
  // const [userState, setUserState] = useState([]);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    (async () => {
      const res = await axios('https://randomuser.me/api/?results=500&nat=us');
      // setUserState(res.data.results);
      console.log(res.data);
    })();
  }, []);
  return <div>yer</div>;
};

export default Data;
