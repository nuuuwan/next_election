import Card from "@mui/material/Card";

import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";

import EDView from "../../view/molecules/EDView";

export default function ElectionResultView({
  electionResult,
  onChangeElectionResult,
}) {
  return (
    <Card sx={{ m: 1, p: 1, width: 400 }}>
      <EDView
        key={"ed-view-LK"}
        edId={"LK"}
        Pct={electionResult.getLKPct()}
        seats={electionResult.getNLSeats()}
        totalSeats={TOTAL_NATIONAL_LIST_SEATS}
      />
      {electionResult.getSortedEdIdList().map(function (edId) {
        const Pct = electionResult.edToPct[edId];

        const onChangePct = function (Pct) {
          electionResult.moveEdPct(edId, Pct);
          onChangeElectionResult(electionResult);
        };

        const seats = electionResult.getEDSeats(edId);
        const ed = ED_IDX[edId];
        const totalSeats = ed.seats;

        return (
          <EDView
            key={"ed-view-" + edId}
            edId={edId}
            Pct={Pct}
            seats={seats}
            totalSeats={totalSeats}
            onChangePct={onChangePct}
          />
        );
      })}
    </Card>
  );
}
