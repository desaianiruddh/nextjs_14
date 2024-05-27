// Default force-cache for server component

import { revalidatePath } from "next/cache";

const getRandomNumber = async () => {
  let res = await fetch('http://localhost:3000/api/random', {
    // cache: 'no-store',
    // cache: 'force-cache',
    // next: {
    //   revalidate: 10,
    // },
  });
  let data = await res.json();
  return data;
};

const CachingSSR = async () => {
  const { random } = await getRandomNumber();
  return (
    <div>
      <div>Caching: Server Side Rendering</div>
      <div>{random}</div>
    </div>
  );
};

export default CachingSSR;