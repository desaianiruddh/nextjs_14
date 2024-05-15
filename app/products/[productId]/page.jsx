// /products/productId (Dynamic Route)
export const metadata = {
  title: 'Product Info',
};
const ProductInfo = ({ params }) => {
  return <div>{`Product ${params.productId} Information`}</div>;
};

export default ProductInfo;

