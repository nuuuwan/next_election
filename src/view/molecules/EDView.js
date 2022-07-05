import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import { ED_IDX } from "../../nonview/core/ED";
import ED_TO_PCT from "../../nonview/core/ED_TO_PCT";

import AlignCenter from "../../view/atoms/AlignCenter";
import PctSlider from "../../view/atoms/PctSlider";

export default function EDView({
  edId,
  Pct,
  seats,
  totalSeats,
  onChangePct,
}) {
  const ed = ED_IDX[edId];
  const edPct = ED_TO_PCT[edId];

  const light = 80 - Math.sqrt(Pct) * 80;
  let color = `hsla(0,0%,${light}%,1.0)`;

  return (
    <AlignCenter>
      <Box sx={{ width: 450 }}>
        <PctSlider
          key={"pct-slider_" + edId}
          edId={edId}
          Pct={Pct}
          edPct={edPct}
          totalSeats={totalSeats}
          onChangePct={onChangePct}
          color={color}
          label={t(ed.name) + " (" + totalSeats + ")"}
        />
      </Box>
      {seats ? (
        <>
          <Typography
            variant="h6"
            color={color}
            sx={{
              textAlign: "right",
              width: 20,
            }}
          >
            {seats}
          </Typography>
        </>
      ) : null}
    </AlignCenter>
  );
}

// import EDView from "../../view/atoms/EDView";
