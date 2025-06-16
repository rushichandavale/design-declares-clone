import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const GlobalPartnerships = () => {
  return (
    <Element name="global-partnerships" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">Global Partnerships</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            {/* Main Paragraph */}
            <p className="text-[1.5rem] font-normal">
              We invite our colleagues from across the design industry to join us in declaring an
              emergency, and starting to take urgent action.*
            </p>

            {/* Side-by-Side Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-8">
                <p className="text-[1.125rem] font-normal">
                  The acts of emergency above are the first (big) steps. As we all commit to this
                  work, we must also commit to doing it in a way that is genuinely inclusive and
                  equitable.
                </p>
                <p className="text-[1.125rem] font-normal">
                  It doesn’t matter where on the journey you are. What matters is that you’re here,
                  and you’re ready to do the work. Because there is no design on a dead planet.
                </p>
                <Link
                  to="#"
                  className="inline-block w-fit bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex flex-col space-y-8">
                <p className="text-[1.125rem] font-normal">
                  *We are actively seeking partnerships to expand Design Declares around the world. If
                  that sounds like something you’re interested in, please get in touch.
                </p>
                <div>
                  <p className="text-[1.125rem] font-normal">Join our list of global partners...</p>
                  <p className="text-[1.125rem] font-normal mt-2">
                    <Link
                      to="#"
                      className="underline hover:text-gray-200 transition-colors"
                    >
                      UK
                    </Link>
                    ,{' '}
                    <Link
                      to="#"
                      className="underline hover:text-gray-200 transition-colors"
                    >
                      Ireland
                    </Link>
                    ,{' '}
                    <Link
                      to="#"
                      className="underline hover:text-gray-200 transition-colors"
                    >
                      Brazil
                    </Link>
                    ,{' '}
                    <Link
                      to="#"
                      className="underline hover:text-gray-200 transition-colors"
                    >
                      Australia
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default GlobalPartnerships;