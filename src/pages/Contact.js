import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
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
      <Element name="contact" className="py-2 lg:py-4">
        <div className="relative min-h-screen">
          <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start px-2 md:px-4 lg:px-8">
            {/* Left: Title */}
            <div
              className="w-full lg:w-[30%] px-2 md:px-4 lg:px-8 pt-8 lg:sticky lg:top-0 z-20 transition-all duration-200 will-change-[position,top]"
            >
              <motion.h2 className="text-[1.5rem] font-semibold" variants={fadeUp}>
                Contact
              </motion.h2>
            </div>

            {/* Right: Form */}
            <div className="w-full px-2 md:px-4 lg:px-8 pt-8 border border-white p-4 lg:p-8">
              <motion.div
                className="flex flex-col space-y-8"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h3 className="text-[3.5rem] font-normal" variants={fadeUp}>
                  Send Us a Message
                </motion.h3>
                <motion.div className="border border-white" variants={containerVariants}>
                  <div className="flex items-center border-b border-white">
                    <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Name:*
                    </label>
                    <input
                      type="text"
                      className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                      required
                    />
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
                  <div className="flex items-center border-b border-white">
                    <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Team to contact:*
                    </label>
                    <select
                      className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                      required
                    >
                      <option value="">Select a team</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="UK Team">UK Team</option>
                      <option value="Ireland Team">Ireland Team</option>
                      <option value="Australia Team">Australia Team</option>
                    </select>
                  </div>
                  <div className="flex items-center border-b border-white">
                    <label className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Enquiry type:*
                    </label>
                    <select
                      className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none"
                      required
                    >
                      <option value="">Select an enquiry type</option>
                      <option value="General">General</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Media">Media</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                  <div className="flex">
                    <textarea
                      placeholder="Please write your message here"
                      className="text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-white border-none focus:ring-0 focus:outline-none resize-y"
                      rows="6"
                    ></textarea>
                  </div>
                </motion.div>
                <motion.div className="flex flex-col space-y-4" variants={fadeUp}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-white checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[.75rem] font-normal leading-tight">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </span>
                  </label>
                  <Link to="/privacy-policy" className="text-[.75rem] text-white underline">
                    View our Privacy Policy
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    Send Message
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Contact;