import { Link, useParams } from 'react-router-dom';
import latest12 from '../../assets/images/latest12.webp';
import image43 from '../../assets/images/image43.webp';
import image44 from '../../assets/images/image44.webp';
import image45 from '../../assets/images/image45.webp';
import image46 from '../../assets/images/image46.webp';

const DetailPage12 = () => {
  const { id } = useParams();

  const section = {
    id: 12,
    category: 'Case Study',
    chapter: 'D! UK',
    image: latest12,
    alt: 'Climate Action Design Awards',
    date: '14.03.2023, 09 am:30',
    title: 'Only One: Digital Design for Ocean Impact',
    description: 'Only One invite people to make monthly donations to plant ocean trees and coral reefs, remove carbon and plastics from our seas, and track the results.'
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

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            3. BRING CLIENTS WITH US / 5. REDEFINE ‘GOOD’
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Spawned from a group of Nat Geo wildlife photographers, Only One was founded in 2020, an ambitious ocean startup with high hopes and no platform for action. Since then, Only One have achieved remarkable statistics and impact over the past two years, with digital design playing a huge role in empowering the Only One community to take action. Driftime and Only One have been collaborating for an ocean-focused 2 years now, establishing their partnership in 2020 with an initial scope of just 6 months. Now armed with an agile, low carbon website, a progressive web app, and over 20,000 people funding solutions, Only One are leading the way in positive climate impact, recently recognised as one of Fast Company’s most innovative not-for-profit organisations of 2022.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As a design practice, we have been gradually integrated into the Only One Product Team, with up to a steady 5 Drifteam members collaborating with an international Product Team of 7 (at time of writing). Our involvement has grown as our team has expanded, with work spanning product and project management, product design, strategy and user experience, contributing to impact communications on ocean education, and design systems. Our unique relationship has developed organically, with a regular review of practice, process, and progress to reflect on how to optimise impact and engagement through partnership and design.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “Most innovative not-for-profit organisations of 2022”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            – Fast Company
          </p>

          {/* First Image */}
          <div>
            <img
              src={image46}
              alt="Only One recognition by Fast Company"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Only One recognized as one of Fast Company’s most innovative not-for-profits of 2022</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Sharing stories and urgent campaigns from around the world with a wider audience
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            1. SOUND THE ALARM / 6. EDUCATE, ACCELERATE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            At source, the Only One platform has two flows: Act and Learn. We’ve shaped a digital space that gives members a meaningful choice, empowering users with knowledge, and giving them decision-making power over their donations. It feels important to design a platform that makes it simple for users to react and respond to urgent causes and campaigns without compromising on a sentiment of hope — our ambition is to uplift, educate, and advocate with meaning and impact.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Our partnership often works towards milestones in the climate calendar, with Giving Tuesday, an annual campaign that falls in November, bringing all of the Only One team to collaborate with the Driftime team. We work in sprints, blending Driftime processes and iterating our practice as we reach new milestones. To date, Only One members have increased four fold since launch, with a continually reducing rate of unsubscription (currently at 2.3%) in the last 6 months. By its very nature, the product is ongoing and changeable, with an emphasis on a need for adaptability and agility. Only One are adept at responding to our insights into sustainable and regenerative design, listening to our perspective and making changes where needed.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Impact
          </h2>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>
              Over 320,000 square kilometers of ocean protected in the Eastern Tropical Pacific –{' '}
              <a href="#" className="text-primary hover:underline">See campaign</a>
            </li>
            <li>
              California passes comprehensive bill to tackle plastic pollution –{' '}
              <a href="#" className="text-primary hover:underline">See campaign</a>
            </li>
          </ul>

          {/* Second Image */}
          <div>
            <img
              src={image43}
              alt="Only One impact on ocean protection"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Impact of Only One’s campaigns on ocean protection</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Expanding the transparency of the organisation with an About Us Hub and Impact Report
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            4. MEASURE WHAT WE MAKE / 2. START THE JOURNEY
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As a not-for-profit, transparency is essential to nurture trust with both members contributing funds, and the communities Only One are working with on location. Driftime collaborated with Only One to make impact reporting reachable to everyone who wants to learn more about internal processes and relationships, shaping an “About Us Hub” that centres transparency, campaigns, projects, and the team championing the ocean. Only One operates with a 100% model — every cent of funds donated go directly to solutions in the field, with progress and results documented in a regularly updated Impact Dashboard, and archived in a comprehensive annual Impact Report, 100% Model Audit, and Form 990. The Impact Report we’re creating for 2022 will be the first, an accessibly presented report of actions, impact and finances. Design will play a big part in increasing the transparency of Only One actions through this Impact Report, building on the “About Us Hub”, and wider impact communications within and beyond the organisation.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Only One tracks all its impact, with each action documented on member dashboards with open access information. Visually, members see their impact in their dashboard through the four core actions: ocean trees planted, corals planted, plastic removed, and carbon reduced. For every gram of carbon sequestered to every mangrove seedling planted, a unique ID is created, linking donations to the projects they are supporting. Having specific insight into the partners in action, access to photos on the site, and detailed reporting about the project provides an insider’s understanding of the connection between donation and deed.
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image44}
              alt="Only One member dashboard"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Only One member dashboard showcasing impact</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Global projects that benefit the communities most affected by climate change
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            7. DESIGN FOR JUSTICE / 8. AMPLIFY VOICES FOR CHANGE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Only One’s partner projects include mangrove restoration in Senegal, coral gardening in French Polynesia and cleaning up coastal plastic waste in India. They prioritise local livelihoods and ecosystems while moving the needle on global ocean and climate health through the UN Sustainable Development Goals. With members’ donations funding four core impact areas, Only One demonstrates the immense value of community-led campaigns and projects, with the most powerful solutions supporting Indigenous populations, and other under-represented and marginalised communities. In addition to adding voices to the petitions that put pressure on policy makers to make a change, planting ocean trees, nurturing coral reefs, removing plastic waste, and reducing carbon all contribute to a wave of impact that’s helping to turn the tide on the climate emergency.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Looking back to the early conversations between Driftime and Only One pre-launch, we saw an exciting opportunity for members to have easy access to a personal dashboard that illustrates the impact their funding has. Incorporating intuitive and interactive design has helped to guide members to take further action, with campaign news, educational resources, and active petitions being digitally accessible, clear, and engaging. Driftime and Only One have prioritised un-intrusive and considerate technological interaction, with specific attention to the use of notifications, language, and design systems. We believe in design that enables positive impact, empowering Only One members to make their own climate conscious decisions, both on and offline.
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Planting ocean trees</li>
            <li>Planting coral</li>
            <li>Removing plastics</li>
            <li>Reducing carbon</li>
          </ul>

          {/* Fourth Image */}
          <div>
            <img
              src={image45}
              alt="Only One core actions"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Visualizing Only One’s four core actions</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Room for improvement and plans for the future
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            With more than two fulfilling years behind us, our partnership has grown and developed in every capacity, but we still recognise the room for improvement. We want to continue to play our part in shaping a digital platform that empowers people to take action and learn about the ocean, designing features that empower change and impact and put users at ease. During our relationship we’ve collated an outstanding backlog of innovative ideas that haven’t yet had the time or resource to be actioned, we will continue to streamline workflow and facilitate efficient iterations alongside their team.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The collaboration between Only One and Driftime is ever-changing — we are consistently experimenting with processes, celebrating progress, and acknowledging where we need to do better. Our partnership with Only One answers to a number of positive and necessary acts, whilst working behind the scenes to bridge the gaps where we fall short.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We see the future of design not just to be informed by the planet, but to be led by it.
          </p>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn more about Only One</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn more about Driftime®</a>
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

export default DetailPage12;