import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className="bg-primary text-black py-12 px-2 md:px-4 lg:px-10">
    <footer className="fixed bottom-0 left-0 w-full bg-primary text-black py-24 px-4 md:px-8 lg:px-16 z-0">
      {/* Three-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Part: Design Declares */}
        <div className="flex flex-col">
          <h2 className="text-[5rem] title-font leading-none font-bold tracking-tight">
            DESIGN
            <br />
            DECLARES
          </h2>
        </div>

        {/* Second Part: Links */}
        <div className="flex flex-col space-y-4">
          <Link
            to="#"
            className="text-[1.125rem] font-normal  hover:underline transition-colors"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="text-[1.125rem] font-normal  hover:underline transition-colors"
          >
            Instagram
          </Link>
          <Link
            to="#"
            className="text-[1.125rem] font-normal  hover:underline transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            to="#"
            className="text-[1.125rem] font-normal  hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Third Part: Newsletter */}
        <div className="flex flex-col space-y-4">
          <p className="text-[1.125rem] font-bold">Sign up to the D! Newsletter</p>
          {/* Input Field */}
          <div className="flex items-center border border-black">
            <label
              htmlFor="email"
              className="text-[1.125rem] font-normal px-6 py-3 w-40 shrink-0"
            >
              Email:*
            </label>
            <input
              type="email"
              id="email"
              className="text-[1.125rem] font-normal px-6 py-3 w-full bg-transparent text-heading border-none focus:ring-0 focus:outline-none"
              required
            />
          </div>
          {/* Checkbox and Subscribe Button */}
          <div className="flex items-center space-x-4">
            <label className="flex items-center flex-1">
              <input
                type="checkbox"
                id="newsletter-opt-in"
                className="appearance-none min-w-12 min-h-12 w-12 h-12 mr-4 border-2 border-black bg-transparent flex-shrink-0 checked:bg-transparent checked:border-black checked:after:content-['✓'] checked:after:text-black checked:after:text-2xl checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full"
              />
              <span className="text-[0.75rem] font-normal leading-tight">
                I would like to be added to the Design Declares! newsletter and receive further
                updates.
              </span>
            </label>
            <button
              className="bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors w-fit"
            >
              Subscribe
            </button>
          </div>
          {/* Privacy Policy Link */}
          <Link
            to="#"
            className="text-[0.75rem] font-normal underline hover:text-gray-200 transition-colors"
          >
            View our Privacy Policy
          </Link>
        </div>

        {/* Low-Carbon Paragraph and Driftime */}
        <div className="md:col-span-2 md:col-start-2 mt-8">
          <p className="text-[0.75rem] font-normal">
            This website has been built following low-carbon principles of web development and hosted
            using serverless computing, by only allocating energy when needed and on demand.{' '}
            <Link
              to="#"
              className="underline hover:text-gray-200 transition-colors"
            >
              Learn more about our carbon footprint.
            </Link>
          </p>
          <p className="text-[0.75rem] font-normal mt-4">Empowered by Driftime®</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;