import Slider from "@mui/material/Slider";

const WIDTH_PER_SEAT = 15;

export default function PctSlider({
  edId,
  partyPct,
  totalSeats,
  onChangePartyPct,
  color,
}) {
  const onChangePartyPctInner = function (e) {
    if (onChangePartyPct) {
      onChangePartyPct(e.target.value);
    }
  };

  return (
    <Slider
      min={0}
      max={1}
      value={partyPct}
      step={0.001}
      onChange={onChangePartyPctInner}
      sx={{ width: totalSeats * WIDTH_PER_SEAT, color }}
    />
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
