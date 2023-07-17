export interface BookItem {
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
}
