import IDX from "../../nonview/base/IDX";
import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";
import ED_TO_PCT from "../../nonview/core/ED_TO_PCT";
import GROUP_TO_FIELD_TO_ED_TO_PCT_INV from "../../nonview/core/GROUP_TO_FIELD_TO_ED_TO_PCT_INV";
import Seats from "../../nonview/core/Seats";

const MIN_PCT_FOR_ED_SEATS = 0.05;

export default class ElectionResult {
  constructor(edToPartyPct) {
    this.edToPartyPct = edToPartyPct;
  }

  getPartyPct(edId) {
    return this.edToPartyPct[edId];
  }

  setPartyPct(edId, partyPct) {
    this.edToPartyPct[edId] = partyPct;
  }

  getGroupToFieldToPct() {
    return IDX.map(
      GROUP_TO_FIELD_TO_ED_TO_PCT_INV,
      (group) => group,
      (fieldToEdToPctInv) =>
        IDX.map(
          fieldToEdToPctInv,
          (field) => field,
          (edToPctInv) =>
            Object.entries(edToPctInv).reduce(
              function (pct, [edId, pctInv]) {
                return pct + pctInv * this.edToPartyPct[edId];
              }.bind(this),
              0
            )
        )
    );
  }

  getLKPartyPct() {
    return Object.entries(this.edToPartyPct).reduce(function (
      lkPartyPct,
      [edId, partyPct]
    ) {
      const edPct = ED_TO_PCT[edId];
      return lkPartyPct + partyPct * edPct;
    },
    0);
  }

  getEDSeats(edId) {
    return Seats.computeSeats(
      this.getPartyPct(edId),
      ED_IDX[edId].seats,
      MIN_PCT_FOR_ED_SEATS,
      1
    );
  }

  getNLSeats() {
    return Seats.computeSeats(
      this.getLKPartyPct(),
      TOTAL_NATIONAL_LIST_SEATS,
      0,
      0
    );
  }

  getTotalSeats() {
    return (
      Object.keys(this.edToPartyPct).reduce(
        function (totalEdSeats, edId) {
          return totalEdSeats + this.getEDSeats(edId);
        }.bind(this),
        0
      ) + this.getNLSeats()
    );
  }

  getSortedEdIdList() {
    return Object.keys(this.edToPartyPct);
  }

  static fromDict(d) {
    return new ElectionResult(d);
  }

  static constructEmpty() {
    const d = IDX.map(
      ED_TO_PCT,
      (edId) => edId,
      (v) => v * 0
    );
    return new ElectionResult(d);
  }

  static constructRandom() {
    const d = IDX.map(
      ED_TO_PCT,
      (edId) => edId,
      (v) => Math.random() * 0.1
    );
    return new ElectionResult(d);
  }
}