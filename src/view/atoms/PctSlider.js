import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AppColors from "../../view/_constants/AppColors";

export default function PctSlider({
  label,
  pct,
  onChangePct,
  onChangePctCommitted,
}) {
  const onChangePctInner = function (e) {
    const pct2 = e.target.value;
    onChangePct(Math.pow(pct2, 2));
  };

  const onChangePctInnerCommitted = function () {
    onChangePctCommitted(pct);
  };

  pct = Math.max(0, Math.min(1, pct));
  let minimumFractionDigits = 1;

  const light = 95 - Math.sqrt(pct) * (95 - 35);
  const color = `hsla(${AppColors.SliderH},${AppColors.SliderS}%,${light}%,1.0)`;

  let pctStr = "-";
  if (pct > 0.001) {
    pctStr = pct.toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits,
    });
  }

  const pct2 = Math.sqrt(pct);

  return (
    <Stack direction="row">
      <Typography variant="caption" sx={{ width: 80 }}>
        {label}
      </Typography>
      <Slider
        min={0}
        max={1}
        value={pct2}
        step={0.001}
        marks={MARKS}
        onChange={onChangePctInner}
        onChangeCommitted={onChangePctInnerCommitted}
        sx={{ color, marginLeft: 1, width: 120 }}
      />
      <Typography
        variant="caption"
        color={color}
        sx={{
          width: 20,
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
