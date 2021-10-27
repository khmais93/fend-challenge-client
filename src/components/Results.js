import { Row, Col, Table } from "react-bootstrap";
import classes from "./Home.module.css";

function Results(props) {
  const { results } = props;

  const messageStyle = {
    marginTop: "20px",
    textAlign: "center",
    fontWeight: "bold",
  };

  // https://stackoverflow.com/questions/64086651/merge-multiple-objects-with-the-same-id-lodash
  const map = new Map(
    results?.map((res) => [
      res.patent_no,
      { ...res, ...{ chemical_type_1: [] } },
    ])
  );
  if (results) {
    for (let { patent_no, chemical_type_1 } of results)
      map.get(patent_no).chemical_type_1.push(chemical_type_1);
  }
  const mergedResults = Array.from(map.values());

  const tableResults = mergedResults.map((result) => {
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

  let toRender;
  if (results === null) {
    toRender = <div style={messageStyle}>Loading...</div>;
  } else if (results.length === 0) {
    toRender = (
      <div style={messageStyle}>
        No results were found. Please enter another value.
      </div>
    );
  } else {
    toRender = (
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
    );
  }

  return toRender;
}

export default Results;
