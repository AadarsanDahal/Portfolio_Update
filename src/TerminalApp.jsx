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
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <LinuxTerminal />
    </div>
  );
};

export default TerminalApp;
