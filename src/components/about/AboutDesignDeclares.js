import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutDesignDeclares = () => {
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
    <Element name="about-design-declares" className="bg-black py-16 lg:py-32">
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
              About Design Declares
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
              {/* Paragraphs */}
              <p className="text-[1.5rem] md:text-[2rem] lg:text-[3.5rem] font-normal leading-tight text-heading">
                Climate breakdown has begun. And business as usual is not an option.
              </p>
              <p className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-subtext">
                That’s why we started Design Declares.
              </p>
              <p className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal text-subtext">
                Inspired by a global declaration movement sounding the alarm in industries everywhere,
                we’re an industry-recognised initiative representing the fears, hopes and commitment to
                action of a growing group of designers, design studios, agencies and institutions.
              </p>

              {/* Button */}
              <div>
                <Link
                  to="#"
                  className="inline-block bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full w-full md:w-auto text-center"
                >
                  See Global Declarations
                </Link>
              </div>

              {/* Side-by-Side Paragraphs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-8">
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    Together, we sit at the very beginning of the creative process. The tools we use and
                    the choices we make can influence society’s behaviour, change economies and challenge
                    everything that’s come before.
                  </p>
                  <Link
                    to="#"
                    className="inline-block bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 md:w-auto text-center"
                  >
                    Declare Emergency Now
                  </Link>
                </div>
                <div className="flex flex-col space-y-8">
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    Because design, whether it’s a product, a piece of packaging or an exhibition space,
                    has impact. It’s up to us whether that impact is harmful or healing.
                  </p>
                  <p className="text-[1rem] lg:text-[1.125rem] font-normal text-subtext">
                    We’re glad you’re here. Let’s get to work.
                  </p>
                </div>
              </div>

              {/* Side-by-Side Unordered Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="list-disc pl-5 text-[1rem] lg:text-[1.125rem] font-normal space-y-4 text-subtext">
                  <li>Design Declares is free.</li>
                  <li>
                    ‘Design’ to us means industrial, digital, graphic, communication and service design.
                  </li>
                  <li>
                    Design Declares offers support to all its signatories through shared best practice,
                    resources and insights, all found in the Toolkit.
                  </li>
                  <li>
                    Our signatories use the clarity of the 8 Acts of Emergency as a way to start
                    meaningful conversations and actions in collaboration with colleagues, collaborators
                    and clients.
                  </li>
                </ul>
                <ul className="list-disc pl-5 text-[1rem] lg:text-[1.125rem] font-normal space-y-4 text-subtext">
                  <li>
                    We welcome declarations from companies with an office and/or employing at least one
                    full-time designer, and from practising freelance designers who are registered as
                    self-employed in the UK. All signatories will be named and published on this site.
                  </li>
                  <li>
                    As a collective voice, we will liaise with other industry organisations and networks,
                    constructively engaging with government, clients and design media.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default AboutDesignDeclares;