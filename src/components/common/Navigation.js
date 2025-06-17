import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { PlusIcon, HomeIcon, InformationCircleIcon, NewspaperIcon, EnvelopeIcon, GlobeAltIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setShowOptions(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(true);
    }
  };

  const menuVariants = {
    closed: { width: 250 },  
    open: {
      width: 350,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const mobileMenuVariants = {
    closed: { width: '100%' },  
    open: { width: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const optionVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.3 + i * 0.05 },
    }),
    exit: { y: 50, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const plusVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const chapterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: i * 0.1 },
    }),
  };

  const navOptions = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Latest', path: '/latest', icon: NewspaperIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
    { name: 'Choose Global Chapter', icon: GlobeAltIcon },
  ];

  const chapters = ['United Kingdom', 'Ireland', 'Brasil', 'Australia'];

  return (
    <>
      <motion.nav
        className="fixed bottom-0  sm:bottom-4 sm:right-4 bg-heading text-black border border-black shadow-lg z-40 w-full sm:w-auto"
        variants={window.innerWidth < 640 ? mobileMenuVariants : menuVariants}  
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onAnimationComplete={() => {
          if (isOpen && !showOptions) {
            setShowOptions(true);
          }
        }}
      >
        <div className="flex flex-col">
          <button
            onClick={toggleMenu}
            className="flex items-baseline justify-between px-4 py-3 text-[1.5rem] font-normal hover:bg-gray-100 border-b border-black w-full"
          >
            <div className="flex items-baseline">
              <span>Menu</span>
            </div>
            <div className="h-6 flex items-center">
              <motion.div variants={plusVariants} className="px-2">
                <PlusIcon className="h-6 w-6" />
              </motion.div>
            </div>
          </button>

          {/* Nav Options */}
          <AnimatePresence>
            {isOpen && showOptions && (
              <div className="flex flex-col px-4 space-y-2">
                {navOptions.map((option, i) => (
                  <motion.div
                    key={option.name}
                    custom={i}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center space-x-2 w-full"
                  >
                    <option.icon className="h-6 w-6" />
                    {option.name === 'Choose Global Chapter' ? (
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setShowOptions(false);
                          setTimeout(() => setIsOpen(false), 300);
                        }}
                        className="text-[1.5rem] font-normal hover:text-gray-600 text-left w-full"
                      >
                        {option.name}
                      </button>
                    ) : (
                      <RouterLink
                        to={option.path}
                        className="text-[1.5rem] font-normal hover:text-gray-600 w-full"
                        onClick={() => {
                          setShowOptions(false);
                          setTimeout(() => setIsOpen(false), 300);
                        }}
                      >
                        {option.name}
                      </RouterLink>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Declare Now */}
          <ScrollLink
            to="declare"
            smooth={true}
            duration={500}
            className="px-4 py-3 text-[1.5rem] font-normal hover:bg-gray-100 border-t border-b border-black cursor-pointer block w-full"
            onClick={() => {
              setShowOptions(false);
              setTimeout(() => setIsOpen(false), 300);
            }}
          >
            Declare Now
          </ScrollLink>
        </div>
      </motion.nav>

      {/* Modal for Global Chapters (Styled as a Page) */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-black text-white w-full h-full flex flex-col">
                {/* Header: Logo and Close Icon */}
                <div className="flex justify-end items-center p-4">
                  {/* Close Icon */}
                  <button onClick={() => setShowModal(false)} className="text-white hover:text-gray-300">
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                </div>
 
                <div className="flex-1 lg:grid lg:grid-cols-[40%_60%] p-8">
                  {/* Left: Select Global Chapter */}
                  <div className="flex">
                    <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
                      Select Global Chapter:
                    </h2>
                  </div>

                  {/* Right: Chapter List */}
                  <div className="flex flex-col space-y-4 mt-4 lg:mt-0">
                    {chapters.map((chapter, i) => (
                      <motion.div
                        key={chapter}
                        custom={i}
                        variants={chapterVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <span
                          className="text-[clamp(2rem,8vw,6rem)] font-bold uppercase leading-none tracking-tight title-font text-heading hover:text-primary cursor-pointer"
                        >
                          {chapter}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;