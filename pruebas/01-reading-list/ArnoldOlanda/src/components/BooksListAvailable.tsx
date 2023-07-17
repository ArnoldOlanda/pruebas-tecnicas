import { BookItem } from "../interfaces";
import { useAppDispatch } from "../store/hooks";
import { addToFavorites } from "../store/slices/books.slice";
import { BookListItem } from "./BookListItem";

interface Props {
    library: BookItem[];
}

export const BooksListAvailable = ({ library }: Props) => {
    const dispatch = useAppDispatch();
    const onClickItem = (name: string) => {
        dispatch(addToFavorites(name));
    };

    return (
        <div className="w-2/3 grid grid-cols-4 grid-rows-4 grid-flow-row gap-y-10">
            {library.map(({ book }) => (
                <BookListItem
                    key={book.ISBN}
                    book={book}
                    onClick={onClickItem}
                />
            ))}
        </div>
    );
};
