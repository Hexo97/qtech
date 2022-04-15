import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Module() {
  return (
    <div className="flex justify-between">
      <h3>Introduction</h3>
      <h4>This should still be here after a rebase</h4>
      <div className="flex space-x-3">
        <div className="flex space-x-1 items-center lg:text-xl">
          <OndemandVideoIcon />
          <p className="font-semibold">28 Lectures</p>
        </div>

        <div className="flex space-x-1 items-center  lg:text-xl">
          <AccessTimeIcon />
          <p className="font-semibold">34 Hrs Duration</p>
        </div>
      </div>
    </div>
  );
}

export default Module;
