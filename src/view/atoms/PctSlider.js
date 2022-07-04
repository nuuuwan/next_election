import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import AlignCenter from "../../view/atoms/AlignCenter";

export default function PctSlider({ edID, partyPct }) {
  const partyPctStr = parseInt(Math.round(partyPct * 100, 0)) + "%";

  return (
    <AlignCenter>
      <Typography variant="subtitle1">{edID}</Typography>
      <Slider min={0} max={1} value={partyPct} step={0.001} />
      <Typography variant="caption">{partyPctStr}</Typography>
    </AlignCenter>
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
