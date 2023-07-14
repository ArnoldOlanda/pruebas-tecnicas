import "./App.css";
import { BooksListAvailable } from "./components/BooksListAvailable";
import { Filters } from "./components/Filters";
import { library } from "../../books.json";
import { useState } from "react";

function App() {
  const [listOfBooks] = useState(library);
  const [listOfBooksFiltered, setListOfBooksFiltered] = useState(listOfBooks);

  const onFilterGenre = (filter: string) => {
    const filtered = listOfBooks.filter(({ book }) => book.genre === filter);
    setListOfBooksFiltered(filtered);
  };
  return (
    <>
      <div className="container">
        <Filters onFilterGenre={onFilterGenre} />
        <BooksListAvailable library={listOfBooksFiltered} />
      </div>
    </>
  );
}

export default App;
