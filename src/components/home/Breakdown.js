import { useState } from 'react';
import { Element } from 'react-scroll';

const Breakdown = () => {
  const [openSections, setOpenSections] = useState({
    role: false,
    change: false,
    urgency: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Element name="breakdown" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">This is a Breakdown</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            <p className="text-[3.5rem] font-normal leading-tight">
              The science is settled. We are in an emergency of climate and nature. The world is past
              breaking point; the breakdown has begun...
            </p>
            <div className="space-y-4">
              <div>
                <button
                  onClick={() => toggleSection('role')}
                  className="w-full text-left border-t border-white pt-4"
                >
                  <h3 className="text-[1.5rem] font-normal flex justify-between items-center">
                    The Role of Design
                    <span>
                      {openSections.role ? (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                          />
                        </svg>
                      )}
                    </span>
                  </h3>
                </button>
                {openSections.role && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <p className="text-[1.125rem] font-normal">
                      As designers working within an industry that relies on production and powers global
                      consumption, we must acknowledge that we have had a role in bringing us to where we
                      are now, and that we have an important role in what comes next.
                    </p>
                    <p className="text-[1.125rem] font-normal">
                      Because designers are makers. We make ideas real. We generate solutions. We build
                      the world - dreaming up new futures and bringing them to life in ways that are
                      beautiful, vital and impossible to resist. It’s not quite magic, but it feels like
                      it.
                    </p>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleSection('change')}
                  className="w-full text-left border-t border-white pt-4"
                >
                  <h3 className="text-[1.5rem] font-normal flex justify-between items-center">
                    Time for Change
                    <span>
                      {openSections.change ? (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                          />
                        </svg>
                      )}
                    </span>
                  </h3>
                </button>
                {openSections.change && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <p className="text-[1.125rem] font-normal">
                      Together with our clients, partners and colleagues across the supply chain, we are
                      daring to reimagine the way we create every product, service, campaign and designed
                      solution we put out into the world.
                    </p>
                    <p className="text-[1.125rem] font-normal">
                      This means measuring and actively reducing the greenhouse gas emissions and resource
                      use linked to our designs.
                    </p>
                    <p className="text-[1.125rem] font-normal">
                      It means introducing principles of sustainability, circularity and - ultimately -
                      regenerative design into our practice to recapture and repurpose resources and
                      materials.
                    </p>
                    <p className="text-[1.125rem] font-normal">
                      And it means acting systemically - seeing the bigger picture and working with others
                      to sharpen design’s incredible capacity to influence and accelerate climate repair
                      and justice.
                    </p>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => toggleSection('urgency')}
                  className="w-full text-left border-t border-white pt-4"
                >
                  <h3 className="text-[1.5rem] font-normal flex justify-between items-center">
                    Act with Urgency
                    <span>
                      {openSections.urgency ? (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 8"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                          />
                        </svg>
                      )}
                    </span>
                  </h3>
                </button>
                {openSections.urgency && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <p className="text-[1.125rem] font-normal">
                      We know all we need to make this a reality. The information, the guidance, the
                      inspiration and solutions are there. What design needs now is action - meaningful
                      steps that can begin to connect what we know to what we do.
                    </p>
                    <p className="text-[1.125rem] font-normal">
                      This is the most important brief of our lives. Join us as we begin to design a
                      climate-positive future.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button className="bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
                View our D! Intro Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Breakdown;