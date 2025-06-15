import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newsletterImage from '../../assets/images/newsletter.webp';

const Newsletter = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <Element name="newsletter" className="bg-black text-white py-8 lg:py-16 ">
      <div className="relative min-h-screen ">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <motion.h2 className="text-[1.5rem] font-semibold" variants={fadeUp}>
            The Design Declares Newsletter and Toolkit
          </motion.h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <motion.div
            className="flex flex-col space-y-6"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={newsletterImage}
              alt="Design Declares Newsletter"
              className="w-full object-contain"
              variants={fadeUp}
            />
            <motion.p className="text-[1.5rem] font-normal" variants={fadeUp}>
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By
              signing up you will also gain access to The Design Declares Toolkit, a live and evolving
              Notion site co-created with our community. It is filled with the latest resources and
              methods to help you on your journey to climate-positive design.
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              Every signatory to Design Declares will receive an access link to the Toolkit. If you are
              unable to declare emergency quite yet, you can still access the Toolkit - just register
              below.
            </motion.p>
            <motion.div
              className="bg-black text-white p-6"
              variants={containerVariants}
            >
              <motion.div className="border border-white mb-6" variants={fadeUp}>
                <div className="flex items-center border-b border-white">
                  <label
                    htmlFor="email"
                    className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0"
                  >
                    Email:*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                    required
                  />
                </div>
              </motion.div>
              <motion.div className="flex flex-col space-y-4 mb-6" variants={fadeUp}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter-opt-in"
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
                <button
                  type="button"
                  className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Newsletter;