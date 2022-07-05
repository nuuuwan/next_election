import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PctSlider({ label, partyPct, onChangePct, color }) {
  const onChangePctInner = function (e) {
    if (onChangePct) {
      onChangePct(e.target.value);
    }
  };

  const partyPctStr = partyPct.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });

  return (
    <Stack direction="row">
      <Typography variant="caption" sx={{ width: 200 }}>
        {label}
      </Typography>
      <Slider
        min={0}
        max={1}
        value={partyPct}
        step={0.001}
        onChange={onChangePctInner}
        sx={{ color }}
      />
      <Typography
        variant="caption"
        color={color}
        sx={{
          width: 60,
          marginRight: 3,
          textAlign: "right",
        }}
      >
        {partyPctStr}
      </Typography>
    </Stack>
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
