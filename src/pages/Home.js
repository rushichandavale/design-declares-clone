import HeroSection from '../components/home/HeroSection';
import Breakdown from '../components/home/Breakdown';
import Donate from '../components/home/Donate';
import ActsOfEmergency from '../components/home/ActsOfEmergency';
import DeclareNow from '../components/home/DeclareNow';
import LatestSection from '../components/home/LatestSection';
import Newsletter from '../components/home/Newsletter';
import Signatories from '../components/home/Signatories';
import GlobalSupporters from '../components/home/GlobalSupporters';

const Home = () => {
  return (
    <div className='bg-black text-heading border-b border-black rounded-b-3xl'>
      <HeroSection />
      <Breakdown />
      <Donate />
      <ActsOfEmergency />
      <DeclareNow />
      <LatestSection />
      <Newsletter />
      <Signatories />
      <GlobalSupporters />
    </div>
  );
};

export default Home;