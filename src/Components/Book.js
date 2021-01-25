import React from "react";

const Book = ({ img, updateShelf, shelf, authors, title, book,id }) => {
  return (
    <li key={id} >
    <div className="book">
      <div className="book-top">
        <img src={img?.thumbnail ?? ''} alt="" />

        <div className="book-shelf-changer">
          <select
            name="shelf"
            onChange={(e) => updateShelf(e, book)}
            value={shelf ? shelf : "none"}
          >
            <option disabled>Move to...</option>
            <option defaultValue value="none">
              None
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(', ')}</div>
    </div>
    </li>
  );
};

export default Book;
