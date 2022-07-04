import { Component } from "react";
import {ELECTION_RESULT_IDX} from "../../nonview/core/ElectionResult"
import ElectionResultView from "../../view/molecules/ElectionResultView"


export default class DashboardPage extends Component {
  render() {
    const electionResult = ELECTION_RESULT_IDX[2020]['SJB'];

    return <ElectionResultView electionResult={electionResult} />;
  }
}
