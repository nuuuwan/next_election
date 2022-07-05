import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import PctSlider from "../../view/atoms/PctSlider";
import { ED_IDX } from "../../nonview/core/ED";
import GROUP_TO_FIELD_TO_PD_TO_PCT from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT";
import GROUP_TO_FIELD_TO_PD_TO_PCT_INV from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT_INV";

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

  return (
    <Card sx={{ m: 1, p: 1, width: 300 }}>
      <Typography variant="subtitle1">{group}</Typography>
      {sortedFields.map(function (field) {
        if (field === "Other") {
          return null;
        }
        const pct = fieldToPct[field];
        const onChangePct = function (pct) {
          electionResult.moveGroupFieldPct(group, field, pct);
          onChangeElectionResult(electionResult);
        };

        let label = field;
        if (group === "ED") {
          label = ED_IDX[field].name;
        }

        return (
          <Box key={"field-" + field}>
            <PctSlider
              label={label}
              key={"pct-slider_" + field}
              pct={pct}
              onChangePct={onChangePct}
            />
          </Box>
        );
      })}
    </Card>
  );
}

// import GroupView ffieldToPctrom "../../view/atoms/GroupView";fieldToPct
