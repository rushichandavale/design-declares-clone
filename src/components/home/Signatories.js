import { useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

const Signatories = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const targetCount = 513;
  const [count, setCount] = useState(0);

  const counterRef = useRef(null);
  const counterIsInView = useInView(counterRef, { once: true, margin: '0px 0px -100px 0px' });
  const counterControls = useAnimation();

  const listRef = useRef(null);
  const listIsInView = useInView(listRef, { once: true, margin: '0px 0px -100px 0px' });
  const listControls = useAnimation();

  useEffect(() => {
    if (counterIsInView) {
      counterControls.start('animate');
      animate(0, targetCount, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
    }
  }, [counterIsInView, counterControls, targetCount]);

  useEffect(() => {
    if (listIsInView) {
      listControls.start('animate');
    }
  }, [listIsInView, listControls]);

  const signatories = [
    '21–87', '216 Signs', '31% Wool', '400', 'A–Side.', 'Aalia Ahamed', 'Abbie Williams', 'abc',
    'ACRE – A Creative Endeavour Ltd', 'Active Matter', 'ACX', 'Adele Kelly', 'AdesignStorie',
    'Advocate Design Agency', 'Aetha Design', 'Aileron Design Ltd', 'Alan Pitchforth',
    'Alex Kimber Design', 'Alexander Miller', 'Alexandra Lunn Studio', 'Alexandra Lunn Studio',
    'Alexie Sommer', 'Alexis Bardini', 'Ali Adair', 'Andrew Carr', 'ANdy Parker', 'Andy Thornton',
    'Anja Klüver', 'Annabelle Vuille', 'Apfel', 'Applied Works', 'Archetype Accessories',
    'Arif Yusop', 'Arrival', 'Avery & Brown', 'BA (Hons) Design for Sustainable Futures at Arts University Bournemouth',
    'BA Graphic Design at Kingston School of Art', 'Badfish Labs', 'Baines Design LTD',
    'Barbara Chandler', 'Barbara Chandler', 'Barry Bloye', 'Batch.Works', 'Baxter & Bailey',
    'Be The Future', 'Beco', 'Beehive Green', 'Ben Clarke', 'Ben Jessop', 'Bencium Limited',
    'Benedict Povey', 'Beta Design Office', 'BIB Design', 'big fish', 'Big Motive', 'Bill Searle',
    'Biomimicry Innovation Lab', 'Bliss', 'Blunt Crayon', 'Bold Studio', 'Boyle & Perks',
    'Brand Narrative at Pentagram', 'Bravand', 'Breezign', 'Bright Signals Design at Bright Signals Ltd.',
    'Broadley Creative Ltd', 'Bronwen Rees', 'Buff Motion', 'Butterfly', 'BuyDesign', 'Carter Studio',
    'Célibataire', 'Charli Blighton', 'Charli Peake', 'Charlotte Eagle', 'Charlotte Evans',
    'Cherry Anderson Freelance Design', 'Chloe Poulter', 'Claire O’Neill', 'Claire Potter Design',
    'Clara Greo', 'Clare Lewis', 'Claudiu', 'Clever Ghost', 'Climate Labs', 'Clive Russell',
    'COHDA Design', 'Companion Studio', 'Conscious Hospitality Ltd', 'Conscious Sourcing', 'Contour',
    'Creative at Delarki', 'Creative Concern', 'creative conscience', 'Creative Joy', 'Creative Joy',
    'Creative Wilderness LTD', 'Curious Agency', 'Curious Agency', 'Curious Brand', 'CyDen Ltd',
    'D Squared Product Development Ltd', 'Daedalus', 'Daryl Wilkinson', 'Dave Cartledge',
    'Dave Cuvelot', 'David Fairbrother', 'David Sudlow Designers', 'DEFY Brands',
    'Design Activists for Regenerative Futures', 'Design Burger', 'Design by Country Ltd',
    'Design by Mondial', 'Design Council', 'Design For Good Club', 'Design for Joy', 'Design Nature CIC',
    'Design Science', 'Design Truth', 'DesignWright', 'DH Design Studios Ltd', 'Dids Macdonald',
    'Dionne Griffith', 'Diploma in Professional Studies at London College of Communication', 'DISOMT',
    'Dominik Bini', 'Dr Emma Powell', 'Dr Karl Jeffries', 'Drew Kendrick', 'Driftime® Media',
    'Dylan Wiener', 'ecologicstudio', 'Edmuuund', 'Electro Strategy', 'Element Studio', 'Eleven',
    'elise', 'Ella Porter', 'Elle Nelson Design', 'Ellie Burroughs', 'Emily Gorham', 'EMMA BRITTAIN',
    'Emma Summerscales', 'emmabakerstudio', 'Eniola Ogunsola', 'Ensemble', 'Enviral', 'Etch',
    'Ettive Design', 'Europa', 'Eva Koehle', 'Everything', 'Everywhere Design', 'Exeter Waste',
    'F VENZANO', 'Fairground Studio', 'Farrah & Pearce Ltd', 'FearNaught', 'Fernanda Rizzo',
    'Ferrgood Studio', 'Few and Far', 'Fighting Talk Communications', 'Fiona Watkins Design Limited',
    'Fixperts at Forth', 'Foundation', 'Founded Design Ltd', 'Fourfeet Design', 'Francesca Cook Design Ltd',
    'Francis Rowland', 'Frankie Thelwell', 'FranklinTill', 'Future Island-Island at Ulster University-led consortium',
    'Future Selves', 'Futurice Ltd', 'Fynn', 'G R Moore Limited', 'G3 Creative', 'Gareth Neal Ltd',
    'Gareth Wild', 'Garlic Agency', 'Genevieve Bennett Ltd', 'Genuinely Conscious', 'George Charnley',
    'George Rowland', 'GET LOST', 'Gianfranco Fagotto', 'Gitta Gschwendtner', 'Giulia Villa',
    'Glen Cutwerk', 'Glimpse', 'Good Design Works', 'Good Stuff Creative', 'Good Will Studios',
    'Goodtale', 'Goodwin Hartshorn', 'Graduate Studies at College for Creative Studies', 'Graft Creative',
    'Green Mat Workshop', 'Green Orbit Digital', 'Green Rooms landscapes & gardens', 'GreenHeights',
    'H&A', 'Hamish Duncan', 'Hamish Makgill', 'Han Li', 'Hannah Pinnock', 'Harriet Beesley',
    'Harrison Brands Ltd', 'Haughton Design', 'Helen Simmons', 'Hey Low', 'Hippo Digital', 'Hive IT',
    'Hiyield', 'Holmes Studio', 'honours', 'HOUSE OF HACKNEY', 'Hundred Studio', 'ICE',
    'ilka design limited', 'Imagination Factory', 'Inspirwood', 'INTRA DRIVE LTD', 'Irina Teti',
    'Isabella', 'Jackie Malcolm', 'Jake Owen', 'James Kindred', 'James Tooze', 'Jamie Pinkham',
    'jan lewis creative', 'Jane Penty', 'Jason Bruges Studio', 'Jason Mesut', 'Jemima Duncalf',
    'Jess Baxter', 'Jess Francis', 'JK Creative Company', 'Jo Mansfield', 'Joanna boehnert',
    'John Gilbert', 'Joseph Folkes', 'Josh Elgood', 'Joshua Tunstill', 'Jude Pullen', 'Juice by Design',
    'Justine Wyness', 'Kaelum van der Berg', 'Kai Davis', 'Kaleido Grafik', 'Kaleido Grafik',
    'Kanika Kalra', 'Karishma Kusurkar', 'Kathryn Summers', 'Kavya Narayanan', 'Kenny Heard',
    'Kenwood Design Office (KDO) at Kenwood Limited', 'Kim Trow', 'Kinneir Dufort', 'Kirsten Gord',
    'KLUVERWORKS', 'Kyle Soo', 'Kyle Stuart Florent Taylor', 'Laura Santamaria', 'Laure Rees-Smith',
    'Lawrence Zeegen', 'Layerd.Studio', 'Leap Design', 'Lewis Plummer', 'Liam O Brien',
    'Lil Creative Studio', 'Limber Brands', 'Liquid Studio Ltd', 'Lobo Creative', 'LowCarbon',
    'Lucy Carruthers', 'Lucy Watkins', 'Luigi Gisolfi', 'Lyon & Lyon', 'MA Sustainable Design at University of Brighton',
    'Made for the World', 'madeby.studio', 'Magnus Long Studio', 'Mainlyphotography Studio', 'Mani I',
    'Mantra', 'Mar Mar Co. Studio', 'March Studio Ltd', 'Maria Elina', 'Marion Ratie', 'Mark Hicks',
    'Marta De Prisco', 'MARTA ROSSATO INTERIORS', 'Martin Hopkins', 'Martin Price', 'Martin Wright',
    'Mat Denney', 'Materialise Interiors', 'Materials Council', 'MaterialsInformation Ltd',
    'Matt Hollands', 'Matteo Menapace', 'Matter + Perspective', 'Matthew Kilcullen', 'Max Fraser',
    'Maya Designer', 'Mia Allers', 'Micha Nicheva', 'Michael James', 'Michael Love Design',
    'Michael Norrington', 'Michael Rawling', 'Midnight', 'Minna Takala', 'Mireia Allende',
    'Mitre and Mondays', 'Mocean', 'ModularPlastik', 'Monica Oliveira', 'MONOMOTIF', 'Morrama',
    'Muddy Machines', 'Muta Futures Studio', 'Nagonic Design Ltd', 'Naked Ideas', 'Nat Hunter',
    'Natalia Benusiglio', 'Natalie Perkins', 'Nefeli Pavlou Musio', 'Neol.co', 'Never Not Ready',
    'Nicola Holden Designs', 'Nils Aksnes', 'noel douglas', 'Norah Joshi (Lewis)', 'Noughts & Ones',
    'NU Creative Ltd', 'NU Design Spaces', 'Nurture', 'Objective Studio', 'observerly',
    'Octo Design Ltd', 'OGRE Studio', 'Ohana Studio Ltd', 'Ok deploy', 'Ole Makkesen Designlab',
    'Olive Kennington', 'Oliver Lloyd', 'Olivia Harris', 'OneKind Creative', 'Optimist Works',
    'Oracle Design', 'Orangery', 'ORCA', 'Osch', 'Other Today', 'OURI Labs', 'OXygen',
    'Papaya–Studio', 'Papillon Bleu', 'Paul Bailey', 'Paul Gibson Design', 'Pearson Lloyd',
    'People Planet Product', 'Phase Two', 'Pixel Fridge LTD', 'Pollenize CIC', 'Polytechnic',
    'Poonum Chauhan', 'Pretty Clever', 'Product Design at University of Brighton',
    'Product Design at University of Sussex', 'Product for Net Zero', 'Purple Banana',
    'QED web design', 'Rahul Anand', 'Realise', 'Rebekah Di Palma', 'ReShaped Landscape',
    'Rhapsody Media', 'Rhombus Studio', 'Ria Hawthorn', 'Richa Gandhi', 'Robin Wong', 'Roddy Clarke',
    'Rory Cowan', 'Roundwave', 'Ruddocks', 'Ruth Wassermann Ltd', 'Sabotage', 'Sam Judge',
    'Samuel Marchant', 'Sandrine Herbert-Razafinjato', 'sassd', 'School of Good Services', 'Selesti',
    'Selina Rose', 'Set Studio', 'Seth Campbell', 'Sheffield Creative Industries Institute at Sheffield Hallam University',
    'Simone Cucchi', 'Snook', 'Social Change', 'Sophie Mockridge', 'Sophie Reynolds', 'Sophie Thomas',
    'Spark & Bell', 'Special Projects', 'Spotless', 'Sruti Gidugu', 'Standfirst', 'Stefan Bassing',
    'Still&Nimble', 'Storo', 'Straight Forward Design', 'Stuart Gough', 'Studio Breuil',
    'Studio Casey Joy', 'Studio Elk', 'Studio Elma', 'Studio Every', 'Studio Gallant', 'Studio Joana',
    'Studio KICO', 'Studio Mothership', 'Studio Olivers', 'Studio Ology', 'Studio Output',
    'Studio Overberg', 'Studio Simple', 'Studio Technical Nature', 'Studio Tom Metcalfe',
    'Studio Wood', 'Submarine', 'Substance', 'Superfried', 'Susanna Edwards', 'Susannah Kabuiku',
    'Sustainable Ventures Design', 'T&B Design', 'Tacit-Tacit', 'Takram', 'TAMART', 'Tempest',
    'TEN by Anatomy HCD Limited', 'Teresa Ferreira Studio', 'Terrarium', 'The Art and Design Consultancy',
    'The Blooming Platypus', 'The Creative Bloc', 'The Digital Creative London Ltd.', 'The Discourse',
    'THE FOURTH SOLUTION', 'The Landscape', 'The Looking Glass', 'The Manufacturing Technology Centre',
    'Theo Dormer', 'Think/Do', 'Thinkpublic', 'Thom Baker Consultancy', 'Thomas Baraldi Cassaro',
    'Thomas Wylam', 'thomas.matthews', 'Thoughtcraft', 'Tijana Tasich', 'Tim Frenneaux & Co',
    'Tina Bernstein', 'TLC', 'Tokyo Calm', 'Tokyo Calm', 'Tom Greenwood', 'Tomas Gecim',
    'Tommy Papaioannou', 'Tria Design', 'Tristan Palmer Studio', 'Two', 'Two Degrees Studio',
    'Tŷ Syml', 'Unboxed', 'Unfound Studio', 'United by Design', 'UnlikelyGenius', 'URGE Collective',
    'Vashti Waite', 'Vestre Ltd', 'Vicky Lofthouse', 'Virgile Janssen', 'Visual Print and Design',
    'VIVID NINE', 'Vovi', 'Vox Aeris', 'Vu Online', 'We Are Service Works Ltd', 'We Are Systematic',
    'We Made This Ltd', 'We Mean This', 'WEAMO', 'West9 Design', 'White Weft Limited',
    'Wholegrain Digital', 'WizzDev', 'Working with Joe Ltd', 'Works in Public Ltd',
    'www.archetype.com', 'xforwhy', 'XTATX Studio', 'Yarn Creative', 'yesim tuzun',
    'Yoke design', 'Zebra Growth Limited', 'Zoe Bather', 'ZOOZLY'
  ];

  // Distribute signatories into columns (column-wise distribution)
  const distributeIntoColumns = (items, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    items.forEach((item, index) => {
      const columnIndex = index % numColumns; 
      columns[columnIndex].push(item);
    });
    return columns;
  };

  // Responsive column counts
  const getColumns = () => {
    return {
      xs: distributeIntoColumns(signatories, 3), // 3 columns for mobile
      sm: distributeIntoColumns(signatories, 4), // 4 columns for small screens
      md: distributeIntoColumns(signatories, 6), // 6 columns for medium screens
      lg: distributeIntoColumns(signatories, 9), // 9 columns for large screens
    };
  };

  const columns = getColumns();

  return (
    <Element name="signatories" className="bg-black text-heading py-16 lg:py-32">
      <div className="relative px-4 sm:px-6 lg:px-20">
        {/* Counter, Title, Button */}
        <motion.div
          ref={counterRef}
          className="flex flex-col space-y-4 mb-12"
          variants={containerVariants}
          initial="initial"
          animate={counterControls}
        >
          <motion.div className="text-6xl font-normal" variants={fadeUp}>
            #<motion.span>{count}</motion.span>
          </motion.div>
          <motion.div className="flex items-center space-x-2" variants={fadeUp}>
            <span className="text-[1.5rem] font-semibold">Signatories and counting in</span>
            <Link
              to="/uk"
              className="inline-block px-3 py-1 text-[.75rem] font-normal bg-primary text-heading rounded-full hover:bg-gray-800"
              aria-label="View Design Declares UK"
            >
              D! UK
            </Link>
          </motion.div>
        </motion.div>

        {/* Signatories Columns */}
        <div
          ref={listRef}
          className="w-full"
          variants={containerVariants}
          initial="initial"
          animate={listControls}
        >
          {/* Mobile (xs): 3 columns */}
          <div className="grid grid-cols-3 gap-4 sm:hidden">
            {columns.xs.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col space-y-2"
                variants={fadeUp}
              >
                {column.map((signatory, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {signatory}
                  </a>

                ))}
              </div>
            ))}
          </div>

          {/* Small (sm): 4 columns */}
          <div className="hidden sm:grid sm:grid-cols-4 sm:gap-4 md:hidden">
            {columns.sm.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col space-y-2"
                variants={fadeUp}
              >
                {column.map((signatory, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {signatory}
                  </a>

                ))}
              </div>
            ))}
          </div>

          {/* Medium (md): 6 columns */}
          <div className="hidden md:grid md:grid-cols-6 md:gap-4 lg:hidden">
            {columns.md.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col space-y-2"
                variants={fadeUp}
              >
                {column.map((signatory, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {signatory}
                  </a>

                ))}
              </div>
            ))}
          </div>

          {/* Large (lg): 9 columns */}
          <div className="hidden lg:grid lg:grid-cols-9 lg:gap-4">
            {columns.lg.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex flex-col space-y-2"
                variants={fadeUp}
              >
                {column.map((signatory, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {signatory}
                  </a>

                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Signatories;