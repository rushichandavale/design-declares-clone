import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import latest1 from '../assets/images/latest1.webp';
import latest2 from '../assets/images/latest2.webp';
import latest3 from '../assets/images/latest3.webp';
import latest4 from '../assets/images/latest4.webp';
import latest5 from '../assets/images/latest5.webp';
import latest6 from '../assets/images/latest6.webp';
import latest7 from '../assets/images/latest7.webp';
import latest8 from '../assets/images/latest8.webp';
import latest9 from '../assets/images/latest9.webp';
import latest10 from '../assets/images/latest10.webp';
import latest11 from '../assets/images/latest11.webp';
import latest12 from '../assets/images/latest12.webp';
import latest13 from '../assets/images/latest13.webp';
import latest14 from '../assets/images/latest14.webp';
import latest15 from '../assets/images/latest15.webp';

// Section Component to handle each section with scroll-triggered animation
const Section = ({ section, index }) => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  // Hooks are at the top level of the Section component
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:flex-row gap-4" // Reduced gap from 8 to 4
      variants={containerVariants}
      initial="initial"
      animate={controls}
    >
      <motion.div className="flex-1" variants={fadeUp}>
        <img
          src={section.image}
          alt={section.alt}
          className="w-96 h-96 object-cover"
        />
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col space-y-2"
        variants={containerVariants}
      >
        <motion.div className="flex items-center space-x-2" variants={fadeUp}>
          {[section.category, section.chapter].map((tag) => (
            <motion.span
              key={tag}
              className="inline-block px-3 py-1 text-[.75rem] font-semibold bg-gray-800/80 text-subtext rounded-full"
              variants={fadeUp}
            >
              {tag}
            </motion.span>
          ))}
          {section.date && (
            <motion.span
              className="text-[.75rem] font-semibold text-subtext"
              variants={fadeUp}
            >
              {section.date}
            </motion.span>
          )}
        </motion.div>
        <motion.h2
          className="text-[1.5rem] lg:text-[2rem] font-normal text-heading"
          variants={fadeUp}
        >
          {section.title}
        </motion.h2>
        {section.description && (
          <motion.p
            className="text-[.75rem] font-semibold text-subtext"
            variants={fadeUp}
          >
            {section.description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const Latest = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  // State for selected category and chapter
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');

  // Scroll-triggered animation for the right-side content div
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true, margin: '0px 0px -100px 0px' });
  const contentControls = useAnimation();

  useEffect(() => {
    if (contentIsInView) {
      contentControls.start('animate');
    }
  }, [contentIsInView, contentControls]);

  // Array of sections
  const sections = [
    {
      category: 'Case Studies',
      chapter: 'D! Ireland',
      image: latest1,
      alt: 'Sustainability in Design Curriculum',
      date: '30.04.2025, 04:30 PM',
      title: 'Embedding Sustainability in the Design Curriculum',
      description:
        'Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.',
    },
    {
      category: 'Events',
      chapter: 'D! UK',
      image: latest2,
      alt: 'Eco-Friendly Packaging Workshop',
      date: '24.04.2025, 03 PM:30',
      title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
      description: 'Recap: SD4P Collective working session – 28th March 2025',
    },
    {
      category: 'Perspective',
      chapter: 'D! Australia',
      image: latest3,
      alt: 'Climate Action Design Awards',
      date: '18.12.2024, 08 AM:38',
      title: 'Sasha Titchkosky Interview',
      description:
        'An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky',
    },
    {
      category: 'Perspective',
      chapter: 'D! Australia',
      image: latest4,
      alt: 'Climate Action Design Awards',
      date: '10.12.2024, 08 am:37',
      title: 'Andrew Simpson Interview',
      description: 'An Interview with Vert Design and Design Declares Australia CEO - Andew Simpson',
    },
    {
      category: 'Events',
      chapter: 'D! UK',
      image: latest5,
      alt: 'Climate Action Design Awards',
      date: '06.12.2024, 02 pm:30',
      title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
      description:
        "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
    },
    {
      category: 'Events',
      chapter: 'D! UK',
      image: latest6,
      alt: 'Climate Action Design Awards',
      date: '27.06.2024, 04 pm:30',
      title: 'D! June Event Recap',
      description:
        'Design Declares has always been about people. From the moment that Design Council CDO Cat Drew introduced Alexie Sommer and Jo Barnard back in 2022, followed by Abb-d Taiyo and Aurelie Lionet coming onboard and aligning to the vision, we knew Design Declares was something special.',
    },
    {
      category: 'Case Studies',
      chapter: 'D! UK',
      image: latest7,
      alt: 'Climate Action Design Awards',
      date: '26.06.2024, 02 pm:30',
      title: 'Reducing Website Carbon Emissions',
      description:
        'In an industry first, MEK have documented exactly how they approached and solved this challenge so they can inspire others to do the same and help businesses transition to sustainable digital practices.',
    },
    {
      category: 'Case Studies',
      chapter: 'D! UK',
      image: latest8,
      alt: 'Climate Action Design Awards',
      date: '01.01.2024, 07 pm:30',
      title: 'Creative Climate Investigations',
      description:
        'A showcase of 8 projects exploring greenwashing, air quality, environmental effects on wellbeing, plastic, the ecological impacts of data harvesting, trees, global dimming, and green spaces, collected together for the first time in a thoughtfully designed limited-edition book.',
    },
    {
      category: 'Updates',
      chapter: 'D! UK',
      image: latest9,
      alt: 'Climate Action Design Awards',
      date: '04.09.2023, 04 pm:21',
      title: 'Becoming a Community Interest Company',
      description:
        'Design Declares has become a certified CIC, a people-powered Community Interest Company with planet-led ambitions.',
    },
    {
      category: 'Case Studies',
      chapter: 'D! UK',
      image: latest10,
      alt: 'Climate Action Design Awards',
      date: '11.06.2023, 09 pm:30',
      title: 'Connecting climate scientists and design educators together',
      description:
        'Climify podcast is to connect climate scientists and design educators together so that we can bring climate-related projects into our classrooms.',
    },
    {
      category: 'Case Studies',
      chapter: 'D! UK',
      image: latest11,
      alt: 'Climate Action Design Awards',
      date: '11.06.2023, 06 pm:30',
      title: 'Revo Modular Furniture System for Profim, designed by Pearson Lloyd',
      description:
        'Making its global debut at Clerkenwell Design Week, Revo is a stunning new design by Pearson Lloyd, for Profim, combining circular thinking with playful design to create a lightweight and versatile workplace furniture system.',
    },
    {
      category: 'Case Studies',
      chapter: 'D! UK',
      image: latest12,
      alt: 'Climate Action Design Awards',
      date: '03.06.2023, 04 pm:30',
      title: 'Only One is an action platform for the planet, designed by Driftime®',
      description:
        'Only One invite people to make monthly donations to plant ocean trees and coral reefs, remove carbon and plastics from our seas, and track the results.',
    },
    {
      category: 'Updates',
      chapter: 'D! UK',
      image: latest13,
      alt: 'Climate Action Design Awards',
      date: '01.06.2023, 04 pm:30',
      title: 'What’s the future for Design Declares?',
      description:
        'A few months ago, an article by Chris Hockell was published in Dezeen criticising Architects Declare for failing to live up to its ambitions.',
    },
    {
      category: 'Perspective',
      chapter: 'D! UK',
      image: latest14,
      alt: 'Climate Action Design Awards',
      date: '03.10.2022, 03 pm:30',
      title: 'Carbon targets for the Design Industry',
      description:
        'Two big barriers for any business setting out to reduce their impact on the planet are knowing where they are starting from and understanding what they should be aiming for.',
    },
    {
      category: 'Events',
      chapter: 'D! Australia',
      image: latest15,
      alt: 'Climate Action Design Awards',
      date: '',
      title: 'Design Declares Australia Launch',
      description: '',
    },
  ];

  // Filter sections based on selected category and chapter
  const filteredSections = sections.filter((section) => {
    const matchesCategory =
      selectedCategory === 'All' || section.category === selectedCategory;
    const matchesChapter =
      selectedChapter === 'All' || section.chapter === selectedChapter;
    return matchesCategory && matchesChapter;
  });

  return (
    <div className="bg-black text-heading border-b border-black rounded-b-3xl">
      {/* Logo at Top Left */}
      <div className="top-4 left-4 z-30 p-4">
        <Link
          className="focus-ring group relative w-fit transition-colors inline-block"
          data-rac=""
          to="/"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 44 59"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 pl-0.5 sm:pl-1"
            role="img"
            aria-label="Design Declares!"
          >
            <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"></path>
            <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"></path>
          </svg>
        </Link>
      </div>

      {/* Main Content */}
      <Element name="latest" className="bg-black text-heading py-2 lg:py-4">
        <div className="relative min-h-screen">
          <div className="lg:grid lg:grid-cols-[40%_60%] lg:items-start px-20">
            {/* Left: Titles and Buttons */}
            <div className="w-full px-2 md:px-4 lg:px-8 pt-8 top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]">
              <motion.h2
                className="text-[1.5rem] font-semibold text-heading"
                variants={fadeUp}
                initial="initial"
                animate="animate"
              >
                Categories
              </motion.h2>
              <motion.div
                className="flex flex-row flex-wrap space-x-2 mt-4"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {['All', 'Events', 'Case Studies', 'Updates', 'Perspective'].map((category) => (
                  <motion.a
                    key={category}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory(category);
                    }}
                    className={`inline-block px-3 py-1 text-[.75rem] font-semibold text-subtext rounded-full ${
                      selectedCategory === category
                        ? 'bg-primary'
                        : 'bg-custom-gray hover:bg-gray-800'
                    }`}
                    variants={fadeUp}
                  >
                    {category}
                  </motion.a>
                ))}
              </motion.div>
              <motion.h2
                className="text-[1.5rem] font-semibold mt-8 text-heading"
                variants={fadeUp}
                initial="initial"
                animate="animate"
              >
                View by Chapter
              </motion.h2>
              <motion.div
                className="flex flex-row flex-wrap space-x-2 mt-4"
                variants={containerVariants}
                initial="initial"
                animate="animate"
              >
                {['All', 'D! UK', 'D! Ireland', 'D! Australia'].map((chapter) => (
                  <motion.a
                    key={chapter}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedChapter(chapter);
                    }}
                    className={`inline-block px-3 py-1 text-[.75rem] font-semibold text-subtext rounded-full ${
                      selectedChapter === chapter
                        ? 'bg-primary'
                        : 'bg-custom-gray hover:bg-gray-800'
                    }`}
                    variants={fadeUp}
                  >
                    {chapter}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right: Filtered Sections */}
            <motion.div
              ref={contentRef}
              className="w-full px-2 md:px-4 lg:px-8 pt-8"
              variants={fadeUp}
              initial="initial"
              animate={contentControls}
            >
              <div className="flex flex-col space-y-8">
                {filteredSections.map((section, index) => (
                  <Section key={index} section={section} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Latest;