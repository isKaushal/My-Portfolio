import React, { useState } from "react";
import { IconGmail, IconInstagram, IconLinkedin } from "./icons";

const InstaGramIcon: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  // const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 19 19"
      >
        <defs>
          {isHovered ? (
            <linearGradient
              id="instagram-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#f58529" }} />
              <stop offset="50%" style={{ stopColor: "#dd2a7b" }} />
              <stop offset="100%" style={{ stopColor: "#8134af" }} />
            </linearGradient>
          ) : (
            <linearGradient
              id="instagram-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#ffff" }} />
              <stop offset="50%" style={{ stopColor: "#ffff" }} />
              <stop offset="100%" style={{ stopColor: "#ffff" }} />
            </linearGradient>
          )}
        </defs>
        <IconInstagram fill="url(#instagram-gradient)" />
      </svg>
    </div>
  );
};

const LinkedinIcon: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  // const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {isHovered ? (
          <defs>
            <linearGradient
              id="linkedin-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#0077b5" }} />
              <stop offset="50%" style={{ stopColor: "#00a0dc" }} />
              <stop offset="100%" style={{ stopColor: "#0077b5" }} />
            </linearGradient>
          </defs>
        ) : (
          <linearGradient
            id="linkedin-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" style={{ stopColor: "#ffff" }} />
            <stop offset="50%" style={{ stopColor: "#ffff" }} />
            <stop offset="100%" style={{ stopColor: "#ffff" }} />
          </linearGradient>
        )}

        <IconLinkedin fill="url(#linkedin-gradient)" />
      </svg>
    </div>
  );
};

const GmailIcon: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  // const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      {isHovered ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="18"
          height="18"
          viewBox="0 0 50 50"
        >
          <path
            fill="#4caf50"
            d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
          ></path>
          <path
            fill="#1e88e5"
            d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
          ></path>
          <polygon
            fill="#e53935"
            points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
          ></polygon>
          <path
            fill="#c62828"
            d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
          ></path>
          <path
            fill="#fbc02d"
            d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
          ></path>
        </svg>
      ) : (
        <IconGmail className="w-[16px]  h-[16px]" />
      )}
    </div>
  );
};

export { InstaGramIcon, LinkedinIcon, GmailIcon };
