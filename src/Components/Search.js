import React from "react";
import * as BooksAPI from "../API/BooksApi";
import _ from "lodash";
import Book from "./Book";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    searchedBooks: [],
    query: "",
  };

  // debounce fn to prevent issue when clearing the input field
  onChange = _.debounce((event) => {
    let searchString = event.target.value;
    this.updateQuery(searchString);
  }, 500);

  updateQuery = async (q) => {
    this.setState({ query: q });

    try {
      if (q === "") {
        this.setState({ searchedBooks: [] });
      } else {
        const results = await BooksAPI.search(q);
        const books = (await results.error) ? [] : results;
        this.setState({ searchedBooks: books });
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { updateShelf, books } = this.props;
    const { searchedBooks } = this.state;
    const getBookShelf = (book) => {
      return books?.find((item) => item.id === book.id)?.shelf ?? "none";
    };

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={this.onChange}
              type="text"
              placeolder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks &&
              searchedBooks.map((book) => (
                
                  <Book
                    book={book}
                    key={book.id}
                    img={book.imageLinks}
                    updateShelf={updateShelf}
                    shelf={getBookShelf(book)}
                    title={book.title}
                    authors={book.authors}
                  />
                  
              ))}
          </ol>
        </div>
      </div>
    );
  }
}



export default Search;
