import { Link, useParams } from 'react-router-dom';
import latest7 from '../../assets/images/latest7.webp';
import image23 from '../../assets/images/image23.webp';
import image24 from '../../assets/images/image24.webp';
import image25 from '../../assets/images/image25.webp';
import image26 from '../../assets/images/image26.webp';
import image27 from '../../assets/images/image27.webp';
import image28 from '../../assets/images/image28.webp';
import image29 from '../../assets/images/image29.webp';

const DetailPage7 = () => {
  const { id } = useParams();

  const section = {
    id: 7,
    category: 'Case Study',
    chapter: 'D! Australia',
    image: latest7,
    alt: 'Climate Action Design Awards',
    date: '14.05.2024, 03 pm:30',
    title: 'MEK’s Sustainable Website Redesign',
    description: 'In an industry first, MEK have documented exactly how they approached and solved this challenge so they can inspire others to do the same and help businesses transition to sustainable digital practices.'
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
            Every website on the internet is hosted on a server, and most of the world’s servers are powered by fossil fuels.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            2. START THE JOURNEY
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Our website has been specifically designed to reduce CO2 emissions and energy consumption associated with accessing and viewing our content.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            In an industry first, we documented exactly how we approached and solved this challenge so we can inspire others to do the same and help businesses transition to sustainable digital practices. This open source case study also serves as a roadmap to help designers, studios and agencies create low emission websites as a new service to offer clients looking to reduce their impact.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Because if the internet was a country it would be the world’s fourth biggest polluter.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We need to do better.
          </p>

          {/* First Image */}
          <div>
            <img
              src={image23}
              alt="Internet carbon footprint"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">The internet’s carbon footprint visualized</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Recently we went to a trivia night and one of the questions was ‘What has a bigger carbon footprint: sending 100 emails or driving 1km in a car?’
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            4. MEASURE WHAT WE MAKE
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We answered ‘Driving 1km in a car’, because duh.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Well, we were wrong.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Since learning this startling fact (and losing yet another round of trivia), we wondered what the carbon footprint of our email usage was. We went through all our mail folders and deleted every email we didn’t need or weren’t actively engaged in conversation with.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Before we knew it we’d delved deeper into the world of digital landfill, and like a Choose Your Own Adventure book we had two options:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Turn back</li>
            <li>Do a complete audit</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We couldn’t unknow what we learned, so we started researching resources that would help calculate our emissions.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            These are our findings:
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            According to the Website Carbon Calculator, our old website produced more carbon than 76.5% of web pages tested. Over one year with ±10,000 monthly page views, it produced:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>145.6kg of CO2 equivalent: the same weight as a piano and as much CO2 as boiling water for 19,728 cups of tea</li>
            <li>The same amount of carbon that 7 trees absorb in one year</li>
            <li>329kWh of energy</li>
            <li>The same amount of electricity to drive an electric car 2,108km</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            This was incredibly alarming and we knew we had to create a new site asap. We started this process by auditing our old website:
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Auditing the Code
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            BEFORE
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We revisited the old site’s code and noticed there were too many unnecessary HTML tags that had duplicated over time. This resulted in a high volume of requests sent to the server, impacting the overall site speed and user experience as well as being more energy intensive:
          </p>

          {/* Second Image */}
          <div>
            <img
              src={image24}
              alt="Old website code"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Old website's code with unnecessary HTML tags</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            AFTER
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Our new site’s code is clean with no unnecessary or duplicated HTML tags. The site runs faster and smoother.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Typography
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            BEFORE
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            For the old site’s typography we used Monument Grotesk with different fonts: Regular, Medium, Italic. We’d changed this to the variable version so that one font file contained the same number of stylistic variations, instead of three separate font files for Regular, Medium, Italic. This was to further reduce the number of HTTP requests, but we found it wasn’t enough.
          </p>

          {/* Third Image */}
          <div>
            <img
              src={image25}
              alt="Old website typography"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Before: Our website font - Monument Grotesk</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            AFTER
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Primary font: Arial Regular
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Secondary font: Courier New Regular
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            These are both system fonts that are already installed on your device(s), therefore reducing HTTP requests thus energy and emissions. We admit we’re not super thrilled about them, but we can’t in good faith use the fonts we want if we know they’re contributing to higher emissions.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The MEK wordmark appears as text-only on the site instead of a web font or image file. Our logo symbol only appears in the site’s favicon, the little icon on your browser tab.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Emojis and other decorative design elements are not used in order to reduce emissions.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Colour
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            BEFORE
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We used a versatile colour system of vibrant and neutral colours throughout the old site. The background was white to showcase our design work with clean, breathable pages that communicated copy efficiently and effectively, however white is the most energy intensive because it comprises all the colours in the colour spectrum.
          </p>

          {/* Fourth Image */}
          <div>
            <img
              src={image26}
              alt="Old website colour palette"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Old website colour palette with energy-intensive white background</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            AFTER
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Dark mode with a surface colour of #121212
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            White text at 87% opacity
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Disabled text at 38% opacity
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The contrast ratio of pink is 7:1
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            All colours, ratios and opacities adhere to Google’s Material Design and pass the Web Content Accessibility Guidelines (WCAG) and Colour Contrast Checker.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The new site is in dark mode which is new for us because we’ve always had light mode websites with beautiful bold colour. From a user experience perspective, dark mode is more visually appealing, and it also reduces eye strain (we haven’t found any scientific data on this so if you have any please let us know).
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            We used pink because blue is ubiquitous in dark mode palettes and is energy intensive. Pink is one of MEK’s brand colours and is uncommon in brands in our industry and advocacy space, and unique to us. Also, it’s fun.
          </p>

          {/* Fifth Image */}
          <div>
            <img
              src={image27}
              alt="New website colour palette"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">New website colour palette with dark mode and pink accents</p>
          </div>

          <h3 className="text-[1rem] font-semibold text-heading">
            Images
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            BEFORE
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The images on our old site were high resolution JPGs with an average file size of ~700KB. These files impacted speed and significantly increased energy usage and emissions.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            AFTER
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Images on our new site are &lt;500KB, optimised and compressed to minimise file handling times. Lazy loading is implemented, which means images only load when you scroll down to them.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Content
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            BEFORE
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The first thing we noticed on our old site that was energy intensive was our homepage, which had a looped slideshow of seven full bleed images ranging from 114KB to 798KB. This drastically increased the site’s speed and load time resulting in high bounce rates. The old site also included various media such as reels, videos and animations, at an average of ~8MB per file.
          </p>

          {/* Sixth Image */}
          <div>
            <img
              src={image28}
              alt="Old website header"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Old website header as part of a slideshow</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            AFTER
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The new site only has static images. They aren’t displayed at full size in order to further minimise loading but you can click on images to enlarge them. Not having big beautiful media and content with a dynamic palette and layout pains us as designers, but we think we did a pretty good job making this site as ‘designery’ as possible within the limited constraints we had to work with.
          </p>

          <h3 className="text-[1rem] font-semibold text-heading">
            Layout
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            The new layout is clear and easy to follow, reducing your number of clicks and allowing greater accessibility of content.
          </p>

          {/* Seventh Image */}
          <div>
            <img
              src={image29}
              alt="Old website layout"
              className="w-full lg:w-2/3 h-full object-cover"
            />
            <p className="text-[.75rem] text-subtext mt-2">Old website layout as part of a slideshow</p>
          </div>

          <p className="text-[1rem] text-subtext leading-relaxed">
            Navigation is simplified and clearly described to make information easy to find.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            While the site design is restrained and functional, it relies on strong typography to ensure visual interest and user engagement, minimise lengthy copy, and divide sections of content into digestible forms.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Results
          </h2>
          <p className="text-[1rem] text-subtext leading-relaxed">
            After launching the site in March 2023 we ran it through the Website Carbon Calculator again:
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            OLD SITE
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Dirtier than 76.5% of web pages tested</li>
            <li>Produced 1.21g of CO2 every time someone visited</li>
            <li>Produced 145.6kg of CO2 equivalent: the same weight as a piano and as much CO2 as boiling water for 19,728 cups of tea</li>
            <li>Produced the same amount of carbon that 7 trees absorb in one year</li>
            <li>Produced the same amount of electricity to drive an electric car 2,108km</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed font-semibold">
            NEW SITE
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Cleaner than 57% of web pages tested</li>
            <li>Produces only 0.42g of CO2 every time someone visits</li>
            <li>Produces 50.5kg of CO2 equivalent: the same weight as &lt;1⁄3 of a piano and as much CO2 as boiling water for 6,850 cups of tea</li>
            <li>Produces the same amount of carbon that 3 trees absorb in one year</li>
            <li>Produces the same amount of electricity to drive an electric car 732km</li>
          </ul>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Overall we reduced our website carbon emissions by 67%.
          </p>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            Next Steps
          </h2>
          <h3 className="text-[1rem] font-semibold text-heading">
            5. REDEFINE ‘GOOD’
          </h3>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Other things we’ve identified to reduce our emissions are switching to a green host, further reducing file sizes, and planting more trees to offset CO2.
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            So our next steps are:
          </p>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li>Moving to a green web host. By using green hosting our site will emit ~9% less CO2. Green hosts use clean, renewable energy instead of fossil fuel.</li>
            <li>MEK plants 10 trees through Carbon Positive Australia for every client we work with. We have increased this to 20 trees to further reduce our carbon emissions.</li>
            <li>Using WebP instead of JPG will reduce the size of our images thus emissions. We tested this by converting our JPGs to WebP — there was an average of ~70kb reduction per file, however our current platform doesn’t support WebP file uploads. This will be a priority when we move to a green host. WebP is a file format developed by Google to reduce image file sizes.</li>
            <li>We’ll continue looking for more ways to improve this site and reduce our digital impact. If you have any tips or suggestions, or any questions about this case study, please email <a href="mailto:impact@mek.studio" className="text-primary hover:underline">impact@mek.studio</a></li>
          </ul>

          <h2 className="text-[1.5rem] lg:text-[2rem] font-semibold text-heading">
            References
          </h2>
          <ul className="list-disc list-inside text-[1rem] text-subtext leading-relaxed space-y-2">
            <li><a href="#" className="text-primary hover:underline">Website Carbon Calculator</a></li>
            <li><a href="#" className="text-primary hover:underline">Google Material Design</a></li>
            <li><a href="#" className="text-primary hover:underline">Web Content Accessibility Guidelines</a></li>
            <li><a href="#" className="text-primary hover:underline">Colour Contrast Checker</a></li>
            <li><a href="#" className="text-primary hover:underline">Shortpixel</a></li>
            <li><a href="#" className="text-primary hover:underline">Sustainable Digital Design</a></li>
            <li><a href="#" className="text-primary hover:underline">Sustainable Web Manifesto</a></li>
            <li><a href="#" className="text-primary hover:underline">The Green Web Foundation</a></li>
            <li><a href="#" className="text-primary hover:underline">JPG to WebP Converter</a></li>
            <li><a href="#" className="text-primary hover:underline">How to Build a Low-Tech Website</a></li>
            <li><a href="#" className="text-primary hover:underline">Make Your Website More Energy Efficient</a></li>
          </ul>

          <p className="text-[1rem] text-subtext leading-relaxed">
            <a href="#" className="text-primary hover:underline">Visit MEK</a>
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Design Declares case studies tell stories of projects that are striving to address the climate crisis through the lens of the 8 Acts of Emergency
          </p>
          <p className="text-[1rem] text-subtext leading-relaxed">
            Global D! supporters MEK are a Melbourne-based purpose-driven design studio. They re-designed their studio website, reducing its carbon emissions by 67%! Here they share their process and findings along the way.
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

export default DetailPage7;