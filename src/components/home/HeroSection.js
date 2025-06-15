import { motion } from "framer-motion";
import { Element } from "react-scroll";

const HeroSection = () => {
  // Animation variants for text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Element
      name="home"
      className="min-h-screen bg-black text-white flex flex-col lg:flex-row justify-between px-4 md:px-8 pt-8 lg:p-4"
    >
      <motion.div
        className="lg:w-1/2 flex flex-col justify-start items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {["DESIGN", "DECLARES", "UK"].map((word, index) => (
          <motion.h1
            key={index}
            variants={textVariants}
            className={`text-[clamp(4rem,15vw,12rem)] font-bold uppercase leading-none tracking-tight title-font ${
              word === "UK" ? "text-primary" : "text-white"
            } ${index > 0 ? "-mt-2 md:-mt-4" : ""}`}
          >
            {word}
          </motion.h1>
        ))}
      </motion.div>
      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col justify-start items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <p className="text-lg md:text-xl text-white max-w-md text-left leading-tight">
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration movement, we commit to
          harnessing the tools of our industry to reimagine, rebuild and heal
          our world.
        </p>
      </motion.div>
    </Element>
  );
};

export default HeroSection;
