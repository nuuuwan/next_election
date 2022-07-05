import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';

import PctSlider from "../../view/atoms/PctSlider";

export default function GroupView({ group, fieldToPct }) {
  return (
    <Card sx={{m: 1, p: 1}}>
      <Typography variant="subtitle1">{group}</Typography>
      {Object.entries(fieldToPct).map(function ([field, pct]) {
        return (
          <Box key={"field-" + field} sx={{ marginLeft: 1 }}>
            <PctSlider
              label={field}
              key={"pct-slider_" + field}
              Pct={pct}
              onChangePct={null}
              color={"gray"}
            />
          </Box>
        );
      })}
    </Card>
  );
}

// import GroupView ffieldToPctrom "../../view/atoms/GroupView";fieldToPct
