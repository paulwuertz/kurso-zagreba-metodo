import React from "react";

const ProgressBar = ({ percent, showQuitModal }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      style={{
        flex: 9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          height: 5,
          background: "#ccc",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: 10,
            background: "#13c713",
            borderRadius: 100,
            transition: "width 0.5s linear"
          }}
        />
      </div>
    </div>
  </div>
);

export default ProgressBar;
