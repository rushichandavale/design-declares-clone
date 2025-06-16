import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';

const Donate = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Scroll-triggered animation for the paragraph
  const paragraphRef = useRef(null);
  const paragraphIsInView = useInView(paragraphRef, { once: true, margin: '0px 0px -100px 0px' });
  const paragraphControls = useAnimation();

  // Scroll-triggered animation for the button group
  const buttonsRef = useRef(null);
  const buttonsIsInView = useInView(buttonsRef, { once: true, margin: '0px 0px -100px 0px' });
  const buttonsControls = useAnimation();

  useEffect(() => {
    if (paragraphIsInView) {
      paragraphControls.start('animate');
    }
  }, [paragraphIsInView, paragraphControls]);

  useEffect(() => {
    if (buttonsIsInView) {
      buttonsControls.start('animate');
    }
  }, [buttonsIsInView, buttonsControls]);

  return (
    <Element name="donate" className="bg-black py-16 lg:py-32">
      <div className="relative">
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start px-20">
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
              Donate to D!
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
                Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
              </motion.p>
              <motion.div
                ref={buttonsRef}
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-start"
                variants={fadeUp}
                initial="initial"
                animate={buttonsControls}
              >
                <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Donate £10
                </button>
                <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Donate £20
                </button>
                <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  Donate £50
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Donate;