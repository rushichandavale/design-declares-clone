import { Element } from 'react-scroll';
import steering1 from '../../assets/images/abb.webp';
import steering2 from '../../assets/images/alexie.webp';
import steering3 from '../../assets/images/aurelie.webp';
import steering4 from '../../assets/images/jo.webp';

const SteeringGroup = () => {
  return (
    <Element name="steering-group" className="bg-black text-white py-8 lg:py-16">
      <div className="relative min-h-screen">
        {/* Left: Title */}
        <div
          className="w-full lg:w-[40%] px-4 md:px-8 lg:px-16 pt-8 sticky top-0 z-20 bg-black transition-all duration-200 will-change-[position,top]"
        >
          <h2 className="text-[1.5rem] font-semibold">Steering Group</h2>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:pl-[40%] px-4 md:px-8 lg:px-16 pt-8">
          <div className="flex flex-col space-y-8">
            {/* Side-by-Side Images and Labels */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Person 1 */}
              <div className="flex flex-col">
                <img
                  src={steering1}
                  alt="Abb-d Taiyo"
                  className="w-full  object-cover grayscale"
                />
                <p className="text-[1.125rem] font-normal  mt-2">Abb-d Taiyo</p>
                <p className="text-[0.75rem] font-normal ">Driftime®</p>
              </div>
              {/* Person 2 */}
              <div className="flex flex-col">
                <img
                  src={steering2}
                  alt="Alexie Sommer"
                  className="w-full  object-cover grayscale "
                />
                <p className="text-[1.125rem] font-normal  mt-2">Alexie Sommer</p>
                <p className="text-[0.75rem] font-normal ">URGE Collective</p>
              </div>
              {/* Person 3 */}
              <div className="flex flex-col">
                <img
                  src={steering3}
                  alt="Aurelie Lionet"
                  className="w-full  object-cover grayscale "
                />
                <p className="text-[1.125rem] font-normal  mt-2">Aurelie Lionet</p>
                <p className="text-[0.75rem] font-normal ">Design for Life</p>
              </div>
              {/* Person 4 */}
              <div className="flex flex-col">
                <img
                  src={steering4}
                  alt="Jo Barnard"
                  className="w-full  object-cover grayscale "
                />
                <p className="text-[1.125rem] font-normal  mt-2">Jo Barnard</p>
                <p className="text-[0.75rem] font-normal ">Morrama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SteeringGroup;