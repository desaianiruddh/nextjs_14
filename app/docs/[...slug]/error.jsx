'use client';

//  if reset is used, error thrown component should have use client
//  error will be catch at nearest error boundary
//  layout error will be catch at parent's error boundary

const Error = ({ error, reset }) => {
  return (
    <div>
      Error Throw: {error.message} <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
