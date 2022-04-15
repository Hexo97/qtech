import React from "react";
import Module from "./Module";

function ProductDetailsModules({ modules }) {
  return (
    <div className="max-w-7xl mx-auto bg-white px-10 py-5 -top-24 h-full relative">
      <div className="py-5">
        <h5 className="text-xs lg:text-sm font-mono text-gray-400">
          TABLE CONTENT
        </h5>
        <h2 className="text-black text-3xl font-semibold">
          What will you learn?
        </h2>

        {/* Modules */}
        {modules.map((m) => (
          <div className="mt-10" key={m.id}>
            <Module module={m} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsModules;
