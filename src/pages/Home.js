import HeroSection from '../components/home/HeroSection';
import Breakdown from '../components/home/Breakdown';
import Donate from '../components/home/Donate';
import ActsOfEmergency from '../components/home/ActsOfEmergency';
import DeclareNow from '../components/home/DeclareNow';
import LatestSection from '../components/home/LatestSection';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Breakdown />
      <Donate />
      <ActsOfEmergency />
      <DeclareNow />
      <LatestSection />
      <Newsletter />
    </div>
  );
};

export default Home;