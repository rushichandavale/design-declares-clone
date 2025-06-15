import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DeclareNow = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <Element name="declare" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <motion.h2 className="text-[1.5rem] font-semibold" variants={fadeUp}>
            Declare Emergency Now
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
            <motion.p className="text-[1.5rem] font-normal" variants={fadeUp}>
              Design Declares is open to individuals and institutions working in industrial, digital,
              graphic, communication and service design. To declare here, you must be a company with an
              office in the UK employing at least one full-time designer. We also welcome declarations
              from practising freelance designers who are registered as self-employed in the UK, and
              global supporters from other countries. All declarations will be named and published on
              this site.
            </motion.p>
            <motion.div
              className="bg-black text-white border border-white p-6"
              variants={containerVariants}
            >
              <motion.h3 className="text-[3.5rem] font-normal mb-6" variants={fadeUp}>
                I am Declaring Emergency
              </motion.h3>
              <motion.div className="mb-6" variants={fadeUp}>
                <div className="flex flex-row flex-wrap gap-4">
                  <label className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[1.125rem] font-normal">As a business</span>
                  </label>
                  <label className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[1.125rem] font-normal">As an individual</span>
                  </label>
                  <label className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[1.125rem] font-normal">As a public institution</span>
                  </label>
                  <label className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[1.125rem] font-normal">As a team or department</span>
                  </label>
                </div>
              </motion.div>
              <motion.div className="border border-white mb-6" variants={fadeUp}>
                <div className="flex items-center border-b border-white">
                  <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                    Website:*
                  </label>
                  <input
                    type="url"
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-center border-b border-white">
                  <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                    Country:*
                  </label>
                  <select
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
                <div className="flex items-center border-b border-white">
                  <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                    Discipline:*
                  </label>
                  <select
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                    required
                  >
                    <option value="">Select a discipline</option>
                    <option value="Communication Design">Communication Design</option>
                    <option value="Digital Design">Digital Design</option>
                    <option value="Service Design">Service Design</option>
                    <option value="Product Design">Product Design</option>
                  </select>
                </div>
                <div className="flex items-center border-b border-white">
                  <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                    Email:*
                  </label>
                  <input
                    type="email"
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex">
                  <textarea
                    placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none resize-y"
                    rows="6"
                  ></textarea>
                </div>
              </motion.div>
              <motion.div className="flex flex-col space-y-4 mb-6" variants={fadeUp}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                  />
                  <span className="text-[.75rem] font-normal leading-tight">
                    I consent for my data to be used for the purpose of the Declaration, and for my name
                    and reason for joining to be used in the promotion of the Declaration on this site
                    and across our social channels.
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                  />
                  <span className="text-[.75rem] font-normal leading-tight">
                    I would like to be added to the Design Declares! newsletter and receive further
                    updates.
                  </span>
                </label>
              </motion.div>
              <motion.div className="mb-6" variants={fadeUp}>
                <Link to="/privacy-policy" className="text-[.75rem] text-white underline">
                  View our Privacy Policy
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <button className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Declare Emergency Now
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default DeclareNow;