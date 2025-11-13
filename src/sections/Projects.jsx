import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { label } from "framer-motion/client";

const projectsData = [
  {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS featuring interactive animations .",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "./assets/image.png",
    links: [
      {
        label: "Live Demo",
        url: "https://AadarsanDahal.github.io/Portfolio_Update",
        variant: "success",
      },
      {
        label: "GitHub",
        url: "https://github.com/AadarsanDahal/Portfolio_Update",
        variant: "secondary",
      },
    ],
    status: "completed",
  },
  {
    title: "Pravardha",
    description:
      "IoT and blockchain device which helps to verify the  real time climatic conditions of indoor farms on-chain.",
    tags: ["Web 3", "React", "Supabase", "IoT"],
    image: "./assets/Pravardha.jpg",
    links: [
      {
        label: "Twitter",
        url: "https://x.com/Pravardha25",
        variant: "primary",
      },
      {
        label: "GitHub",
        url: "https://github.com/belly1v123/Pravardha",
        variant: "secondary",
      },
    ],
    status: "in-progress",
  },
  {
    title: "Cube Satellite",
    description:
      "A simulated satellite model using DHT and MPU sensors to collect environmental and motion data, displayed live on a web dashboard.",
    tags: ["HTML", "Firebase", "ESP-8266"],
    image: "./assets/cubesat.png",
    links: [
      {
        label: "Live Demo",
        url: "nimesh le dinxa lamo ",
        variant: "success",
      },
      {
        label: "GitHub",
        url: "https://github.com/n1meshh/CubeSat",
        variant: "secondary",
      },
    ],
    status: "completed",
  },
  {
    title: "Kokro",
    description:
      "Kokro is a smart cradle that soothes babies to sleep by mimicking natural rocking motions and alerts parents if the baby wakes up or needs attention.",
    tags: ["JavaScript", "Chart.js", "CSS3"],
    image: "./assets/kokro.jpg",
    links: [
      {
        label: "Git-Hub",
        url: "https://github.com/ronishg27/Smart-Cradle",
        variant: "secondary",
      },
    ],
    status: "completed",
  },
  {
    title: "Cozmo-Bot",
    description:
      "A robotic gripper with adaptive force control and manual operation capabilities.",
    tags: ["Robotics", "Servos", "Circuit Designe"],

    image: "./assets/cozmo1.png",
    links: [
      {
        label: "Live Demo",
        url: "https://www.facebook.com/reel/681632584116569",
        variant: "success",
      },
      {
        label: "Abstract",
        url: "https://docs.google.com/document/d/1VEj2T6sPHMQaR7kqBrZ7CgsC1EOyvFMXVyeSa9znfEo/edit?usp=sharing",
        variant: "secondary",
      },
    ],
    status: "completed",
  },
  {
    title: "CLI based To-Do listmaker",
    description: "CLI Based To-Do list maker . COMMING SOON.",
    tags: ["RUST"],
    image: "./assets/cli.jpg",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
    status: "planning",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

function Projects() {
  return (
    <section className="py-20 px-6 md:px-8 lg:px-12" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and
            creative implementations across various technologies and domains.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full w-full max-w-sm"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/AadarsanDahal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
