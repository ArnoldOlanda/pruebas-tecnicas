import { useEffect } from "react";
import "./App.css";
import { BooksListAvailable } from "./components/BooksListAvailable";
import { Filters } from "./components/Filters";
import { useState } from "react";
import { useAppSelector } from "./store/hooks";
import { ReadingList } from "./components/ReadingList";

function App() {
    const { books } = useAppSelector((state) => state.books);
    const [listOfBooksFiltered, setListOfBooksFiltered] = useState(books);

    const onFilterGenre = (filter: string) => {
        const filtered = books.filter(({ book }) => book.genre === filter);
        setListOfBooksFiltered(filtered);
    };

    useEffect(() => {
        setListOfBooksFiltered(books);
    }, [books]);

    return (
        <>
            <div className="container w-full">
                <div className="w-full flex justify-start mb-6">
                    <h1>{listOfBooksFiltered.length} disponible(s)</h1>
                </div>
                <Filters onFilterGenre={onFilterGenre} />
                <div className="flex w-full">
                    <BooksListAvailable library={listOfBooksFiltered} />
                    <ReadingList />
                </div>
            </div>
        </>
    );
}

export default App;
