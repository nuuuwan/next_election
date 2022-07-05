import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function NationalView({ electionResult }) {
  return (
    <Card sx={{ m: 1, p: 2, width: 140 }}>
      <Typography variant="h4">
        {electionResult.getTotalSeats()} Seats
      </Typography>
    </Card>
  );
}

// import NationalView from "../../view/atoms/NationalView";