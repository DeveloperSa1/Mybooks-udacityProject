import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  render() {
    const { updateShelf, onSearch, searchedBooks } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={onSearch}
              type="text"
              placeolder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks &&
              searchedBooks.map((book) => (
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
                          <option value="none">None</option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
