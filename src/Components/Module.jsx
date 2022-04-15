import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Module({ module }) {
  return (
    <div className="relative">
      <div className="flex justify-between">
        <h3 className="lg:text-xl">{module.title}</h3>
        <div className="flex space-x-3 items-center relative">
          <div className="flex text-gray-600 space-x-1 text-md items-center lg:text-xl">
            <OndemandVideoIcon />
            <p className="font-thin text-md">{module.lectures} Lectures</p>
          </div>

          <div className="flex text-gray-600 space-x-1 text-md items-center lg:text-xl">
            <AccessTimeIcon />
            <p className="font-semibold">{module.duration} Hrs Duration</p>
          </div>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
}

export default Module;
