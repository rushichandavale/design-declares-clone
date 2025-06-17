import { Link, useParams } from 'react-router-dom';
import latest8 from '../../assets/images/latest8.webp';
import image30 from '../../assets/images/image30.webp';
import image31 from '../../assets/images/image31.webp';
import image32 from '../../assets/images/image32.webp';
import image33 from '../../assets/images/image33.webp';

const DetailPage8 = () => {
  const { id } = useParams();

  const section = {
    id: 8,
    category: 'Case Study',
    chapter: 'D! UK',
    image: latest8,
    alt: 'Climate Action Design Awards',
    date: '06.03.2024, 09 am:30',
    title: 'Creative Climate Investigations: The Book',
    description: 'A showcase of 8 projects exploring greenwashing, air quality, environmental effects on wellbeing, plastic, the ecological impacts of data harvesting, trees, global dimming, and green spaces, collected together for the first time in a thoughtfully designed limited-edition book.'
  };

  return (
    <div className="bg-black text-heading min-h-screen">
      {/* Logo at Top Left */}
      <div className="top-4 left-4 z-30 p-4">
        <Link
          className="focus-ring group relative w-fit transition-colors inline-block"
          to="/"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 44 59"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 pl-0.5 sm:pl-1"
            role="img"
            aria-label="Design Declares!"
          >
            <path d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"></path>
            <path d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"></path>
          </svg>
        </Link>
      </div>

      {/* Main Content */}
      <div className="py-8 lg:py-16 px-6 sm:px-8 lg:pl-60 border-b border-black flex justify-start">
        <div className="w-full sm:w-3/5 flex flex-col gap-8">
          {/* Title */}
          <h1 className="text-[1.5rem] lg:text-[2rem] font-normal text-heading">
            {section.title}
          </h1>

          {/* Tags (Category and Chapter) and Date */}
          <div className="flex items-center space-x-2">
            {[section.category, section.chapter].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-[.75rem] font-semibold bg-gray-800/80 text-subtext rounded-full"
              >
                {tag}
              </span>
            ))}
            {section.date && (
              <span className="text-[.75rem] font-semibold text-subtext">
                {section.date}
              </span>
            )}
          </div>

          {/* Main Image */}
          <div>
            <img
              src={section.image}
              alt={section.alt}
              className="w-full lg:w-2/3 h-full object-cover"
            />
          </div>

          {/* Original Description */}
          <p className="text-[1rem] lg:text-[1.5rem] text-heading leading-tight">
            {section.description}
          </p>

          {/* Introduction Section */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            The production of the book presented an opportunity for us to put our beliefs into action; from research into rice and starch-based binding glues, to digging into the supply chain of printing ink, our design process aimed to use the most sustainable printing methods possible, with a carbon footprint analysis shared after production. By making this knowledge open-source, we hope that it can act as a blueprint for others to build upon.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We printed our book with Folium Publishing in South Bermondsey (London).
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            A bit of background on Climate and Cities, and the Creative Climate Investigations project
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            START THE JOURNEY / REDEFINE ‘GOOD’
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Climate and Cities is an evolving collective of creative friends that formed in 2019 to explore the impact of climate change within the urban environment.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We use design and research to find practical implementations of creative strategies to address the climate crisis, and by doing so, pave a future-proof tomorrow. We continue to develop, improve, and iterate our methods to create new narratives, worlds, and environments.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Creative Climate Investigations kicked off in January 2020 and concluded in October 2022.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image30}
              alt="Creative Climate Investigations project"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Creative Climate Investigations project timeline</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Defining sustainability
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            EDUCATE, ACCELERATE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            To design this book, it was important for us to approach the making as an investigation into sustainable printing practices.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We looked at two frameworks when doing so: the ‘carbon approach’ (looking at measuring carbon impact and removing fossil fuel from the process) and circular economy. You will find below the results of both.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            The carbon approach
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            MEASURE WHAT WE MAKE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Carbon emissions are behind most of global warming, mainly resulting from burning hydrocarbons (i.e., petrol and gas). Measuring the carbon impact of making the books allowed us to understand the most significant emissions and helped us strategise where to prioritise action. As the latest IPCC report called for broad reductions of using fossil fuel throughout every sector, we questioned where it is in the materiality of making a book and how to remove it.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Measuring carbon
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            Please remember these numbers are estimates and should not be seen as exact numbers. The numbers reflect the cradle-to-gate numbers; they do not include shipping and disposal.
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image31}
              alt="Carbon footprint analysis"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Carbon footprint analysis of the book production</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            The total footprint of making all the books is an estimated 100 kgCO2e. This is roughly two return train tickets from London to Glasgow. Out of the 100 kg CO2e, 56% is due to material use, 15% to freight, 21% to travel, and 7% to energy.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We successfully reduced travel by ensuring all commutes made by the team happened on public transport. We reduced freight by printing exclusively with <a href="https://www.folium.site/" className="text-primary hover:underline">Folium</a> and avoiding spreading out printing processes. We reduced materials impact by using only recycled papers sourced from a London-based supplier and using risograph inks for two-thirds of the book.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            It should be noted that carbon measurement still needs to be more precise, and we had to overlook some aspects of making, such as the fabric for screenprint, squeegee, and screenprinting inks.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We used a combination of the UK government’s BEIS 2022 conversion factors, 2030calculator and scientific papers for the conversion factors.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Fossil fuel and materials
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            When researching our material composition, we realised how deep our reliance on fossil fuels goes. Paper uses bleaching processes that rely on crude oil by-products. PVA glue for the spine is also a by-product of crude oil. Same for digital inks and threads. We reduced our reliance by moving small things around, although it felt almost impossible to print a book without the help of fossil fuels. This is now an area of interest to us that might turn into something bigger - if you’re interested too, get in touch!
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image32}
              alt="Fossil fuel usage in book production"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Examining fossil fuel usage in book production materials</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Circular economy and printing
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            REDEFINE ‘GOOD’
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            To align with the circular economy, we looked at Ellen MacArthur Foundation’s three principles: design out waste and pollution, circulate products and materials, and regenerate nature. Please see below the actions we took to align our book with the principles.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Design out waste and pollution
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The size of our book is a direct reflection of our desire to reduce waste. We looked at the printers available at Folium and designed the book to use the most of the paper as possible, reducing waste during the manufacturing process. Most of the offcuts were rescued by turning them into pads (see <a href="https://payhip.com/b/l82jH" className="text-primary hover:underline">here</a>).
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Regarding pollution, removing digital inks to the maximum was an important step. We looked at using risograph inks, that is, vegetable inks rather than liquid plastics, for two-thirds of the book.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Circular products and materials
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            This principle looks at making objects made to last and, to some extent, cared for. We looked especially at this principle when deciding how many books to print. We decided to only print 100 books as we also have a digital PDF that we hope avoided over-production.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Another decision arising from this principle is our desire to have nylon thread for the binding. Nylon is a by-product of crude oil, and as our carbon approach wanted to remove this we had to weigh in different options. Using cotton thread does not age as well as nylon (hint: cotton biodegrades a lot faster than plastic). So to ensure our book would last, we did use a small amount of it. Note: we did not buy any new threads! Folium had salvaged some thread, and this is what we have used.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Regenerate nature
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Books, by nature, rely mostly on paper, a by-product of trees. Trees capture carbon when growing and are key to a low-carbon future. Therefore, avoiding new papers was important to us. We selected our papers from recycled sources from Paperback, a company in South London.
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image33}
              alt="Recycled paper usage"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Using recycled paper to regenerate nature</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Reflections
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            REDEFINE ‘GOOD’
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Through this project, we have learned about sustainable printing practices and what this meant for us, and our work. We hope to have provided you with a good example of how to reduce carbon footprint by measuring in order to strategically reduce, alongside how applying circular economy methods might be realised (i.e., the offset pads).
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            If we were to do things differently, we would probably be more mindful of the size of production vs type of printing, and rethink the cover. Feel free to come and pick our brains about it, if you feel like it!
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For future iterations, we will further investigate how to find the sweet spot where these two approaches align. Balancing global warming and biodiversity loss is crucial for sustainability and design in the future. Therefore, it is essential to continue exploring the possibilities of balancing carbon with circular economy principles to achieve sustainable design practices.
          </p>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Buy the book!</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Read about the book</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Climate + Cities Website</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Design Declares Case Studies tell stories of projects that are striving to address the climate crisis through the lens of the 8 Acts of Emergency, designed by the Design Declares community.
          </p>

          {/* Share Article Button */}
          <div className="mt-8">
            <button className="bg-heading text-black px-6 py-3 text-[1rem] font-semibold rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Share Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage8;