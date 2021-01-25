import React from "react";
import Book from "./Book";
const MyBooks = ({ bookShelf, updateShelf }) => {
  return (
    <ol className="books-grid">
      {bookShelf.length > 0 &&
        bookShelf.map((book) => (
          
            <Book
             key={book.id}
              book={book}
              id={book.id}
              img={book.imageLinks}
              updateShelf={updateShelf}
              shelf={book.shelf}
              title={book.title}
              authors={book.authors}
            />
        ))}
    </ol>
  );
};



export default MyBooks;
