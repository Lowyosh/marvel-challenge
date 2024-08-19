import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500); // 500ms debounce

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="SEARCH A CHARACTER..."
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
