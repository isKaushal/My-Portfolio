import { motion } from "framer-motion";
import CardProps from "../helpers/skillsHelper";
import {
  IconCSS3,
  IconHTML5,
  IconJS,
  IconNextJS,
  IconReactJS,
  IconTailwindCSS,
  IconTS,
} from "./icons";

const CardData: CardProps[] = [
  {
    title: "React",
    icon: <IconReactJS fill="#61dbfb" />,
    className: "",
  },
  {
    title: "Next",
    icon: <IconNextJS />,
    className: "",
  },
  {
    title: "Tailwind",
    icon: <IconTailwindCSS fill="#38bdf8" />,
    className: "",
  },
  {
    title: "Typescript",
    icon: <IconTS fill="#007acc" />,
    className: "",
  },
  {
    title: "Javascript",
    icon: <IconJS fill="#f7df1e" />,
    className: "",
  },
  {
    title: "HTML",
    icon: <IconHTML5 fill="#e34f26" />,
    className: "",
  },
  {
    title: "CSS",
    icon: <IconCSS3 fill="#1572b6" />,
    className: "",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 gap-4 py-20 w-8/12">
        {CardData.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, stiffness: 100 }}
            key={index}
            className="col-span-3"
          >
            <div className="flex flex-col items-center gap-4 bg-white bg-opacity-10 rounded-md p-4 transition-colors duration-500 cursor-pointer hover:bg-opacity-20">
              <div className="text-5xl">{card.icon}</div>
              <p className="text-lg">{card.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
