import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { ED_IDX } from "../../nonview/core/ED";
import GROUP_TO_FIELD_TO_PD_TO_PCT from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT";
import GROUP_TO_FIELD_TO_PD_TO_PCT_INV from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT_INV";

import SeatCountView from "../../view/atoms/SeatCountView";

import PctSlider from "../../view/atoms/PctSlider";

export default function GroupView({
  electionResult,
  onChangeElectionResult,
  group,
  fieldToPct,
}) {
  const sortedFields = Object.entries(GROUP_TO_FIELD_TO_PD_TO_PCT[group])
    .map(function ([field, pdToPct]) {
      const pctSum = Object.entries(pdToPct).reduce(function (
        pctSum,
        [pdId, pct0]
      ) {
        return (
          pctSum + pct0 * GROUP_TO_FIELD_TO_PD_TO_PCT_INV["LK"]["lk"][pdId]
        );
      },
      0);
      return [field, pctSum];
    })
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .map((x) => x[0]);

  let groupTitle = group;
  if (groupTitle === "ED") {
    groupTitle = "Electoral District";
  }
  if (groupTitle === "LK") {
    groupTitle = "Islandwide";
  }
  groupTitle = groupTitle.replace("Election", "Parliamentary Election - Vote");

  return (
    <Card sx={{ m: 1, p: 1, width: 320 }}>
      <Typography variant="subtitle1" color="secondary">
        {groupTitle}
      </Typography>
      {sortedFields.map(function (field) {
        if (field === "Other") {
          return null;
        }
        const pct = fieldToPct[field];
        const onChangePct = function (pct) {
          electionResult.storeOldPct(group, field, pct);
          onChangeElectionResult(electionResult);
        };

        const onChangePctCommitted = function (pct) {
          electionResult.moveGroupFieldPct(group, field, pct);
          onChangeElectionResult(electionResult);
        };

        let label = field;
        if (group === "ED") {
          label = ED_IDX[field].name;
        }
        if (label === "lk") {
          label = "Sri Lanka";
        }

        let seats = undefined;
        if (group === "ED") {
          seats = electionResult.getEDSeats(field);
        } else if (group === "LK") {
          seats = electionResult.getNLSeats();
        }

        return (
          <Stack key={"field-" + field} direction="row" gap={1}>
            <PctSlider
              label={label}
              key={"pct-slider_" + field}
              pct={pct}
              onChangePct={onChangePct}
              onChangePctCommitted={onChangePctCommitted}
            />
            <SeatCountView seats={seats} />
          </Stack>
        );
      })}
    </Card>
  );
}

// import GroupView ffieldToPctrom "../../view/atoms/GroupView";fieldToPct
