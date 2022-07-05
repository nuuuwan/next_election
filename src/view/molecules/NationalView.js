import Typography from "@mui/material/Typography";

export default function NationalView({ electionResult }) {
  return (
    <>
      <Typography variant="h4">
        {electionResult.getTotalSeats()} Seats
      </Typography>
    </>
  );
}

// import NationalView from "../../view/atoms/NationalView";
