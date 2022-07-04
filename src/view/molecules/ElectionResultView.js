import PctSlider from "../../view/atoms/PctSlider";

export default function ElectionResultView({ electionResult }) {
  console.debug(electionResult);
  return Object.entries(electionResult.edPctIdx).map(function ([
    edID,
    pctVotes,
  ]) {
    return (
      <PctSlider key={"pct-slider_" + edID} edID={edID} pctVotes={pctVotes} />
    );
  });
}
