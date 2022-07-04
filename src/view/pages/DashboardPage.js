import { Component } from "react";
import { YEAR_TO_PARTY_TO_ELECTION_RESULT } from "../../nonview/core/ElectionResult";
import ElectionResultView from "../../view/molecules/ElectionResultView";

export default class DashboardPage extends Component {
  render() {
    const electionResult = YEAR_TO_PARTY_TO_ELECTION_RESULT[2020]["SJB"];

    return <ElectionResultView electionResult={electionResult} />;
  }
}
