import Box from "@mui/material/Box";

import CommonX from "../../nonview/base/CommonX";

import AppColors from "../../view/_constants/AppColors";

const CIRCLE_RADIUS = 5;
const CIRCLE_DIAM = CIRCLE_RADIUS * 2;
const [N_X, N_Y] = [10, 23];
const [WIDTH, HEIGHT] = [N_X * CIRCLE_DIAM, 1.5 * N_Y * CIRCLE_DIAM];
const MAX_SEATS = 225;

export default function SeatView({ totalSeats }) {
  let offset = 0;
  return (
    <Box key={"seat-view-" + totalSeats}>
      <svg width={WIDTH} height={HEIGHT}>
        {CommonX.range(N_Y).map(function (iy) {
          if (iy % 5 === 0) {
            offset += 0.5;
          }
          return CommonX.range(N_X).map(function (ix) {
            const i = ix + iy * N_X;
            if (i >= MAX_SEATS) {
              return null;
            }

            if (i === 150 || i === 113) {
              offset += 1;
            }

            const [cx, cy] = [
              CIRCLE_DIAM * ix + CIRCLE_RADIUS,
              CIRCLE_DIAM * (iy + offset) + CIRCLE_RADIUS,
            ];

            const color = i < totalSeats ? AppColors.Seat : "none";

            return (
              <circle
                key={"circle-" + i + "-" + color}
                cx={cx}
                cy={cy}
                r={CIRCLE_RADIUS * 0.8}
                fill={color}
                stroke="black"
                strokeWidth={1}
              />
            );
          });
        })}
      </svg>
    </Box>
  );
}

// import SeatView from "../../view/atoms/SeatView";
