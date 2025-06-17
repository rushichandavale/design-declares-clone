import { Link, useParams } from 'react-router-dom';
import latest13 from '../../assets/images/latest13.webp';

const DetailPage13 = () => {
  const { id } = useParams();

  const section = {
    id: 13,
    category: 'News',
    chapter: 'D! UK',
    image: latest13,
    alt: 'Climate Action Design Awards',
    date: '01.03.2023, 09 am:30',
    title: 'Design Declares: Addressing the Critique and Looking Ahead',
    description: 'A few months ago, an article by Chris Hockell was published in Dezeen criticising Architects Declare for failing to live up to its ambitions.'
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
            We have a close relationship with AD and see the hard work that is going on behind the scenes; however the fact that this work is often happening 'behind the scenes' can make it feel to those on the outside that nothing is being done at all.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            So the team at Design Declares want to take this opportunity to reaffirm the objectives for the D! campaign and discuss our plans for this year.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In its initiation Design Declares was, and is intended as an awareness campaign. The team who came together to create the campaign and its framework: The <a href="https://designdeclares.com/" className="text-primary hover:underline">8 Acts and Toolkit</a>, are dedicated to encouraging communication, digital, industrial, and service designers to take action on the climate and ecological crisis by raising awareness and supporting education.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Putting together a campaign takes a lot of hard work. Hard work that was put in not for the money, as the campaign is self-funded, but for the drive to do something as a team that has a greater impact than any of us could achieve individually.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As a way to encourage impact and action in the design industry, we created the Toolkit (head to the website to get access); a crowdsourced collection of resources and design frameworks curated and linked to each of the 8 Acts. This has been regularly updated since launching in September 2022, and provides a one stop shop for information and resources on sustainable and regenerative design. The impact value of the Toolkit and how it is used is constantly evolving as the design industry changes, something we are navigating and working out with the community.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Alongside the Toolkit, the campaign aims to signpost to climate action events such as the Design Council’s Design For Planet festival, and share the great work already being done by designers to inspire others.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Thoughts from Cat Drew, Chief Design Officer at The Design Council
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “Making a public commitment is a critical first step to changing behaviour, but the hard part does come later. Design Declares is not only doing impressive work to raise awareness of the need to design for the climate emergency, but is also providing a set of resources to support designers from different practices to do so. The rest is over to the industry. We are supporting them by providing a platform for their work at our Design for Planet festival, but also showcasing amazing examples of designers and agencies who are designing to restore the planet, showing what is possible for others to emulate.”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Reading the critique of Architects Declare was frustrating. The majority of work done by Declare Movements is pro-bono, based on the voluntary effort of the key people involved. Getting sponsorship for campaigns such as this can be ambiguous and loaded, and applying for institutional funding is complicated and time demanding. However, without funding it is incredibly hard to maintain momentum when in parallel we have businesses to run, and employees to pay. This challenge is very real. We are always looking for people to get involved to ease the workload and support not just the campaign and community, but the wider picture of impact. To facilitate this further, we are developing content and additional value with the hope to financially sustain the campaign and enable it to continue.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are always open to philanthropic support and donations - so if you are reading this and believe more can be done, but you don’t necessarily have the time to personally do it - find out how you can support us <a href="#" className="text-primary hover:underline">here</a>.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            What is the goal of Design Declares?
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            To become a global movement of designers coming together to take meaningful action, guided by learning and collaboration, to accelerate long term solutions to the climate and ecological crisis. The key word is ‘together’, and so to ensure our vision is clear and the steps we are taking are transparent, we have co-created the Design Declares team Handbook. This guides the steering and operational team to work towards the same goals and is accessible to anyone wanting to know more or get involved <a href="#" className="text-primary hover:underline">here</a>.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Why do we see this as a critical opportunity for change?
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            There are still too many designers who, for reasons from lack of knowledge to lack of financial incentive, do not see planetary considerations as important to their practice.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Going from zero to one means going from nothing to something. This is the greatest leap possible. This is what we want to achieve with Design Declares; to see designers not just thinking about sustainability, but taking their first step in adapting their practice to be more considerate of the planet, and aligned with others in their field.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            How can we co-create meaningful impact?
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We can’t create meaningful change whilst we’re working in silos. By connecting D! signatories through monthly D! Sessions, we are getting to know the community that has rallied around our call to action, helping to facilitate a culture of sharing learnings, problems and ideas.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are enabling global partners to take on and grow the Design Declares community in their own country, with Ireland establishing their D! chapter as we speak and conversation happening with representatives from Ireland, Brazil, Japan, Switzerland and the USA.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are working on resources to be released later this year that will sit alongside the Toolkit, providing tailored insights, actions and case studies for each discipline.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are working with Awards bodies such as D&AD to provide guidance to judging panels on how to critique and award sustainable and regenerative design work.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            What does success look like for Design Declares?
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For those working on the inside, success can be very different from how it’s perceived externally. For us it means being a catalyst for genuine change. It may be as simple as 20 new design practices adopting the 8 Acts as a way of rethinking their projects and actively reducing their impact as a result, or inspiring a cohort of design graduates to enter the industry more inquisitive than ever about how their practice can have a positive impact on our planet.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We are under no pretence that we have the direct ability to change legislation or offer up a B Corp style points system for sustainable practice, although we are doing what we can to use our influence to support others who are working on both. What we do know is that the climate crisis cannot be solved by us all working independently, and so by bringing people together, we can do our part to accelerate change, and take steps in the right direction.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Inspiration and encouragement is well proven to be more effective and engaging than criticism. And so, we have a request; if you have a story to share about your steps, wins or challenges in factoring sustainability into your business or design practice please get in touch at <a href="mailto:hello@designdeclares.com" className="text-primary hover:underline">hello@designdeclares.com</a>.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Let’s write a positive narrative together.
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

export default DetailPage13;