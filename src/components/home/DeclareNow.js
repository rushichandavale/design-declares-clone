import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';

const DeclareNow = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Scroll-triggered animation for the paragraph
  const paragraphRef = useRef(null);
  const paragraphIsInView = useInView(paragraphRef, { once: true, margin: '0px 0px -100px 0px' });
  const paragraphControls = useAnimation();

  // Scroll-triggered animation for the main div below the paragraph
  const formDivRef = useRef(null);
  const formDivIsInView = useInView(formDivRef, { once: true, margin: '0px 0px -100px 0px' });
  const formDivControls = useAnimation();

  useEffect(() => {
    if (paragraphIsInView) {
      paragraphControls.start('animate');
    }
  }, [paragraphIsInView, paragraphControls]);

  useEffect(() => {
    if (formDivIsInView) {
      formDivControls.start('animate');
    }
  }, [formDivIsInView, formDivControls]);

  return (
    <Element name="declare" className="bg-black py-16 lg:py-32">
      <div className="relative">
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start lg:px-20 md:px-16 px-4">
          {/* Left: Title */}
          <div
            className="w-full px-2 md:px-4 lg:px-8 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
          >
            <motion.h2
              className="text-[1.5rem] font-semibold text-heading"
              variants={fadeUp}
              initial="initial"
              animate="animate"
            >
              Declare Emergency Now
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="w-full px-2 md:px-4 lg:px-8 pt-8">
            <div className="flex flex-col space-y-8">
              <motion.p
                ref={paragraphRef}
                className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-subtext"
                variants={fadeUp}
                initial="initial"
                animate={paragraphControls}
              >
                Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
              </motion.p>
              <motion.div
                ref={formDivRef}
                className="bg-black text-heading border border-white p-6"
                variants={fadeUp}
                initial="initial"
                animate={formDivControls}
              >
                <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal mb-6">
                  I am Declaring Emergency
                </h3>
                <div className="mb-6">
                  <div className="flex flex-row flex-wrap gap-4">
                    <label className="flex items-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                      />
                      <span className="text-[1rem] lg:text-[1.125rem] font-normal">As a business</span>
                    </label>
                    <label className="flex items-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                      />
                      <span className="text-[1rem] lg:text-[1.125rem] font-normal">As an individual</span>
                    </label>
                    <label className="flex items-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                      />
                      <span className="text-[1rem] lg:text-[1.125rem] font-normal">As a public institution</span>
                    </label>
                    <label className="flex items-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-2 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                      />
                      <span className="text-[1rem] lg:text-[1.125rem] font-normal">As a team or department</span>
                    </label>
                  </div>
                </div>
                <div className="border border-white mb-6">
                  <div className="flex items-center border-b border-white">
                    <label className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Website:*
                    </label>
                    <input
                      type="url"
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center border-b border-white">
                    <label className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Country:*
                    </label>
                    <select
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none"
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
                    <label className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Discipline:*
                    </label>
                    <select
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none"
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
                    <label className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0">
                      Email:*
                    </label>
                    <input
                      type="email"
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex">
                    <textarea
                      placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none resize-y"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[.75rem] font-normal leading-tight">
                      I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-white bg-transparent flex-shrink-0 checked:bg-transparent checked:border-white checked:after:content-['✓'] checked:after:text-heading checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
                    />
                    <span className="text-[.75rem] font-normal leading-tight">
                      I would like to be added to the Design Declares! newsletter and receive further updates.
                    </span>
                  </label>
                </div>
                <div className="mb-6">
                  <Link to="/privacy-policy" className="text-[.75rem] text-heading underline">
                    View our Privacy Policy
                  </Link>
                </div>
                <div>
                  <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    Declare Emergency Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DeclareNow;