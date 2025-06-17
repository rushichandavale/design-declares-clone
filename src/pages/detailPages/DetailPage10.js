import { Link, useParams } from 'react-router-dom';
import latest10 from '../../assets/images/latest10.webp';
import image34 from '../../assets/images/image34.webp';
import image35 from '../../assets/images/image35.webp';
import image36 from '../../assets/images/image36.webp';
import image37 from '../../assets/images/image37.webp';

const DetailPage10 = () => {
  const { id } = useParams();

  const section = {
    id: 10,
    category: 'Case Study',
    chapter: 'D! USA',
    image: latest10,
    alt: 'Climate Action Design Awards',
    date: '14.02.2024, 09 am:30',
    title: 'Climify Podcast: Season 2 Reflections',
    description: 'Climify podcast is to connect climate scientists and design educators together so that we can bring climate-related projects into our classrooms.'
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
            The discussions on this program are geared to help educators “climify their syllabi” to assign projects that not only teach design fundamentals but also can have a positive impact on our climate.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “If you're transforming something, then you are a climate designer because that is the work that we're in right now.”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Chandra Christmas Rouse (Season 2, Episode 5)
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Our Story
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            How it started
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Climify began during the peak of the pandemic in early 2021. Design educators Marc O’Brien and Eric Benson were both already teaching sustainability and climate action in their classrooms but wondered how to do it all better. They asked climate experts for advice. A so obvious a solution to their design problem, they wondered why it had not happened before in design education at a larger scale. A few Twitter conversations and Zoom meetings helped launch both Climate Designers and Climify later in 2021.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image34}
              alt="Climify page at Climatedesigners.org"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">The Climify page at Climatedesigners.org</p>
          </div>

          <h3 className="text-[1rem] font-semibold text-heading">
            Where it's at
          </h3>
          <h4 className="text-[1rem] font-semibold text-heading">
            2. START THE JOURNEY / 4. MEASURE WHAT WE MAKE / 6. EDUCATE, ACCELERATE
          </h4>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The 4 Acts of Emergency that Climify focuses on are consistent works in progress. We feel strongly that we have started the journey for many design educators and their students and accelerated their awareness of the climate crisis. At the end of each Climify episode, host Eric Benson asks every climate expert to create a project using their knowledge and skills for a design classroom. Measuring the success of these <a href="https://www.climatedesigners.org/edu/projects" className="text-primary hover:underline">projects</a> is based on other design educators trying them out with their college students. This Act of Emergency is the weakest of our impacts as not enough educators have tested the projects. As we have funding from a new sponsor, we hope to use some of that funding to further promote the show and the <a href="https://www.climatedesigners.org/edu/projects" className="text-primary hover:underline">design projects</a> from the climate experts.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “When you're talking about climate challenges and the climate crisis and solutions, you really have to highlight those bright spots that make people stoked.”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Carissa Cabrera (Season 2, Episode 14)
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image35}
              alt="Climify Podcast on Apple Podcasts"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">The Climify Podcast on Apple Podcasts</p>
          </div>

          {/* Third Image */}
          <div>
            <img
              src={image36}
              alt="Season 2 guests on Instagram Stories"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Two of season 2 guests on Instagram Stories</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “…1.5 is better than two degrees. Two degrees is better than 2.5 than three than four, right? My God, every fraction of a degree is worth fighting for.”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Dr. Jacquelyn Gill (Season 2, Episode 1)
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Onward
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Going forward into our third season of Climify, we will feature an all-female guest list – each is a climate leader focusing on one of the Drawdown Climate Solution Sectors. Every interview will inspire and provide practical steps we all can take in our lives and design classrooms to be mighty in the climate fight. We hope that this will increase another Act of Emergency: 8.AMPLIFY VOICES FOR CHANGE
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image37}
              alt="Climify - Onward!"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Climify - Onward!</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn more About Climify</a>
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

export default DetailPage10;