import { useState, useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

// Component for each collapsible section
const CollapsibleSection = ({ title, children, isOpen, toggleSection }) => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  // Animation for the collapsible content when toggled
  const toggleAnimation = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Scroll-triggered animation for the section header
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef, { once: true, margin: '0px 0px -100px 0px' });
  const headerControls = useAnimation();

  // Scroll-triggered animation for the collapsible content
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' });
  const contentControls = useAnimation();

  useEffect(() => {
    if (headerIsInView) {
      headerControls.start('animate');
    }
  }, [headerIsInView, headerControls]);

  useEffect(() => {
    if (contentIsInView && isOpen) {
      contentControls.start('animate');
    }
  }, [contentIsInView, isOpen, contentControls]);

  return (
    <div>
      <motion.button
        ref={headerRef}
        onClick={toggleSection}
        className="w-full text-left border-t border-heading py-4"
        variants={fadeUp}
        initial="initial"
        animate={headerControls}
      >
        <h3 className="text-[1.5rem] font-normal flex justify-between items-center">
          {title}
          <span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                />
              </svg>
            )}
          </span>
        </h3>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            variants={toggleAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children.map((child, index) => (
              <motion.div key={index} variants={fadeUp} animate={contentControls}>
                {child}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Breakdown = () => {
  const [openSections, setOpenSections] = useState({
    role: false,
    change: false,
    urgency: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Scroll-triggered animation for the intro paragraph
  const introRef = useRef(null);
  const introIsInView = useInView(introRef, { once: true, margin: '0px 0px -100px 0px' });
  const introControls = useAnimation();

  // Scroll-triggered animation for the button
  const buttonRef = useRef(null);
  const buttonIsInView = useInView(buttonRef, { once: true, margin: '0px 0px -100px 0px' });
  const buttonControls = useAnimation();

  useEffect(() => {
    if (introIsInView) {
      introControls.start('animate');
    }
  }, [introIsInView, introControls]);

  useEffect(() => {
    if (buttonIsInView) {
      buttonControls.start('animate');
    }
  }, [buttonIsInView, buttonControls]);

  return (
    <Element name="breakdown" className="bg-black py-16 lg:py-32">
      <div className="relative ">
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
              This is a Breakdown
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="w-full px-2 md:px-4 lg:px-8 pt-8">
            <div className="flex flex-col space-y-8">
              <motion.p
                ref={introRef}
                className="text-[1.5rem] md:text-[2rem] lg:text-[3.5rem] font-normal leading-tight text-heading"
                variants={fadeUp}
                initial="initial"
                animate={introControls}
              >
                The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
              </motion.p>
              <div className="space-y-4 text-subtext">
                <CollapsibleSection
                  title="The Role of Design"
                  isOpen={openSections.role}
                  toggleSection={() => toggleSection('role')}
                >
                  {[
                    <p className="text-[1.125rem] font-normal py-8" key="role-1">
                      As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.
                    </p>,
                    <p className="text-[1.125rem] font-normal py-8" key="role-2">
                      Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.
                    </p>,
                  ]}
                </CollapsibleSection>
                <CollapsibleSection
                  title="Time for Change"
                  isOpen={openSections.change}
                  toggleSection={() => toggleSection('change')}
                >
                  {[
                    <p className="text-[1.125rem] font-normal py-8" key="change-1">
                      Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.
                    </p>,
                    <p className="text-[1.125rem] font-normal py-8" key="change-2">
                      This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.
                    </p>,
                    <p className="text-[1.125rem] font-normal pb-8" key="change-3">
                      It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.
                    </p>,
                    <p className="text-[1.125rem] font-normal pb-8" key="change-4">
                      And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.
                    </p>,
                  ]}
                </CollapsibleSection>
                <CollapsibleSection
                  title="Act with Urgency"
                  isOpen={openSections.urgency}
                  toggleSection={() => toggleSection('urgency')}
                >
                  {[
                    <p className="text-[1.125rem] font-normal py-8" key="urgency-1">
                      We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.
                    </p>,
                    <p className="text-[1.125rem] font-normal py-8" key="urgency-2">
                      This is the most important brief of our lives. Join us as we begin to design a climate-positive future.
                    </p>,
                  ]}
                </CollapsibleSection>
              </div>
              <motion.div
                ref={buttonRef}
                variants={fadeUp}
                initial="initial"
                animate={buttonControls}
              >
                <button className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto">
                  <a
                    href="https://youtu.be/XpnOe94eXdM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View our D! Intro Video
                  </a>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Breakdown;