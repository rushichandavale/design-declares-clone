import { Link, useParams } from 'react-router-dom';
import latest9 from '../../assets/images/latest9.webp';

const DetailPage9 = () => {
  const { id } = useParams();

  const section = {
    id: 9,
    category: 'News',
    chapter: 'D! UK',
    image: latest9,
    alt: 'Climate Action Design Awards',
    date: '01.03.2024, 09 am:30',
    title: 'Design Declares: Now a Community Interest Company!',
    description: 'Design Declares has become a certified CIC, a people-powered Community Interest Company with planet-led ambitions.'
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
            Becoming a Community Interest Company (CIC) is an exciting step in our Design Declares journey, a process of reshaping our operations into a structure designed to help empower social enterprises to operate with purpose, supported by a company framework that confirms our alignment of practice and community.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are, first and foremost, dedicated to the planet and the people who champion our message and mission – becoming a CIC will help us accelerate impact where it matters most, bringing the community together to action real, meaningful, and enduring change.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Read on to hear more about what becoming a CIC means for us and how it will further our future impact…
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            We’ve made a commitment to social, economic, and environmental betterment
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Motivated by the climate crisis and ecological emergency on our doorstep, Design Declares has always been committed to advocacy and action. Our <a href="https://designdeclares.com/" className="text-primary hover:underline">8 Acts of Emergency</a> are designed to be a guide to this process – from sounding the alarm and starting the journey, to measuring what we make and redefining “good”; we’re working as a community to design for a future of environmental equity and climate justice. By becoming a CIC, we are committing afresh to our declaration, and invite you, your colleagues and collaborators to do the same.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Good business means people and planet over profit
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For a CIC to be successful, it must support, build and benefit its community, shaped by a framework that places progress and impact over making more money for our own gain. We see our growing community of signatories as a vital part of the impact machine, contributing their insight, knowledge, and expertise by sharing thoughts in our open sessions, providing case studies for our toolkit, and collaborating on new ideas for a hopeful future. Being a CIC means championing our community, and working to optimise our output to support people and planet alike.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            It’s easier for people, organisations, and businesses to support our work
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            At present, each team member behind the D! scenes is working voluntarily to build us up, a sadly unsustainable and precarious structure for the longevity of the movement. Practically, becoming a CIC opens us up to receive grants and funding to help us push forward for the next phase of impact, making it easier for us to accept donations and offers of financial support from our allies in and beyond the industry.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            One simple way you could help us out…
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are now registered as a CIC recipient on 1% for the Planet, a global network making impact accessible to businesses by asking them to commit to donating at just 1% of annual sales to planet-focused organisations and climate-conscious businesses. If you’re a member or are interested in adding your name to the network, you can select us as one of your chosen organisations to donate to – every pound has an impact!
          </p>

          <p className="text-[1rem] text-subtext leading-relaxed">
            We wouldn’t be a CIC without our community of signatories and supporters. Thank you for being on this journey with us!
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Interested in learning more or supporting our work? Get in touch! <a href="mailto:hello@designdeclares.com" className="text-primary hover:underline">hello@designdeclares.com</a>
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

export default DetailPage9;