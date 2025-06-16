import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import latest1 from '../assets/images/latest1.webp';
import latest2 from '../assets/images/latest2.webp';
import latest3 from '../assets/images/latest3.webp';

const Latest = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-black text-white border-b border-black rounded-b-3xl">
      {/* Logo at Top Left */}
      <div className="top-4 left-4 z-30 p-4">
        <Link
          className="focus-ring group relative w-fit transition-colors inline-block"
          data-rac=""
          to="/"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 44 59"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 pl-0.5 sm:pl-1"
            role="img"
            aria-label="Design Declares!"
          >
            <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"></path>
            <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"></path>
          </svg>
        </Link>
      </div>

      {/* Main Content */}
      <Element name="latest" className="bg-black text-white py-2 lg:py-4">
        <div className="relative min-h-screen">
          <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start">
            {/* Left: Titles and Buttons */}
            <div
              className="w-full px-2 md:px-4 lg:px-8 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
            >
              <motion.h2 className="text-[1.5rem] font-semibold" variants={fadeUp}>
                Categories
              </motion.h2>
              <motion.div
                className="flex flex-row flex-wrap space-x-2 mt-4"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {['All', 'Events', 'Case Studies', 'Updates', 'Perspective'].map((category) => (
                  <motion.a
                    key={category}
                    href="#"
                    className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full hover:bg-gray-800"
                    variants={fadeUp}
                  >
                    {category}
                  </motion.a>
                ))}
              </motion.div>
              <motion.h2 className="text-[1.5rem] font-semibold mt-8" variants={fadeUp}>
                View by Chapter
              </motion.h2>
              <motion.div
                className="flex flex-row flex-wrap space-x-2 mt-4"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {['All', 'D! UK', 'D! Ireland', 'D! Australia'].map((chapter) => (
                  <motion.a
                    key={chapter}
                    href="#"
                    className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full hover:bg-gray-800"
                    variants={fadeUp}
                  >
                    {chapter}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right: Sections */}
            <div className="w-full px-2 md:px-4 lg:px-8 pt-8">
              <motion.div
                className="flex flex-col space-y-8"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <motion.div className="flex-1" variants={fadeUp}>
                    <img
                      src={latest1}
                      alt="Sustainability in Design Curriculum"
                      className="w-96 h-96 object-cover"
                    />
                  </motion.div>
                  <motion.div className="flex-1 flex flex-col space-y-2" variants={containerVariants}>
                    <motion.div className="flex items-center space-x-2" variants={fadeUp}>
                      {['Case Studies', 'D! Ireland'].map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                          variants={fadeUp}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <motion.span className="text-[.75rem] font-normal" variants={fadeUp}>
                        30.04.2025, 04:30 PM
                      </motion.span>
                    </motion.div>
                    <motion.h2 className="text-[2rem] font-normal" variants={fadeUp}>
                      Embedding Sustainability in the Design Curriculum
                    </motion.h2>
                    <motion.p className="text-[1rem] font-normal" variants={fadeUp}>
                      Outlining the journey of how the Design Declares initiative was integrated into
                      the National College of Art and Design’s curriculum for BA Graphic Design
                      students.
                    </motion.p>
                  </motion.div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <motion.div className="flex-1" variants={fadeUp}>
                    <img
                      src={latest2}
                      alt="Eco-Friendly Packaging Workshop"
                      className="w-96 h-96 object-cover"
                    />
                  </motion.div>
                  <motion.div className="flex-1 flex flex-col space-y-2" variants={containerVariants}>
                    <motion.div className="flex items-center space-x-2" variants={fadeUp}>
                      {['Events', 'D! UK'].map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                          variants={fadeUp}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <motion.span className="text-[.75rem] font-normal" variants={fadeUp}>
                        24.04.2025, 03 PM:30
                      </motion.span>
                    </motion.div>
                    <motion.h2 className="text-[2rem] font-normal" variants={fadeUp}>
                      SD4P Collective: How can Service Design drive meaningful sustainability impact
                    </motion.h2>
                    <motion.p className="text-[1rem] font-normal" variants={fadeUp}>
                      Recap: SD4P Collective working session – 28th March 2025
                    </motion.p>
                  </motion.div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <motion.div className="flex-1" variants={fadeUp}>
                    <img
                      src={latest3}
                      alt="Climate Action Design Awards"
                      className="w-96 h-64 object-cover"
                    />
                  </motion.div>
                  <motion.div className="flex-1 flex flex-col space-y-2" variants={containerVariants}>
                    <motion.div className="flex items-center space-x-2" variants={fadeUp}>
                      {['Perspective', 'D! Australia'].map((tag) => (
                        <motion.span
                          key={tag}
                          className="inline-block px-3 py-1 text-[.75rem] font-normal bg-gray-800/80 text-white rounded-full"
                          variants={fadeUp}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <motion.span className="text-[.75rem] font-normal" variants={fadeUp}>
                        18.12.2024, 08 AM:38
                      </motion.span>
                    </motion.div>
                    <motion.h2 className="text-[2rem] font-normal" variants={fadeUp}>
                      Sasha Titchkosky Interview
                    </motion.h2>
                    <motion.p className="text-[1rem] font-normal" variants={fadeUp}>
                      An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Latest;