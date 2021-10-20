import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import classes from "./Home.module.css";

function Results(props) {
  const { results } = props;

  let map = new Map(
    results.map((res) => [
      res.patent_no,
      { ...res, ...{ chemical_type_1: [] } },
    ])
  );
  for (let { patent_no, chemical_type_1 } of results)
    map.get(patent_no).chemical_type_1.push(chemical_type_1);
  let mergedResults = Array.from(map.values());

  console.log(mergedResults);

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
      {results.length === 0 ? (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      ) : (
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
