// /products/productId/reviews (Nested Dynamic Route)
export const metadata = {
  title: 'Reviews List',
};
const Reviews = ({ params }) => {
  return <div>{`Reviews List for Product ${params.productId}`}</div>;
};

export default Reviews;
