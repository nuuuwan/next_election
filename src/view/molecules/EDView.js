import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { t } from "../../nonview/base/I18N";
import { ED_IDX } from "../../nonview/core/ED";
import ED_TO_PCT from "../../nonview/core/ED_TO_PCT";

import AlignCenter from "../../view/atoms/AlignCenter";
import PctSlider from "../../view/atoms/PctSlider";

const FONT_SIZE_PER_SQRT_PCT = 3;
const FONT_SIZE_MIN = 10;
const FONT_SIZE_PER_SQRT_SEAT = 5;

export default function EDView({
  edId,
  partyPct,
  seats,
  totalSeats,
  onChangePartyPct,
}) {
  let minimumFractionDigits = 1;
  if (partyPct > 0.1) {
    minimumFractionDigits = 0;
  }
  const partyPctStr = partyPct.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits,
  });

  const ed = ED_IDX[edId];
  const edPct = ED_TO_PCT[edId];

  const seatsStr = seats === 1 ? "seat" : "seats";

  let color = "#ccc";
  if (partyPct > 0.4) {
    color = "#000";
  } else if (partyPct > 0.3) {
    color = "#222";
  } else if (partyPct > 0.2) {
    color = "#444";
  } else if (partyPct > 0.1) {
    color = "#666";
  } else if (partyPct > 0.05) {
    color = "#888";
  }

  return (
    <AlignCenter>
      <Typography variant="caption" sx={{ width: 100 }}>
        {t(ed.name)}
      </Typography>
      <Typography
        variant="caption"
        sx={{ width: 10, marginRight: 3, textAlign: "right" }}
      >
        {totalSeats}
      </Typography>
      <Typography
        variant="caption"
        color={color}
        sx={{
          width: 60,
          marginRight: 3,
          textAlign: "right",
          fontSize: Math.max(
            FONT_SIZE_MIN,
            FONT_SIZE_PER_SQRT_PCT * 10 * Math.sqrt(partyPct)
          ),
        }}
      >
        {partyPctStr}
      </Typography>
      <Box sx={{ width: 450 }}>
        <PctSlider
          key={"pct-slider_" + edId}
          edId={edId}
          partyPct={partyPct}
          edPct={edPct}
          totalSeats={totalSeats}
          onChangePartyPct={onChangePartyPct}
          color={color}
        />
      </Box>
      {seats ? (
        <>
          <Typography
            variant="caption"
            color={color}
            sx={{
              textAlign: "right",
              width: 100,
              fontSize: Math.max(
                FONT_SIZE_MIN,
                FONT_SIZE_PER_SQRT_SEAT * Math.sqrt(seats)
              ),
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
