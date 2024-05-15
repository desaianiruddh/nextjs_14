import { notFound } from "next/navigation";

// /products/productId/reviews/reviewId (Nested Dynamic Route)
export const metadata = {
  title: 'Review',
};
const Reviews = ({ params }) => {
  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>{`Review ${params.reviewId} for Product ${params.productId}`}</div>
  );
};

export default Reviews;
