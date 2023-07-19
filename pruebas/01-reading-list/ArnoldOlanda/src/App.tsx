/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect } from "react";
import "./App.css";
import { BooksListAvailable } from "./components/BooksListAvailable";
import { Filters } from "./components/Filters";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { ReadingList } from "./components/ReadingList";
import { BookItem } from "./interfaces";
import { setBooks, setFavorites } from "./store/slices/books.slice";

interface JsonStorageData {
    book: string;
}

interface BookData {
    books: BookItem[];
    favorites: BookItem[];
}

function App() {
    const dispatch = useAppDispatch();

    const { books, favorites } = useAppSelector((state) => state.book);
    const [listOfBooksFiltered, setListOfBooksFiltered] = useState(books);

    const onFilterGenre = (filter: string) => {
        const filtered = books.filter(({ book }) => book.genre === filter);
        setListOfBooksFiltered(filtered);
    };

    useEffect(() => {
        setListOfBooksFiltered(books);
    }, [books]);

    useEffect(() => {
        const handler = (event: StorageEvent) => {
            if (event.newValue) {
                const newValue: JsonStorageData = JSON.parse(event.newValue);
                const books: BookData = JSON.parse(newValue.book);
                dispatch(setBooks(books.books));
                dispatch(setFavorites(books.favorites));
                setListOfBooksFiltered(books.books);
            }
        };
        window.addEventListener("storage", handler);
        return () => {
            window.removeEventListener("storage", handler);
        };
    }, []);

    return (
        <>
            <div className="container w-full">
                <div className="w-full flex flex-col items-start mb-6">
                    <h1 className="text-4xl font-bold">
                        {listOfBooksFiltered.length} libros disponible(s)
                    </h1>
                    <h2 className="text-xl">
                        {favorites.length} en la lista de lectura
                    </h2>
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
