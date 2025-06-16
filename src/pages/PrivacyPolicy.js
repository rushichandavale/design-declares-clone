import { useState, useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  // State for title fixed state
  const [isTitleFixed, setIsTitleFixed] = useState(false);

  // Ref for the component container
  const sectionRef = useRef(null);

  // Handle scroll to toggle fixed title
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isAtTop = rect.top <= 0;
        const isPastBottom = rect.bottom <= 0;
        const isAboveTop = rect.top > window.innerHeight;

        // Fix title when component is at top but not past bottom or above top
        setIsTitleFixed(isAtTop && !isPastBottom && !isAboveTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for fade-up
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Staggered animation for content elements
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Element name="privacy-policy" className="bg-black text-white border-b border-black rounded-b-3xl py-8 lg:py-16">
      <div ref={sectionRef} className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className={`w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-0 ${
            isTitleFixed ? 'fixed top-0 left-0 z-10 bg-black' : 'relative'
          }`}
        >
          <motion.h2
            className="text-[1.5rem] font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Privacy Policy
          </motion.h2>
        </div>

        {/* Right: Scrollable Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16">
          <motion.div
            className="flex flex-col space-y-6 pt-0"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              This Privacy Policy is for the benefit of visitors to our website. It will tell you how we
              look after your personal data as your privacy is important to us. Design Declares protects
              your privacy with Cabin analytics – this means:
            </motion.p>
            <motion.ul className="list-disc pl-6 text-[1.125rem] font-normal" variants={fadeUp}>
              <li>No cookies</li>
              <li>No data sharing</li>
              <li>No ad networks</li>
              <li>Carbon neutral</li>
              <li>Fast and lightweight</li>
              <li>Compliant with all privacy laws</li>
            </motion.ul>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              Cabin is built on the concept of privacy-by-design. Visitor data is stored in a unique
              data structure which makes it 100% anonymous and compliant with all privacy laws,
              globally. To learn more about Cabin,{' '}
              <Link
                to="https://withcabin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                click here
              </Link>
              .
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              Design Declares collect emails and names via Brevo and will use the information you
              provide via Brevo to be in touch with you.
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              We use the data collected by our website to monitor trends to enable us to monitor how our
              website is being used, so that we can operate more effectively towards audience needs and
              expectations. Emails and names gathered via Brevo will be used to send updates and
              marketing related to Design Declares as a service, product or insight. This includes all
              subsidiaries and partnering agencies involved in the curation of Design Declares.
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              We will not actively send your data anywhere globally, however Cabin or Brevo may do this.
              Platforms such as these subscribe to the EU-US Privacy Shield framework which means that
              it has agreed to work with the appropriate regulatory authorities to resolve any
              complaints regarding the transfer of personal data, where these complaints cannot be
              resolved directly. Organisations subscribing to the EU- US Privacy Shield framework are
              considered to be permitted destinations for personal data by the EU.
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              We will retain your IP address for 90 days after which time it is automatically removed.
              Emails via Brevo will be kept indefinitely to market products, services and insights
              related to Design Declares. Personal details can be removed via Brevo by unsubscribing at
              the bottom of any email send out.
            </motion.p>
            <motion.p className="text-[1.125rem] font-normal" variants={fadeUp}>
              If you have any questions or concerns about our use of your personal information, please
              let us know by sending an email to{' '}
              <Link
                to="mailto:hello@designdeclares.com"
                className="text-white underline"
              >
                hello@designdeclares.com
              </Link>
              .
            </motion.p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default PrivacyPolicy;