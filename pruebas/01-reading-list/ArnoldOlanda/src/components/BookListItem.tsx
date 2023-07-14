interface Props {
  book: {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    author: { name: string; otherBooks: string[] };
  };
}

export const BookListItem = ({ book }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={book.cover} alt={book.title} className="w-56" />
      <span>
        {book.title} ({book.year})
      </span>
    </div>
  );
};
