import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromFavorites } from "../store/slices/books.slice";
import { BookListItem } from "./BookListItem";

export const ReadingList = () => {
    const { favorites } = useAppSelector((state) => state.book);
    const dispatch = useAppDispatch();
    const onClickItem = (name: string) => {
        dispatch(removeFromFavorites(name));
    };
    return (
        <div className="w-1/3 min-h-0">
            {favorites.length > 0 && (
                <div className="w-full border-gray-600 border-2 m-6 rounded-md h-full">
                    <div className="grid grid-cols-2 grid-rows-4 grid-flow-row gap-y-10">
                        {favorites.map(({ book }) => (
                            <BookListItem
                                key={book.ISBN}
                                book={book}
                                onClick={onClickItem}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
