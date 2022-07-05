import Box from "@mui/material/Box";

import GroupView from "../../view/molecules/GroupView";

export default function GroupsView({ electionResult }) {
  return (
    <Box>
      {Object.entries(electionResult.groupToFieldToPct()).map(function ([
        group,
        fieldToPct,
      ]) {
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
