import React from "react";

const Table = (props) => {
  const { booksItems } = props;
  return (<div>
    <div>
      <table>
        <tr>
          <th>ID</th><th>Name</th><th>Pages</th><th>Created</th><th>Updated</th>
        </tr>
        {React.Children.toArray(booksItems.map(book => {
          return <tr><td>{book._id}</td><td>{book.name}</td><td>{book.numberOfPages}</td><td>{book.CreatedAt}</td><td>{book.UpdatedAt}</td></tr>
        }))}
      </table>
    </div>
  </div>
  )
};

export default Table;
