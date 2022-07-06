import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PctSlider({ label, pct, onChangePct }) {
  const onChangePctInner = function (e) {
    if (onChangePct) {
      onChangePct(e.target.value);
    }
  };
  pct = Math.max(0, Math.min(1, pct));
  let minimumFractionDigits = 1;
  if (pct > 0.1) {
    minimumFractionDigits = 0;
  }

  const light = 95 - Math.sqrt(pct) * 95;
  const color = `hsla(0,0%,${light}%,1.0)`;

  let pctStr = "-";
  if (pct > 0.001) {
    pctStr = pct.toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits,
    });
  }

  return (
    <Stack direction="row">
      <Typography variant="caption" sx={{ width: 140 }}>
        {label}
      </Typography>
      <Slider
        min={0}
        max={1}
        value={pct}
        step={0.01}
        onChange={onChangePctInner}
        sx={{ color, width: 100 }}
      />
      <Typography
        variant="caption"
        color={color}
        sx={{
          width: 30,
          marginLeft: 2,
          textAlign: "right",
        }}
      >
        {pctStr}
      </Typography>
    </Stack>
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
