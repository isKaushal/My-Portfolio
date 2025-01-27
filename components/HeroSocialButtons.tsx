import React, { useState } from "react";
import { delay, motion } from "framer-motion";

// components
import { GmailIcon, InstaGramIcon, LinkedinIcon } from "./SocialIcons";

// helpers
import HeroButtons from "@/helpers/heroIconsHelper";

// context
import { useGlobalState } from "../context/GlobalStateConext";

const HeroSocialButtons: React.FC = () => {
  const { IconsActive, setIconsActive } = useGlobalState();

  const Buttons: HeroButtons = [
    {
      title: "Instagram",
      icon: <InstaGramIcon isHovered={IconsActive.instagramIcon} />,
      link: "https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox",
      className: "hover:bg-gradient-to-r from-pink-500 to-violet-500",
      label: "instagramIcon",
    },
    {
      title: "Linkedin",
      icon: <LinkedinIcon isHovered={IconsActive.linkedinIcon} />,
      link: "https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox",
      className: "hover:bg-gradient-to-r from-cyan-500 to-blue-500",
      label: "linkedinIcon",
    },
    {
      title: "Gmail",
      icon: <GmailIcon isHovered={IconsActive.gmailIcon} />,
      link: "https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox",
      className: "hover:bg-gradient-to-r from-red-500 to-yellow-500",
      label: "gmailIcon",
    },
  ];

  const onMouseEnter = (data: HeroButtons | any) => {
    switch (data.label) {
      case "instagramIcon":
        return setIconsActive({ ...IconsActive, instagramIcon: true });
      case "linkedinIcon":
        return setIconsActive({ ...IconsActive, linkedinIcon: true });
      case "gmailIcon":
        return setIconsActive({ ...IconsActive, gmailIcon: true });
      default:
        return setIconsActive(IconsActive);
    }
  };

  return (
    <div className="flex gap-4">
      {Buttons.map((button, index) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 5.5 + index * 0.1,
            duration: 0.5,
            stiffness: 100,
          }}
          className={`${button.className} flex gap-4 border-2 border-zinc-700  text-zinc-400  hover:text-zinc-300`}
          key={index}
          onMouseEnter={() => onMouseEnter(button)}
          onMouseLeave={() =>
            setIconsActive({
              ...IconsActive,
              gmailIcon: false,
              linkedinIcon: false,
              instagramIcon: false,
            })
          }
        >
          <div className="bg-clr-black bg-opacity-70 w-full h-full px-2 py-1 ">
            <a
              href={button.link}
              target="_blank"
              className="flex items-center justify-center gap-2 "
            >
              <div>{button.icon}</div>
              {button.title}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroSocialButtons;
