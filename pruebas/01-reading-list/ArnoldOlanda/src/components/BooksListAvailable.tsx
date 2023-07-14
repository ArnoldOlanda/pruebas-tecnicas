import { library } from "../../../books.json";
import { BookListItem } from "./BookListItem";

export const BooksListAvailable = () => {
  return (
    <div className="container grid grid-cols-3 grid-rows-4 gap-2">
      {library.map(({ book }) => (
        <BookListItem key={book.ISBN} book={book} />
      ))}
    </div>
  );
};
