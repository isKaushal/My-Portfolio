import { AnimatePresence, color, motion } from "framer-motion";
import { useState } from "react";

const projects: React.FC = () => {
  const [isTriggerd, setIsTriggerd] = useState<number>(0);

  const images = [
    {
      color: "red",
    },
    {
      color: "green",
    },
    {
      color: "blue",
    },
    {
      color: "yellow",
    },
    {
      color: "purple",
    },
  ];

  return (
    <div className="h-[500vh] flex">
      <div className="h-full  w-3/5">
        <motion.div className="w-full h-[100vh] p-4 flex items-center">
          <motion.div onViewportEnter={() => setIsTriggerd(0)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit
            inventore laudantium? Maxime autem eius perferendis delectus culpa
            deserunt ex natus, perspiciatis alias! Necessitatibus odit
            voluptatum ab nihil animi ullam numquam odio distinctio et vitae
            expedita eveniet enim provident minima error praesentium, fugit
            soluta nesciunt totam iste assumenda voluptates at recusandae.
            Porro, adipisci neque dolore odio sunt saepe! Nobis alias inventore
            labore nisi perferendis placeat laboriosam est accusantium
            temporibus repellendus, excepturi necessitatibus veritatis dicta
            exercitationem, dignissimos dolores ab laudantium quam itaque!
            Fugiat, ratione? Laborum, architecto. Id, tempora accusantium?
            Dolorum error ab laboriosam. Facere facilis, fugit debitis iusto
            tenetur aliquam accusamus.
          </motion.div>
        </motion.div>
        <motion.div className="w-full h-[100vh] p-4 flex items-center">
          <motion.div onViewportEnter={() => setIsTriggerd(1)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit
            inventore laudantium? Maxime autem eius perferendis delectus culpa
            deserunt ex natus, perspiciatis alias! Necessitatibus odit
            voluptatum ab nihil animi ullam numquam odio distinctio et vitae
            expedita eveniet enim provident minima error praesentium, fugit
            soluta nesciunt totam iste assumenda voluptates at recusandae.
            Porro, adipisci neque dolore odio sunt saepe! Nobis alias inventore
            labore nisi perferendis placeat laboriosam est accusantium
            temporibus repellendus, excepturi necessitatibus veritatis dicta
            exercitationem, dignissimos dolores ab laudantium quam itaque!
            Fugiat, ratione? Laborum, architecto. Id, tempora accusantium?
            Dolorum error ab laboriosam. Facere facilis, fugit debitis iusto
            tenetur aliquam accusamus.
          </motion.div>
        </motion.div>
        <motion.div className="w-full h-[100vh] p-4 flex items-center">
          <motion.div onViewportEnter={() => setIsTriggerd(2)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit
            inventore laudantium? Maxime autem eius perferendis delectus culpa
            deserunt ex natus, perspiciatis alias! Necessitatibus odit
            voluptatum ab nihil animi ullam numquam odio distinctio et vitae
            expedita eveniet enim provident minima error praesentium, fugit
            soluta nesciunt totam iste assumenda voluptates at recusandae.
            Porro, adipisci neque dolore odio sunt saepe! Nobis alias inventore
            labore nisi perferendis placeat laboriosam est accusantium
            temporibus repellendus, excepturi necessitatibus veritatis dicta
            exercitationem, dignissimos dolores ab laudantium quam itaque!
            Fugiat, ratione? Laborum, architecto. Id, tempora accusantium?
            Dolorum error ab laboriosam. Facere facilis, fugit debitis iusto
            tenetur aliquam accusamus.
          </motion.div>
        </motion.div>
        <motion.div className="w-full h-[100vh] p-4 flex items-center">
          <motion.div onViewportEnter={() => setIsTriggerd(3)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit
            inventore laudantium? Maxime autem eius perferendis delectus culpa
            deserunt ex natus, perspiciatis alias! Necessitatibus odit
            voluptatum ab nihil animi ullam numquam odio distinctio et vitae
            expedita eveniet enim provident minima error praesentium, fugit
            soluta nesciunt totam iste assumenda voluptates at recusandae.
            Porro, adipisci neque dolore odio sunt saepe! Nobis alias inventore
            labore nisi perferendis placeat laboriosam est accusantium
            temporibus repellendus, excepturi necessitatibus veritatis dicta
            exercitationem, dignissimos dolores ab laudantium quam itaque!
            Fugiat, ratione? Laborum, architecto. Id, tempora accusantium?
            Dolorum error ab laboriosam. Facere facilis, fugit debitis iusto
            tenetur aliquam accusamus.
          </motion.div>
        </motion.div>
        <motion.div className="w-full h-[100vh] p-4 flex items-center">
          <motion.div onViewportEnter={() => setIsTriggerd(4)}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni odit
            inventore laudantium? Maxime autem eius perferendis delectus culpa
            deserunt ex natus, perspiciatis alias! Necessitatibus odit
            voluptatum ab nihil animi ullam numquam odio distinctio et vitae
            expedita eveniet enim provident minima error praesentium, fugit
            soluta nesciunt totam iste assumenda voluptates at recusandae.
            Porro, adipisci neque dolore odio sunt saepe! Nobis alias inventore
            labore nisi perferendis placeat laboriosam est accusantium
            temporibus repellendus, excepturi necessitatibus veritatis dicta
            exercitationem, dignissimos dolores ab laudantium quam itaque!
            Fugiat, ratione? Laborum, architecto. Id, tempora accusantium?
            Dolorum error ab laboriosam. Facere facilis, fugit debitis iusto
            tenetur aliquam accusamus.
          </motion.div>
        </motion.div>
      </div>
      <div className="h-full w-2/5 p-8">
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
            style={{ backgroundColor: images[isTriggerd].color }}
            className="w-full h-20 sticky top-1/3 "
          ></motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default projects;
