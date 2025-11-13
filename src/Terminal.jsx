import React, { useState, useRef, useEffect } from "react";

export default function LinuxTerminal() {
  const [history, setHistory] = useState([
    {
      command: "Welcome to da terminal",
      output: "Type 'help' to get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [showToast, setShowToast] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: [
      "Available commands:",
      "help - Show available commands",
      "clear - Clear the terminal",
      "echo <text> - Print text",
      "date - Show current date & time",
      "whoami - Show current user",
      "about - Learn more about me",
      "sudo about - Download my CV",
      "exit - Return to main portfolio",
    ],
    ls: [
      "Available commands:",
      "help - Show available commands",
      "clear - Clear the terminal",
      "echo <text> - Print text",
      "date - Show current date & time",
      "whoami - Show current user",
      "about - Learn more about me",
      "sudo about - Download my CV",
      "exit - Return to main portfolio",
    ],
    clear: "__clear__",
    date: () => new Date().toString(),
    whoami:
      "I am Aadarsan Dahal, an IoT & System Developer based in Lalitpur, Nepal.\nSpecializing in embedded systems, robotics, and product design, with a strong \nfocus on innovation and mentorship. Currently pursuing B.Sc. CSIT at Samriddhi College, TU.",
    about: [
      "=== Aadarsan Dahal ===",
      " Mahalaxmi-7, Lalitpur, Nepal",
      " 9813719993",
      " aadarsandahal@gmail.com (click to copy)",
      " LinkedIn: Aadarsan Dahal | GitHub: AadarsanDahal",
      "",
      " Education:",
      "- B.Sc. CSIT at Samriddhi College, Tribhuvan University (2024 – Ongoing)",
      "- +2 Science at Arniko International Secondary School & College (2022 – 2024)",
      "",
      " Technical Skills:",
      "- Languages: Python, C, C++, HTML, CSS",
      "- IoT & Embedded: Arduino, NodeMCU/ESP8266, Raspberry Pi, Edge Computing",
      "- Tools: Git/GitHub, Postman, Slack",
      "- Design: Fusion 360, EasyEDA, 3D Printing",
      "- Other: Bash scripting, Networking fundamentals",
      "",
      " Work Experience:",
      "1. IoT Intern - Treeleaf Technologies Pvt. Ltd. (May-Jul 2025)",
      "   - Embedded systems work with Raspberry Pi and Orange Pi",
      "   - Circuit design and 3D prototyping",
      "",
      "2.  Student Trainer – Arniko International College (Aug-Sep 2024)",
      "   - Computer Fundamentals training",
      "   - SDLC and emerging technologies instructio",
      "",
      "3.Team Captain & Mentor - Team Arniko Robotics (2022 – Present)",
      "   - 1st Prize winner at Mechtrix 2079 (Dynamic Section)",
      "   - Nepal representative at TechFest IIT Mumbai",
      "",
      "4. Campus Director – Hult Prize 2025/26 (Samriddhi College)",
      "",
      " Key Achievements:",
      "- Most Innovative Project: KU EEPEX Hackathon 2025",
      "- 1st Prize: Mechtrix 2079 (Dynamic Section, Robotics)",
      "- International Experience: TechFest IIT Mumbai",
      "",
      "Type 'sudo about' to download my CV!",
    ],
  };

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(" ");
    const base = args[0].toLowerCase();

    if (!base) return;

    if (base === "clear") {
      setHistory([]);
      return;
    }

    let output;

    if (base === "echo") {
      output = args.slice(1).join(" ");
    } else if (base === "sudo" && args[1] === "about") {
      // Create a download link for the CV
      const link = document.createElement("a");
      // Construct the path based on current location
      const currentPath = window.location.pathname;
      const basePath = currentPath.substring(0, currentPath.lastIndexOf("/"));
      link.href = basePath + "/Aadarsan_Dahal.pdf";
      link.download = "AadarsanDahal_CV.pdf";
      output =
        "Initiating CV download...\n Please wait...\n Download should begin shortly!";

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (base === "exit") {
      output = "Redirecting to main portfolio...";
      setTimeout(() => {
        // Get current location and navigate to index.html in the same directory
        const currentPath = window.location.pathname;
        const basePath = currentPath.substring(0, currentPath.lastIndexOf("/"));
        window.location.href = basePath + "/index.html";
      }, 1000);
    } else if (commands[base]) {
      const result = commands[base];
      output = Array.isArray(result)
        ? result.join("\n")
        : typeof result === "function"
        ? result()
        : result;
    } else {
      output = `Command not found: ${base}`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <div
      className="terminal-container"
      style={{
        backgroundColor: "#0e1419",
        color: "#ffffff",
        fontFamily: "JetBrains Mono, monospace",
        padding: "1rem",
        borderRadius: "10px",
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        boxShadow: "0 0 10px rgba(59, 145, 213, 0.3)",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
      ref={terminalRef}
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((item, i) => (
        <div key={i}>
          {item.command && (
            <div>
              <span style={{ color: "#C4A14E" }}>aadarsan</span>
              <span style={{ color: "#4D5B66" }}>@</span>
              <span style={{ color: "#3B91D5" }}>terminal</span>
              <span style={{ color: "#4D5B66" }}>:~$</span> {item.command}
            </div>
          )}
          {item.output && (
            <pre
              style={{
                margin: 0,
                cursor: "pointer",
              }}
              onClick={(e) => {
                const emailRegex = /aadarsandahal@gmail\.com/;
                const text = e.target.textContent;
                if (emailRegex.test(text)) {
                  navigator.clipboard.writeText("aadarsandahal@gmail.com");
                  setShowToast(true);
                }
              }}
            >
              {item.output}
            </pre>
          )}
        </div>
      ))}

      <div>
        <span style={{ color: "#C4A14E" }}>aadarsan</span>
        <span style={{ color: "#4D5B66" }}>@</span>
        <span style={{ color: "#3B91D5" }}>terminal</span>
        <span style={{ color: "#4D5B66" }}>:~$</span>{" "}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "calc(100% - 200px)",
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              outline: "none",
              width: "100%",
              caretColor: "transparent",
              padding: 0,
              margin: 0,
            }}
          />
          <span
            className="typing-cursor"
            style={{
              position: "absolute",
              display: "inline-block",
              width: "8px",
              height: "1.2em",
              backgroundColor: "#ffffff",
              animation: "blink 1s step-end infinite",
              left: `${input.length}ch`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
        .terminal-container {
          font-size: 14px;
          line-height: 1.5;
        }
        pre {
          color: #3B91D5;
        }
        .typing-cursor {
          animation: blink 1s step-end infinite;
          transition: left 0.1s ease;
        }
        input:focus + .typing-cursor {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
