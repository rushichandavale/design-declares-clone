import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';
import steering1 from '../../assets/images/abb.webp';
import steering2 from '../../assets/images/alexie.webp';
import steering3 from '../../assets/images/aurelie.webp';
import steering4 from '../../assets/images/jo.webp';

const SteeringGroup = () => {
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
    <Element name="steering-group" className="bg-black py-16 lg:py-32">
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
              Steering Group
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
              {/* Side-by-Side Images and Labels */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Person 1 */}
                <div className="flex flex-col">
                  <img
                    src={steering1}
                    alt="Abb-d Taiyo"
                    className="w-full object-cover grayscale"
                  />
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal mt-2 text-subtext">
                    Abb-d Taiyo
                  </p>
                  <p className="text-[.75rem] font-normal text-subtext">
                    Driftime®
                  </p>
                </div>
                {/* Person 2 */}
                <div className="flex flex-col">
                  <img
                    src={steering2}
                    alt="Alexie Sommer"
                    className="w-full object-cover grayscale"
                  />
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal mt-2 text-subtext">
                    Alexie Sommer
                  </p>
                  <p className="text-[.75rem] font-normal text-subtext">
                    URGE Collective
                  </p>
                </div>
                {/* Person 3 */}
                <div className="flex flex-col">
                  <img
                    src={steering3}
                    alt="Aurelie Lionet"
                    className="w-full object-cover grayscale"
                  />
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal mt-2 text-subtext">
                    Aurelie Lionet
                  </p>
                  <p className="text-[.75rem] font-normal text-subtext">
                    Design for Life
                  </p>
                </div>
                {/* Person 4 */}
                <div className="flex flex-col">
                  <img
                    src={steering4}
                    alt="Jo Barnard"
                    className="w-full object-cover grayscale"
                  />
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal mt-2 text-subtext">
                    Jo Barnard
                  </p>
                  <p className="text-[.75rem] font-normal text-subtext">
                    Morrama
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default SteeringGroup;