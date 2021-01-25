import React from "react";
import MyBooks from "./MyBooks";
import SHELVES from "../utility/SHELVES";


const Shelves = ({ updateShelf, books }) => {
   return SHELVES.map(({ title, id }) => {
   const bookOnShelf = books.filter(({ shelf }) => shelf === id);
      return ( 
      <div key={id}>
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            {bookOnShelf.length > 0 && (
              <MyBooks bookShelf={bookOnShelf} updateShelf={updateShelf} />
            )}
          </div>
        </div>
      );
    })
};




export default Shelves;
