import { Link, useParams } from 'react-router-dom';
import latest2 from '../../assets/images/latest2.webp';
import image1 from '../../assets/images/image5.webp';
import image2 from '../../assets/images/image6.webp';
import image3 from '../../assets/images/image7.webp';
import image4 from '../../assets/images/image8.webp';

const DetailPage2 = () => {
  const { id } = useParams();

  const section = {
    id: 2,
    category: 'Events',
    chapter: 'D! UK',
    image: latest2,
    alt: 'Eco-Friendly Packaging Workshop',
    date: '24.04.2025, 03 PM:30',
    title: 'SD4P Collective: How can Service Design drive meaningful sustainability impact',
    description: 'Recap: SD4P Collective working session – 28th March 2025'
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
          {/* Alt Text as Title */}
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

          {/* Image */}
          <div>
            <img
              src={section.image}
              alt={section.alt}
              className="w-full lg:w-2/3 h-full object-cover"
            />
          </div>

          {/* Original Description */}
          <p className="text-[1rem] lg:text-[3.5rem] text-heading leading-tight">
            {section.description}
          </p>

          {/* In Short Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            In Short
          </h2>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>The Service Designer for the Planet Collective (SD4P Collective) is an initiative facilitated by Design Declares.</li>
            <li>The SD4P held its first in-person session on 28 March 2025 at Imperial College London, gathering 30+ professionals and students.</li>
            <li>We ran breakout groups to develop briefs around:</li>
            <ul className="list-disc list-inside ml-4">
              <li>Service Design-specific educational material/training</li>
              <li>Service Design-specific green skill assessment</li>
              <li>Approaches to measure services sustainability impact</li>
            </ul>
            <li>We also reflected on how we run and organise ourselves as a collective, balancing learning and hands-on participation.</li>
            <li>The event was low-waste by design.</li>
            <li>Next SD4P meet-up: online Friday 2nd May 2025, 3pm BST.</li>
          </ul>

          {/* First Image */}
          <div>
            <img
              src={image1}
              alt="SD4P Collective session"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">SD4P Collective session at Imperial College London</p>
          </div>

          {/* Main Content Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Service Designers for The Planet Collective
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Last month marked a significant milestone for the Service Designers for The Planet Collective (in short the ‘SD4P Collective’): our first in-person session! Held at Imperial College London, this third gathering brought together over 30 participants—students, professionals, thinkers, and doers—united by a common belief: design has a role to play in shaping a more sustainable, just, and regenerative future. 🌍
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The SD4P Collective is a group of like-minded service designers from the Design Declares community, building a community of practice to advance knowledge, design for life, and create real impact. We launched last October 2024, and the collective includes 70 people to date! At our core: action, experimentation, learning, collaborating, respect and inclusion.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The session was very hands-on and focused on ideas the collective had prioritised in previous sessions:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>✨ Creating educational materials for Service Design, User Research, and Strategic Design</li>
            <li>✨ Mapping ‘green’ skills and identifying gaps</li>
            <li>✨ Equipping designers with better measurement tools</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            It began with a wide-angle lens. Ned Gartside took us through the broader ecosystem – mapping ongoing initiatives across public and private design sectors, business, digital sustainability. This was not just about identifying gaps, but about locating where our collective energy can bring the most value. We asked:
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            Where does SD4P sit in this landscape? What can we offer that doesn’t yet exist—or needs strengthening?
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image2}
              alt="Ned Gartside presenting"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Ned Gartside presenting the broader ecosystem</p>
          </div>

          {/* Breakout Groups Section */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            From there, we moved to action. Splitting into three groups, we unpacked early-stage ideas, evolving them into tangible briefs. With such big groups, we used a ‘liberating structure’ approach to ensure all team members could voice their opinion. Walking through a project canvas brief, the groups uncovered current challenges and needs, ideated on possible ways the ideas could manifest, and discussed who should be involved, both human and non-human stakeholders.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Group 1: Educational Materials
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In group 1, facilitated by Sruti Gidugu: On creating educational materials, there was a bigger question of defining ‘design’ and ‘service design’ and based on the context of where members work: how to empower designers to spread the message of sustainability – as pioneers in their work environment, ultimately driving value, to their immediate sphere of influence, and beyond.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Group 2: Greener Skills Assessment
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In group 2, guided by Eve McCann: Focused on ‘greener skills’ assessment, we discussed how to assess our own green skills – from a knowledge, skills, experience, culture, sustainability areas, etc. standpoint. And how to identify the key gaps that would inform the training material of group 1.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Group 3: Measuring Sustainability Impact
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In group 3, supported by Sandrine Herbert-Razafinjato: Focused on ways to measure what we make, the group discussed how to “make the invisible visible”, so to embed sustainability into design decisions – looking beyond a product/service, across the entire lifecycle and supply chain (and with the key question of how to set the ‘right’ parameters?). Interestingly the conversation drifted beyond the ‘designer circle’ and a key idea emerged to bring onboard environmental measurement specialists (not just use self-serve tools or canvases) to support the design work; and to look at Nature as a key stakeholder on the decision making.
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image3}
              alt="Breakout groups in action"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Breakout groups in action during the SD4P session</p>
          </div>

          {/* Reflection and Next Steps */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Reflecting as a Collective
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As the afternoon unfolded, the conversation shifted inwards. We reflected on what it means to be a collective – how we want to organise ourselves, how we share work, get to know each other, and maintain momentum whilst being realistic of everyone’s diverging goals and level of dedication. We discussed how we might cater for 2 types of crowd, maybe 2 streams: the ‘learning-consuming members’ who want to be kept in the loop and have access to what is produced (can be self-served, remote); and the ‘outcome-oriented members’ who actively want to be involved (hands-on, have time/energy to help, want to contribute, maybe more in-person). There is definitely a will to be experimental and empirical: to name, test, learn and iterate as-we-go. And an appetite to hold meetings in nature and a Supper Club 😜.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            And then, like any productive workshop, we took it to the pub, where we extended the conversations, sparked new connections, came up with more ideas, and it reminded us that creating change is as much about relationships as it is about ideas.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We left feeling energised – not just by the work, the conversations, but by each other.
          </p>

          {/* Low-Waste Design Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            A Low-Waste Event by Design
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Last but not least, the workshop was designed with care: minimising waste wherever we could. Walking the talk, and embodying the change we want to see becoming the norm. That is: We limited the use of stickies by using whiteboard sheets for brainstorming and ideation (not easy but we're learning! and kudos to the group who DIDN'T use any post-it at all!); The final synthesised boards were captured directly onto Miro. To that extent, we also limited the digital assets to a mere 7 slides on Miro! Imperial Business Design Studio made sure all coffee/teas/water were served in crockery; and they gifted a Chilly's reusable water bottle to all participants. And finally, we used seedpaper for participants badges, so they can go home and rewild their local area by planting them afterwards 🌸 🙏 🫶
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image4}
              alt="Low-waste workshop materials"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Low-waste workshop materials in use</p>
          </div>

          {/* Next Steps and Closing */}
          <div className="mb-8">
            <p className="text-[1rem] text-subtext leading-relaxed">
              The SD4P Collective is just getting started, and it’s promising! We are looking forward to keeping the conversation going.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              The next meet-up will be online on Friday 2nd May 2025 at 3pm UK. To join, please DM Ned.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Thank you to Imperial College Business Design Studio for supporting this initiative.
            </p>
          </div>

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

export default DetailPage2;