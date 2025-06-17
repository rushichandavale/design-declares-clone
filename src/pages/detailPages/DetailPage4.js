import { Link, useParams } from 'react-router-dom';
import latest4 from '../../assets/images/latest4.webp';
const DetailPage4 = () => {
  const { id } = useParams();

  const section = {
    id: 4,
    category: 'Perspective',
    chapter: 'D! Australia',
     image: latest4,
    date: '10.12.2024, 08 am:37',
    title: 'Andrew Simpson Interview',
    description: 'An Interview with Vert Design and Design Declares Australia CEO - Andrew Simpson'
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
    {/* Image */}
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

          {/* Main Content Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Designing for Action: Andrew Simpson on Bridging the Gap Between Belief and Change
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Andrew Simpson, CEO of Design Declares AU, founder of Vert Design, and advocate for sustainable practices, shares insights on why he signed Design Declares and how designers can drive meaningful change in the face of the climate crisis. For Andrew, the sustainability journey is about aspirations and action—no matter how incremental.
          </p>

          {/* Closing the Gap Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Closing the Gap: Turning Awareness into Action
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Andrew recalls the moment he and his team at Vert Design decided to join the Design Declares movement.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "We realised that we weren't taking enough action to address the climate crisis," he says. "There was a gap between belief and action."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            This realisation sparked a commitment to move beyond growing anxieties over climate change and focus on collective action. Andrew explains that signing the Design Declares declaration was a way to acknowledge their responsibility and take the first steps toward systemic change.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            A simple yet powerful value guides Vert Design: "Sustainability is an aspiration, not a destination." Andrew acknowledges the complexity of sustainability and sees it as an ever-evolving journey.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "We commit to learning, progressing, and improving continuously," he says. "It's dynamic, not static."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Andrew notes that one of the most prominent barriers designers face is the fear of perceived hypocrisy.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Designers often think, 'If I can't do everything, I'll do nothing.' We want to change that mindset. It's about doing what you can and joining a collective effort to amplify impact."
          </p>

          {/* Grassroots Beginning Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            A Grassroots Beginning: Adaptive Reuse in Design
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For more than twenty years, Vert Design has focused on the adaptive reuse of waste products, creating markets for viable recycling systems and reducing energy intensity in the products they design.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Our work has always aimed to affect positive supply chains," Andrew shares. "But in this critical decade of climate change, we've realised incremental change is no longer enough. We need to ramp it up."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The studio has achieved significant milestones, but Andrew acknowledges that sustainable change requires greater urgency and scale.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "It's not just about grassroots efforts anymore," he emphasises. "It's about being intensive and meaningful to avoid climate catastrophe."
          </p>

          {/* Challenges Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Challenges in Sustainability: Balancing Change with Risk
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Integrating sustainability into business practices is rarely straightforward. Andrew highlights a significant challenge: the interconnectedness of systems.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Sustainability always means change, and change introduces risk," he explains. "Often, clients find this risk unacceptable or difficult to manage."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For instance, while the adaptive reuse of waste materials is beneficial, it can also be energy-intensive in the early stages, leading to secondary waste and inefficiencies.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As designers, Vert Design faces limitations in controlling supply chains and scaling sustainable methods.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "We don't exist in isolation," Andrew says. "Change takes time, and efficiencies improve over time. The key is persistence and a willingness to adapt."
          </p>

          {/* Measuring Impact Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Measuring Impact: From Life Cycle Analyses to Climate Audits
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For Vert Design, measuring impact is integral to their sustainability efforts.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "We frame sustainability through Life Cycle Analyses, assessing energy intensity, waste, recyclability, and product longevity," Andrew explains. "We also conduct climate audits to evaluate behaviours and outputs."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Andrew sees these tools as opportunities to manifest the world they want to live in.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Designers have a big responsibility to create meaningful alternatives that change societal behaviour and drive sustainable outcomes."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The studio also works closely with clients to nudge them toward better practices.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Briefs often involve single-use materials or e-waste," Andrew shares. "We aim to move clients into more sustainable positions, bringing them on the journey with us."
          </p>

          {/* Advice Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Advice for Designers: Take the First Step
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Andrew's message to the design community is clear: just start.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Sometimes signing a declaration feels like tokenism, but it's often the beginning of real action," he says. "All industries need to be part of this global movement, taking incremental steps to drive collective impact."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            He emphasises the importance of building a community of practice to support positive change.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "The design industry cannot operate in silos. We need collaboration, encouragement, and shared accountability to achieve meaningful progress."
          </p>

          {/* Closing Section */}
          <div className="mb-8">
            <p className="text-[1rem] text-subtext leading-relaxed">
              D! Andrew Simpson Interview read on for his insights:
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              1. What inspired you or your organisation to sign Design Declares, and how does it align with your core values or your business's mission?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              We were inspired to sign up to D! when we realised that personally, we’re not taking enough action to address the climate crisis. We understood and believed there was a problem, yet there was a gap between belief and action.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Today we are experiencing the effects of climate change, and with growing anxiety, we could wallow in it or take the necessary action. Signing with Design Declares is the beginning of acknowledging that everyone needs to do their part.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              A value that we often discuss in house is that “sustainability is an aspiration, not a destination”. We acknowledge its complexity and commit to learning, progressing and improving continuously. Its pursuit is dynamic and evolving.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Something we notice is that designers can be concerned with hypocrisy, and because they can’t do everything, they do nothing out of fear of not being accountable for the perceived things they’re lacking. Our involvement with D! Is to change this, and take the necessary collective action as a community.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              2. Can you share a key milestone or initiative in your or your organisation’s sustainability journey so far? What impact has it made? How far are you on your sustainability journey?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Our main sustainable practice has been in affecting positive supply chains for products. Most of our work within twenty years of operation has been with the adaptive reuse of waste products–directly looking to affect the energy intensity of the products in which people consume, and creating meaningful markets for viable recycling systems. We've got to the point of saying, we need to ramp it up, it's too little too late.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Our journey so far has been to make an impact through grassroots, incremental change. Now, in the critical decade of climate change, we need to be much more intensive and meaningful if we're going to get sustainable change and avoid climate catastrophe.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              3. What are the biggest challenges you or your organisation has faced when integrating sustainability into your business practices, and how have you addressed them?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              It's the interconnectedness of systems and the fact that we don't exist in isolation–that often we’re not direct drivers of change and we have to introduce a lot of change. Sustainability always means change, and change introduces risk, and often the risk is unacceptable to clients or becomes a problematic thing to manage.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              If we were looking at adaptive reuse of a waste product, being a new thing it might be inefficient and highly energy intensive in doing so. On paper it's better but when you look deeply into it there could be higher energy usage or a secondary waste that's created. For example, the collection of plastic, shredding, shipping and manufacturing in a low scale scenario leads to the inefficient running of machines, secondary waste, and high energy consumption, resulting in a huge amount of carbon dioxide. The efficiencies of products, especially new ones, come over time. Change can result in inefficiency.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              As designers, we don't have full control of the supply chains that we need to produce products and new ventures often don't have the scale to maintain the new sustainable production methods and materials that we introduce to existing supply chains.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              4. How do you measure or plan to measure the impact of your sustainability efforts, and what metrics or outcomes matter most to you?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              For most projects, we frame sustainability by doing a Life Cycle Analysis to assess the energy intensity vs waste, recyclability, and product longevity. We also conduct climate audits to measure behaviours and outputs.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              As designers, we have a big opportunity and responsibility to design and manifest the world we want to live in. Design plays a role in creating meaningful alternatives for society to change the way in which it operates, which will affect sustainable outcomes.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              We are continually nudging our clients into more sustainable practices. Briefs come across our desk with e-waste contributions or single use, and we always nudge or move them into a better, more sustainable position. This is part of bringing the clients with us.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Where we are now is that we need to get on and do more in our studio, looking into: Who is hosting our website? How do we run our energy? Which super fund are we investing in? We’re looking forward to going into this with the D! Community.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              5. What advice or insight would you share with others in the design community who are just beginning their journey towards sustainability?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Getting started is key. Sometimes signing a declaration feels like tokenism, but actually making a declaration can be the beginning of action which allows you to take the incremental steps, and all industries need to be doing their part. We can't say our industry doesn’t have a big effect, therefore it shouldn’t matter. This really needs to be a collective, global movement which requires lots of industries taking small action.
            </p>
            <p className="text-[1rem] text-subtext leading-relaxed">
              We are building a community of practice so we can encourage and support positive change.
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

export default DetailPage4;