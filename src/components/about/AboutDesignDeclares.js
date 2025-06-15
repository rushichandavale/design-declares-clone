import { Element } from 'react-scroll';

const AboutDesignDeclares = () => {
  return (
    <Element name="about-design-declares" className="bg-black text-white ">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">About Design Declares</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            {/* Paragraphs */}
            <p className="text-[3.5rem] font-normal leading-tight">
              Climate breakdown has begun. And business as usual is not an option.
            </p>
            <p className="text-[1.5rem] font-normal">That’s why we started Design Declares.</p>
            <p className="text-[1.5rem] font-normal">
              Inspired by a global declaration movement sounding the alarm in industries everywhere,
              we’re an industry-recognised initiative representing the fears, hopes and commitment to
              action of a growing group of designers, design studios, agencies and institutions.
            </p>

            {/* Button */}
            <div>
              <a
                href="#"
                className="inline-block bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                See Global Declarations
              </a>
            </div>

            {/* Side-by-Side Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-8">
                <p className="text-[1.125rem] font-normal">
                  Together, we sit at the very beginning of the creative process. The tools we use and
                  the choices we make can influence society’s behaviour, change economies and challenge
                  everything that’s come before.
                </p>
                <a
                  href="#"
                  className="inline-block w-fit bg-white text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors"
                >
                  Declare Emergency Now
                </a>
              </div>
              <div className="flex flex-col space-y-8">
                <p className="text-[1.125rem] font-normal">
                  Because design, whether it’s a product, a piece of packaging or an exhibition space,
                  has impact. It’s up to us whether that impact is harmful or healing.
                </p>
                <p className="text-[1.125rem] font-normal">
                  We’re glad you’re here. Let’s get to work.
                </p>
              </div>
            </div>

            {/* Side-by-Side Unordered Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc pl-5 text-[1.125rem] font-normal space-y-4">
                <li>Design Declares is free.</li>
                <li>
                  ‘Design’ to us means industrial, digital, graphic, communication and service design.
                </li>
                <li>
                  Design Declares offers support to all its signatories through shared best practice,
                  resources and insights, all found in the Toolkit.
                </li>
                <li>
                  Our signatories use the clarity of the 8 Acts of Emergency as a way to start
                  meaningful conversations and actions in collaboration with colleagues, collaborators
                  and clients.
                </li>
              </ul>
              <ul className="list-disc pl-5 text-[1.125rem] font-normal space-y-4">
                <li>
                  We welcome declarations from companies with an office and/or employing at least one
                  full-time designer, and from practising freelance designers who are registered as
                  self-employed in the UK. All signatories will be named and published on this site.
                </li>
                <li>
                  As a collective voice, we will liaise with other industry organisations and networks,
                  constructively engaging with government, clients and design media.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutDesignDeclares;