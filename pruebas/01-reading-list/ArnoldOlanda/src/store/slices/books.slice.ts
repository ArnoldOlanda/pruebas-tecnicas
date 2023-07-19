import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { library } from "../../../../books.json";
import { BookItem } from "../../interfaces";

// Define a type for the slice state
interface BooksState {
    books: BookItem[];
    favorites: BookItem[];
}

// Define the initial state using that type
const initialState: BooksState = {
    books: library,
    favorites: [],
};

export const counterSlice = createSlice({
    name: "books",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setBooks: (state, { payload }: PayloadAction<BookItem[]>) => {
            state.books = payload;
        },
        setFavorites: (state, { payload }: PayloadAction<BookItem[]>) => {
            state.favorites = payload;
        },
        addToFavorites: (state, { payload }: PayloadAction<string>) => {
            const book = state.books.find(({ book }) => book.title === payload);
            state.favorites.push(book!);
            state.books = state.books.filter(
                ({ book }) => book.title !== payload
            );
        },
        removeFromFavorites: (state, { payload }: PayloadAction<string>) => {
            const book = state.favorites.find(
                ({ book }) => book.title === payload
            );
            state.books.push(book!);
            state.favorites = state.favorites.filter(
                ({ book }) => book.title !== payload
            );
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        //incrementByAmount: (state, action: PayloadAction<number>) => {
        //  state.value += action.payload
        //},
    },
});

export const { setBooks, setFavorites, addToFavorites, removeFromFavorites } =
    counterSlice.actions;

export default counterSlice.reducer;
