'use client';

// Default no-store for client component

import { useEffect, useState } from 'react';

const CachingSSR = () => {
  const [number, setNumber] = useState();

  const getRandomNumber = async () => {
    let res = await fetch('http://localhost:3000/api/random', {
      // cache: 'force-cache',
      // cache: 'no-store',
    });
    let data = await res.json();
    setNumber(data?.random);
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  return (
    <div>
      <div>Caching: Client Side</div>
      <div>{number}</div>
    </div>
  );
};

export default CachingSSR;
