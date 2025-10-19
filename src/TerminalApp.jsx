import React, { useEffect } from "react";
import LinuxTerminal from "./Terminal";

const TerminalApp = () => {
  useEffect(() => {
    document.body.classList.add("terminal-page");
    return () => {
      document.body.classList.remove("terminal-page");
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #06091f 0%, #161a31 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <LinuxTerminal />
    </div>
  );
};

export default TerminalApp;
