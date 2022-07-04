import IDX from "../../nonview/base/IDX";
import YEAR_TO_PARTY_TO_ED_TO_PARTY_PCT from "../../nonview/core/YEAR_TO_PARTY_TO_ED_TO_PARTY_PCT";

export default class ElectionResult {
  constructor(edToPartyPct) {
    this.edToPartyPct = edToPartyPct;
  }

  static fromDict(d) {
    return new ElectionResult(d);
  }
}

export const YEAR_TO_PARTY_TO_ELECTION_RESULT = IDX.map(
  YEAR_TO_PARTY_TO_ED_TO_PARTY_PCT,
  (k) => k,
  (v) =>
    IDX.map(
      v,
      (k) => k,
      (v) => ElectionResult.fromDict(v)
    )
);
