import IDX from "../../nonview/base/IDX";
import { ED_IDX, TOTAL_NATIONAL_LIST_SEATS } from "../../nonview/core/ED";
import GROUP_TO_FIELD_TO_PD_TO_PCT from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT";
import GROUP_TO_FIELD_TO_PD_TO_PCT_INV from "../../nonview/core/GROUP_TO_FIELD_TO_PD_TO_PCT_INV";
import { PD_LIST } from "../../nonview/core/PD";
import Seats from "../../nonview/core/Seats";

const MIN_PCT_FOR_ED_SEATS = 0.05;

export default class ElectionResult {
  static getEmptyPdToPct() {
    return IDX.build(
      PD_LIST,
      (pd) => pd.pdId,
      (pd) => 0
    );
  }

  static getEmptyGroupToFieldToPct() {
    return IDX.map(
      GROUP_TO_FIELD_TO_PD_TO_PCT,
      (group) => group,
      (fieldToPdToPct) =>
        IDX.map(
          fieldToPdToPct,
          (field) => field,
          (pdToPct) => 0
        )
    );
  }

  constructor(pdToPct) {
    this.pdToPct = ElectionResult.getEmptyPdToPct();
    this.groupToFieldToPct = ElectionResult.getEmptyGroupToFieldToPct();
    this.tmpOldPct = null;
  }

  movePdPct(pdId, newPct) {
    const oldPct = this.pdToPct[pdId];
    const dPct = newPct - oldPct;
    this.pdToPct[pdId] = newPct;

    this.groupToFieldToPct = Object.entries(this.groupToFieldToPct).reduce(
      function (groupToFieldToPct, [group, fieldToPct]) {
        groupToFieldToPct[group] = Object.entries(fieldToPct).reduce(function (
          fieldToPct,
          [field, pct]
        ) {
          fieldToPct[field] =
            pct + dPct * GROUP_TO_FIELD_TO_PD_TO_PCT_INV[group][field][pdId];
          return fieldToPct;
        },
        {});
        return groupToFieldToPct;
      },
      {}
    );
  }

  storeOldPct(group, field, newPct) {
    if (this.tmpOldPct === null) {
      this.tmpOldPct = this.groupToFieldToPct[group][field];
    }
    this.groupToFieldToPct[group][field] = newPct;
  }

  moveGroupFieldPct(group, field, newPct) {
    const oldPct = this.tmpOldPct;
    const dPct = newPct - oldPct;
    this.groupToFieldToPct[group][field] = newPct;
    this.tmpOldPct = null;

    this.pdToPct = Object.entries(this.pdToPct).reduce(function (
      pdToPct,
      [pdId, pct]
    ) {
      let pct0 = GROUP_TO_FIELD_TO_PD_TO_PCT[group][field][pdId];
      if (!pct0) {
        pct0 = 0;
      }
      pdToPct[pdId] = pct + dPct * pct0;
      return pdToPct;
    },
    {});

    this.groupToFieldToPct = Object.entries(this.groupToFieldToPct).reduce(
      function (groupToFieldToPct, [group2, fieldToPct]) {
        if (group2 === group) {
          return groupToFieldToPct;
        }

        groupToFieldToPct[group2] = Object.entries(fieldToPct).reduce(
          function (fieldToPct, [field, pct]) {
            fieldToPct[field] = Object.entries(
              GROUP_TO_FIELD_TO_PD_TO_PCT_INV[group2][field]
            ).reduce(
              function (pct, [pdId, pctInv]) {
                return pct + this.pdToPct[pdId] * pctInv;
              }.bind(this),
              0
            );
            return fieldToPct;
          }.bind(this),
          {}
        );
        return groupToFieldToPct;
      }.bind(this),
      this.groupToFieldToPct
    );
  }

  // Derived

  get edToPct() {
    return IDX.map(
      GROUP_TO_FIELD_TO_PD_TO_PCT_INV["ED"],
      (edId) => edId,
      (pdToPct) =>
        Object.entries(pdToPct).reduce(
          function (pct, [pdId, pctInv]) {
            return pct + pctInv * this.pdToPct[pdId];
          }.bind(this),
          0
        )
    );
  }

  get lkPct() {
    return Object.entries(this.pdToPct).reduce(function (lkPct, [pdId, pct]) {
      return lkPct + GROUP_TO_FIELD_TO_PD_TO_PCT_INV["LK"]["lk"][pdId] * pct;
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
    return Seats.computeSeats(this.lkPct, TOTAL_NATIONAL_LIST_SEATS, 0, 0);
  }

  getTotalSeats() {
    return (
      Object.keys(this.edToPct).reduce(
        function (totalPdSeats, edId) {
          return totalPdSeats + this.getEDSeats(edId);
        }.bind(this),
        0
      ) + this.getNLSeats()
    );
  }

  getSortedPdIdList() {
    return Object.keys(this.edToPct);
  }
}
