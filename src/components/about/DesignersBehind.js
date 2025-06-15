import { Element } from 'react-scroll';
import designer1 from '../../assets/images/designLife.svg';
import designer2 from '../../assets/images/morrama.svg';
import designer3 from '../../assets/images/thomas.svg';
import designer4 from '../../assets/images/driftime.svg';
import designer5 from '../../assets/images/studiowood.svg';
import designer6 from '../../assets/images/urge.svg';

const DesignersBehind = () => {
  return (
    <Element name="designers-behind" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[30%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">The Designers Behind Design Declares UK</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            {/* Paragraph */}
            <p className="text-[1.125rem] font-normal">
              Inspired by the global emergency declaration movement demanding accountability and
              action across industries, Design Declares is the initiative of a multidisciplinary
              group of design professionals and agencies who all believe in the power of design to
              change things.
            </p>

            {/* Side-by-Side Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="flex flex-col space-y-24">
                <img
                  src={designer1}
                  alt="Designer 1"
                  className="w-44 object-contain"
                />
                <img
                  src={designer2}
                  alt="Designer 2"
                  className="w-44 object-contain"
                />
                <img
                  src={designer3}
                  alt="Designer 3"
                  className="w-44 object-contain"
                />
              </div>
              <div className="flex flex-col space-y-24">
                <img
                  src={designer4}
                  alt="Designer 4"
                  className="w-44 object-contain"
                />
                <img
                  src={designer5}
                  alt="Designer 5"
                  className="w-44 object-contain"
                />
                <img
                  src={designer6}
                  alt="Designer 6"
                  className="w-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DesignersBehind;