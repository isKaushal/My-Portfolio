"use client";

import Image from "next/image";
import { motion } from "motion/react";

// components
import {
  HeroEntryAnimation,
  HeroSliderAnimation,
} from "@/components/heroAnimation";
import Section from "@/components/Section";
import Navbar from "@/components/navbar";
import SkillsSection from "@/components/skillsSection";
import HeroSocialButtons from "@/components/heroSocialButtons";
import Projects from "@/components/projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroEntryAnimation />
      <Section className="h-[70vh] flex items-center justify-center">
        <div className="flex justify-center gap-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 4.7,
              duration: 0.5,
              stiffness: 100,
              velocity: 100,
            }}
          >
            <Image
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Profile"
              className="rounded-md aspect-square"
              width={310}
              height={310}
            />
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4.8, duration: 0.5 }}
              className="flex"
            >
              <h1 className="text-5xl">My Name is</h1>
              <h1 className="text-5xl ml-2">Kaushal</h1>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5, duration: 0.5 }}
            >
              <HeroSliderAnimation />
            </motion.div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 5.2, duration: 0.5 }}
              className="w-[480px] text-justify"
            >
              I'm a motivated Frontend Developer with a knack for building
              user-friendly web applications. I love taking on new challenges,
              creating meaningful projects, and constantly learning new
              things—especially when it comes to exploring the world of AI. With
              a strong foundation in modern web technologies, I strive to
              deliver innovative solutions.
            </motion.p>

            <div>
              <HeroSocialButtons />
            </div>
          </div>
        </div>
      </Section>

      <Section className="my-20 mt-40 p-4">
        <div>
          <h1 className="text-3xl text-center">Skills and Technologies </h1>
        </div>
        <div>
          <SkillsSection />
        </div>
      </Section>

      <Section className="my-20 mt-40 p-4">
        <div>
          <h1 className="text-3xl text-center">Projects </h1>
        </div>
        <div>
          <Projects />
        </div>
      </Section>

      <Section>
        <div>
          <h1 className="text-3xl text-center">Experince</h1>
        </div>
      </Section>
    </>
  );
};

export default Home;
