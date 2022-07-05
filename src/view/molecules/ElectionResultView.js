import Box from "@mui/material/Box";

import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";

import EDView from "../../view/molecules/EDView";

export default function ElectionResultView({
  electionResult,
  onChangeElectionResult,
}) {
  return (
    <Box>
      <EDView
        key={"ed-view-LK"}
        edId={"LK"}
        partyPct={electionResult.getLKPct()}
        seats={electionResult.getNLSeats()}
        totalSeats={TOTAL_NATIONAL_LIST_SEATS}
      />
      {electionResult.getSortedEdIdList().map(function (edId) {
        const partyPct = electionResult.edToPct[edId];

        const onChangePct = function (partyPct) {
          electionResult.setEdPct(edId, partyPct);
          onChangeElectionResult(electionResult);
        };

        const seats = electionResult.getEDSeats(edId);
        const ed = ED_IDX[edId];
        const totalSeats = ed.seats;

        return (
          <EDView
            key={"ed-view-" + edId}
            edId={edId}
            partyPct={partyPct}
            seats={seats}
            totalSeats={totalSeats}
            onChangePct={onChangePct}
          />
        );
      })}
    </Box>
  );
}
