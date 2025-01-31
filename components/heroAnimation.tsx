"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const HeroEntryAnimation: React.FC = () => {
  const IntitialLine = "Hey, there 👋";

  const [isInitialLineNumber, setIntitialLineNumber] = useState<number>(0);

  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInitialLineNumber < IntitialLine.length) {
        setIntitialLineNumber((prevNumber) => prevNumber + 1);
      }
      if (isInitialLineNumber === IntitialLine.length) {
        setIsAnimating(false);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isInitialLineNumber]);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1, stiffness: 100 }}
            className="absolute flex justify-center items-center top-0 left-0  bg-clr-black z-[5] overflow-x-hidden w-dvw h-screen"
          >
            <div className="text-5xl">
              {IntitialLine.slice(0, isInitialLineNumber + 1)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSliderAnimation: React.FC = () => {
  const [animationNumber, setAnimationNumber] = useState<number>(0);

  const ArrayofAnimatedLines: string[] = [
    "Frontend Developer ",
    "Web Developer",
    "React Developer",
    "Next Developer",
    "Casual Gamer 🎮",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationNumber(
        (prevNumber) => (prevNumber + 1) % ArrayofAnimatedLines.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [animationNumber]);

  return (
    <div className="flex">
      <h2 className="text-3xl">I'm a</h2>
      <AnimatePresence>
        <motion.div
          key={animationNumber}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
          className="absolute text-3xl ml-[4.7rem]"
        >
          {ArrayofAnimatedLines[animationNumber]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export { HeroEntryAnimation, HeroSliderAnimation };
