import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const text = "Xush kelibsiz!";

export default function Welcome() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000); // 4s turadi
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 
          bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600
          animate-gradient-x px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                       font-extrabold text-white flex flex-wrap justify-center gap-1 sm:gap-2 text-center"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.5, rotate: -30 },
                  visible: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
