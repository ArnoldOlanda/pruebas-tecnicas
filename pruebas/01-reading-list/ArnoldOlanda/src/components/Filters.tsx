import { useState } from "react";
import { library } from "../../../books.json";

interface Props {
  onFilterGenre: (filter: string) => void;
}

const genres = library.map(({ book }) => book.genre);

const genreOptions = genres.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

export const Filters = ({ onFilterGenre }: Props) => {
  const [optionSelected, setOptionSelected] = useState<string>("no-value");

  const onChangeFilterOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOptionSelected(value);
    if (value !== "no-value") onFilterGenre(value);
  };

  return (
    <div className="container h-16 flex gap-6 mb-10">
      <div className="flex flex-col items-start w-40">
        <span className="mb-2">Filtrar por paginas</span>
        <input
          type="range"
          name="pagesFilter"
          id="pagesFilter"
          min={20}
          max={26}
        />
      </div>
      <div className="flex flex-col items-start w-40">
        <span className="mb-2">Filtrar por genero</span>
        <select
          name="genreFiler"
          id="genreFilter"
          value={optionSelected}
          onChange={onChangeFilterOption}
        >
          <option value="no-value" disabled>
            Selecciona un genero
          </option>
          {genreOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
