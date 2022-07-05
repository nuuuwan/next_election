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
        key={"ed-view-" + "LK"}
        edId={"LK"}
        partyPct={electionResult.getLKPartyPct()}
        seats={electionResult.getNLSeats()}
        totalSeats={TOTAL_NATIONAL_LIST_SEATS}
      />
      {electionResult.getSortedEdIdList().map(function (edId) {
        const partyPct = electionResult.getPartyPct(edId);

        const onChangePartyPct = function (partyPct) {
          electionResult.setPartyPct(edId, partyPct);
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
            onChangePartyPct={onChangePartyPct}
          />
        );
      })}
    </Box>
  );
}
