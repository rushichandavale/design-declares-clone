import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  PlusIcon, HomeIcon, InformationCircleIcon, NewspaperIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setShowOptions(false);
      setTimeout(() => setIsOpen(false), 300); // Delay menu shrink until options exit (0.3s)
    } else {
      setIsOpen(true);
    }
  };

  const menuVariants = {
    closed: { width: 200 },
    open: { width: 300, transition: { duration: 0.3, ease: 'easeInOut' } },
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

  const navOptions = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Latest', path: '/latest', icon: NewspaperIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
    { name: 'Choose Global Chapter', path: '/global-chapter', icon: GlobeAltIcon },
  ];

  return (
    <motion.nav
      className="fixed bottom-4 right-4 bg-white text-black border border-black  shadow-lg z-40"
      variants={menuVariants}
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
            className="flex items-center justify-between px-4 py-3 text-[1.5rem] font-normal hover:bg-gray-100"
          >
            <div className="flex items-center space-x-2"> 
              <span>Menu</span>
            </div>
            <div className="h-6 flex items-center border-l border-black pl-3">
              <motion.div variants={plusVariants}>
                <PlusIcon className="h-6 w-6" />
              </motion.div>
            </div>
          </button>

          {/* Nav Options */}
        <AnimatePresence>
          {isOpen && showOptions && (
            <motion.div className="flex flex-col px-4 space-y-2">
              {navOptions.map((option, i) => (
                <motion.div
                  key={option.name}
                  custom={i}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center space-x-2"
                >
                  <option.icon className="h-6 w-6" />
                  <Link
                    to={option.path}
                    className="text-[1.5rem] font-normal hover:text-gray-600"
                    onClick={() => {
                      setShowOptions(false);
                      setTimeout(() => setIsOpen(false), 300);
                    }}
                  >
                    {option.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Declare Now */}
        <Link
          to="/declare-now"
          className="px-4 py-3 text-[1.5rem] font-normal hover:bg-gray-100 border-t border-black"
          onClick={() => {
            setShowOptions(false);
            setTimeout(() => setIsOpen(false), 300);
          }}
        >
          Declare Now
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;