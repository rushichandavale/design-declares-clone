import { Element } from 'react-scroll';

const ActsOfEmergency = () => {
  return (
    <Element name="acts" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">8 Acts of Emergency</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            <p className="text-[1.5rem] font-normal">
              What does it take to Declare? It’s accepting we are in an emergency of climate and nature,
              and a commitment to do something about it. Here are eight places to start:
            </p>
            <div className="space-y-0">
              <div className="bg-white text-black border border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">1</span>
                  <h3 className="text-[3.5rem] font-normal">Sound the Alarm</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Acknowledge and raise awareness of the climate and ecological crisis - including its
                  roots in systems of oppression - in our organisations and our practice.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">2</span>
                  <h3 className="text-[3.5rem] font-normal">Start the Journey</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Invest in educating ourselves and our teams on methods of sustainable and regenerative
                  design, and show leadership by making measurable change to our practice. The Design
                  Declares Toolkit is a great place to start.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">3</span>
                  <h3 className="text-[3.5rem] font-normal">Bring Clients with Us</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Meaningfully consider environmental and social impacts as part of every pitch, proposal
                  and production process. Not every design output will be carbon neutral or fully climate
                  friendly, but every project is an opportunity to make real progress.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">4</span>
                  <h3 className="text-[3.5rem] font-normal">Measure What We Make</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Measure the environmental and social impact of our businesses and design projects, and
                  hold ourselves to account for what we find out.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">5</span>
                  <h3 className="text-[3.5rem] font-normal">Redefine ‘Good’</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Encourage, recognise and reward sustainable and regenerative design excellence in our
                  industry through media and awards.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">6</span>
                  <h3 className="text-[3.5rem] font-normal">Educate, Accelerate</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Build and foster intra- and cross-discipline knowledge networks to share tools,
                  resources and best practice to accelerate progress in our industry.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">7</span>
                  <h3 className="text-[3.5rem] font-normal">Design for Justice</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Create with and for the people who are disproportionately affected both by climate
                  change and by the transition to a lower-carbon world.
                </p>
              </div>
              <div className="bg-white text-black border-b border-l border-r border-black">
                <div className="flex items-baseline px-4 border-b border-black">
                  <span className="text-[3.5rem] font-normal border-r border-black pr-4 mr-4">8</span>
                  <h3 className="text-[3.5rem] font-normal">Amplify Voices for Change</h3>
                </div>
                <p className="text-[1.125rem] font-normal px-4 py-2">
                  Enable systemic change by working alongside policymakers, campaigners, ecologists,
                  scientists, activists and others to strengthen local and national movements for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ActsOfEmergency;