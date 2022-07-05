export default class Seats {
  static computeSeats(Pct, totalSeats, minPctForSeats, bonusSeats) {
    if (Pct < minPctForSeats) {
      return 0;
    }
    const otherPct = 1 - Pct;

    const totalSeatsNonBonus = totalSeats - bonusSeats;

    const seatsFloat = totalSeatsNonBonus * Pct;
    const seatsFloatOther = totalSeatsNonBonus * otherPct;
    const seatsInt = parseInt(seatsFloat);
    const seatsIntOther = parseInt(seatsFloatOther);
    const seatsRem = seatsFloat - seatsInt;
    const seatsRemOther = seatsFloatOther - seatsIntOther;

    let seats = seatsInt;

    const remSeats = totalSeatsNonBonus - seatsInt - seatsIntOther;
    if (remSeats > 0) {
      if (seatsRem > seatsRemOther) {
        seats += 1;
      }
    }

    if (Pct > otherPct) {
      seats += bonusSeats;
    }

    return seats;
  }
}
