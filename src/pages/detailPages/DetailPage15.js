import { Link, useParams } from 'react-router-dom';
import latest15 from '../../assets/images/latest15.webp';
import image49 from '../../assets/images/image49.webp';
import image50 from '../../assets/images/image50.webp';
import image51 from '../../assets/images/image51.webp';

const DetailPage15 = () => {
  const { id } = useParams();

  const section = {
    id: 15,
    category: 'News',
    chapter: 'D! Australia',
    image: latest15,
    alt: 'Climate Action Design Awards',
    date: '07.02.2023, 09 am:30',
    title: 'Design Declares Australia Launch',
    description: 'The official launch of Design Declares Australia at the Greenhouse Climate Tech Hub marked a significant milestone in Australia\'s journey towards sustainable Design.'
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
            The venue, known for its commitment to climate innovation, perfectly complemented the principles of Design Declares Australia with its sustainable architecture and dedication to environmental consciousness.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The launch event featured an impressive lineup of speakers and panellists, each bringing unique insights to the table:
          </p>

          {/* First Image */}
          <div>
            <img
              src={image49}
              alt="Design Declares Australia launch speakers"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Speakers at the Design Declares Australia launch event</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            Kirby Clark, Cameron Tonkinwise, Jane Duru, Sasha Titchkosky
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li><strong>Ben Rennie:</strong> Chairperson of Design Declares Australia and founder of Reny®Studio, who set the tone with his powerful opening address.</li>
            <li><strong>Jane Duru:</strong> Representing R/GA, Jane offered valuable perspectives on designing for citizens rather than just consumers.</li>
            <li><strong>Sasha Titchkosky:</strong> From Koskela, Sasha shared strategies for effectively communicating the urgency of the climate crisis.</li>
            <li><strong>Kirby Clark:</strong> Kirby presented eye-opening statistics about the impact of design decisions on product sustainability.</li>
            <li><strong>Cameron Tonkinwise</strong> from the University of Technology Sydney gave a powerful talk on what Design can do.</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            These industry leaders were joined by other passionate designers, entrepreneurs, and thought leaders, creating a diverse and dynamic discussion panel.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Here are the key insights and takeaways from the launch:
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Ben Rennie's opening address set the tone for the evening. <span className="italic">"Design is about responsibility, making hard decisions on which side of history you want to design for"</span>, he declared. This statement resonated throughout the venue, encapsulating the core philosophy of Design Declares. It's a call to shift our perspective from creating for consumption to designing for a sustainable future.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Jane Duru from R/GA brought a fresh perspective to the discussion, emphasising the need to move beyond designing for consumers and instead focus on planning for citizens. This subtle but powerful shift in mindset encourages designers to consider their work's broader societal and environmental implications. Jane said, <span className="italic">"When we design for citizens, we're not just creating products or services; we're shaping communities and ecosystems."</span>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            One of the most pressing challenges discussed was effectively communicating the urgency of the climate crisis. Sasha Titchkosky from Koskela offered brilliant insights particularly relevant to the Australian context. <span className="italic">"Talking about a 1.5-degree temperature rise might seem abstract, but when we discuss rising sea levels—a tangible threat to our coastal cities—suddenly, the issue becomes real for Australians."</span> Localising and concretising climate impacts could be vital to galvanising more comprehensive support for sustainable design practices.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Kirby Clark shared a startling statistic: <span className="italic">"80% of a product's carbon footprint is determined at the design stage."</span> This statistic highlights the immense responsibility and opportunity in designers' hands and underscores the importance of integrating sustainability considerations from the beginning of the design process.
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image50}
              alt="Ben Rennie and Kirby Clark at Design Declares Australia launch"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Ben Rennie and Kirby Clark speaking at the launch</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            Ben Rennie & Kirby Clark
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            A key theme that resonated throughout the event was the power of collaboration. The Design Declares movement is a testament to the strength of collective action, and this collaborative approach was seen as pivotal for driving systemic change within the industry.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The launch event also challenged traditional notions of design success. Speakers advocated measuring impact through sustainability metrics instead of focusing solely on aesthetics or commercial success. Success, in the Design Declares framework, means creating designs that contribute to ecological health and social well-being.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As the inaugural event of Design Declares Australia came to a close, there was a sense of urgency and hope in the air. With the last general election before the sands in the World Climate Clock run out is replaced by a commitment displayed by attendees as part of the Australian design community, we are ready to rise to the challenge and make a significant contribution to this declaring a climate crisis and implementing change across the industry.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The Design Declares conversations help shape the role of Design in society, creating not just for the present but also for the future, where every design decision becomes an opportunity to contribute to this vital mission.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Design Declares extends our heartfelt thanks to 4 Pines Brewing, Nepenthe Wines, The Catering Department, Koskela, Reny, and Vintage Australia, whose commitment to sustainable design and belief in our declaration made this event possible.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            A more detailed analysis of the discussion
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The traditional design philosophy has often prioritised the creation of consumables—products designed for short-term use and quick obsolescence. This approach generates vast amounts of waste and encourages an unsustainable cycle of continuous consumption. A paradigm shift toward planning for sustainable community and ecological well-being is urgently needed. This new philosophy should focus on longevity, reparability, and minimal environmental impact. Designers must consider the entire lifecycle of a product, from sourcing eco-friendly materials to thinking about the product's end-of-life, aiming to create items that contribute positively to communities and ecosystems. This shift requires embracing concepts like circular Design, which ensures that products are made to be made again, thus preserving natural resources and reducing waste.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            The Power of Effective Communication
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            It is crucial to communicate the urgency of the climate crisis and the role of sustainable design in mitigating its effects. Designers wield significant power in shaping narratives through visuals, products, and spaces that can make the abstract threats of climate change tangible and immediate. For instance, employing Design to illustrate the impact of rising sea levels can help bridge the gap between scientific data and public perception. Effective communication also involves storytelling that connects emotionally, emphasising that the climate crisis is not a distant threat but a current reality affecting our daily lives and future generations. Designers can motivate individuals and policymakers to act by transforming how the situation is perceived.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            The Importance of Collaboration Over Competition
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The challenges posed by the climate crisis are too vast and complex for any single entity to address alone. While competition can drive innovation, the urgency of our environmental situation demands collaboration. Designers, corporations, NGOs, governments, and communities must collaborate to share knowledge, resources, and technologies. Collaborative efforts can scale sustainable practices more effectively, creating standardised approaches that make it easier for the entire industry to adopt sustainable methods. Networks of collaboration can also advocate more powerfully for regulatory changes that support sustainable practices across sectors.
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image51}
              alt="Design Declares Australia collaboration"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Collaboration at the Design Declares Australia launch</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            Design Declares Australia
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

export default DetailPage15;