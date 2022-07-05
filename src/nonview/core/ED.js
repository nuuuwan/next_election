import IDX from "../../nonview/base/IDX";

export default class ED {
  constructor(edId, name, seats) {
    this.edId = edId;
    this.name = name;
    this.seats = seats;
  }

  static fromDict(d) {
    return new ED(d["edId"], d["name"], d["seats"]);
  }
}

export const TOTAL_NATIONAL_LIST_SEATS = 29;
const ED_D_LIST = [
  { edId: "LK", name: "National List", seats: TOTAL_NATIONAL_LIST_SEATS },
  { edId: "EC-01", name: "Colombo", seats: 19 },
  { edId: "EC-02", name: "Gampaha", seats: 18 },
  { edId: "EC-03", name: "Kalutara", seats: 10 },
  { edId: "EC-04", name: "Kandy", seats: 12 },
  { edId: "EC-05", name: "Matale", seats: 5 },
  { edId: "EC-06", name: "Nuwara-Eliya", seats: 8 },
  { edId: "EC-07", name: "Galle", seats: 9 },
  { edId: "EC-08", name: "Matara", seats: 7 },
  { edId: "EC-09", name: "Hambantota", seats: 7 },
  { edId: "EC-10", name: "Jaffna", seats: 7 },
  { edId: "EC-11", name: "Vanni", seats: 6 },
  { edId: "EC-12", name: "Batticaloa", seats: 5 },
  { edId: "EC-13", name: "Digamadulla", seats: 7 },
  { edId: "EC-14", name: "Trincomalee", seats: 4 },
  { edId: "EC-15", name: "Kurunegala", seats: 15 },
  { edId: "EC-16", name: "Puttalam", seats: 8 },
  { edId: "EC-17", name: "Anuradhapura", seats: 9 },
  { edId: "EC-18", name: "Polonnaruwa", seats: 5 },
  { edId: "EC-19", name: "Badulla", seats: 9 },
  { edId: "EC-20", name: "Moneragala", seats: 6 },
  { edId: "EC-21", name: "Ratnapura", seats: 11 },
  { edId: "EC-22", name: "Kegalle", seats: 9 },
];

export const ED_LIST = ED_D_LIST.map(function (d) {
  return ED.fromDict(d);
});

export const ED_IDX = IDX.build(
  ED_LIST,
  (ed) => ed.edId,
  (ed) => ed
);
