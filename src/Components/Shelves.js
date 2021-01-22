import React from "react";
import Book from "./Book";

class Shelves extends React.Component {
  render() {
    const { books, updateShelf } = this.props;
    // Getting the books based on their shelves
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            {currentlyReading.length > 0 && (
              <Book  bookShelf={currentlyReading} updateShelf={updateShelf} />
            )}
          </div>
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            {wantToRead.length > 0 && (
              <Book  bookShelf={wantToRead} updateShelf={updateShelf} />
            )}
          </div>
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            {read.length > 0 && (
              <Book  bookShelf={read} updateShelf={updateShelf} />
            )}
          </div>
        </div>
      </div>
    ); 
  }
}

export default Shelves;
