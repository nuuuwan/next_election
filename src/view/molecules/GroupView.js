import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PctSlider from "../../view/atoms/PctSlider";

export default function GroupView({ group, fieldToPct }) {
  return (
    <>
      <Typography variant="subtitle1">{group}</Typography>
      {Object.entries(fieldToPct).map(function ([field, pct]) {
        return (
          <Box key={"field-" + field} sx={{ width: 450 }}>
            <Typography variant="caption">{field}</Typography>
            <PctSlider
              key={"pct-slider_" + field}
              partyPct={pct}
              onChangePartyPct={null}
              color={"gray"}
            />
          </Box>
        );
      })}
    </>
  );
}

// import GroupView ffieldToPctrom "../../view/atoms/GroupView";fieldToPct
