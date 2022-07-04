import IDX from "../../nonview/base/IDX";
import MULTI_ED_PCT_IDX from "../../nonview/core/MULTI_ED_PCT_IDX";

export default class ElectionResult {
  constructor(edPctIdx) {
    this.edPctIdx = edPctIdx;
  }

  static fromDict(d) {
    return new ElectionResult(d);
  }
}

export const ELECTION_RESULT_IDX = IDX.map(
  MULTI_ED_PCT_IDX,
  (k) => k,
  (v) =>
    IDX.map(
      v,
      (k) => k,
      (v) => ElectionResult.fromDict(v)
    )
);
