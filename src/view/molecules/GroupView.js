import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import PctSlider from "../../view/atoms/PctSlider";

export default function GroupView({
  electionResult,
  onChangeElectionResult,
  group,
  fieldToPct,
}) {
  return (
    <Card sx={{ m: 1, p: 1, width: 300 }}>
      <Typography variant="subtitle1">{group}</Typography>
      {Object.entries(fieldToPct).map(function ([field, pct]) {
        const onChangePct = function (pct) {
          electionResult.moveGroupFieldPct(group, field, pct);
          onChangeElectionResult(electionResult);
        };

        return (
          <Box key={"field-" + field}>
            <PctSlider
              label={field}
              key={"pct-slider_" + field}
              Pct={pct}
              onChangePct={onChangePct}
              color={"gray"}
            />
          </Box>
        );
      })}
    </Card>
  );
}

// import GroupView ffieldToPctrom "../../view/atoms/GroupView";fieldToPct
