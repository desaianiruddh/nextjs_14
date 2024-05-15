export const metadata = {
  title: 'Document',
  description: 'Document List',
};

const DocumentsList = () => {
  return (
    <div>
      <div>Documents</div>
      <br />
      <div>
        {[1, 2, 3, 4, 5].map((product) => {
          return <div>{`Document ${product}`}</div>;
        })}
      </div>
    </div>
  );
};

export default DocumentsList;
