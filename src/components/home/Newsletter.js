import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import newsletterImage from '../../assets/images/newsletter.webp';

const Newsletter = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Scroll-triggered animation for the main content div
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' });
  const contentControls = useAnimation();

  useEffect(() => {
    if (contentIsInView) {
      contentControls.start('animate');
    }
  }, [contentIsInView, contentControls]);

  return (
    <Element name="newsletter" className="bg-black py-10 lg:py-20">
      <div className="relative">
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start lg:px-20 md:px-16 px-4 ">
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
              The Design Declares Newsletter and Toolkit
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="w-full px-2 md:px-4 lg:px-8 pt-8">
            <motion.div
              ref={contentRef}
              className="flex flex-col space-y-6"
              variants={fadeUp}
              initial="initial"
              animate={contentControls}
            >
              <img
                src={newsletterImage}
                alt="Design Declares Newsletter"
                className="w-full object-contain"
              />
              <p className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-subtext">
                Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.
              </p>
              <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.
              </p>
              <div className="bg-black text-heading border border-white p-6">
                <div className="border border-white mb-6">
                  <div className="flex items-center border-b border-white">
                    <label
                      htmlFor="email"
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0"
                    >
                      Email:*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="text-[1rem] lg:text-[1.125rem] font-normal px-6 py-3 w-full bg-black text-heading border-none focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter-opt-in"
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
                  <button
                    type="button"
                    className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Newsletter;