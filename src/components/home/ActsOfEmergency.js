import { useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';

const ActsOfEmergency = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  // Scroll-triggered animation for the intro paragraph
  const paragraphRef = useRef(null);
  const paragraphIsInView = useInView(paragraphRef, { once: true, margin: '0px 0px -100px 0px' });
  const paragraphControls = useAnimation();

  // Scroll-triggered animation for the list of acts
  const actsRef = useRef(null);
  const actsIsInView = useInView(actsRef, { once: true, margin: '0px 0px -100px 0px' });
  const actsControls = useAnimation();

  useEffect(() => {
    if (paragraphIsInView) {
      paragraphControls.start('animate');
    }
  }, [paragraphIsInView, paragraphControls]);

  useEffect(() => {
    if (actsIsInView) {
      actsControls.start('animate');
    }
  }, [actsIsInView, actsControls]);

  return (
    <Element name="acts" className="bg-black py-16 lg:py-32">
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
              8 Acts of Emergency
            </motion.h2>
          </div>

          {/* Right: Content */}
          <div className="w-full px-2 md:px-4 lg:pr-8 pt-8">
            <div className="flex flex-col space-y-8">
              <motion.p
                ref={paragraphRef}
                className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-subtext"
                variants={fadeUp}
                initial="initial"
                animate={paragraphControls}
              >
                What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
              </motion.p>
              <motion.div
                ref={actsRef}
                className="space-y-0"
                variants={containerVariants}
                initial="initial"
                animate={actsControls}
              >
                <motion.div className="bg-heading text-black border border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">1</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Sound the Alarm</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">2</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Start the Journey</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">3</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Bring Clients with Us</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">4</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Measure What We Make</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">5</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Redefine ‘Good’</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">6</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Educate, Accelerate</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">7</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Design for Justice</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.
                  </p>
                </motion.div>
                <motion.div className="bg-heading text-black border-b border-l border-r border-black" variants={fadeUp}>
                  <div className="flex items-baseline px-4 border-b border-black">
                    <span className="text-[1.5rem] lg:text-[3.5rem] font-normal border-r border-black pr-4 mr-4">8</span>
                    <h3 className="text-[1.5rem] lg:text-[3.5rem] font-normal">Amplify Voices for Change</h3>
                  </div>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal px-4 py-2">
                    Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ActsOfEmergency;