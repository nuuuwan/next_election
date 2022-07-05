import IDX from "../../nonview/base/IDX";
import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";
import ED_TO_PCT from "../../nonview/core/ED_TO_PCT";
import GROUP_TO_FIELD_TO_ED_TO_PCT from "../../nonview/core/GROUP_TO_FIELD_TO_ED_TO_PCT";
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

  static getEmptyGroupToFieldToPct() {
    return IDX.map(
      GROUP_TO_FIELD_TO_ED_TO_PCT,
      (group) => group,
      (fieldToEdToPct) =>
        IDX.map(
          fieldToEdToPct,
          (field) => field,
          (edToPct) => 0
        )
    );
  }

  constructor(edToPct) {
    this.edToPct = ElectionResult.getEmptyEdToPct();
    this.groupToFieldToPct = ElectionResult.getEmptyGroupToFieldToPct();
  }

  moveEdPct(edId, newPct) {
    const oldPct = this.edToPct[edId];
    const dPct = newPct - oldPct;
    this.edToPct[edId] = newPct;

    this.groupToFieldToPct = Object.entries(this.groupToFieldToPct).reduce(
      function (groupToFieldToPct, [group, fieldToPct]) {
        groupToFieldToPct[group] = Object.entries(fieldToPct).reduce(function (
          fieldToPct,
          [field, pct]
        ) {
          fieldToPct[field] =
            pct + dPct * GROUP_TO_FIELD_TO_ED_TO_PCT_INV[group][field][edId];
          return fieldToPct;
        },
        {});
        return groupToFieldToPct;
      },
      {}
    );
  }

  moveGroupFieldPct(group, field, newPct) {
    const oldPct = this.groupToFieldToPct[group][field];
    const dPct = newPct - oldPct;
    this.groupToFieldToPct[group][field] = newPct;

    this.edToPct = Object.entries(this.edToPct).reduce(function (
      edToPct,
      [edId, pct]
    ) {
      edToPct[edId] =
        pct + dPct * GROUP_TO_FIELD_TO_ED_TO_PCT[group][field][edId];
      return edToPct;
    },
    {});
  }

  getGroupToFieldToPct() {
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
