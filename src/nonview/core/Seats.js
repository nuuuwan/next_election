export default class Seats {
  static computeSeats(partyPct, totalSeats, minPctForSeats, bonusSeats) {
    if (partyPct < minPctForSeats) {
      return 0;
    }
    const otherPct = 1 - partyPct;

    const totalSeatsNonBonus = totalSeats - bonusSeats;

    const seatsFloat = totalSeatsNonBonus * partyPct;
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

    if (partyPct > otherPct) {
      seats += bonusSeats;
    }

    return seats;
  }
}
