import { Link, useParams } from 'react-router-dom';
import latest11 from '../../assets/images/latest11.webp';
import image38 from '../../assets/images/image38.webp';
import image39 from '../../assets/images/image39.webp';
import image40 from '../../assets/images/image40.webp';
import image41 from '../../assets/images/image41.webp';
import image42 from '../../assets/images/image42.webp';

const DetailPage11 = () => {
  const { id } = useParams();

  const section = {
    id: 11,
    category: 'Case Study',
    chapter: 'D! UK',
    image: latest11,
    alt: 'Climate Action Design Awards',
    date: '24.05.2023, 03 pm:30',
    title: 'Revo: A Revolution in Sustainable Furniture Design',
    description: 'Making its global debut at Clerkenwell Design Week, Revo is a stunning new design by Pearson Lloyd, for Profim, combining circular thinking with playful design to create a lightweight and versatile workplace furniture system.'
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

          {/* First Image */}
          <div>
            <img
              src={image38}
              alt="Revo furniture"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Revo furniture at Clerkenwell Design Week</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            2. START THE JOURNEY / 5. REDEFINE ‘GOOD’
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Revo, for Profim has not only established a dynamic new design language for workplace seating, it has also taken a major step towards making the circular economy a viable reality in its sector. Recognising that the climate crisis urgently demands a radical rethinking of the way in which upholstered contract furniture is made, and keen to address the rapid global working culture, Profim asked Pearson Lloyd to develop a furniture family that responded to both. The result, Revo, is nothing short of a revolution.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Revo is a modular furniture collection that adapts to any interior space. Revo’s seats and screens are complemented by a range of tables of different sizes and heights, supporting a range of tasks, from focused individual work to formal meetings and brainstorming around the coffee table.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            This versatility is in tune with the increasingly differentiated nature of the work experience. The office is no longer split between desk and conference room, but has become a nuanced network of flexible spaces, each with distinct furniture needs – Revo is designed to bring a consistent design language to every space, whatever its function or size.
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image39}
              alt="Revo modular furniture"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Revo’s modular design adapting to various workplace settings</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Rethinking upholstered furniture on behalf of the planet
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            3. BRING CLIENTS WITH US / 4. MEASURE WHAT WE MAKE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In total, 74% of the materials used to make Revo are recyclable – compared to 5% in the equivalent wood structure. Considering that the expanded polypropylene used by Profim is already recycled (representing 90% of the total product volume) minimal new materials are created to build the collection. Upholstery is fixed onto the folded base using a tethered drawstring, which means no glue or staples are needed, further facilitating disassembly.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Minimising energy consumption at all stages of production – from manufacture to shipping – was a priority, so Pearson Lloyd and Profim have worked to ensure that all stages of the process are as energy and carbon-efficient as possible.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In total, Revo generates a carbon footprint of 176 kgCO2 in production and 9.5 kgCO2 in transportation – respectively, 6% and 40% less than conventional wood-based furniture construction.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Revo is manufactured at Profim’s home in Poland, using local supply chains; just three moulds are used to make all components in the collection; and the lightweight material significantly reduces the carbon cost of transporting the furniture.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Revo launches with two newly developed upholstery textiles. Cura, by Gabriel, is a high-performance two-colour fabric made from 98% post-consumer recycled polyester. The other option, Oceanic by Camera, is 100% recycled polyester, including 50% Seaqual Yarn, which is made from marine plastics salvaged and repurposed by the <a href="https://www.seaqual.org/" className="text-primary hover:underline">Seaqual Initiative</a>. Both fabrics give Revo the durability it needs to survive in high-traffic office environments, alongside an engaging residential aesthetic appropriate to the modern workplace.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Replacing the plywood base structure with REPP (recycled expanded polypropylene) maximises the potential reuse of the base materials. Plywood has no circularity. REPP, which is already in its second life, can be fully remoulded for a third, a fourth, ad infinitum."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Luke Pearson, Pearson Lloyd
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Impact
          </h2>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>70% more recyclable materials than a conventional wood-based structure</li>
            <li>40% less embodied carbon in transport due to the product's low weight</li>
            <li>95% more opportunity for full disassembly of materials</li>
            <li>37% less components than in a conventional wood-based structure</li>
          </ul>

          {/* Third Image */}
          <div>
            <img
              src={image40}
              alt="Revo sustainability impact"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Visualizing Revo’s sustainability impact</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "In Revo’s ease of reupholstering, we are looking ahead to a time when furniture is leased and not purchased, when the ability to refresh, refurbish and renew furniture will be increasingly important, especially in the contract market."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Tom Lloyd, Pearson Lloyd
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image41}
              alt="Revo reupholstering process"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Demonstrating Revo’s reupholstering process</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Sharing new ways of making furniture
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            1. SOUND THE ALARM / 6. EDUCATE, ACCELERATE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Recognising that the climate crisis urgently demands a radical rethinking of the way in which upholstered contract furniture is made, and keen to address the rapid global working culture, Pearson Lloyd advocate for circular design through exhibitions and further projects.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In September 2022 Pearson Lloyd curated an exhibition at London Design Festival (LDF) titled ‘Change Making', an exhibition responding to the shifting values and priorities that shape the landscape of design. Exploring the questions; what does it mean for an object to be ‘well made’ in a world where the values and stakeholders that define design are changing? How do we predict what those values might be in 25 years’ time? How do we best adapt to navigate the uncertainties ahead?
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Change Making offered visitors an opportunity to consider how the design landscape has changed over the last 25 years; asking them to think about how and what we’re designing now; and challenging them to imagine how things might change in future.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In 2020 Pearson Lloyd moved into their new studio space - Yorkton Workshops - in Hackney. The repurposed Victorian workshops were transformed into a modern, energy efficient creative space. The building’s constituent materials have been reused and recycled, including bricks, timbers and steel. This is not only a low-carbon approach that responds to modern-day material scarcity, it also ensures the building conserves its historic original features. This project was recently celebrated in the book The Sustainable City published by Hoxton Mini Press.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "As designers, finding quality through the act of making is a constant in our work. Today, the greatest shift in industrial design practice is being driven by an urgency to design outputs with both a significantly reduced and smarter use of carbon and those that deliver circularity. In the life of the studio, we have a duty to champion efficiency and durability – the core elements of circularity – as cornerstones of our design thinking.⁠"
          </p>

          {/* Fifth Image */}
          <div>
            <img
              src={image42}
              alt="Yorkton Workshops"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Pearson Lloyd’s Yorkton Workshops in Hackney</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Room for improvement and plans for the future
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            There are still challenges to overcome. The climate emergency, and increasing social inequality all present grave challenges to us all now and in the future. We believe that design and design thinking can make progress, and play an active role in our response to these challenges and in identifying opportunities to positively reshape the habits and rituals of our lives.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Pearson Lloyd are determined to inspire the next generation of industrial designers to explore circularity in their work. As part of Design for Planet festival 2022 from the UK Design Council, Tom Lloyd is speaking on the discussion panel: Exploring 'next practice' in Product Design. There are also plans in the pipeline to host regular events in their studio and gallery space Yorkton Workshops, inviting graduate designers to share their projects and cultivate a wider community around circular design.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "As members of Design Declares and participants of the Design Council’s Design for Planet festival, we aim to mobilise the UK’s design and business community to take necessary steps to address the climate crisis. Helping designers and businesses make their sustainability plans a reality, with free practical workshops and panel discussions."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Tom Lloyd
          </p>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn More About Revo Profim</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn More About Pearson Lloyd</a>
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

export default DetailPage11;