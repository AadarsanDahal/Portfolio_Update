import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Toast = ({ message, isVisible, onClose, type = "success" }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const types = {
    success: {
      bg: "bg-white",
      icon: "✅",
      border: "border-black-400",
    },
    error: {
      bg: "bg-red-500/90",
      icon: "✕",
      border: "border-red-400",
    },
    info: {
      bg: "bg-blue-500/90",
      icon: "ⓘ",
      border: "border-blue-400",
    },
  };

  const config = types[type] || types.success;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`fixed top-5 right-5 z-50 ${config.bg} backdrop-blur-md text-black px-6 py-4 rounded-lg shadow-lg border ${config.border} flex items-center gap-3 min-w-[300px]`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/20 text-xl font-bold">
            {config.icon}
          </div>
          <p className="flex-1 text-sm font-medium">{message}</p>
          <button
            onClick={onClose}
            className="text-black/80 hover:text-black transition-colors ml-2"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
