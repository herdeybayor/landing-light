import React from "react";

function Row({ children }) {
  return (
    <div className="flex justify-between items-start mt-8">{children}</div>
  );
}

export default Row;
