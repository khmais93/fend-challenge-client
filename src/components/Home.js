import React, { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import classes from "./Home.module.css";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const onSearch = useCallback((results) => {
    setSearchResults(results);
  }, []);

  return (
    <Container className={classes.container}>
      <SearchBar onSearch={onSearch} />
      <Results results={searchResults} />
    </Container>
  );
}

export default Home;
