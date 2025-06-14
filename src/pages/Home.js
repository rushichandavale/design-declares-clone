import { useState, useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease' }}
        ></div>
      </div>
      {/* Hero Section */}
      <HeroSection />
      {/* Other sections will be added later */}
    </div>
  );
};

export default Home;