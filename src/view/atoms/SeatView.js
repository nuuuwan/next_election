import Box from "@mui/material/Box";

const CIRCLE_RADIUS = 10;
const CIRCLE_DIAM = CIRCLE_RADIUS * 2;
const [N_X, N_Y] = [9, 15];
const [WIDTH, HEIGHT] = [N_X * CIRCLE_DIAM, N_Y * CIRCLE_DIAM];

function range(n) {
  return Array.from(Array(n).keys());
}

export default function SeatView({ totalSeats }) {
  return (
    <Box
      key={"seat-view-" + totalSeats}
      sx={{ width: WIDTH, height: HEIGHT, m: 2 }}
    >
      <svg width={WIDTH} height={HEIGHT}>
        {range(N_X).map(function (ix) {
          return range(N_Y).map(function (iy) {
            const [cx, cy] = [
              CIRCLE_DIAM * ix + CIRCLE_RADIUS,
              CIRCLE_DIAM * iy + CIRCLE_RADIUS,
            ];

            const i = ix + iy * N_X;
            const color = i < totalSeats ? "black" : "white";

            return (
              <circle
                key={"circle-" + i}
                cx={cx}
                cy={cy}
                r={CIRCLE_RADIUS}
                fill={color}
                stroke="lightgray"
              />
            );
          });
        })}
      </svg>
    </Box>
  );
}

// import SeatView from "../../view/atoms/SeatView";
