import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import { motion, useInView, useAnimation, animate } from "framer-motion";

const GlobalSupporters = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };
 
  const targetCount = 661;
  const [count, setCount] = useState(0);
 
  const counterRef = useRef(null);
  const counterIsInView = useInView(counterRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const counterControls = useAnimation();
 
  const listRef = useRef(null);
  const listIsInView = useInView(listRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const listControls = useAnimation();
 
  useEffect(() => {
    if (counterIsInView) {
      counterControls.start("animate");
      animate(0, targetCount, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
    }
  }, [counterIsInView, counterControls, targetCount]);
 
  useEffect(() => {
    if (listIsInView) {
      listControls.start("animate");
    }
  }, [listIsInView, listControls]);
 
  const supporters = [
    "Argentina",
    "Celina Hilbert",
    "Australia",
    "Alena Smith Interior Design",
    "Andrew Sloan",
    "Andrew Vaughan",
    "Andy Marks",
    "Arielle Breit",
    "Art Disrupt",
    "Austin Smidt",
    "AUTHENTIC DESIGN ALLIANCE (ADA)",
    "Ben Rennie",
    "BETTER FUTURE",
    "Bohdan Dorniak & Co Pty Ltd - PROSPECT, SA",
    "Brand & Communications at Edge Impact",
    "Breathe Architecture",
    "BWD Strategic",
    "Cameron Tonkinwise",
    "Carbon Creative",
    "Carolyn King",
    "Celine Waters",
    "Charlotte Adams",
    "Design by Nature",
    "Design Consigned",
    "Diadem",
    "Dr Michelle Douglas FRSA",
    "eco creative agency",
    "Ethos Digital Agency",
    "Finbar",
    "Founded by Design Pty Ltd",
    "Frost*",
    "Frost*",
    "Gabriella Wilson",
    "Genius Agency",
    "Geoff Isaac",
    "Glen Barry",
    "Glen Barry",
    "Gloria Quiroga",
    "Good 4 Business",
    "Good Design Australia",
    "Good Design Australia",
    "Goodness",
    "Goodsports",
    "Hammond Studio",
    "Harry Steer",
    "Heidi Romano",
    "Holonic",
    "Hortenzia",
    "James Hodgson Design",
    "Jas Soh",
    "Jeremy Yuille",
    "Jo Li Tay",
    "John Young",
    "Josh Riesel",
    "Karina Clarke",
    "Katapult Design",
    "Kirby C",
    "Koskela",
    "Leigh Phillips-Brown",
    "Leigh-Anne Hepburn",
    "Leyla Acaroglu",
    "Liane Rossler",
    "LPB Designs and Interiors",
    "Madeline Johnston",
    "Make Tomorrow™",
    "Marnie Hawson",
    "Martin Tomitsch",
    "MEK Studio",
    "Mirella Arapian",
    "Moffitt.Moffitt.",
    "Motherbird",
    "Nacara Studio",
    "Nila Rezaei",
    "Particle Design Studio",
    "Philip Ely PhD",
    "philo & co",
    "Planitree",
    "Reny Studio",
    "Reny®",
    "Ricardo Sosa",
    "RK Collective",
    "RMIT University",
    "Samuel Yu",
    "Seek & Design",
    "Snug House",
    "Society for Responsible Design Inc.",
    "Sponge",
    "Stephanie Mulder",
    "Steve Baty",
    "STUDIO PERISCOPE",
    "Studio Regina",
    "studiospillane",
    "Tanisha Maria Naik",
    "The Design Thinkers",
    "UNEND",
    "United Studio",
    "vert design",
    "Wendy Fountain",
    "X+O",
    "Ys",
    "Zero Co pty Ltd",
    "Austria",
    "Luain",
    "Bangladesh",
    "Rifat Anik",
    "Belgium",
    "Air",
    "Blue Kameleon SRL",
    "Core Branding",
    "Futurewave",
    "HIER",
    "Orb",
    "Brazil",
    "Adriana Tamashiro",
    "Agatha Martins",
    "Alexander Ângelo Guazzelli",
    "Alexandre de Oliveira Lot",
    "Amanda Lima Neves Scorsolini",
    "Ana Luísa Canto",
    "Ana Paula Batista",
    "Audrey Italo Melo",
    "BRQ Digital Solutions",
    "Bruna Cerasi",
    "Bruna Luiza Schwendler",
    "Bruna Mattos",
    "Brunna Moura",
    "BRUNO FREIRE PERRONE",
    "Cacto Publicidade",
    "Camila Calegari Marques",
    "Camila de Almeida Santos",
    "Camila Lozeckyi",
    "Carlos Filipe Alves Lima",
    "Carlos Ignacio Hernández Tellez",
    "Carol Hoffmann",
    "CECILIA PACHECO",
    "Chelles & Hayashi Design",
    "christian ullmann",
    "Claudia Mardegan",
    "Claudio Pelizari",
    "Danton Gravina",
    "Denilson Silva",
    "Denise Oliveira Martins",
    "Design Docol at Docol Sanitaryware",
    "Design Team at WIS Learn",
    "DI",
    "Diego Nunes",
    "Diogo Lucato",
    "DPO Saudável",
    "Echos",
    "Eduardo Maia",
    "Eliane Quadro",
    "Empathy Company",
    "Estúdio Atômico",
    "Estúdio Guto Requena",
    "Estudio Marte",
    "Fares Saba Jr",
    "Fernanda",
    "Fernanda Fidelis",
    "Fernanda Romera",
    "Fluyd",
    "Francisco Albuquerque",
    "GABRIEL ESTEVES DE OLIVEIRA LEITAO",
    "George Rutherford",
    "GIOVANA LORENA FAZIONI",
    "Green Mandarin",
    "Green Mandarin",
    "Greg Lopes",
    "IMK Arquitetura e Engenharia",
    "Jaakko Tammela",
    "Jenifer Rodrigues",
    "Juan Solís Gundín",
    "JULIA RESENDE",
    "Júlia Timponi",
    "JULIANA SIDSAMER",
    "Julianny aidel rafea",
    "Junior Magalhães",
    "KAREN TIE KAWAKAMI",
    "Karla Scherer",
    "Larissa Nunes",
    "Leo Eyer",
    "Leonardo Lins",
    "Lincoln Seragini",
    "Lincoln Shiguio",
    "Lincoln Shiguio",
    "Luciana Shirakawa",
    "LUIS FERNANDO OSCAR COSTA",
    "Maialu Ferlauto",
    "Marcelo F. Pereira Junior",
    "Marcelo Sales",
    "Marcon Zanin",
    "Marcos Vinícius Machado de Oliveira",
    "Maria de Fátima Gullino Frazão",
    "Maria Elisa Zaia",
    "Mariana Fonseca de Souza",
    "Mariana Pereira Weber",
    "Mateus Bull Furlan",
    "Mayra Sasso",
    "Nathalia Petta",
    "paaassos design studio",
    "Pamela Basilio",
    "Patricia Watson",
    "Paula Cristiani Takahashi",
    "Paulo Peres",
    "Paulo Santos",
    "Pedro Gomes",
    "Pedro Martins e Souza",
    "Pedro Naif",
    "Pedro Pazitto",
    "PPTzeiros",
    "Raissa Esther",
    "Raquel Lima",
    "RedBandana Branding and Design",
    "Rei Campos Inovação em Serviços",
    "Renan Benvenuti",
    "Renan Migliorini",
    "Renata matos",
    "Renato Winnig",
    "Robson Zumkeller",
    "Robson Zumkeller",
    "RODRIGO ANTONIO QUEIROZ COSTA",
    "Rodrigo Peixoto",
    "Sandra Ribeiro Cameira",
    "Simbïo Design",
    "Studio Allure",
    "tellus",
    "Thayane",
    "Thiago Barreto",
    "Thiago Vieira Marques",
    "Thoz",
    "tiago taveira",
    "Tudo é Acessibilidade",
    "UERJ",
    "Vagner Trevisan",
    "Vanessa Silva",
    "Victor Maluhy",
    "Victor Mascarenhas",
    "VIRGINIA CORNELSEN",
    "Visorama",
    "Wagner Lúcio",
    "weme",
    "Bulgaria",
    "Ivelina Dimitrova",
    "Canada",
    "Ardeshir Amini",
    "Cense Ltd.",
    "Eliane Bowden",
    "Fletcher Scott Studio Inc.",
    "Meghan Hellstern",
    "PiTCH PR",
    "PiTCH PR",
    "Project 42",
    "Ryan Mayer",
    "SUPERFORT Creative Agency",
    "China",
    "Campaign Design",
    "Orange Creatives",
    "Platform88",
    "Colombia",
    "Coombo",
    "Leticia",
    "Croatia",
    "Creek and Pine",
    "Protagonist agencija",
    "Czechia",
    "Sandra",
    "Denmark",
    "BineJoMo Studio",
    "CurledDesign",
    "Louise Ryberg",
    "Make Material ApS",
    "Sabin Bors",
    "TAWS",
    "Finland",
    "Diseño y diáspora podcast",
    "France",
    "Archipel Kyosei at Archipel Kyosei",
    "Atelier de recherche temporelle at a-r-t",
    "Campus des Métiers et des Qualifications Image et Design Hauts de France",
    "Christopher Bellamy",
    "CY school of design",
    "Kristen",
    "LAB'S 214",
    "madd-bordeaux",
    "OUTERCRAFT",
    "Valérie Tortolero",
    "Germany",
    "Amarjith Sreekumar",
    "andreas popp",
    "Ashley Scarborough",
    "Bendcircular",
    "Bureau Braun",
    "Gloria Ciceri",
    "hoch E",
    "JDS",
    "Jessica Metro",
    "Joshua Stehr",
    "Katharina Winter",
    "Matt Granger",
    "NEW STANDARD.STUDIO",
    "Paolo de Jesus",
    "Philip Hugle",
    "Plan C. Studio",
    "Schober+Richter",
    "STUDIO CDW",
    "The Design & Emotion Lab",
    "Thorsten Jonas",
    "Tillmann Schrempf",
    "White Lime",
    "Gibraltar",
    "Entain",
    "Guatemala",
    "Fabrizio Constanza",
    "India",
    "A BLUNT STORY",
    "Aboa Hasa Foundation",
    "Dinu Prasanna Kennedy",
    "DxE Inc.",
    "LOCAL",
    "Minto Joy",
    "Sai Challa",
    "Shona Sinha",
    "Shreya Salian",
    "Indonesia",
    "Andini Putri Pramudya Wardani",
    "Nice To Meet You Studio",
    "Skemasocial",
    "Ireland",
    "A Worthy Cause",
    "Aaron O'Neill",
    "Abigail Smith",
    "Alanna Campbell",
    "Alessandra Ravida",
    "Alkamee",
    "Alphabet Soup",
    "Anastasiia Chorna",
    "Andrew Anderson",
    "Babelfís",
    "BIEN",
    "Billion Studio",
    "Bradley: The Brand Agency",
    "Bren Byrne",
    "Brian Morgan",
    "Caio",
    "Cairenn",
    "Capulet and montague",
    "Carlos Garcia",
    "Chapter",
    "Chart Design Studio",
    "Ciara Broujos Design",
    "Ciara Layden",
    "Ciara Wade",
    "Circular Design Institute",
    "Claire Dillon",
    "Claire Dillon",
    "Clare Lynch",
    "Claudia Fini",
    "Claudine Curran",
    "Claudine Leonard Design",
    "Clever Ghost at Clever Ghost",
    "Cliodhna Ryan",
    "Conor Flood",
    "Conor Nolan",
    "consider it design",
    "Context Studio",
    "CREW",
    "Cróna Connolly",
    "CUBE Design",
    "Damian Sherlock",
    "Dan Eames",
    "Danielle Deveney",
    "Danielle Townsend",
    "David Wall",
    "Déanta Studio",
    "Declan Behan",
    "Design for Sustinability & Circular Economies Certificate at Limerick School of Art & Design , TUS",
    "Design Notions",
    "Design Partners",
    "Design Studio at Maverick Communications",
    "Detail Design Studio",
    "Digital Factory at ESB",
    "Disco Milk",
    "Duanna Taylor Rooney",
    "Each&Other",
    "Éilís Murphy",
    "Éimear O'Sullivan",
    "Emberlight",
    "Emi Daly",
    "Emma Nolan",
    "EPIC Interpretive Design",
    "Fly Bird Design",
    "FUSE Graphic Design Ltd",
    "Global Creative at Johnson Controls",
    "Good As Gold",
    "Grace",
    "Graphic Design [+] at IADT",
    "Graphic Design Communication at LSAD at TUS",
    "Griffith College Design",
    "Image Now",
    "Image Now",
    "Imagine Lab",
    "Iman",
    "Ingrid Smyth",
    "Institute of Designers Ireland",
    "Isabel Staunton",
    "Jamie Whelan",
    "Jeffers & Sons",
    "Joan Ellison",
    "Johanna Legnar",
    "John Connolly",
    "John Connolly",
    "John O'Brien",
    "Jonny Willis",
    "Kacper Jaroszynski",
    "Kalil Dunne",
    "Kanupriya Jamwal",
    "Karl Smyth",
    "Karl Toomey",
    "Kate Brangan",
    "Katy May O’Sullivan",
    "Kelly Hood",
    "Lands",
    "Lara Hanlon",
    "Lisa Zimmermann",
    "Lucy Bowen",
    "Luke McLaughlin",
    "M-CO",
    "MAKER",
    "Mallory Frye",
    "Marguerite",
    "Marie Gordon",
    "Marino Software",
    "Meghan Clapham",
    "Melvin Jayson C. Ogbalu",
    "Michelle Urban",
    "Mike Mahon",
    "New Graphic",
    "Neworld",
    "Oisin MacManus",
    "Olivia humphreys",
    "On The Dot",
    "Open Studio",
    "Outburst Design",
    "Path",
    "Patrick Feeney",
    "Paula McEntee",
    "Penhouse Design",
    "Peter Sheehan Studio",
    "Piquant",
    "Pixelpod",
    "POND Studios",
    "Portion Collaborative",
    "Post Studio",
    "Prof Dip and MA Service Design team at National College of Art and Design",
    "Public Design Lab at IADT",
    "Purple Peach",
    "Raluca Turcanasu",
    "Rebecca Wright",
    "Rebecca Wright",
    "Red Dog",
    "Richard Whitty",
    "RIFORMA collective",
    "Róisín Jordan",
    "Ross Harrington",
    "Ruairí Crawley",
    "Sadhbh Murphy",
    "Sasha Sykes Studio",
    "Self employed - Nichola Wolfe.com",
    "Serena Chille",
    "Shane Casey",
    "Sharon Maxwell",
    "Signal Type Founddry",
    "SLMD",
    "So Studio",
    "Sorcha Fitzgerald",
    "Stefan Paz",
    "Studio Kosmos",
    "Studio Saol",
    "studiomir",
    "Superfolk",
    "Susan Carberry",
    "Sweet! Graphic Design",
    "The Factory",
    "The FACTORY",
    "The Public House",
    "THINKHOUSE",
    "Together We Create",
    "Treetop Studio",
    "University of Limerick",
    "Unthink",
    "Wes Trumble Design",
    "Wilson Creative",
    "Wove",
    "Isle of Man",
    "Studio Cooper",
    "Italy",
    "acy",
    "chiara de angelis",
    "Elisabeth Graf",
    "Gianluca Menini",
    "Kāvya Raman",
    "Michael Brenner",
    "Ox design studio",
    "Simona Audino",
    "Japan",
    "Asuka Kondo",
    "Latvia",
    "Drinking Water",
    "Ēvija Kraukle",
    "Lebanon",
    "Designerwork",
    "Lithuania",
    "Viktorija",
    "Luxembourg",
    "Art Square Lab SARL-S SIS",
    "Malta",
    "Abigail Farrugia",
    "Mexico",
    "Alex Quinto",
    "Gustavo González D’Asseo",
    "HD*",
    "Monserrat Aranzazú Moreno García",
    "Narativ Design",
    "Morocco",
    "evergreen pixel agency",
    "Netherlands",
    "Archites",
    "Circu Leren",
    "Creative Mules",
    "Danni Swalef",
    "Edwin van Maanen",
    "Gabriela Bassa",
    "Leon van Hoof",
    "Nadine",
    "Rg/B",
    "Rogier Barendregt",
    "Rogier Barendregt",
    "Sustainable Digital Design",
    "Wessel Jansen",
    "New Zealand",
    "Andrew Roberts",
    "Clark Bardsley Design",
    "Dani Bond",
    "Nicaragua",
    "Bernardo van de Schepop",
    "Nigeria",
    "Nuel Wogundu",
    "Ridwan Awujoola",
    "Norway",
    "Petchy",
    "Respira",
    "Pakistan",
    "Ali Murtaza",
    "Syed Faizan Raza",
    "Philippines",
    "Darwin Antipolo",
    "Jesi Sumeg-ang",
    "Mathijs Sterrenburg",
    "TAYO Change Agency: House of Culture & Creativity",
    "Poland",
    "Ergodesign",
    "Weronika Wojnarowicz",
    "Portugal",
    "Afonso Miguel Tomaz Assis dos Santos Januário",
    "Bernd Herbert",
    "Carolina Borges Sacoto",
    "Crystal Campbell",
    "Daniela Veloso",
    "FERNANDO MENDES",
    "Graeme McCree",
    "Joana Casaca Lemos LDA",
    "Pedro Miguel Gago Pereira",
    "Rossouw Oosthuizen",
    "Tassiane Castro",
    "Romania",
    "Alex Ardelean",
    "Madalina Hamciuc",
    "Singapore",
    "Audrey Yang",
    "Dignité Brands",
    "Slovenia",
    "Petra Černe Oven",
    "Sito",
    "South Africa",
    "Duncan Stevens",
    "the earth is round",
    "Spain",
    "Alberto Carnero",
    "Banda",
    "Blackbot",
    "Catalina Estrada",
    "David O'Mahony",
    "Design Thinkers Group Spain",
    "Diego González",
    "Edu Gonzalez",
    "Elena Martinez",
    "estudio flúor",
    "Estudio República",
    "Federico Víllora",
    "Folks",
    "Folks Brands",
    "Gerard",
    "Glenn Goodwin",
    "holon coop",
    "Jesús Gallent",
    "Laura Fernández",
    "Lucinda Morrissey",
    "María Jesús Bonafonte",
    "Mean Creative",
    "Monnou",
    "MOS. More on Simplicity",
    "MUAK STUDIO",
    "Nixae",
    "PATRICIA SALCEDO",
    "The Hatch Studio",
    "Sweden",
    "Antrop",
    "Simone De Vivo",
    "Switzerland",
    "Blitz & Donner",
    "Cerca Research & Design Lab",
    "Reform GmbH",
    "Sarah Santacroce",
    "she explores tech",
    "Swiss Design Association",
    "Valerie Notter de Rabanal",
    "Thailand",
    "Tipaponr Tharawongthawat",
    "Turkey",
    "Bilal Akpinar",
    "Gaye Poçan",
    "United States",
    "2911 Creative LLC d/b/a Missionspring Studio",
    "76West",
    "Amanda Bauer",
    "Analogy",
    "Angeline Neo",
    "Autumn Dahlia Creative Services LLC",
    "Box Clever",
    "Brayan",
    "Business4Today.com",
    "Chameleon Studios",
    "Colibrily LLC",
    "Damn Good Humans",
    "Dayani",
    "Design Team at Omura",
    "Double Loop Marketing LLC",
    "Douglas Flandro",
    "Elliott Swigert",
    "Fabricio Teixeira",
    "Gooey.AI",
    "GROUP OF HUMANS",
    "Indiblu Creative",
    "James Junk",
    "Kailyn Nelson",
    "Kinship Creative",
    "Kristin keilt",
    "Lucy Crelli",
    "Lwindesign",
    "M.S.Architecture - Health and Design at NYIT Health and Design",
    "Matterall",
    "Mayra Cardoso do Nascimento",
    "Michael Weschler Productions",
    "Mike Simpson Design",
    "Mother’s Tongue",
    "Re-nourish",
    "Rkive Studio",
    "Sara Mckee",
    "shannon",
    "Social Workers Who Design",
    "SPACES",
    "Stefan Boublil",
    "STORM studio",
    "Studio SAKA",
    "Style & Entertaining",
    "Urna Bloom",
    "What if Design",
    "WHYWHATIF",
    "Uruguay",
    "Helen Hartley Consulting",
    "Lucia Delgado",
    "Upgrade",
    "Vietnam",
    "Dr Britta Boyer",
  ];
 
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
      xs: distributeIntoColumns(supporters, 3), // 3 columns for mobile
      sm: distributeIntoColumns(supporters, 4), // 4 columns for small screens
      md: distributeIntoColumns(supporters, 6), // 6 columns for medium screens
      lg: distributeIntoColumns(supporters, 9), // 9 columns for large screens
    };
  };

  const columns = getColumns();

  return (
    <Element
      name="global-supporters"
      className="bg-black text-heading py-16 lg:py-32"
    >
      <div className="relative px-4 sm:px-6 lg:px-20">
        {/* Counter and Title */}
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
            <span className="text-[1.5rem] font-semibold">
              Global Supporters
            </span>
          </motion.div>
        </motion.div>

        {/* Supporters Columns */}
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
                {column.map((supporter, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {supporter}
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
                {column.map((supporter, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {supporter}
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
                {column.map((supporter, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {supporter}
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
                {column.map((supporter, index) => (
                  <a
                    key={index}
                    href="https://designdeclares.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[.75rem] font-normal text-subtext hover:underline"
                  >
                    {supporter}
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

export default GlobalSupporters;
