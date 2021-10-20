import { useEffect, useState } from "react";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";
import axios from "axios";

function SearchBar(props) {
  const [searchField, setSearchField] = useState("patentTitle");
  const [searchValue, setSearchValue] = useState("");
  const { onSearch } = props;

  const fieldHandler = (e) => {
    setSearchField(e.target.value);
  };
  const searchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async (field, searchValue) => {
      if (field === "chemicalName") {
        const results = await axios.get(
          `http://localhost:8000/api/v1/patents?chemical_type_1[regex]=${searchValue.toUpperCase()}`
        );
        const exactMatch = await axios.get(
          `http://localhost:8000/api/v1/patents?chemical_type_1=${searchValue.toUpperCase()}`
        );
        onSearch(results.data.data.patents, {
          patents: exactMatch.data.data.patents,
          chemicalName: searchValue,
        });
      }
      if (field === "patentTitle") {
        const results = await axios.get(
          `http://localhost:8000/api/v1/patents?patent_title[regex]=${searchValue.toUpperCase()}`
        );
        onSearch(results.data.data.patents);
      }
    };
    const timeout = setTimeout(async () => {
      fetchData(searchField, searchValue);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchValue, searchField, onSearch]);

  return (
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Patents Search">
          <Form.Control
            type="text"
            placeholder="Patents Search"
            onChange={searchValueHandler}
            value={searchValue}
          />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingSelectGrid" label="Search by">
          <Form.Select onChange={fieldHandler} value={searchField}>
            <option value="patentTitle">Patent Title</option>
            <option value="chemicalName">Chemical Name</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
}

export default SearchBar;
