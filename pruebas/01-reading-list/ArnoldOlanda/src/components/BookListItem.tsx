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
    onClick?: (a: string) => void;
}

export const BookListItem = ({ book, onClick }: Props) => {
    return (
        <div className="flex flex-col items-center">
            <img
                src={book.cover}
                alt={book.title}
                className="w-40 h-60 hover:scale-105 transition-transform"
                onClick={() => (onClick ? onClick(book.title) : null)}
            />
            <span className="mt-6">
                {book.title} ({book.year})
            </span>
        </div>
    );
};
