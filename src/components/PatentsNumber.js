import React from "react";

function PatentsNumber(props) {
  const { results } = props;

  let map = new Map(
    results.patents.map((res) => [
      res.patent_no,
      { ...res, ...{ chemical_type_1: [] } },
    ])
  );
  for (let { patent_no, chemical_type_1 } of results.patents)
    map.get(patent_no).chemical_type_1.push(chemical_type_1);
  let mergedResults = Array.from(map.values());

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      {results.status && results.chemicalName && (
        <div>
          {mergedResults.length} patents contianing the chemical substance "
          <strong>{results.chemicalName}</strong>" were found.
          <br /> Table below show results of patents that their chemical part
          contains just the word "{results.chemicalName}".
          <br /> Example, if you search for "Carbon", 0 patents containing
          Carbon will be found, but table results below will show 2 patents
          because one of them, its chemical part conatains "CALCIUM{" "}
          <strong>CARBON</strong>ATE"
        </div>
      )}
    </div>
  );
}

export default PatentsNumber;
