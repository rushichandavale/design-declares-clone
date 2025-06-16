import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';

const LatestSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Stagger animation for child elements
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger each child by 0.1 seconds
      },
    },
  };

  // Scroll-triggered animation for the main content div
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' });
  const contentControls = useAnimation();

  // Scroll-triggered animation for the first event card
  const card1Ref = useRef(null);
  const card1IsInView = useInView(card1Ref, { once: true, margin: '0px 0px -100px 0px' });
  const card1Controls = useAnimation();

  // Scroll-triggered animation for the second event card
  const card2Ref = useRef(null);
  const card2IsInView = useInView(card2Ref, { once: true, margin: '0px 0px -100px 0px' });
  const card2Controls = useAnimation();

  // Scroll-triggered animation for the button
  const buttonRef = useRef(null);
  const buttonIsInView = useInView(buttonRef, { once: true, margin: '0px 0px -100px 0px' });
  const buttonControls = useAnimation();

  useEffect(() => {
    if (contentIsInView) {
      contentControls.start('animate');
    }
  }, [contentIsInView, contentControls]);

  useEffect(() => {
    if (card1IsInView) {
      card1Controls.start('animate');
    }
  }, [card1IsInView, card1Controls]);

  useEffect(() => {
    if (card2IsInView) {
      card2Controls.start('animate');
    }
  }, [card2IsInView, card2Controls]);

  useEffect(() => {
    if (buttonIsInView) {
      buttonControls.start('animate');
    }
  }, [buttonIsInView, buttonControls]);

  return (
    <Element name="latest" className="bg-black py-16 lg:py-32">
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
              Latest
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="w-full px-2 md:px-4 lg:px-8 pt-8">
            <motion.div
              ref={contentRef}
              className="flex flex-col space-y-8"
              variants={fadeUp}
              initial="initial"
              animate={contentControls}
            >
              {/* First Event Card */}
              <motion.div
                ref={card1Ref}
                className="flex flex-col lg:flex-row gap-8"
                variants={containerVariants}
                initial="initial"
                animate={card1Controls}
              >
                <div className="flex-1 flex flex-col space-y-6">
                  <motion.div className="flex flex-col space-y-2" variants={fadeUp}>
                    <motion.div
                      className="flex items-center space-x-2"
                      variants={fadeUp}
                    >
                      <motion.span
                        className="inline-block px-3 py-1 text-[.75rem] font-normal bg-custom-gray text-heading rounded-full"
                        variants={fadeUp}
                      >
                        Events
                      </motion.span>
                      <motion.span
                        className="inline-block px-3 py-1 text-[.75rem] font-normal bg-custom-gray text-heading rounded-full"
                        variants={fadeUp}
                      >
                        D! UK
                      </motion.span>
                      <motion.span
                        className="text-[.75rem] font-normal"
                        variants={fadeUp}
                      >
                        24.04.2025, 03:30 PM
                      </motion.span>
                    </motion.div>
                    <motion.h3
                      className="text-[1.5rem] lg:text-[2rem] font-normal text-heading"
                      variants={fadeUp}
                    >
                      SD4P Collective: How can Service Design drive meaningful sustainability impact
                    </motion.h3>
                  </motion.div>
                </div>
                <div className="flex-1 flex flex-col space-y-6">
                  <motion.div className="flex flex-col space-y-1" variants={fadeUp}>
                    <motion.p
                      className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext"
                      variants={fadeUp}
                    >
                      Recap: SD4P Collective working session – 28th March 2025
                    </motion.p>
                    <motion.div variants={fadeUp}>
                      <Link
                        to="/latest"
                        className="text-[1rem] lg:text-[1.125rem] font-normal text-heading underline"
                      >
                        Read story
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Second Event Card */}
              <motion.div
                ref={card2Ref}
                className="flex flex-col lg:flex-row gap-8"
                variants={containerVariants}
                initial="initial"
                animate={card2Controls}
              >
                <div className="flex-1 flex flex-col space-y-6">
                  <motion.div className="flex flex-col space-y-2" variants={fadeUp}>
                    <motion.div
                      className="flex items-center space-x-2"
                      variants={fadeUp}
                    >
                      <motion.span
                        className="inline-block px-3 py-1 text-[.75rem] font-normal bg-custom-gray text-heading rounded-full"
                        variants={fadeUp}
                      >
                        Events
                      </motion.span>
                      <motion.span
                        className="inline-block px-3 py-1 text-[.75rem] font-normal bg-custom-gray text-heading rounded-full"
                        variants={fadeUp}
                      >
                        D! UK
                      </motion.span>
                      <motion.span
                        className="text-[.75rem] font-normal"
                        variants={fadeUp}
                      >
                        06.12.2024, 02:30 PM
                      </motion.span>
                    </motion.div>
                    <motion.h3
                      className="text-[1.5rem] lg:text-[2rem] font-normal text-heading"
                      variants={fadeUp}
                    >
                      Designing Tomorrow: Speculative Thinking Shapes Our Present
                    </motion.h3>
                  </motion.div>
                </div>
                <div className="flex-1 flex flex-col space-y-6">
                  <motion.div className="flex flex-col space-y-1" variants={fadeUp}>
                    <motion.p
                      className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext"
                      variants={fadeUp}
                    >
                      Design Declares' November Event Challenges Perspectives on Sustainability and Innovation
                    </motion.p>
                    <motion.div variants={fadeUp}>
                      <Link
                        to="/latest"
                        className="text-[1rem] lg:text-[1.125rem] font-normal text-heading underline"
                      >
                        Read story
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* See All Button */}
              <motion.div
                ref={buttonRef}
                className="mt-8"
                variants={fadeUp}
                initial="initial"
                animate={buttonControls}
              >
                <Link
                  to="/latest"
                  className="inline-block w-full lg:w-auto bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors text-center"
                >
                  See all the latest
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default LatestSection;