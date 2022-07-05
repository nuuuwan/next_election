import IDX from "../../nonview/base/IDX";
import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";
import ED_TO_PCT from "../../nonview/core/ED_TO_PCT";
import GROUP_TO_FIELD_TO_ED_TO_PCT_INV from "../../nonview/core/GROUP_TO_FIELD_TO_ED_TO_PCT_INV";
import Seats from "../../nonview/core/Seats";

const MIN_PCT_FOR_ED_SEATS = 0.05;

export default class ElectionResult {
  static getEmptyEdToPct() {
    return IDX.map(
      ED_TO_PCT,
      (edId) => edId,
      (v) => v * 0
    );
  }

  constructor(edToPct) {
    this.edToPct = ElectionResult.getEmptyEdToPct();
    this.groupToFieldToPct = undefined;
    this.recomputeGroupToFieldToPct();
  }

  setEdPct(edId, Pct) {
    this.edToPct[edId] = Pct;
  }

  recomputeGroupToFieldToPct() {
    this.groupToFieldToPct = IDX.map(
      GROUP_TO_FIELD_TO_ED_TO_PCT_INV,
      (group) => group,
      (fieldToEdToPctInv) =>
        IDX.map(
          fieldToEdToPctInv,
          (field) => field,
          (edToPctInv) =>
            Object.entries(edToPctInv).reduce(
              function (pct, [edId, pctInv]) {
                return pct + pctInv * this.edToPct[edId];
              }.bind(this),
              0
            )
        )
    );
  }

  getGroupToFieldToPct() {
    this.recomputeGroupToFieldToPct();
    return this.groupToFieldToPct;
  }

  // Derived
  getLKPct() {
    return Object.entries(this.edToPct).reduce(function (lkPct, [edId, Pct]) {
      const edPct = ED_TO_PCT[edId];
      return lkPct + Pct * edPct;
    }, 0);
  }

  getEDSeats(edId) {
    return Seats.computeSeats(
      this.edToPct[edId],
      ED_IDX[edId].seats,
      MIN_PCT_FOR_ED_SEATS,
      1
    );
  }

  getNLSeats() {
    return Seats.computeSeats(this.getLKPct(), TOTAL_NATIONAL_LIST_SEATS, 0, 0);
  }

  getTotalSeats() {
    return (
      Object.keys(this.edToPct).reduce(
        function (totalEdSeats, edId) {
          return totalEdSeats + this.getEDSeats(edId);
        }.bind(this),
        0
      ) + this.getNLSeats()
    );
  }

  getSortedEdIdList() {
    return Object.keys(this.edToPct);
  }
}
