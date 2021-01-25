import React from "react";
import * as BooksAPI from "./API/BooksApi";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Shelves from "./Components/Shelves";
import Search from "./Components/Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  fetchAll = async () => {
    const results = await BooksAPI.getAll();
    this.setState({
      books: results,
    });
  };

  // update the books based on their shelves
  getBookUpdadted = async (e, updatedBook) => {
    const books = this.state.books;
    const shelf = e.target.value;
    updatedBook.shelf = e.target.value;
    this.setState({
      books,
    });
    // make put request to update it in the Api
    await BooksAPI.update(updatedBook, shelf);
    this.setState((state) => ({
      books: state.books
        .filter((book) => book.id !== updatedBook.id)
        .concat([updatedBook]),
    }));
  };

  componentDidMount() {
    this.fetchAll();
  }

  render() {
    const { books, searchedBooks } = this.state;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Route exact path="/">
            <Shelves books={books} updateShelf={this.getBookUpdadted} />
          </Route>

          <Route exact path="/search">
            <Search
              books={books}
              onSearch={this.onChange}
              searchedBooks={searchedBooks}
              updateShelf={this.getBookUpdadted}
            />
          </Route>

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}




export default BooksApp;
