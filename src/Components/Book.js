import React from "react";

class Book extends React.Component {
  render() {
    const { bookShelf, updateShelf } = this.props;

    return (
      <ol className="books-grid">
        {bookShelf.length > 0 &&
          bookShelf.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <img
                    src={
                      book.imageLinks === undefined
                        ? ""
                        : book.imageLinks.thumbnail
                    }
                    alt=""
                  />

                  <div className="book-shelf-changer">
                    <select
                      name="shelf"
                      onChange={(e) => updateShelf(e, book)}
                      value={book.shelf}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    );
  }
}

export default Book;
