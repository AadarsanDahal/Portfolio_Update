import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
  links,
  status = "completed",
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="h-full overflow-hidden border-gray-700/50 bg-gray-900/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
        {image && (
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="h-48 w-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            {status && (
              <div className="absolute right-3 top-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    status === "completed"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : status === "in-progress"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  }`}
                >
                  {status.charAt(0).toUpperCase() +
                    status.slice(1).replace("-", " ")}
                </span>
              </div>
            )}
          </div>
        )}

        <CardHeader>
          <CardTitle className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </CardHeader>

        {tags && tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        )}

        <CardFooter className="mt-auto gap-3">
          {/* New customizable button system */}
          {links && links.length > 0 ? (
            links.map((linkItem, index) => (
              <motion.a
                key={index}
                href={linkItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-4 py-2 text-center text-sm font-medium transition-all duration-200 rounded-lg flex items-center justify-center gap-2 ${
                  linkItem.variant === "primary" || linkItem.primary
                    ? "bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-600/30 hover:border-purple-500"
                    : linkItem.variant === "secondary"
                    ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600"
                    : linkItem.variant === "success"
                    ? "bg-green-600/20 hover:bg-green-600/30 text-green-300 border border-green-600/30 hover:border-green-500"
                    : linkItem.variant === "warning"
                    ? "bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-300 border border-yellow-600/30 hover:border-yellow-500"
                    : linkItem.variant === "danger"
                    ? "bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-600/30 hover:border-red-500"
                    : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {linkItem.iconUrl && (
                  <img
                    src={linkItem.iconUrl}
                    alt={`${linkItem.label} icon`}
                    className="w-4 h-4"
                  />
                )}
                {linkItem.label}
              </motion.a>
            ))
          ) : (
            /* Fallback to old system for backwards compatibility */
            <>
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-600/30 hover:border-purple-500 rounded-lg text-center text-sm font-medium transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg text-center text-sm font-medium transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GitHub
                </motion.a>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
