import { Link, useParams } from 'react-router-dom';
import latest1 from '../../assets/images/latest1.webp';
import image1 from '../../assets/images/image1.webp';
import image2 from '../../assets/images/image2.webp';
import image3 from '../../assets/images/image3.webp';
import image4 from '../../assets/images/image4.webp';

const DetailPage1 = () => {
  const { id } = useParams();

  const section = {
    id: 1,
    category: 'Case Studies',
    chapter: 'D! Ireland',
    image: latest1,
    alt: 'Embedding Sustainability in the Design Curriculum',
    date: '30.04.2025, 04:30 PM',
    title: 'Embedding Sustainability in the Design Curriculum',
    description: `Outlining the journey of how the Design Declares initiative was integrated into the National College of Art and Design’s curriculum for BA Graphic Design students.`
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
            {section.alt}
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

            {/* Spacer pushes button to the end */}
            <div className="flex-grow" />

            <button className="hidden md:block bg-heading text-black px-6 py-3 text-[1.25rem] font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Share Article
            </button>

          </div>


          {/* Image */}
          <div>
            <img
              src={section.image}
              alt={section.alt}
              className="w-full lg:w-2/3  h-full object-cover"
            />
          </div>

          {/* Original Description */}
          <p className="text-[1rem] lg:text-[3.5rem] text-heading leading-tight">
            {section.description}
          </p>

          {/* Additional Paragraphs */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            This case study explores the integration of the Design Declares Ireland initiative into the curriculum of the BA Graphic Design programme at the National College of Art and Design (NCAD), Dublin. It aims to prepare students not only to become competent designers but also to become ethically aware practitioners.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The Design Practices module is delivered annually to second-year Graphic Design students within the School of Design. The module introduces the historical, theoretical, cultural, and professional contexts of design practice and aims to enable students to apply creative methodologies for the documentation and presentation of work.
          </p>

          {/* Kicking off the Module Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Kicking off the module with Creative Activism
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            2. START THE JOURNEY / 6. EDUCATE, ACCELERATE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The module was launched with a two-day workshop, Sustainable Communications and Creative Activism, co-developed with Kathleen Moore, Lecturer and Sustainable Energy Communities Executive Sustainable Energy Authority of Ireland (SEAI). The pedagogical intention was to combine systems awareness with hands-on creative responses.
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Day One focused on building eco-literacy and understanding biases that hinder sustainable action.</li>
            <li>Day Two tasked students with identifying sustainability challenges and developing behavioural change strategies through communication design.</li>
          </ul>

          {/* First Image */}
          <div>
            <img
              src={image1}
              alt="Day 2 student challenge"
              className="w-full lg:w-2/3  h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Day 2 student challenge</p>
          </div>

          {/* 12-Week Period and Act 1 & 2 */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            Then over a 12-week period, students dedicated approximately two hours per week to engaging with weekly tasks drawn from the Design Declares toolkit. The module’s progression aimed to follow the eight Acts of Emergency framework, each week pairing theoretical grounding with applied design work. The aim was to educate students on the design industry while emphasising their role within it. Ethical considerations, especially around sustainability, were the main focus, encouraging students to embed these values across their design work.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Students were also tasked with identifying a studio or practitioner who had also signed up to the Design Declares Ireland initiative. In groups the students conducted an interview exploring the motivations and approaches of their chosen practitioner in relation to sustainable design. These interviews formed the narrative backbone of a final video project outcome.
          </p>
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Act 1 & 2: Sound the Alarm & Start the Journey
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            1. SOUND THE ALARM / 2. START THE JOURNEY
          </h3>
          <h4 className="text-[1.2rem] font-semibold text-heading">
            Starting the journey
          </h4>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Students were asked to watch the “Sound the Alarm” toolkit videos and translate a key insight into the medium of an A3, single-colour Riso poster. Additionally, they were tasked with compiling a Spotify playlist that reflected their understanding of the sustainability themes discussed. The classes were collaborative, utilising Miro boards to encourage students to reflect and share their insights.
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image2}
              alt="Riso posters by students"
              className="w-full lg:w-2/3  h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">
              Some of the Riso posters made by the students. From left: Katie McCorley, Erne Rodgers, Nadia Scott, Mollie Murphy, Kristine Lauron.
            </p>
          </div>

          {/* Act 3 */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Act 3: Bringing clients with us
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            3. BRING CLIENTS WITH US
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In week 3, students worked together in the studio to explore what values-led design really means in practice. They were encouraged to think about the principles they personally want to stand by in their future careers, and to consider how those values could shape environmentally responsible design, not just when a client asks for it, but as a standard approach. Through guided discussions, each student came up with their own checklist of what a project should include to align with their personal values. They then teamed up to create group manifestos that captured their shared ethical stance.
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image3}
              alt="Manifesto by students"
              className="w-full lg:w-2/3  h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">
              Manifesto, created by Julieta Rodriguez Morales, Faye Murray, and Ella McDonell
            </p>
          </div>

          {/* Act 4 */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Act 4: Measuring what we Make
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            4. MEASURE WHAT WE MAKE
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In this session, students were introduced to the idea of environmental impact through the lens of the fourth Act of Emergency. Rather than focusing on a new design outcome, the session invited students to carry out a Life Cycle Assessment (LCA) of the module so far. This meant taking a step back to consider the cumulative impact of their work to date—the materials they’d used, the activities they’d taken part in, and their overall studio habits. The aim was to encourage reflection on how design education itself carries an environmental footprint.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Students then translated their findings into an infographic, helping to make the data and insights more accessible and visually engaging. While the task was complex, it offered a valuable opportunity to think more critically about design accountability and the environmental systems we’re all part of.
          </p>

          {/* Getting Exposure Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Getting exposure to the design industry
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            5. REDEFINE 'GOOD'
          </h3>
          <h4 className="text-[1.2rem] font-semibold text-heading">
            Guest Engagement and Industry Insight
          </h4>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In Week 5, Design Declares Ireland had the opportunity to witness the module in action when steering committee members Stephen Ledwidge and Róisín Jordan delivered a guest lecture.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The session was both inspirational and pragmatic, Stephen and Róisín sparked lively conversation among students, illustrating how small, considered decisions in design can lead to meaningful positive change. Their contributions not only informed students of best practice but also encouraged them to reflect on their own responsibilities as future designers. The conversation spoke directly to several core aims of the Graphic Design programme: fostering collaboration, encouraging critical engagement with cultural and social discourse, and positioning design not merely as a commercial tool, but as a catalyst for change. It reinforced our ambition to nurture a design culture that embraces experimentation, dialogue, and risk-taking as integral to addressing contemporary challenges.
          </p>
          <h4 className="text-[1.2rem] font-semibold text-heading">
            Outcomes
          </h4>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The module culminated in a showreel of student videos that celebrated their insights into sustainability and design practices. This showreel provided students with a platform to showcase their work to industry professionals and peers, and provided them with direct exposure to the Irish design industry.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Moreover, this initiative not only underscored the importance of sustainability in design, but also serves as an important educational opportunity for students to discover the intricacies of the design industry. It also celebrated their work and highlighted the integration of sustainability into design education, preparing our students to contribute meaningfully to a more conscientious and sustainable design industry.
          </p>
          <h4 className="text-[1.2rem] font-semibold text-heading">
            Next Steps
          </h4>
          <p className="text-[1rem] text-subtext leading-relaxed">
            When we spoke with the module lecturer, Aoife McInerney, about how she was leveraging the Design Declares toolkit to teach her students about sustainable design, we were excited to see it being used in such an actionable and tangible way.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Following the pilot, module lecturer Aoife McInerney collaborated with Design Declares Ireland to convert her module into an open-source Educators’ Toolkit. This resource makes the module framework accessible to educators across disciplines.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Available on Miro as a template for anyone to use, the D! Ireland x NCAD Educators Toolkit can be accessed <a href="#" className="text-primary hover:underline">here</a>.
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image4}
              alt="Module showcase"
              className="w-full lg:w-2/3  h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">
              The module will be delivered again in the upcoming academic year, this time with refinements based on the insights from its pilot iteration. Notably, the number of design outcomes will be reduced to allow more time for deeper exploration of key themes, including ethical frameworks, systems thinking, and climate literacy.
            </p>
          </div>

          {/* Final Section */}
          <div className="mb-8">
            <p className="text-[1rem] text-subtext leading-relaxed">
              Another priority will be to further develop our strategy of reframing the Acts of Emergency as open provocations rather than a linear checklist, enabling students to engage more autonomously with the themes that resonate most with their own interests and emerging practices. These changes align with our broader commitment to future-proofing design education, ensuring that teaching and learning remain adaptive, responsive, and fit for purpose in a rapidly changing world.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Further steps under consideration include:
            </p>
            <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
              <li>Introducing cross-disciplinary projects.</li>
              <li>Creating opportunities for partnerships with external organisations or communities for real-world sustainability briefs.</li>
              <li>Building stronger formative support for complex topics like life-cycle thinking and environmental metrics.</li>
              <li>Collect feedback, reflect and adapt iterations of the Educators Toolkit.</li>
            </ul>
            <p className="text-[1rem] text-subtext leading-relaxed">
              The integration of Design Declares Eight Acts of Emergency framework into NCAD’s Design Practices module marks an ambitious, exploratory first step toward a more sustainable and responsive design curriculum. As we continue to iterate and develop the module, our focus remains on equipping students with the tools, values, and frameworks necessary to navigate and shape a complex, interdependent world.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              By embedding sustainability not as a siloed topic but as a foundational mindset, we hope our evolving model offers a useful case study for others seeking to integrate sustainability meaningfully within creative education; flexible, reflective, and open to ongoing transformation.
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

export default DetailPage1;