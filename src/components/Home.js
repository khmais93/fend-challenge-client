import { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import classes from "./Home.module.css";
import PatentsNumber from "./PatentsNumber";
import Results from "./Results";
import SearchBar from "./SearchBar";

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const [exactPatents, setExactPatents] = useState({
    patents: [],
    chemicalName: "",
  });

  const onSearch = useCallback(
    (results, exactMatchResults = { patents: [], chemicalName: "" }) => {
      setSearchResults(results);
      setExactPatents(exactMatchResults);
    },
    []
  );

  return (
    <Container className={classes.container}>
      <SearchBar onSearch={onSearch} />
      <PatentsNumber results={exactPatents} />
      <Results results={searchResults} />
    </Container>
  );
}

export default Home;
