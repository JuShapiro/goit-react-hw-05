import { useState } from "react";
import { GoSearch } from "react-icons/go";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const saveMovie = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      toast.error("Please enter something for searching");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          value={query}
          onChange={saveMovie}
        />
        <button className={css.btn} type="submit">
          <GoSearch />
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default SearchForm;
