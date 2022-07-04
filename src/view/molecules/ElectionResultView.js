import PctSlider from "../../view/atoms/PctSlider";

export default function ElectionResultView({ electionResult }) {
  return Object.entries(electionResult.edToPartyPct).map(function ([
    edID,
    partyPct,
  ]) {
    return (
      <PctSlider key={"pct-slider_" + edID} edID={edID} partyPct={partyPct} />
    );
  });
}
