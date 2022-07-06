export default class Seats {
  static computeSeats(pct, totalSeats, minPctForSeats, bonusSeats) {
    if (pct < minPctForSeats) {
      return 0;
    }
    const totalSeatsNonBonus = totalSeats - bonusSeats;

    const seatsFloat = totalSeatsNonBonus * pct;
    const seatsInt = parseInt(seatsFloat);
    const seatsRem = seatsFloat - seatsInt;

    const seatsIntOther = parseInt(totalSeatsNonBonus - seatsFloat);

    let seats = seatsInt;
    const remSeats = totalSeatsNonBonus - seatsInt - seatsIntOther;
    if (remSeats > 0) {
      if (seatsRem > Math.random()) {
        seats += 1;
      }
    }

    if (Math.pow(pct * 2, 2) > Math.random()) {
      seats += bonusSeats;
    }

    return seats;
  }
}
