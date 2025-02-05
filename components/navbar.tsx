import React from "react";
import { motion } from "framer-motion";

const navbar = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 4.9, duration: 0.5, stiffness: 100 }}
      className="p-4 text-2xl font-semibold border-b border-zinc-800 text-zinc-400 font-firaCode cursor-pointer"
    >
      {"<isKaushal/>"}
    </motion.div>
  );
};

export default navbar;
