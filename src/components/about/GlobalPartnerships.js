import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';

const GlobalPartnerships = () => {
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
    <Element name="global-partnerships" className="bg-black py-16 lg:py-32">
      <div className="relative">
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start lg:px-20 md:px-16 px-4">
          {/* Left: Title */}
          <div
            className="w-full px-2 md:px-4 lg:px-8 pt-8 lg:sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
          >
            <motion.h2
              className="text-[1.5rem] font-semibold text-heading"
              variants={fadeUp}
              initial="initial"
              animate="animate"
            >
              Global Partnerships
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
              {/* Main Paragraph */}
              <p className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-heading">
                We invite our colleagues from across the design industry to join us in declaring an
                emergency, and starting to take urgent action.*
              </p>

              {/* Side-by-Side Paragraphs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8">
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    The acts of emergency above are the first (big) steps. As we all commit to this
                    work, we must also commit to doing it in a way that is genuinely inclusive and
                    equitable.
                  </p>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    It doesn’t matter where on the journey you are. What matters is that you’re here,
                    and you’re ready to do the work. Because there is no design on a dead planet.
                  </p>
                  <Link
                    to="#"
                    className="inline-block bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 md:w-auto text-center"
                  >
                    Get in Touch
                  </Link>
                </div>
                <div className="flex flex-col space-y-8">
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    *We are actively seeking partnerships to expand Design Declares around the world. If
                    that sounds like something you’re interested in, please get in touch.
                  </p>
                  <div>
                    <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                      Join our list of global partners...
                    </p>
                    <p className="text-[1rem] lg:text-[1.125rem] font-normal mt-2 text-subtext">
                      <Link
                        to="#"
                        className="underline hover:text-gray-200 transition-colors"
                      >
                        UK
                      </Link>
                      ,{' '}
                      <Link
                        to="#"
                        className="underline hover:text-gray-200 transition-colors"
                      >
                        Ireland
                      </Link>
                      ,{' '}
                      <Link
                        to="#"
                        className="underline hover:text-gray-200 transition-colors"
                      >
                        Brazil
                      </Link>
                      ,{' '}
                      <Link
                        to="#"
                        className="underline hover:text-gray-200 transition-colors"
                      >
                        Australia
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default GlobalPartnerships;