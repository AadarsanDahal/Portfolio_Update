import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globals.css";
import TerminalApp from "./TerminalApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalApp />
  </StrictMode>
);
