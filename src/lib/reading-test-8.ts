import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_8: ReadingTest = {
  id: 8,
  passages: [
    {
      title: "The Development of Writing Systems",
      text: `The invention of writing is widely regarded as one of the most transformative achievements in human history. Writing systems enabled the recording of knowledge, the administration of complex societies, and the transmission of ideas across time and space. The development of writing was not a single event but a gradual process that occurred independently in several regions of the world, each producing distinctive systems that reflected the needs and characteristics of the cultures that created them.

The earliest known writing system emerged in Sumer, in southern Mesopotamia (modern-day Iraq), around 3400 BCE. Known as cuneiform, this system began as a collection of pictographic symbols impressed into wet clay tablets using a reed stylus. Initially used for recording commercial transactions — inventories of grain, livestock, and trade goods — cuneiform gradually evolved to represent abstract concepts, sounds, and grammatical structures. At its most developed, the cuneiform system comprised over 600 distinct signs, making it complex and difficult to master. Literacy was largely confined to a specialised class of scribes who underwent years of training.

Almost simultaneously, the ancient Egyptians developed their own writing system: hieroglyphics. Unlike the wedge-shaped impressions of cuneiform, Egyptian hieroglyphics consisted of elaborate pictorial symbols that could represent objects, ideas, or sounds. The Egyptians also developed two simplified scripts — hieratic and demotic — for everyday administrative and commercial purposes, reserving hieroglyphics for monumental inscriptions and religious texts. The famous Rosetta Stone, discovered in 1799, proved instrumental in deciphering Egyptian hieroglyphics by providing the same text in three scripts: hieroglyphics, demotic, and ancient Greek.

In China, writing developed independently around 1200 BCE, during the Shang Dynasty. The earliest Chinese inscriptions appear on oracle bones used in divination rituals. Chinese writing is unique among major writing systems in that it has maintained a logographic structure throughout its long history, with each character representing a morpheme or word rather than a sound. This characteristic has enabled Chinese characters to be used across different dialects and languages, serving as a unifying cultural force across the vast and linguistically diverse Chinese-speaking world.

The development of alphabetic writing, in which individual symbols represent single consonant or vowel sounds, is generally attributed to the ancient Semitic peoples of the eastern Mediterranean region. The earliest known alphabetic script, Proto-Sinaitic, emerged around 1800 BCE and is believed to have been influenced by Egyptian hieroglyphics. This early alphabet was adapted by the Phoenicians around 1050 BCE into a standardised consonantal script of 22 letters. The Phoenician alphabet proved remarkably influential, serving as the ancestor of the Greek alphabet, which in turn gave rise to the Latin alphabet used by English and most European languages today, as well as the Cyrillic alphabet used by Russian and other Slavic languages.

The Mesoamerican civilisations developed writing systems entirely independently of Old World traditions. The Maya, who flourished in Central America from approximately 250 to 900 CE, created a sophisticated script combining logographic and syllabic elements. Maya writing was used for recording historical events, astronomical observations, and religious rituals on stone monuments, pottery, and bark-paper books known as codices. The Spanish conquest and subsequent colonial policies led to the destruction of most Maya codices, and the script fell out of use. It was not until the late 20th century that scholars successfully deciphered the majority of Maya glyphs.

The transition from manuscript to print represented another revolutionary development in the history of writing. While China developed woodblock printing as early as the 7th century CE and movable type in the 11th century, it was Johannes Gutenberg's invention of the printing press with movable metal type around 1440 CE in Europe that had the most profound global impact. The printing press made books affordable and widely available, democratising access to knowledge and playing a crucial role in the Renaissance, the Reformation, and the Scientific Revolution.

Today, digital technology is transforming writing once again. The development of computers, the internet, and mobile devices has created new forms of written communication, from email and text messaging to social media and collaborative online documents. These technologies have dramatically increased the volume and speed of written communication, while also raising questions about literacy, language change, and the preservation of less widely spoken languages in an increasingly digital world.`,
      questions: [
        {
          number: 1,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nWhat was cuneiform writing initially used for?",
          options: ["A Writing poetry and literature", "B Recording religious ceremonies", "C Tracking trade and commercial activities", "D Sending messages between cities"],
          correctAnswer: "C",
          explanation: "The passage states cuneiform was 'Initially used for recording commercial transactions — inventories of grain, livestock, and trade goods'."
        },
        {
          number: 2,
          type: "multiple_choice",
          text: "What made Egyptian hieroglyphics different from cuneiform?",
          options: ["A They were written on paper", "B They consisted of elaborate pictorial symbols", "C They were easier to learn", "D They could only represent sounds"],
          correctAnswer: "B",
          explanation: "The passage states hieroglyphics 'consisted of elaborate pictorial symbols' unlike the 'wedge-shaped impressions of cuneiform'."
        },
        {
          number: 3,
          type: "multiple_choice",
          text: "What is unique about the Chinese writing system?",
          options: ["A It was the first writing system ever developed", "B It uses an alphabetic structure", "C It has maintained a logographic structure throughout its history", "D It can only be read by native speakers"],
          correctAnswer: "C",
          explanation: "The passage states Chinese writing 'has maintained a logographic structure throughout its long history'."
        },
        {
          number: 4,
          type: "multiple_choice",
          text: "The Phoenician alphabet was significant because it",
          options: ["A was the first writing system in the world", "B could represent any language perfectly", "C became the basis for Greek, Latin, and Cyrillic alphabets", "D replaced all other writing systems in the Mediterranean"],
          correctAnswer: "C",
          explanation: "The passage states the Phoenician alphabet served as 'the ancestor of the Greek alphabet, which in turn gave rise to the Latin alphabet... as well as the Cyrillic alphabet'."
        },
        {
          number: 5,
          type: "multiple_choice",
          text: "What happened to most Maya codices?",
          options: ["A They were preserved in European museums", "B They were destroyed during the Spanish conquest", "C They were translated into Spanish", "D They were lost in natural disasters"],
          correctAnswer: "B",
          explanation: "The passage states 'The Spanish conquest and subsequent colonial policies led to the destruction of most Maya codices'."
        },
        {
          number: 6,
          type: "true_false_not_given",
          text: "Do the following statements agree with the information given in the passage?\n\nWrite TRUE, FALSE, or NOT GIVEN.\n\nCuneiform comprised more than 600 distinct signs at its most developed stage.",
          correctAnswer: "TRUE",
          explanation: "The passage states 'the cuneiform system comprised over 600 distinct signs'."
        },
        {
          number: 7,
          type: "true_false_not_given",
          text: "The Rosetta Stone was discovered in Egypt in 1799.",
          correctAnswer: "TRUE",
          explanation: "The passage states 'The famous Rosetta Stone, discovered in 1799'."
        },
        {
          number: 8,
          type: "true_false_not_given",
          text: "Proto-Sinaitic script was developed by the Phoenicians.",
          correctAnswer: "FALSE",
          explanation: "The passage attributes Proto-Sinaitic to 'ancient Semitic peoples', and states the Phoenicians later adapted it."
        },
        {
          number: 9,
          type: "true_false_not_given",
          text: "The Maya writing system was purely alphabetic.",
          correctAnswer: "FALSE",
          explanation: "The passage states Maya script combined 'logographic and syllabic elements', not alphabetic."
        },
        {
          number: 10,
          type: "true_false_not_given",
          text: "Chinese woodblock printing was invented before Gutenberg's printing press.",
          correctAnswer: "TRUE",
          explanation: "China developed woodblock printing in the 7th century CE, while Gutenberg's press dates to around 1440 CE."
        },
        {
          number: 11,
          type: "true_false_not_given",
          text: "Most people in ancient Sumer could read and write cuneiform.",
          correctAnswer: "FALSE",
          explanation: "The passage states 'Literacy was largely confined to a specialised class of scribes'."
        },
        {
          number: 12,
          type: "true_false_not_given",
          text: "Hieratic script was more complex than hieroglyphics.",
          correctAnswer: "FALSE",
          explanation: "The passage describes hieratic and demotic as 'simplified scripts'."
        },
        {
          number: 13,
          type: "true_false_not_given",
          text: "The internet has led to a decline in the total amount of written communication.",
          correctAnswer: "FALSE",
          explanation: "The passage states digital technologies 'have dramatically increased the volume and speed of written communication'."
        }
      ]
    },
    {
      title: "Ocean Pollution",
      text: `A. The world's oceans, which cover approximately 71 per cent of the Earth's surface, are facing an unprecedented crisis of pollution. From plastic waste and chemical contaminants to noise pollution and ocean acidification, the threats to marine ecosystems are diverse, interconnected, and growing in severity. The health of the oceans is not merely an environmental concern; it is inextricably linked to human food security, economic prosperity, and climate regulation.

B. Plastic pollution has emerged as perhaps the most visible and emotionally resonant form of ocean contamination. An estimated 8 to 12 million tonnes of plastic waste enter the oceans annually, originating primarily from coastal communities in developing countries where waste management infrastructure is inadequate. Once in the ocean, plastic debris breaks down into progressively smaller fragments known as microplastics — particles less than 5 millimetres in diameter — which are now found in virtually every marine environment, from Arctic sea ice to the deepest ocean trenches. Microplastics have been detected in the bodies of over 700 marine species, including commercially important fish and shellfish.

C. Chemical pollution poses equally serious, if less conspicuous, threats to ocean health. Industrial discharge, agricultural runoff, and urban wastewater introduce a complex cocktail of pollutants into marine environments, including heavy metals such as mercury and lead, pesticides, pharmaceutical residues, and persistent organic pollutants. Many of these substances are bioaccumulative, meaning they build up in concentration as they pass through the food chain. Large predatory fish such as tuna and swordfish, which sit at the top of marine food chains, can contain mercury concentrations hundreds of thousands of times greater than the surrounding seawater.

D. Nutrient pollution, primarily from agricultural fertilisers that wash into rivers and eventually reach the sea, causes a phenomenon known as eutrophication. Excessive nutrients, particularly nitrogen and phosphorus, stimulate the rapid growth of algae. When these algal blooms die and decompose, the process consumes large quantities of dissolved oxygen, creating hypoxic or anoxic zones — commonly referred to as dead zones — where most marine life cannot survive. The number and size of oceanic dead zones have increased dramatically in recent decades; there are now more than 400 identified dead zones worldwide, with some of the largest occurring in the Gulf of Mexico, the Baltic Sea, and the East China Sea.

E. Ocean acidification represents a fundamentally different but equally concerning form of pollution. As the concentration of carbon dioxide in the atmosphere increases due to the burning of fossil fuels, the oceans absorb a significant proportion of this excess CO2 — approximately 30 per cent of total anthropogenic emissions. When carbon dioxide dissolves in seawater, it forms carbonic acid, lowering the pH of the ocean. Since the beginning of the Industrial Revolution, ocean acidity has increased by approximately 26 per cent. This chemical change threatens organisms that build shells or skeletons from calcium carbonate, including corals, molluscs, and certain types of plankton that form the base of many marine food chains.

F. Noise pollution is an often-overlooked but significant threat to marine ecosystems. Shipping traffic, seismic surveys for oil and gas exploration, military sonar systems, and underwater construction generate intense sound that can travel vast distances through the ocean. Many marine species, including whales, dolphins, and fish, rely on sound for communication, navigation, and finding prey. Anthropogenic noise can interfere with these vital behaviours, causing stress, displacement from habitat, and in extreme cases, physical injury or death. Studies have shown that increased shipping noise in heavily trafficked waterways has forced some whale species to alter their vocalisations and migration patterns.

G. Addressing ocean pollution requires coordinated action at local, national, and international levels. International agreements such as the London Convention and the MARPOL treaty regulate the dumping of waste at sea and the discharge of pollutants from ships. However, enforcement of these agreements is often inadequate, and many sources of ocean pollution — particularly land-based sources such as agricultural runoff and plastic waste — fall outside the scope of existing international frameworks. The United Nations Environment Programme has called for a legally binding global treaty on plastic pollution, and negotiations toward such a treaty are currently underway.

H. Individual and community actions also play an important role in reducing ocean pollution. Beach clean-ups, reductions in single-use plastic consumption, and support for sustainable fishing practices all contribute to healthier oceans. However, systemic change — including improved waste management infrastructure, stricter regulation of industrial discharges, and fundamental shifts in agricultural practices — is ultimately necessary to address the scale and complexity of ocean pollution.`,
      questions: [
        {
          number: 14,
          type: "matching_headings",
          text: "Choose the correct heading for each section from the list below.\n\nList of Headings\ni. The__(invisible threat of chemical contamination\nii. International efforts to combat ocean pollution\niii. Plastic as the most prominent ocean pollutant\niv. How excess nutrients create lifeless ocean areas\nv. The__(scale of the ocean pollution crisis\nvi. Carbon dioxide and changing ocean chemistry\nvii. The__(impact of underwater sound on marine life\nviii. The__(role of individuals in fighting pollution\nix. How fishing contributes to ocean pollution\n\nParagraph B",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "iii",
          explanation: "Paragraph B discusses plastic as 'the most visible and emotionally resonant form of ocean contamination'."
        },
        {
          number: 15,
          type: "matching_headings",
          text: "Paragraph C",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "i",
          explanation: "Paragraph C discusses chemical pollution as 'less conspicuous' threats including heavy metals and pesticides."
        },
        {
          number: 16,
          type: "matching_headings",
          text: "Paragraph D",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "iv",
          explanation: "Paragraph D discusses eutrophication creating dead zones where marine life cannot survive."
        },
        {
          number: 17,
          type: "matching_headings",
          text: "Paragraph E",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "vi",
          explanation: "Paragraph E discusses CO2 absorption lowering ocean pH (acidification)."
        },
        {
          number: 18,
          type: "matching_headings",
          text: "Paragraph F",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "vii",
          explanation: "Paragraph F discusses noise pollution and its impact on marine species."
        },
        {
          number: 19,
          type: "table_completion",
          text: "Complete the table below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nType of Pollution: Plastic\nKey Detail: Particles smaller than 5mm are called ________",
          correctAnswer: "microplastics",
          explanation: "The passage defines microplastics as 'particles less than 5 millimetres in diameter'."
        },
        {
          number: 20,
          type: "table_completion",
          text: "Type of Pollution: Chemical\nKey Detail: Pollutants are ________, building up through the food chain",
          correctAnswer: "bioaccumulative",
          explanation: "The passage states 'Many of these substances are bioaccumulative'."
        },
        {
          number: 21,
          type: "table_completion",
          text: "Type of Pollution: Nutrient\nKey Detail: Excess nitrogen and phosphorus cause rapid growth of ________",
          correctAnswer: "algae",
          explanation: "The passage states 'Excessive nutrients... stimulate the rapid growth of algae'."
        },
        {
          number: 22,
          type: "table_completion",
          text: "Type of Pollution: Ocean acidification\nKey Detail: Oceans absorb about ________ of human CO2 emissions",
          correctAnswer: "30 per cent",
          explanation: "The passage states oceans absorb 'approximately 30 per cent of total anthropogenic emissions'."
        },
        {
          number: 23,
          type: "table_completion",
          text: "Type of Pollution: Noise\nKey Detail: Marine animals use sound for communication, navigation, and finding ________",
          correctAnswer: "prey",
          explanation: "The passage states marine species 'rely on sound for communication, navigation, and finding prey'."
        },
        {
          number: 24,
          type: "table_completion",
          text: "Number of identified dead zones worldwide: more than ________",
          correctAnswer: "400",
          explanation: "The passage states 'there are now more than 400 identified dead zones worldwide'."
        },
        {
          number: 25,
          type: "table_completion",
          text: "Ocean acidity increase since the Industrial Revolution: approximately ________",
          correctAnswer: "26 per cent",
          explanation: "The passage states 'ocean acidity has increased by approximately 26 per cent'."
        },
        {
          number: 26,
          type: "table_completion",
          text: "Annual plastic waste entering the oceans: ________ million tonnes",
          correctAnswer: "8 to 12",
          explanation: "The passage states 'An estimated 8 to 12 million tonnes of plastic waste enter the oceans annually'."
        }
      ]
    },
    {
      title: "Space Exploration",
      text: `A. The exploration of space represents one of humanity's most ambitious and technically challenging endeavours. Since the launch of Sputnik 1 by the Soviet Union in 1957, the first artificial satellite to orbit the Earth, space exploration has progressed from tentative initial steps to a sophisticated, multi-faceted enterprise involving dozens of nations and, increasingly, private companies.

B. The early decades of space exploration were dominated by the Cold War rivalry between the United States and the Soviet Union. This competition, known as the Space Race, drove rapid advances in rocket technology, life support systems, and mission planning. The Soviet Union achieved a series of historic firsts, including the first human in space (Yuri Gagarin, in 1961), the first woman in space (Valentina Tereshkova, in 1963), and the first spacewalk (Alexei Leonov, in 1965). The United States responded with the Apollo programme, which culminated in the first crewed lunar landing on 20 July 1969, when astronaut Neil Armstrong became the first person to walk on the Moon.

C. Following the Apollo era, the focus of human spaceflight shifted from exploration to long-duration habitation in low Earth orbit. The Soviet Union launched a series of Salyut space stations beginning in 1971, followed by the more advanced Mir station, which operated from 1986 to 2001. The United States developed the Space Shuttle programme, which flew 135 missions between 1981 and 2011 and played a central role in the construction of the International Space Station (ISS). The ISS, a collaborative project involving the space agencies of the United States, Russia, Europe, Japan, and Canada, has been continuously inhabited since November 2000 and has hosted over 270 astronauts from 21 countries.

D. Robotic exploration of the solar system has yielded some of the most scientifically significant discoveries in the history of space exploration. NASA's Voyager 1 and Voyager 2 probes, launched in 1977, conducted unprecedented fly-bys of Jupiter, Saturn, Uranus, and Neptune, returning thousands of images and vast quantities of scientific data. Voyager 1 is now the most distant human-made object from Earth, having entered interstellar space in 2012 at a distance of approximately 19 billion kilometres. On Mars, a succession of rovers — including Spirit, Opportunity, Curiosity, and Perseverance — have explored the planet's surface, analysing soil and rock samples and searching for evidence of past or present microbial life.

E. The search for extraterrestrial life has been a powerful motivating force behind many space exploration missions. In our own solar system, several bodies are considered promising candidates for harbouring life. Europa, one of Jupiter's moons, is believed to possess a liquid water ocean beneath its icy surface, heated by tidal forces generated by Jupiter's immense gravity. Enceladus, a moon of Saturn, has been observed ejecting plumes of water vapour and organic molecules from its south polar region. Mars, despite its currently inhospitable surface conditions, shows geological evidence of having possessed liquid water in its ancient past, and the possibility of subsurface microbial life has not been ruled out.

F. Beyond the solar system, the discovery of exoplanets — planets orbiting stars other than our Sun — has revolutionised our understanding of the potential for life in the universe. Since the first confirmed detection of an exoplanet in 1992, astronomers have identified over 5,000 exoplanets, many of which orbit within the habitable zone of their host stars, where conditions might permit liquid water to exist on the surface. NASA's Kepler Space Telescope, which operated from 2009 to 2018, was responsible for the discovery of the majority of known exoplanets, and its successor, the Transiting Exoplanet Survey Satellite (TESS), continues to identify new candidates.

G. The commercialisation of space has accelerated dramatically in recent years. Companies such as SpaceX, Blue Origin, and Rocket Lab have developed reusable launch vehicles that have significantly reduced the cost of reaching orbit. SpaceX's Falcon 9 rocket, which can land its first-stage booster for reuse, has become the most frequently launched orbital rocket in the world. The company's Starship vehicle, currently under development, is designed to carry both crew and cargo to the Moon, Mars, and beyond. Meanwhile, the emerging space tourism industry has begun offering suborbital and orbital flights to private citizens, marking the beginning of a new era in which space is accessible to more than just trained astronauts and scientists.

H. The future of space exploration is likely to be characterised by a combination of international cooperation and commercial competition. Plans for returning humans to the Moon through NASA's Artemis programme, establishing a permanent lunar base, and eventually sending crewed missions to Mars represent the next major milestones. The technical challenges of long-duration space travel — including radiation exposure, microgravity effects on the human body, and the logistics of life support over journeys lasting months or years — remain formidable but are the subject of active research and development.`,
      questions: [
        {
          number: 27,
          type: "matching_information",
          text: "Which paragraph contains the following information?\n\nWrite the correct letter A–H.\n\nDetails of the first person to land on the Moon",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "B",
          explanation: "Paragraph B mentions Neil Armstrong becoming 'the first person to walk on the Moon' in 1969."
        },
        {
          number: 28,
          type: "matching_information",
          text: "Information about privately funded space companies",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "G",
          explanation: "Paragraph G discusses SpaceX, Blue Origin, and Rocket Lab."
        },
        {
          number: 29,
          type: "matching_information",
          text: "Locations in the solar system where life might exist",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
          explanation: "Paragraph E discusses Europa, Enceladus, and Mars as candidates for life."
        },
        {
          number: 30,
          type: "matching_information",
          text: "A spacecraft that has left our solar system",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
          explanation: "Paragraph D states Voyager 1 'entered interstellar space in 2012'."
        },
        {
          number: 31,
          type: "matching_information",
          text: "An international project for living in space",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "C",
          explanation: "Paragraph C describes the ISS as 'a collaborative project' that has been 'continuously inhabited since November 2000'."
        },
        {
          number: 32,
          type: "matching_information",
          text: "The discovery of planets outside our solar system",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "F",
          explanation: "Paragraph F discusses the discovery of over 5,000 exoplanets."
        },
        {
          number: 33,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN THREE WORDS from the passage for each answer.\n\nThe first artificial satellite launched into orbit was called ________.",
          correctAnswer: "Sputnik 1",
          explanation: "The passage opens by mentioning 'the launch of Sputnik 1 by the Soviet Union in 1957'."
        },
        {
          number: 34,
          type: "sentence_completion",
          text: "The competition between the USA and USSR in space was known as the ________.",
          correctAnswer: "Space Race",
          explanation: "The passage refers to 'This competition, known as the Space Race'."
        },
        {
          number: 35,
          type: "sentence_completion",
          text: "The ISS has been continuously inhabited since ________.",
          correctAnswer: "November 2000",
          explanation: "The passage states the ISS 'has been continuously inhabited since November 2000'."
        },
        {
          number: 36,
          type: "sentence_completion",
          text: "Europa is thought to have a ________ beneath its icy surface.",
          correctAnswer: "liquid water ocean",
          explanation: "The passage states Europa 'is believed to possess a liquid water ocean beneath its icy surface'."
        },
        {
          number: 37,
          type: "sentence_completion",
          text: "Astronomers have identified more than ________ exoplanets since 1992.",
          correctAnswer: "5,000",
          explanation: "The passage states 'astronomers have identified over 5,000 exoplanets'."
        },
        {
          number: 38,
          type: "sentence_completion",
          text: "SpaceX's ________ rocket is the most frequently launched orbital rocket.",
          correctAnswer: "Falcon 9",
          explanation: "The passage states 'SpaceX's Falcon 9 rocket... has become the most frequently launched orbital rocket in the world'."
        },
        {
          number: 39,
          type: "sentence_completion",
          text: "NASA's programme to return humans to the Moon is called ________.",
          correctAnswer: "Artemis",
          explanation: "The passage mentions 'NASA's Artemis programme'."
        },
        {
          number: 40,
          type: "sentence_completion",
          text: "The ________ Space Telescope discovered the majority of known exoplanets.",
          correctAnswer: "Kepler",
          explanation: "The passage states 'NASA's Kepler Space Telescope... was responsible for the discovery of the majority of known exoplanets'."
        }
      ]
    }
  ]
};
