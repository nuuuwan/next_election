import Slider from "@mui/material/Slider";

export default function PctSlider({ partyPct, onChangePartyPct, color }) {
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
      sx={{ color }}
    />
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
