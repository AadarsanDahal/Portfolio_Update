import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025 Nov - Present",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-lg font-black mb-8">
            IoT-Developer <br />
            Krafters Technologies.
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-white-400 text-base md:text-base">
              -Designing and implimenting IoT solutions <br />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025 May- July ",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-lg font-black mb-8">
            IoT-Intern <br /> Treeleaf Technologies .
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-white-400 text-base md:text-base">
              -Developed and implemented IoT solution for realtime face <br />
              detection device.
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2022 Sept - 2025 April",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-lg font-black mb-8">
            Team Captain & Mentor - Team Arniko Robotics
            <br />
            Arniko International College.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white-400 text-base md:text-base">
              - Led Team Arniko as CPT later as mentor , representing the team
              at national and international events while gaining solid
              technical, leadership, and execution skills along the way.{" "}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full relative">
      <Timeline data={data} />
    </div>
  );
}
