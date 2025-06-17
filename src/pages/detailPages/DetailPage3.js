import { Link, useParams } from 'react-router-dom';
import latest3 from '../../assets/images/latest3.webp';
const DetailPage3 = () => {
  const { id } = useParams();

  const section = {
    id: 3,
    category: 'Perspective',
    chapter: 'D! Australia',
    image: latest3,
    date: '18.12.2024, 08 AM:38',
    title: 'Sasha Titchkosky Interview',
    description: 'An Interview with Koskela Founder and Design Declares Australia Board Member - Sasha Titchkosky'
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
            Driving Change Through Design: An Interview with Sasha Titchkosky, Founder of Koskela and Design Declares Australia Advisory Board Member
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In a world where Design holds immense power to influence systems and behaviour, Sasha Titchkosky, founder of Koskela and a Design Declares Australia advisory board member, shares insights on her organisation’s sustainability journey and the imperative role of Design in tackling the climate emergency. Koskela, known for its innovative approach to furniture and Design, has long been committed to sustainable practices and systemic change.
          </p>

          {/* Question 1 */}
          <h3 className="text-[1rem] font-semibold text-heading">
            What inspired you or Koskela to sign Design Declares? How does it align with your core values or mission?
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sasha and her team at Koskela believe that acknowledging the climate emergency is no longer optional for businesses.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "Every business and organisation needs to acknowledge that we are in a climate emergency," Sasha states. "This requires us to examine and change how we do business, using our influence to drive action and awareness within our customers and supply chain."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For Koskela, this commitment is not a superficial addition but a fundamental alignment with its core values of responsibility, innovation, and leadership in Design. Signing Design Declares formalised their intent to use their platform for positive impact.
          </p>

          {/* Question 2 */}
          <h3 className="text-[1rem] font-semibold text-heading">
            Can you share a key milestone in Koskela's sustainability journey? What impact has it made?
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            A significant milestone for Koskela has been its bold commitment to becoming fully circular by 2027—a move driven by a clear understanding of its carbon footprint. After measuring emissions over four years, Sasha noticed a direct link between Scope 3 emissions and revenue growth.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "This is a fundamental shift in our business that impacts every aspect—from our products to our business model. But we can’t see another way to continue to exist without this shift," she explains.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For Koskela, circularity means addressing not just emissions but also rethinking the entire life cycle of products, designing out waste, and ensuring a regenerative future.
          </p>

          {/* Question 3 */}
          <h3 className="text-[1rem] font-semibold text-heading">
            What challenges has Koskela faced when integrating sustainability into its business practices, and how have you addressed them?
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Change, as Sasha puts it, is the hardest part.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "The biggest challenge is change management—systems not aligned with sustainability require people to rethink and shift how things operate. None of this is set in stone, however. Just because we’ve done things one way doesn’t mean we can’t change."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Koskela approaches these challenges with resolve, recognising that discomfort is part of progress. Their ability to challenge norms and embrace innovation helps push boundaries and shift mindsets internally and externally.
          </p>

          {/* Question 4 */}
          <h3 className="text-[1rem] font-semibold text-heading">
            How does Koskela measure the impact of its sustainability efforts?
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Measurement is critical for Koskela. They focus on carbon emissions across all three scopes while paying particular attention to Scope 3 emissions, which relate to their products and transportation.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "We are increasingly focused on circularity metrics, including the Circularity Transition Indicators and the new ISO circular economy standards," Sasha notes.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            By combining rigorous measurement with actionable goals, Koskela ensures its efforts remain tangible, accountable, and impactful.
          </p>

          {/* Question 5 */}
          <h3 className="text-[1rem] font-semibold text-heading">
            What advice would you give to others in the design community who are beginning their sustainability journey?
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sasha’s advice is clear and urgent:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li className="italic">"Hurry up and get moving! There is no time to waste. This is the critical decade, and we have already used 50% of it."</li>
            <li className="italic">"Do not let perfect be the enemy of action." Start wherever you can and build from there.</li>
            <li className="italic">"Use every opportunity to influence and push for change." Design has incredible power to shape systems, and designers must wield this responsibility.</li>
            <li className="italic">"Don’t accept work from the fossil fuel industry."</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            She adds that 80% of a product’s environmental impact is determined at the design phase, placing designers in a uniquely influential position.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed italic">
            "By acting this way, you can make your day job your climate job. This is the most impactful thing you can do."
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sasha concludes with two practical tips that can be achieved in minutes: switch to green energy and move your superannuation to a fund that doesn’t invest in fossil fuels.
          </p>

          {/* Final Thoughts */}
          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Final Thoughts
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Sasha Titchkosky’s leadership at Koskela is a beacon for the design industry, demonstrating that bold action, systemic change, and a circular mindset are necessary and achievable. By championing the principles of Design Declares, Koskela reminds us that Design can be a powerful tool for climate action—if we choose to act.
          </p>

          {/* Closing Section */}
          <div className="mb-8">
            <p className="text-[1rem] text-subtext leading-relaxed">
              Design! Sasha Titchkosky Interview read on for her insights:
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              1. What inspired you or your organisation to sign Design Declares, and how does it align with your core values or your business's mission?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Koskela believes that every business and organisation needs to acknowledge that we are in a climate emergency. We are firm believers that this requires us to examine and change how we are doing business and use our influence to drive action and awareness within our customers and supply chain.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              2. Can you share a key milestone or initiative in your or your organisation’s sustainability journey so far? What impact has it made? How far are you on your sustainability journey?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Koskela has committed to transitioning our business to being fully circular by the end of 2027. This was based on us measuring our carbon footprint over 4 years and being able to see that direct correlation between a rise in Scope 3 emissions when we had a “good” year in terms of revenue growth/sales. This is a fundamental shift in our business and impacts every aspect of it from our products to our business model. But we can’t see another way for us to continue to exist without this shift.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              3. What are the biggest challenges you or your organisation has faced when integrating sustainability into your business practices, and how have you addressed them?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              The biggest challenge is change management – there are so many systems that are not aligned with sustainability that require people to change the way things operate. None of this is set in stone, however, and just because we’ve done things one way doesn’t mean we can’t change.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              4. How do you measure or plan to measure the impact of your sustainability efforts, and what metrics or outcomes matter most to you?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              We measure our impact by measuring our carbon emissions across all 3 scopes – we are keenly focused on our scope 3 emissions as this is the emissions that sits with our products and their transport. We will increasingly focus on circularity metrics – the Circularity Transitions Indicators and the new ISO circular economy standards.
            </p>
            <h3 className="text-[1rem] font-semibold text-heading">
              5. What advice or insight would you share with others in the design community who are just beginning their journey towards sustainability?
            </h3>
            <p className="text-[1rem] text-subtext leading-relaxed">
              Hurry up and get moving! There is absolutely no time to waste. This is the critical decade and we have already used 50% of it up. Do not let perfect be the enemy of action and use every opportunity to influence and push for change. Don’t accept work from the fossil fuel industry. 80% of a product’s environmental impact is determined at the design phase so designers are in an incredibly powerful position – use this power! By acting in this way, you can make your day job your climate job. This is the most impactful thing you can do (plus switch to green energy and move your super to a fund that doesn’t invest in fossil fuels – these two can be done in 15 minutes).
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

export default DetailPage3;