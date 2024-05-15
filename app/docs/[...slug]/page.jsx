'use client';
//  Slug page will accessible docs/dssd/sdf/sdf/sdf/sdf/

const SlugExample = ({ params }) => {
  if (parseInt(Math.random() * 100) % 2 === 0) {
    throw new Error('Error thrown, You can try again');
  }
  return <div>{`Slugs : ${params?.slug?.join(' => ')}`}</div>;
};

export default SlugExample;
