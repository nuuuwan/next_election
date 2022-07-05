import { Component } from "react";

import Stack from "@mui/material/Stack";

import { YEAR_TO_PARTY_TO_ELECTION_RESULT } from "../../nonview/core/ElectionResult";

import ElectionResultView from "../../view/molecules/ElectionResultView";
import NationalView from "../../view/molecules/NationalView";

const DEFAULT_YEAR = 2020;
const DEFAULT_PARTY = "JJB";

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    const electionResult =
      YEAR_TO_PARTY_TO_ELECTION_RESULT[DEFAULT_YEAR][DEFAULT_PARTY];
    this.state = { electionResult };
  }

  onChangeElectionResult(electionResult) {
    this.setState({ electionResult });
  }

  render() {
    const { electionResult } = this.state;
    return (
      <Stack direction="row" gap={5}>
        <ElectionResultView
          electionResult={electionResult}
          onChangeElectionResult={this.onChangeElectionResult.bind(this)}
        />
        <NationalView electionResult={electionResult} />
      </Stack>
    );
  }
}
