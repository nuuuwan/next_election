import Box from "@mui/material/Box";

import GroupView from "../../view/molecules/GroupView";

export default function GroupsView({
  electionResult,
  onChangeElectionResult,
  groupList,
}) {
  return (
    <Box>
      {groupList.map(function (group) {
        const fieldToPct = electionResult.getGroupToFieldToPct()[group];
        return (
          <GroupView
            key={"group-" + group}
            group={group}
            fieldToPct={fieldToPct}
            electionResult={electionResult}
            onChangeElectionResult={onChangeElectionResult}
          />
        );
      })}
    </Box>
  );
}

// import  from "../../view/atoms/";
