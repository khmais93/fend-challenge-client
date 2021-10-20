import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import classes from "./Home.module.css";

function Results(props) {
  const [loading, setLoading] = useState(true);
  const { results } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      if (results.length !== 0) {
        clearTimeout(timeout);
      }
    };
  }, [results.length]);

  let map = new Map(
    results.map((res) => [
      res.patent_no,
      { ...res, ...{ chemical_type_1: [] } },
    ])
  );
  for (let { patent_no, chemical_type_1 } of results)
    map.get(patent_no).chemical_type_1.push(chemical_type_1);
  let mergedResults = Array.from(map.values());

  var tableResults = mergedResults.map((result) => {
    return (
      <tr key={result._id}>
        <td>{result.patent_title}</td>
        <td>
          <a
            href={`https://patents.google.com/patent/${result.patent_no}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {result.patent_no}
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div>
      {results.length === 0 && loading && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      )}
      {results.length === 0 && !loading && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          No results were found.
        </div>
      )}
      {results.length !== 0 && !loading && (
        <Row className={classes.row}>
          <Col>
            <Table striped responsive hover>
              <thead>
                <tr>
                  <th>Patent Title</th>
                  <th>Patent No</th>
                </tr>
              </thead>
              <tbody>{tableResults}</tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Results;
