import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CommonX from "../../nonview/base/CommonX";

import AppColors from "../../view/_constants/AppColors";

const SLIDER_EXP = 2;
const MARKS = CommonX.range(10).map(function (i) {
  return {
    value: Math.pow(i * 0.1, 1 / SLIDER_EXP),
  };
});

export default function PctSlider({
  label,
  pct,
  onChangePct,
  onChangePctCommitted,
}) {
  const onChangePctInner = function (e) {
    const pct2 = e.target.value;
    onChangePct(Math.pow(pct2, SLIDER_EXP));
  };

  const onChangePctInnerCommitted = function () {
    onChangePctCommitted(pct);
  };

  pct = Math.max(0, Math.min(1, pct));
  let minimumFractionDigits = 2;
  if (pct > 0.2) {
    minimumFractionDigits = 0;
  } else if (pct > 0.02) {
    minimumFractionDigits = 1;
  }

  const pct2 = Math.pow(pct, 1 / SLIDER_EXP);

  const light = 95 - pct2 * (95 - 35);
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
