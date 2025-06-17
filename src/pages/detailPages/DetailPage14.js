import { Link, useParams } from 'react-router-dom';
import latest14 from '../../assets/images/latest14.webp';
import image47 from '../../assets/images/image47.webp';
import image48 from '../../assets/images/image48.webp';

const DetailPage14 = () => {
  const { id } = useParams();

  const section = {
    id: 14,
    category: 'News',
    chapter: 'D! UK',
    image: latest14,
    alt: 'Climate Action Design Awards',
    date: '14.02.2023, 09 am:30',
    title: 'How to Start Reducing Your Design Firm’s Carbon Footprint',
    description: 'Two big barriers for any business setting out to reduce their impact on the planet are knowing where they are starting from and understanding what they should be aiming for.'
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
            Let’s start with targets. Of course in the ideal world we would all want to get to net-zero, but there are factors that will make this very challenging for many designers and design teams reading this, some of which are discussed further in this article.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In April 2022, a UN IPCC report gave perhaps the simplest and most achievable targets: reduce greenhouse gas emissions across all sectors by 50% by 2030. So let us start with that.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Next, we need to understand what contributes to our carbon emissions. For that we have reached out to co-founders of <a href="https://xtonnes.com/" className="text-primary hover:underline">xtonnes</a> Vanessa Macalliver and Bengt Cousins-Jenvey and <a href="https://inhabit.eco/" className="text-primary hover:underline">Inhabit</a> CEO Cameron Epstein and Senior Climate Strategist Dom Clarke for answers. Here is what they had to say…
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Describe your business
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            xtonnes helps designers, makers and constructors reduce their carbon emissions, by helping them quantify them, set targets and build an action plan to reduce. We do this for organisations, but increasingly also for the products and projects that they put out into the world.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Inhabit was built to bring fast-paced decarbonisation to creative companies. Our team has experience working on some of the worlds leading climate work for brands like IKEA and M&S, and we’re now combining that experience with innovative tech to decarbonise the design industry. Since our beginnings in 2019 we’ve worked with firms like Pentagram, D&AD and Morrama, and our tools offer a cost-effective net-zero transition - aligned against the highest carbon management standards. We strive to guide our customers from their very first steps to achieving net-zero and, overall, our mission is to decarbonise the design world, creating a low-impact network that can produce climate conscious creative from the ground up!
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            We’ve heard the terms Scope 1, 2 & 3, but can you explain what they actually are?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sure! If we’re going to reduce our carbon impact we need to understand it, which first means measuring our greenhouse gas or GHG emissions. The 3 Scopes allow us to categorise the emissions we generate from our operations and from the wider value chain associated with our business activities.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In essence, scope 1 and 2 are emissions that we own and can control, in contrast to Scope 3 emissions that are generated as a result of what the business does but are not under direct control of the organisation. Here’s a little bit more about each of the Scopes:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li><strong>Scope 1:</strong> These emissions from burning fuel such as gas in boilers and petrol in company owned cars - we call these our ‘direct emissions’.</li>
            <li><strong>Scope 2:</strong> Scope 2 emissions are those generated from the purchase of energy such as electricity - we call these our ‘indirect emissions’.</li>
            <li><strong>Scope 3:</strong> Emissions from everything else. Our businesses rely on data centres, accounting services, coffee shops, postal services, design software… the list goes on! Importantly, each service, good, franchise and investment within our value chain has associated emissions that form part of our Scope 3 emissions - we also call these ‘indirect emissions’.</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In the world of organisational carbon footprinting measuring your impact across Scope 1, 2 and 3 emissions is a must. These Scopes were developed by the GHG Protocol, the gold standard for carbon accounting and have been adopted by corporate reporting standards such as CDP, TCFD, and SBTi - aiming to accomplish standardised carbon measurement across the economy, from small businesses to FTSE100 corporations.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            And something that we haven’t heard of much is Scope 4…?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            I know! We didn’t need another Scope did we?! However Scope 4 has come about largely because the Design community is so passionate about reducing their impact where they can. An architect’s “Product” is a set of drawings not a building, so is the set of drawings made for the design of a robot by an industrial designer. So these are therefore not captured in the Greenhouse Gas Protocol’s downstream categories under “Scope 3” [but would be included in Scope 4]. Therefore Scope 4 is a really important area to address because once these designs go into the world, they are much harder to change.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image47}
              alt="Illustration of Scope 4 emissions"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Illustration of Scope 4 emissions in design</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            What are the top three things you would advise a designer/design team to do if they are looking to reduce their carbon?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Get a quick version of a footprint so you know where you stand and where to focus on. Both where to refine your footprint and where to reduce it.</li>
            <li>Get in control of your building energy use, whether you own it – so proactively – or lease it – so making friends with whoever runs the operations. If you don’t make friends, look at your equipment and vote with your money for a lower energy space.</li>
            <li>If you are an internationally minded business, take a serious look at minimising flying, who really needs to fly, how to make the most of every trip and how to enable slower travel by rail or boat.</li>
          </ul>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li><strong>Measure:</strong> Start by measuring your true carbon emissions with the aim to develop a full inventory of GHG emissions for the business. Then we can identify ‘hotspots’ within the emissions profile - this lets us know where reduction efforts should be focused.</li>
            <li><strong>Plan Reductions:</strong> This step helps a business understand timeframes and costs associated with decarbonisation activities. We’d always recommend planning reductions in alignment with science-based targets to make sure our plan is robust, credible and verifiable.</li>
            <li><strong>Track Reductions:</strong> Finally we want to ensure our carbon reduction plan is working! We do this with emissions tracking over time. Whether it’s done daily, monthly or yearly, calculating your emissions to compare progress will make sure we’re on our way to net-zero.</li>
          </ul>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            From your experience, what tends to stop business from starting on this journey?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            People tend to stop getting started because they are scared of the data collection process – not having enough data, or someone to fully take charge of it, or understanding what the priorities are.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The biggest factor is probably cost. The cost of decarbonisation services has traditionally been seen as a barrier for implementing action. For years carbon accountancy has been for large corporations only, those companies with money and resources to throw at carbon reduction strategies.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            What have you found to be the biggest challenge a design agency faces in reducing Scope 1-3/4 emissions?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Often design agencies and particularly freelancers lease their space, and so they don’t have “operational control” of the space that they work in – they can’t instigate physical, mechanical or behavioural changes.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The greatest challenge is how do we reduce emissions we don’t directly control?
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            It’s very likely that up to 95% of a creative business’ emissions will lie within Scope 3. These are the indirect emissions associated with the wider value chain.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The good news? There is a growing number of decarbonisation services aimed at helping design agencies to engage with their value chain partners to reduce Scope 3 emissions.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Can you give an example of a carbon reduction success story?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Working with an industrial automation designer, we baselined their product through several design iterations, leading to a significant reduction in extra metalwork that had been under discussion until that point. Seeing how that would aggregate with hundreds of products, caused them to put eliminating those parts up the agenda for both cost and carbon reasons and they were designed out.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Every business we work with is a genuine carbon reduction success story. We’re incredibly proud of the impact that we have had in the last 3-years working with the likes of D&AD, Pentagram, I/D.W and more. Speaking honestly, every client and partnership has been really interesting and it’s hard to name an exact moment.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Our carbon success story is going to be facilitating collective climate action across the creative industries.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            When it comes to Scope 1, 2, and 3 roughly what percentage of carbon emissions in a design business are attributed to each?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            xtonnes:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            This unfortunately very much depends on the designer! Whether their heat is electric or gas, or other, how much their business model depends on travel, their employee commuting habits, etc. It is fair to say that designers involved in prototyping or shipping goods are likely to have an even larger Scope 3, ditto any that regularly run events. And as mentioned, designers involved in the design of products that have high lifetime emissions including buildings, electrical, or refrigeration products can become pioneers by thinking about Scope 4.
          </p>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We can give estimates based on our customer base - From what we have seen. But we’re basing these figures on less than 100 businesses. Not enough creative agencies have been able to conduct full Scope 3 measurements at low cost and high speed to provide a scientific overview of these figures. And that’s the unfortunate truth - the data is surprisingly elusive! The landscape is rapidly changing though, and day-by-day more creative firms are choosing to measure their Scope 1, 2 and 3 carbon emissions. Given the trajectory of the industry, its appetite for innovation and the technology available, we see ourselves publishing these figures by mid 2023.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            So what might typical emissions look like for a design firm?
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Whilst tCO2e emissions (tonnes of carbon equivalent) of design businesses will differ, we asked xtonnes to carry out the difficult task of giving us a rough guide to upper, likely and lower cases for various sizes of design firms. These figures assume an office-based business and no company cars, with varying heating, power, ventilation and cooling approaches.
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image48}
              alt="Typical emissions for design firms"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Chart showing typical emissions for design firms</p>
          </div>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            What does zero emissions look like, is it even possible?
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            Inhabit:
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Almost every design firm asks us what net-zero actually means. Net-zero means a business has actively reduced what it can control. Therefore, a business that cannot control their building emissions can actually still achieve net-zero!
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            A near zero/ zero [Scope 1 & 2] emissions case study would be a "passive office" design firm that uses no gas, runs off (their own) renewable (energy system), has a hermetically sealed system with no refrigerant loss and no company cars.
          </p>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn More about Inhabit →</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Learn more about xtonnes →</a>
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

export default DetailPage14;