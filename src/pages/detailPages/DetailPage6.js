import { Link, useParams } from 'react-router-dom';
import latest6 from '../../assets/images/latest6.webp';
import image21 from '../../assets/images/image21.webp';
import image22 from '../../assets/images/image22.webp';

const DetailPage6 = () => {
  const { id } = useParams();

  const section = {
    id: 6,
    category: 'Events',
    chapter: 'D! UK',
    image: latest6,
    alt: 'Climate Action Design Awards',
    date: '01.07.2024, 03 pm:30',
    title: 'June 2024: A Day of Sustainable Design Inspiration',
    description: 'Design Declares has always been about people. From the moment that Design Council CDO Cat Drew introduced Alexie Sommer and Jo Barnard back in 2022, followed by Abb-d Taiyo and Aurelie Lionet coming onboard and aligning to the vision, we knew Design Declares was something special.'
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

          {/* Author */}
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            Words: Jo Barnard
          </p>

          {/* Introduction Section */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            The passion, energy and creativity from everyone who I’ve had a pleasure to meet through the growing Design Declares network, never ceases to surprise me. But more than that, the knowledge that the network has so generously shared has fundamentally changed my practice for the better.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Hosting D! events had always been part of the vision. Being able to listen to the experiences and ideas of experts first hand is a powerful way to learn. But more than that are the people you meet, the conversations, connections and long term acquaintances you gain from meeting people face to face.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            June 17th was the perfect example of that.
          </p>

          <div>
            <img
              src={section.image}
              alt={section.alt}
              className="w-full lg:w-2/3 h-full object-cover"
            />
          </div>

          {/* Event Overview */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            To a sold out room, Sarah Booth, Director of Impact at the Design Council, set the scene perfectly. Shockingly 71% of designers have worked on projects designing for environmental impact in the past 12 months, yet only 43% of them feel equipped to do so. This is the skills gap we need to fill. Of course, it’s not only about designers. Yes, 80% of the impact of a product or service is determined at the design stage, but it’s not just designers making decisions; they need to bring stakeholders on the journey too. And more so, a big part of that is knowing how to talk about sustainability better.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We couldn’t have asked for better teachers than the three great speakers that followed. Tom Lloyd brought his humility and experience to the room, sharing how his practice has changed over the years as they have become more aware of what it means to make sustainable products. The transparency of what he and the team had learned on projects (both during the process and afterwards) and how that has influenced decision making, particularly resonated with me as a fellow product designer. It’s so easy to look back at work that you’ve done in the past with the knowledge you subsequently learn, and wish you had made different decisions at the time. But if anything, that is the feeling we should strive for, because that means progress is being made.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “Make Nature a recognised religion - because as soon as something is associated with a religion it can’t be ignored”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Next up was Andy Galloway from the New Citizen Project, with the assertion that ‘If we want design to be a force for climate action, we have to design for citizens, not consumers’. The ideas of New Citizen Project founder Jon Alexander (whose book <span className="italic">Citizens</span>, I highly recommend) really hit home for me. Like most designers, my job is reliant on the cycle of production and consumption. Yet that cycle has turned people into believing the only thing they can do, and should do, is consume. You work, you make money, you spend it. If you want to do good, you spend it with brands who claim they will put your money to good use; you don’t have to lift a finger. In his book, Jon challenges this idea, showing how we might shake off this consumer title and make our way back to the role of citizen. On Friday, Andy brought that to a design audience by explaining ways in which we can make design more participatory, bringing people into the design process and making it less about the product at the end and more about the journey itself.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image21}
              alt="Andy Galloway presentation"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Andy Galloway from New Citizen Project speaking on designing for citizens</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            From one engaging young speaker to another, Priya Prakash stormed the room with her pothole anecdotes. Taking us on a journey of examples of projects and provocations in the world of service design, we looked at how we might design both for nature, and with nature. Sharing her journey in trying to make Nature a recognised religion - because as soon as something is associated with a religion it can’t be ignored - and leaving us with the lessons: Ask why, play seriously and learn to adapt, Priya left the room full of such energy and positivity we quite forgot the hard benches we were sat on.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Talking of energy, enter Leyla Acaroglu. Our keynote of the afternoon, Leyla took us on her trademark fast-paced, action packed 100mph lesson on sustainable design. She drilled down into why designers are the best people to take us out of the climate crisis - because fundamentally, we love problems - breaking down our bias for the status quo and explaining why we need to move from reductive to regenerative thinking. From the plastic found in men's testicles to the teachings of Buckminster Fuller, the need to disrupt the system, redesign everything and understand the interdependence of all on the planet couldn’t have been clearer.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “We had jeans with hidden pockets to secretly deposit food waste in green spaces, a love-hotel for worms, and a Spotify wrapped-esque campaign for Amazon purchases.”
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The afternoon could easily have ended there. But at the beginning of this piece I referred to the network of industry peers that Design Declares offered me. We want everyone who engages with D! to have an opportunity to meet people. People they can learn from, share knowledge with, support and be supported by. And what better way to get to know each other than collaborating on what we all love doing; designing. Leyla ran a fantastic afternoon ‘drink and design’ session with a climate quiz icebreaker followed by a design challenge on one of three topics:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Motivate people to eat less meat</li>
            <li>Encourage people to compost</li>
            <li>Get them to buy less s**t</li>
          </ul>

          {/* Second Image */}
          <div>
            <img
              src={image22}
              alt="Drink and design session"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Teams collaborating during the ‘drink and design’ session</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Over pizza and wine the teams got competitive, developing campaigns that ranged from the genuinely plausible to the downright mad and everything in between. We had jeans with hidden pockets to secretly deposit food waste in green spaces, a love-hotel for worms, and a Spotify wrapped-esque campaign for Amazon purchases. In fact, what the teams, who until an hour before had never met each other, managed to achieve in 45 minutes was super impressive. As Leyla put it in her wrap-up; it’s amazing what you can achieve when you disrupt the idea of what a workshop should be.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            OK, it wasn’t all perfect. There was definitely a community ‘help-yourself’ vibe to the food and drinks service. AV could have been improved and let's not talk about the seating arrangements. But with only a shoestring to run the event on, we achieved what we set out to; the room was packed, the energy was high, connections were made and we all came away having learned something new.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The bar has certainly been set for future Design Declares events.
          </p>

          {/* Author */}
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            Written by: Jo Barnard
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

export default DetailPage6;