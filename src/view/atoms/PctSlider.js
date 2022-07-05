import Slider from "@mui/material/Slider";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PctSlider({ label, partyPct, onChangePartyPct, color }) {
  const onChangePartyPctInner = function (e) {
    if (onChangePartyPct) {
      onChangePartyPct(e.target.value);
    }
  };

  const partyPctStr = partyPct.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });


  return (
    <Stack direction="row">
      <Typography variant="caption" sx={{width: 200}}>
        {label}
      </Typography>
      <Slider
        min={0}
        max={1}
        value={partyPct}
        step={0.001}
        onChange={onChangePartyPctInner}
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
