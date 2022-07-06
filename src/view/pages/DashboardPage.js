import { Component } from "react";

import Stack from "@mui/material/Stack";

import GroupsView from "../../view/molecules/GroupsView";
import NationalView from "../../view/molecules/NationalView";

export default class DashboardPage extends Component {
  render() {
    const { electionResult, onChangeElectionResult } = this.props;
    return (
      <Stack direction="row" gap={0.1}>
        <NationalView electionResult={electionResult} />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={onChangeElectionResult}
          groupList={["LK", "ED"]}
        />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={onChangeElectionResult}
          groupList={["2020 Election", "2015 Election", "2010 Election"]}
        />
        <GroupsView
          electionResult={electionResult}
          onChangeElectionResult={onChangeElectionResult}
          groupList={["Ethnicity", "Religion"]}
        />
      </Stack>
    );
  }
}
