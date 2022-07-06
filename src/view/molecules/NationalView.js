import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import SeatView from "../../view/atoms/SeatView"

export default function NationalView({ electionResult }) {
  const totalSeats = electionResult.getTotalSeats();
  return (
    <Card sx={{ m: 1, p: 2, width: 140 }}>
      <Typography variant="h4">
        {totalSeats} Seats
      </Typography>
      <SeatView totalSeats={totalSeats}/>
    </Card>
  );
}

// import NationalView from "../../view/atoms/NationalView";
