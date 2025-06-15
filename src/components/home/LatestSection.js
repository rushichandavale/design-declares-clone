import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LatestSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <Element name="latest" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <motion.h2 className="text-[1.5rem] font-semibold" variants={fadeUp}>
            Latest
          </motion.h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <motion.div
            className="flex flex-col space-y-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div className="flex-1 flex flex-col space-y-6" variants={containerVariants}>
                <motion.div className="flex flex-col space-y-2" variants={fadeUp}>
                  <div className="flex items-center space-x-2">
                    <motion.span
                      className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                      variants={fadeUp}
                    >
                      Events
                    </motion.span>
                    <motion.span
                      className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                      variants={fadeUp}
                    >
                      D! UK
                    </motion.span>
                    <motion.span className="text-[.75rem] font-normal" variants={fadeUp}>
                      24.04.2025, 03:30 PM
                    </motion.span>
                  </div>
                  <motion.h3 className="text-[2rem] font-normal" variants={fadeUp}>
                    SD4P Collective: How can Service Design drive meaningful sustainability impact
                  </motion.h3>
                </motion.div>
              </motion.div>
              <motion.div className="flex-1 flex flex-col space-y-6" variants={containerVariants}>
                <motion.div className="flex flex-col space-y-1" variants={fadeUp}>
                  <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
                    Recap: SD4P Collective working session – 28th March 2025
                  </motion.p>
                  <motion.div variants={fadeUp}>
                    <Link to="/latest" className="text-[1.125rem] font-normal text-white underline">
                      Read story
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div className="flex-1 flex flex-col space-y-6" variants={containerVariants}>
                <motion.div className="flex flex-col space-y-2" variants={fadeUp}>
                  <div className="flex items-center space-x-2">
                    <motion.span
                      className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                      variants={fadeUp}
                    >
                      Events
                    </motion.span>
                    <motion.span
                      className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                      variants={fadeUp}
                    >
                      D! UK
                    </motion.span>
                    <motion.span className="text-[.75rem] font-normal" variants={fadeUp}>
                      06.12.2024, 02:30 PM
                    </motion.span>
                  </div>
                  <motion.h3 className="text-[2rem] font-normal" variants={fadeUp}>
                    Designing Tomorrow: Speculative Thinking Shapes Our Present
                  </motion.h3>
                </motion.div>
              </motion.div>
              <motion.div className="flex-1 flex flex-col space-y-6" variants={containerVariants}>
                <motion.div className="flex flex-col space-y-1" variants={fadeUp}>
                  <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
                    Design Declares' November Event Challenges Perspectives on Sustainability and
                    Innovation
                  </motion.p>
                  <motion.div variants={fadeUp}>
                    <Link to="/latest" className="text-[1.125rem] font-normal text-white underline">
                      Read story
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div className="mt-8" variants={fadeUp}>
              <Link
                to="/latest"
                className="inline-block bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                See all the latest
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default LatestSection;