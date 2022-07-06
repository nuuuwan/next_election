import Typography from "@mui/material/Typography";

export default function SeatCountView({ seats }) {
  if (!seats) {
    return null;
  }
  return (
    <Typography
      variant="caption"
      color="primary"
      sx={{ width: 20, textAlign: "right", marginLeft: 1 }}
    >
      {seats}
    </Typography>
  );
}

// import SeatCountView from "../../view/atoms/SeatCountView";
