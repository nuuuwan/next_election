import AlignCenter from "../../view/atoms/AlignCenter"
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
export default function PctSlider({edID, pctVotes}) {
  const pctVotesStr = parseInt(Math.round(pctVotes * 100, 0)) + "%";

  return (
    <AlignCenter>
      <Typography variant="subtitle1">
        {edID}
      </Typography>
      <Slider
        min={0}
        max={1}
        value={pctVotes}
        step={0.001}
      />
      <Typography variant="caption">
        {pctVotesStr}
      </Typography>
    </AlignCenter>
  );
}

// import PercentageSlider from "../../view/atoms/PercentageSlider";
