import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// helper
import Projects from "../helpers/projectsHelper";
import {
  IconCSS3,
  IconHTML5,
  IconJS,
  IconReactJS,
  IconTailwindCSS,
  IconTS,
} from "./icons";

const images: Projects[] = [
  {
    color: "red",
    url: "",
    title: "Project 1",
    projectImg: "https://picsum.photos/200/301",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem harum sapiente delectus libero quibusdam modi nisi vero nostrum odio. Qui minus eum nesciunt! Quos dolores fugit dicta provident eos.",
    icons: [
      {
        icon: <IconHTML5 className="text-clr-html" />,
        color: "#e34c261a",
      },
      {
        icon: <IconCSS3 className="text-clr-css" />,
        color: "#1572b61a",
      },
      {
        icon: <IconReactJS className="text-clr-react" />,
        color: "#61dbfb1a",
      },
    ],
  },
  {
    color: "green",
    url: "",
    title: "Project 2",
    projectImg: "https://picsum.photos/200/302",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem harum sapiente delectus libero quibusdam modi nisi vero nostrum odio. Qui minus eum nesciunt! Quos dolores fugit dicta provident eos.",
    icons: [
      {
        icon: <IconHTML5 className="text-clr-html" />,
        color: "#e34c261a",
      },
      {
        icon: <IconCSS3 className="text-clr-css" />,
        color: "#1572b61a",
      },
      {
        icon: <IconReactJS className="text-clr-react" />,
        color: "#61dbfb1a",
      },
    ],
  },
  {
    color: "blue",
    url: "",
    title: "Project 3",
    projectImg: "https://picsum.photos/200/303",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem harum sapiente delectus libero quibusdam modi nisi vero nostrum odio. Qui minus eum nesciunt! Quos dolores fugit dicta provident eos.",
    icons: [
      {
        icon: <IconHTML5 className="text-clr-html" />,
        color: "#e34c261a",
      },
      {
        icon: <IconCSS3 className="text-clr-css" />,
        color: "#1572b61a",
      },
      {
        icon: <IconReactJS className="text-clr-react" />,
        color: "#61dbfb1a",
      },
      {
        icon: <IconTS className="text-clr-typescript" />,
        color: "#007acc1a",
      },
      {
        icon: <IconJS className="text-clr-javascript" />,
        color: "#f7df1e1a",
      },
      {
        icon: <IconTailwindCSS className="text-clr-tailwind" />,
        color: "#38bdf81a",
      },
    ],
  },
  {
    color: "yellow",
    url: "",
    title: "Project 4",
    projectImg: "https://picsum.photos/200/304",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem harum sapiente delectus libero quibusdam modi nisi vero nostrum odio. Qui minus eum nesciunt! Quos dolores fugit dicta provident eos.",
    icons: [
      {
        icon: <IconHTML5 className="text-clr-html" />,
        color: "#e34c261a",
      },
      {
        icon: <IconCSS3 className="text-clr-css" />,
        color: "#1572b61a",
      },
      {
        icon: <IconReactJS className="text-clr-react" />,
        color: "#61dbfb1a",
      },
    ],
  },
  {
    color: "purple",
    url: "",
    title: "Project 5",
    projectImg: "https://picsum.photos/200/305",
    describtion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore exercitationem harum sapiente delectus libero quibusdam modi nisi vero nostrum odio. Qui minus eum nesciunt! Quos dolores fugit dicta provident eos.",
    icons: [
      {
        icon: <IconHTML5 className="text-clr-html" />,
        color: "#e34c261a",
      },
      {
        icon: <IconCSS3 className="text-clr-css" />,
        color: "#1572b61a",
      },
      {
        icon: <IconReactJS className="text-clr-react" />,
        color: "#61dbfb1a",
      },
    ],
  },
];

const projects: React.FC = () => {
  const [isTriggerd, setIsTriggerd] = useState<number>(0);

  return (
    <div className="h-full flex">
      <div className="h-full w-3/5">
        {images.map((data, index) => (
          <div
            key={index}
            className="w-full h-[85vh] p-4 flex items-center text-white"
          >
            <motion.div onViewportEnter={() => setIsTriggerd(index)}>
              <h2 className="text-3xl mb-4">{data.title}</h2>
              <p>{data.describtion}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className=" w-2/5 p-8">
        <AnimatePresence>
          <motion.div
            key={isTriggerd}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.5,
              stiffness: 60,
              type: "spring",
            }}
            className="sticky top-1/3 flex justify-center items-center flex-col"
          >
            <motion.div className="before:content-[''] before:absolute before:w-96 before:h-52 before:bg-black before:bg-opacity-55">
              <Image
                className="aspect-video w-96 h-52 object-cover rounded-md"
                src={images[isTriggerd].projectImg}
                alt=""
                width={500}
                height={500}
              />
            </motion.div>
            <div className="flex absolute bottom-0 gap-4">
              {images[isTriggerd].icons.map((icon, index) => (
                <motion.div
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 20, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    // duration: 0.5,
                    stiffness: 120,
                    type: "spring",
                  }}
                  style={{
                    backgroundColor: icon.color,
                    border: `2.5px solid ${icon.color}`,
                  }}
                  className="w-12 h-12 flex justify-center items-center text-2xl translate-y-1/2 rounded-md backdrop-blur-sm "
                  key={index}
                >
                  {icon.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default projects;
