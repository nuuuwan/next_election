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
    onChangePct(e.target.value);
  };

  const onChangePctInnerCommitted = function () {
    onChangePctCommitted(pct);
  };

  pct = Math.max(0, Math.min(1, pct));
  let minimumFractionDigits = 1;
  if (pct > 0.1) {
    minimumFractionDigits = 0;
  }

  const light = 95 - Math.sqrt(pct) * (95 - 35);
  const color = `hsla(${AppColors.SliderH},${AppColors.SliderS}%,${light}%,1.0)`;

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
        onChangeCommitted={onChangePctInnerCommitted}
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
