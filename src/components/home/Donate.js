import { Element } from 'react-scroll';

const Donate = () => {
  return (
    <Element name="donate" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">Donate to D!</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            <p className="text-[1.5rem] font-normal">
              Design Declares is a CIC and would not exist without our dedicated team of co-steers,
              volunteers, and our passionate community working towards change in the creative industry.
              Your support can go a long way, and helps us too continue the valuable work needed in
              tackling the climate crises. If you believe in the work we do, please consider a small
              donation to help us on our journey for a more equitable and just planet.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-start">
              <button className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                Donate £10
              </button>
              <button className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                Donate £20
              </button>
              <button className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                Donate £50
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Donate;