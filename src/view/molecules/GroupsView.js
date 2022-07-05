import Box from "@mui/material/Box";

import GroupView from "../../view/molecules/GroupView";

export default function GroupsView({ electionResult, groupList }) {
  return (
    <Box>
      {groupList.map(function (group) {
        const fieldToPct = electionResult.getGroupToFieldToPct()[group];
        return (
          <GroupView
            key={"group-" + group}
            group={group}
            fieldToPct={fieldToPct}
          />
        );
      })}
    </Box>
  );
}

// import  from "../../view/atoms/";
