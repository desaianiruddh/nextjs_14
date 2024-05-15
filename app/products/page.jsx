export const metadata = {
  title: 'Product',
  description: 'Product List',
};

const ProductListPage = () => {
  return (
    <div>
      <div>Products List Page</div>
      <br />
      <div>
        {[1, 2, 3, 4, 5].map((product) => {
          return <div>{`Product ${product}`}</div>;
        })}
      </div>
    </div>
  );
};

export default ProductListPage;
