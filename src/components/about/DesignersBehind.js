import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';
import designer1 from '../../assets/images/designLife.svg';
import designer2 from '../../assets/images/morrama.svg';
import designer3 from '../../assets/images/thomas.svg';
import designer4 from '../../assets/images/driftime.svg';
import designer5 from '../../assets/images/studiowood.svg';
import designer6 from '../../assets/images/urge.svg';

const DesignersBehind = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Scroll-triggered animation for the right-side content div
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' });
  const contentControls = useAnimation();

  useEffect(() => {
    if (contentIsInView) {
      contentControls.start('animate');
    }
  }, [contentIsInView, contentControls]);

  return (
    <Element name="designers-behind" className="bg-black py-16 lg:py-32">
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
              The Designers Behind Design Declares UK
            </motion.h2>
          </div>

          {/* Right: Content */}
          <motion.div
            ref={contentRef}
            className="w-full px-2 md:px-4 lg:px-8 pt-8"
            variants={fadeUp}
            initial="initial"
            animate={contentControls}
          >
            <div className="flex flex-col space-y-8">
              {/* Paragraph */}
              <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                Inspired by the global emergency declaration movement demanding accountability and
                action across industries, Design Declares is the initiative of a multidisciplinary
                group of design professionals and agencies who all believe in the power of design to
                change things.
              </p>

              {/* Side-by-Side Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex flex-col space-y-24">
                  <img
                    src={designer1}
                    alt="Designer 1"
                    className="w-44 object-contain"
                  />
                  <img
                    src={designer2}
                    alt="Designer 2"
                    className="w-44 object-contain"
                  />
                  <img
                    src={designer3}
                    alt="Designer 3"
                    className="w-44 object-contain"
                  />
                </div>
                <div className="flex flex-col space-y-24">
                  <img
                    src={designer4}
                    alt="Designer 4"
                    className="w-44 object-contain"
                  />
                  <img
                    src={designer5}
                    alt="Designer 5"
                    className="w-44 object-contain"
                  />
                  <img
                    src={designer6}
                    alt="Designer 6"
                    className="w-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default DesignersBehind;