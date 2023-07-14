import { BookListItem } from "./BookListItem";

interface Props {
  library: {
    book: {
      title: string;
      pages: number;
      genre: string;
      cover: string;
      ISBN: string;
      synopsis: string;
      year: number;
      author: { name: string; otherBooks: string[] };
    };
  }[];
}

export const BooksListAvailable = ({ library }: Props) => {
  return (
    <div className="container grid grid-cols-3 grid-rows-4 grid-flow-row gap-y-10 ">
      {library.map(({ book }) => (
        <BookListItem key={book.ISBN} book={book} />
      ))}
    </div>
  );
};
