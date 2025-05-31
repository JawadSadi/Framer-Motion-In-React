import { motion } from "framer-motion";
import React from "react";

const BouncingLoader = () => {
  return (
    <div className="flex items-center space-x-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          className="w-4 h-4 bg-teal-200 rounded-full"
          key={index}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLoader;
