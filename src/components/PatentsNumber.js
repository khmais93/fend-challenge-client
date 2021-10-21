import classes from "./PatentsNumber.module.css";

function PatentsNumber(props) {
  const { results } = props;

  // https://stackoverflow.com/questions/64086651/merge-multiple-objects-with-the-same-id-lodash
  const map = new Map(
    results.patents.map((res) => [
      res.patent_no,
      { ...res, ...{ chemical_type_1: [] } },
    ])
  );
  for (let { patent_no, chemical_type_1 } of results.patents)
    map.get(patent_no).chemical_type_1.push(chemical_type_1);
  const mergedResults = Array.from(map.values());

  return (
    <div className={classes.resultsNumber}>
      {results.chemicalName && (
        <div>
          {mergedResults.length} patents contianing the chemical substance "
          <strong>{results.chemicalName}</strong>" were found.
          <br />
          NB: Table below show results of patents that their chemical part
          contains the word "{results.chemicalName}".
          <br /> Example, if you search for "Carbon", 0 patents containing
          Carbon will be found, but table results below will show 2 patents
          because one of them, its chemical part contains "CALCIUM{" "}
          <strong>CARBON</strong>ATE", same story for others.
        </div>
      )}
    </div>
  );
}

export default PatentsNumber;
