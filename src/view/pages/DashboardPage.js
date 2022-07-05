import { Component } from "react";

import Stack from "@mui/material/Stack";

import ElectionResult from "../../nonview/core/ElectionResult";

import GroupsView from "../../view/molecules/GroupsView";
import NationalView from "../../view/molecules/NationalView";

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    const electionResult = new ElectionResult();
    this.state = { electionResult };
  }

  onChangeElectionResult(electionResult) {
    this.setState({ electionResult });
  }

  render() {
    const { electionResult } = this.state;
    return (
      <Stack direction="row" gap={0.1}>
        <NationalView electionResult={electionResult} />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={this.onChangeElectionResult.bind(this)}
          groupList={["LK", "ED"]}
        />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={this.onChangeElectionResult.bind(this)}
          groupList={["Ethnicity", "Religion"]}
        />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={this.onChangeElectionResult.bind(this)}
          groupList={["2020 Election", "2015 Election", "2010 Election"]}
        />
      </Stack>
    );
  }
}
