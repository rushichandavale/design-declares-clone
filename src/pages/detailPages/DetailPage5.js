import { Link, useParams } from 'react-router-dom';
import latest5 from '../../assets/images/latest5.webp';
import image9 from '../../assets/images/image9.webp';
import image10 from '../../assets/images/image10.webp';
import image11 from '../../assets/images/image11.webp';
import image12 from '../../assets/images/image12.webp';
import image13 from '../../assets/images/image13.webp';
import image14 from '../../assets/images/image14.webp';
import image15 from '../../assets/images/image15.webp';
import image16 from '../../assets/images/image16.webp';
import image17 from '../../assets/images/image17.webp';
import image18 from '../../assets/images/image18.webp';
import image19 from '../../assets/images/image19.webp';
import image20 from '../../assets/images/image20.webp';

const DetailPage5 = () => {
  const { id } = useParams();

  const section = {
    id: 5,
    category: 'Events',
    chapter: 'D! UK',
    image: latest5,
    alt: 'Climate Action Design Awards',
    date: '06.12.2024, 02 pm:30',
    title: 'Designing Tomorrow: Speculative Thinking Shapes Our Present',
    description: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation"
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
            Our amazing event in June set the benchmark. Could we do better with the next one?
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            On November 22nd we hosted an afternoon of talks and a workshop under the theme of Changing Perspective. The focus was on the importance of speculative thinking, and why a deeper understanding of what the future holds helps us design better products and services for the present.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image9}
              alt="Changing Perspective event"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Changing Perspective event on November 22nd</p>
          </div>

          {/* Event Overview */}
          <p className="text-[1rem] text-subtext leading-relaxed">
            We started the afternoon with a brief introduction from us, the Design Declares steering group. Since its launch in 2022, D! has become a global movement with signatories in 50 countries around the world and international chapters in Ireland, Australia and Brazil. Our 8 Acts of Emergency and the D! Toolkit, supports research projects, on-going talks and interviews, and our growing global community. None of this would be possible without our volunteer time and that of the self-selecting D! Team. We all have our own motivations for doing it, but what makes it worthwhile is seeing the community grow. Standing up on stage in front of a sea of people, passionate about the planet we live on, eager to learn about what we can do in our practice to protect it, is really powerful.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            And what a beautiful venue too. Sustainable Ventures, located in County Hall, Southbank helps climate start-ups to scale through community, investment, innovation, and a stunning workspace right in the heart of London. We couldn’t have asked for a better location.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            “When I started Thomas Matthews 26 years ago there was nothing, no network to reach out to… and now here we are, all in a room and it’s growing and it’s fantastic” - Sophie Thomas.
          </p>

          {/* Second and Third Images */}
          <div className="flex flex-col gap-20">
            <div className="w-full ">
              <img
                src={image10}
                alt="Sustainable Ventures venue"
                className="w-full h-full object-cover"
              />
              <p className="text-[.75rem] text-subtext mt-2">Sustainable Ventures venue at County Hall</p>
            </div>
            <div className="w-full  ">
              <img
                src={image11}
                alt="Design Declares community"
                className="w-full h-full object-cover"
              />
              <p className="text-[.75rem] text-subtext mt-2">The growing Design Declares community</p>
            </div>
          </div>

          {/* The Talks Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            The Talks
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sophie Thomas, designer, campaigner and founder of etsaW Ventures, kicked things off with a short film highlighting the sheer scale of global extraction of materials - in 2019 100 billion tonnes of materials were extracted in 1 year, a figure that is set to double by 2050. We have an insatiable appetite for taking, making and, more crucially, wasting. In fact 80% of all raw materials become waste before a product has even left the factory, and 80% of products become waste within 6 months of use. It’s never been more important that we shift from linear to circular; we need to reduce our reliance on new materials and keep those already above ground in use for longer.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sophie stressed the key mindset shifts needed: the need to move from designing products to rethinking systems, to focus on keeping products in use longer and reduce our reliance on fossil fuels. Of course, this is easier said than done, and so, as part of the Great Recovery Project, she created a series of tools that continue to help her in her own practice, including an update to the double diamond framework.
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image12}
              alt="Sophie Thomas presentation"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Sophie Thomas presenting the Great Recovery Project tools</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Sophie ended with some inspirational examples of companies creating disrupting materials. The stand out was Impossible Materials who are developing an alternative to titanium dioxide - which is used to make things white; including paint, toothpaste and even skimmed milk. They have been inspired by the Cyphochilus beetle’s back that has a unique structure which reflects all light.
          </p>

          {/* Fifth and Sixth Images */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2">
              <img
                src={image13}
                alt="Impossible Materials innovation"
                className="w-full h-full object-cover"
              />
              <p className="text-[.75rem] text-subtext mt-2">Innovative materials by Impossible Materials</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={image14}
                alt="Cyphochilus beetle inspiration"
                className="w-full h-full object-cover"
              />
              <p className="text-[.75rem] text-subtext mt-2">Cyphochilus beetle’s reflective structure</p>
            </div>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Afreen Saulat, digital anthropologist and founder of research studio 100kicks, followed with her theme of designing with care. Feeling that there is a general lack of care and cultural inclusion in the design of products and services that stems from tech-bro culture, Afreen spoke passionately about why we can’t let this continue.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            She highlighted some of the ways 100kicks prioritise care in their work that we could learn from:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Breaking silos, pushing ourselves to think differently</li>
            <li>Constantly being curious and asking ‘why?’</li>
            <li>Joining the dots, bringing people together to work together because collectively, they inevitably have the answer.</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            As designers we believe ourselves to be empathetic and put ourselves in the shoes of the consumer/client/participant, but if we are honest, there is always more that we can do and it was helpful to be reminded how the ego can sneak in and bias the design process. If you want to read more about Afreen’s approach, it’s worth checking out her <a href="#" className="text-primary hover:underline">5 principles for designing with care</a>.
          </p>

          {/* Seventh Image */}
          <div>
            <img
              src={image15}
              alt="Afreen Saulat presentation"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Afreen Saulat on designing with care</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Last up was Tobias from ARUP Foresight who introduced us to three projects that highlighted how speculative design plays a key role within ARUP in pushing the boundaries that the rest of the company works within. The repeating theme was around the importance of communication; the power of the medium and not just the message itself.
          </p>

          {/* Eighth Image */}
          <div>
            <img
              src={image16}
              alt="Tobias from ARUP Foresight"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Tobias presenting ARUP Foresight projects</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            The first example was Abundance; a short film about a day in the life of someone living in a regenerative future and what this means for travel, food and community. The experience of a 9 minute film resonates so much more emotively and is more accessible than any 120 page PDF; typically the output of this kind of ‘futures’ research. The second project brought people together around the challenge of making Wales a flood resilient country by 2050. Using a series of focus groups and workshops where people were asked to take up personas both human and non-human (one person had to play the part of a river) helped foster a deeper level of empathy for nature. And lastly, 1-3-10-30, a map of 1370 science reviewed data points including when the population of Africa will reach 2 billion and when sea level rise in Bangladesh will be 4 cm, providing a visualisation of what the future genuinely looks like. This is an ongoing project that we’re hoping will be publicly available at some point.
          </p>

          {/* Ninth Image */}
          <div>
            <img
              src={image17}
              alt="ARUP speculative design projects"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Visualizing the future with ARUP’s 1-3-10-30 project</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Alexie Sommer, sustainability strategist and co-instigator of D! then led an engaging Q&A with the three speakers before the tea break.
          </p>

          {/* Workshop Section */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Speculative Design Workshop
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The afternoon was an opportunity for collaboration on speculative futures facilitated by design educator, and founder of Think Do, Tara Hanrahan. Posing four possible future contexts adapted from ARUP’s 2050 Scenarios, each team was given a starting point (Nutrition, Communication, Entertainment) and had an hour to create a product or service that contextualised a problem and possible solution people in that future may face.
          </p>

          {/* Tenth Image */}
          <div>
            <img
              src={image18}
              alt="Speculative design workshop"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Teams collaborating in the speculative design workshop</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            It honestly impresses us every time we’re involved in a workshop like this, just how much can be achieved in an hour. Particularly when the people in each group don’t know each other.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            With each of the 9 teams given 90 seconds to pitch their ideas, three concepts that stuck with me included:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Ritualistic sun worshipping atop sky scrapers that act as gated communities for future civilians forced into mass urbanisation in an attempt to turn over as much land as possible back to nature.</li>
            <li>A reality TV show War on Water where geographical locations affected by water shortages battle against each other in an attempt to gain water security, all on live TV.</li>
            <li>A beer called IPeeA made from, well, human pee; a product born of the mass crop failure due to extreme weather and a need to utilise every aspect of human waste as a resource.</li>
          </ul>

          {/* Eleventh Image */}
          <div>
            <img
              src={image19}
              alt="Workshop pitch session"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Teams pitching their speculative design ideas</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Whilst the teams were sharing their ideas, Jo’s 8 month old son joined us on stage. In 2050 he will be only 26 years old; that really brings home just how important it is for us to look ahead and take more responsibility for how our actions as people and designers impact the future. We all had fun pitching ideas that, in some cases, were deliberately tongue in cheek, but there was an underlying thoughtfulness over the realisation that these are genuinely plausible scenarios that we could all be facing in a matter of decades, perhaps years. Knowing that many of the things we take for granted may come under threat due to climate change, makes you question what is really important to you. Taking that knowledge into your practice gives you the motivation not only to help shape the future, but prioritise what matters in the present.
          </p>

          {/* Twelfth Image */}
          <div>
            <img
              src={image20}
              alt="Jo’s son on stage"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Jo’s son joining the stage during the pitch session</p>
          </div>

          {/* Closing Section */}
          <div className="mb-8">
            <p className="text-[1rem] text-subtext leading-relaxed">
              Our next event will be in the Spring 2025. Sign up to our newsletter to be the first to know when tickets go live!
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

export default DetailPage5;