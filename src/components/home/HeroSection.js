import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 500);  
    return () => clearTimeout(timer);
  }, []);

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
 
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Element
      name="home"
      className="min-h-screen flex flex-col lg:flex-row justify-between px-4 md:px-8 pt-8 lg:p-4"
    >
      {showLogo ? (
        <motion.div
          className="lg:w-1/2 flex flex-col justify-start items-start lg:p-16"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            className="focus-ring group relative w-fit transition-colors inline-block"
            to="/"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 44 59"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32"
              role="img"
              aria-label="Design Declares!"
            >
              <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"></path>
              <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"></path>
            </svg>
          </Link>
        </motion.div>
      ) : (
        <>
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
                  word === "UK" ? "text-primary" : "text-heading"
                } ${index > 0 ? "-mt-2 md:-mt-4" : ""}`}
              >
                {word}
              </motion.h1>
            ))}
            {/* Paragraph for mobile view */}
            <motion.div
              className="flex flex-col justify-start items-start lg:hidden mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p className="text-lg md:text-xl text-heading max-w-md text-left leading-tight">
                Design Declares is a growing group of designers, design studios,
                agencies and institutions here to declare a climate and ecological
                emergency. As part of the global declaration movement, we commit to
                harnessing the tools of our industry to reimagine, rebuild and heal
                our world.
              </p>
            </motion.div>
          </motion.div>
          {/* Paragraph for desktop view */}
          <motion.div
            className="hidden lg:flex lg:w-1/2 mt-8 lg:mt-0 flex-col justify-start items-end p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <p className="text-lg md:text-xl text-heading max-w-md text-left leading-tight">
              Design Declares is a growing group of designers, design studios,
              agencies and institutions here to declare a climate and ecological
              emergency. As part of the global declaration movement, we commit to
              harnessing the tools of our industry to reimagine, rebuild and heal
              our world.
            </p>
          </motion.div>
        </>
      )}
    </Element>
  );
};

export default HeroSection;
