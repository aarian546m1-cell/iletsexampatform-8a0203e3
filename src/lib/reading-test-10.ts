import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_10: ReadingTest = {
  id: 10,
  passages: [
    {
      title: "Ancient Architecture",
      text: `The architectural achievements of ancient civilisations continue to inspire wonder and admiration thousands of years after their construction. From the pyramids of Egypt to the temples of Greece, from the Great Wall of China to the aqueducts of Rome, ancient builders demonstrated extraordinary skill, ingenuity, and aesthetic sensibility, often working with limited tools and technology but producing structures of remarkable durability and beauty.

The Great Pyramid of Giza, constructed around 2560 BCE during the reign of Pharaoh Khufu, remains one of the most iconic structures in human history. Standing 146 metres tall when originally completed, it was the tallest human-made structure in the world for over 3,800 years. The pyramid comprises approximately 2.3 million stone blocks, each weighing an average of 2.5 tonnes, and its base is aligned to the cardinal points of the compass with astonishing precision — the maximum deviation from true north being less than one-fifteenth of a degree. Despite centuries of study, the exact methods used to construct the pyramid remain a subject of scholarly debate.

Greek architecture, particularly during the Classical period (5th to 4th century BCE), established aesthetic principles that have influenced Western architecture for over two millennia. The three Classical orders — Doric, Ionic, and Corinthian — each defined a distinctive system of proportions and decorative elements for columns and their supporting structures. The Parthenon, built on the Acropolis in Athens between 447 and 432 BCE, is widely regarded as the finest example of Doric architecture. Its designers employed subtle optical refinements, including slight curvatures in the platform and columns, to counteract visual distortions and create the appearance of perfect straightness and harmony.

Roman architecture built upon Greek foundations but introduced revolutionary innovations, most notably the arch, the vault, and concrete. Roman concrete, made from a mixture of volcanic ash, lime, and seawater, proved extraordinarily durable — many Roman concrete structures, including the Pantheon and numerous harbour installations, remain intact after nearly two thousand years. The Pantheon, completed around 125 CE under Emperor Hadrian, features an unreinforced concrete dome spanning 43.3 metres, which remained the largest dome in the world for over 1,300 years. Roman engineers also constructed vast networks of aqueducts, roads, and bridges that demonstrated a sophisticated understanding of hydraulic engineering and materials science.

In East Asia, Chinese architecture developed along distinctly different lines, emphasising wooden construction and the integration of buildings with their natural surroundings. The Great Wall, which was built and rebuilt over a period spanning more than two thousand years, eventually stretched approximately 21,000 kilometres across northern China. While its primary purpose was military defence, the Wall also served as a means of controlling trade and immigration. Traditional Chinese palace and temple architecture, exemplified by the Forbidden City in Beijing (constructed between 1406 and 1420), followed strict hierarchical principles, with the scale, height, and decoration of buildings reflecting the status and importance of their occupants.

The civilisations of Mesoamerica produced architectural achievements of comparable sophistication. The Maya constructed elaborate temple-pyramids, palaces, and observatories using limestone blocks fitted together without mortar. The pyramid of Kukulcán at Chichén Itzá, built around 1000 CE, demonstrates remarkable astronomical knowledge: during the spring and autumn equinoxes, the play of sunlight and shadow on the pyramid's northern staircase creates the illusion of a serpent descending from the temple at the summit. The Aztec capital, Tenochtitlán, built on an island in Lake Texcoco, was one of the largest cities in the world at the time of the Spanish arrival in 1519, with an estimated population exceeding 200,000 and an elaborate system of causeways, canals, and aqueducts.

Across these diverse traditions, several common themes emerge. Ancient builders demonstrated an intimate understanding of the properties of local materials, whether stone, brick, wood, or concrete. They developed sophisticated techniques for managing structural forces, drainage, and ventilation, often achieving results that challenge even modern engineering. And they imbued their structures with symbolic meaning, using architecture to express religious beliefs, political power, and cultural identity in enduring physical form.`,
      questions: [
        {
          number: 1,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nHow long was the Great Pyramid the tallest human-made structure?",
          options: ["A Over 2,000 years", "B Over 3,000 years", "C Over 3,800 years", "D Over 4,500 years"],
          correctAnswer: "C",
          explanation: "The passage states it 'was the tallest human-made structure in the world for over 3,800 years'."
        },
        {
          number: 2,
          type: "multiple_choice",
          text: "What was special about the Parthenon's design?",
          options: ["A It was built entirely from marble", "B It used all three Classical orders", "C It incorporated subtle curves to appear perfectly straight", "D It was the largest temple in the ancient world"],
          correctAnswer: "C",
          explanation: "The passage states designers used 'subtle optical refinements, including slight curvatures... to create the appearance of perfect straightness'."
        },
        {
          number: 3,
          type: "multiple_choice",
          text: "What made Roman concrete so remarkable?",
          options: ["A It was cheaper than stone", "B It was extremely durable, lasting nearly 2,000 years", "C It could be produced in any colour", "D It was invented by Greek architects"],
          correctAnswer: "B",
          explanation: "The passage states 'many Roman concrete structures... remain intact after nearly two thousand years'."
        },
        {
          number: 4,
          type: "multiple_choice",
          text: "According to the passage, the Great Wall of China served",
          options: ["A only as a military defence", "B as a tourist attraction and trade route", "C for military defence and controlling trade and immigration", "D primarily as a symbol of imperial power"],
          correctAnswer: "C",
          explanation: "The passage states it was for 'military defence' and 'also served as a means of controlling trade and immigration'."
        },
        {
          number: 5,
          type: "multiple_choice",
          text: "What phenomenon occurs at the pyramid of Kukulcán during equinoxes?",
          options: ["A The pyramid changes colour", "B A shadow creates the illusion of a serpent", "C The sun aligns with the temple entrance", "D Sound echoes in unusual patterns"],
          correctAnswer: "B",
          explanation: "The passage states 'the play of sunlight and shadow... creates the illusion of a serpent descending'."
        },
        {
          number: 6,
          type: "multiple_choice",
          text: "What was the estimated population of Tenochtitlán when the Spanish arrived?",
          options: ["A About 50,000", "B About 100,000", "C Over 200,000", "D Over 500,000"],
          correctAnswer: "C",
          explanation: "The passage states 'an estimated population exceeding 200,000'."
        },
        {
          number: 7,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe Great Pyramid was built during the reign of Pharaoh ________.",
          correctAnswer: "Khufu",
          explanation: "The passage states the pyramid was 'constructed... during the reign of Pharaoh Khufu'."
        },
        {
          number: 8,
          type: "sentence_completion",
          text: "The three Classical orders in Greek architecture are Doric, Ionic, and ________.",
          correctAnswer: "Corinthian",
          explanation: "The passage lists 'Doric, Ionic, and Corinthian' as the three orders."
        },
        {
          number: 9,
          type: "sentence_completion",
          text: "Roman concrete was made using volcanic ash, lime, and ________.",
          correctAnswer: "seawater",
          explanation: "The passage states Roman concrete was 'made from a mixture of volcanic ash, lime, and seawater'."
        },
        {
          number: 10,
          type: "sentence_completion",
          text: "The Pantheon's dome spans ________ metres and was the world's largest for over 1,300 years.",
          correctAnswer: "43.3",
          explanation: "The passage states 'an unreinforced concrete dome spanning 43.3 metres'."
        },
        {
          number: 11,
          type: "sentence_completion",
          text: "The Great Wall of China stretches approximately ________ kilometres.",
          correctAnswer: "21,000",
          explanation: "The passage states the Wall 'eventually stretched approximately 21,000 kilometres'."
        },
        {
          number: 12,
          type: "sentence_completion",
          text: "The Forbidden City was constructed between 1406 and ________.",
          correctAnswer: "1420",
          explanation: "The passage states the Forbidden City was 'constructed between 1406 and 1420'."
        },
        {
          number: 13,
          type: "sentence_completion",
          text: "Maya builders constructed temple-pyramids using ________ blocks fitted without mortar.",
          correctAnswer: "limestone",
          explanation: "The passage states the Maya used 'limestone blocks fitted together without mortar'."
        }
      ]
    },
    {
      title: "Climate Change and Agriculture",
      text: `A. Agriculture is both a significant contributor to climate change and one of the sectors most vulnerable to its effects. The relationship between farming and the global climate system is complex and bidirectional: agricultural activities generate substantial greenhouse gas emissions, while changes in temperature, precipitation, and extreme weather patterns increasingly threaten crop yields, livestock productivity, and food security worldwide.

B. The agricultural sector is responsible for approximately 10 to 12 per cent of total global greenhouse gas emissions directly, with an additional 8 to 10 per cent resulting from land-use changes associated with farming, particularly deforestation to create new agricultural land. The primary greenhouse gases produced by agriculture include methane, released during the digestive process of ruminant livestock such as cattle and sheep and from flooded rice paddies; nitrous oxide, generated by the use of nitrogen-based fertilisers; and carbon dioxide, emitted through the burning of crop residues and the operation of farm machinery.

C. The impacts of climate change on agriculture are already being observed in many regions. Rising temperatures have extended growing seasons in some northern latitudes, potentially benefiting agriculture in countries such as Canada and Russia. However, in tropical and subtropical regions, where the majority of the world's poorest and most food-insecure populations live, higher temperatures are reducing crop yields and threatening the viability of traditional farming systems. Studies project that global wheat yields could decline by 6 per cent for each degree Celsius of temperature increase, while rice and maize yields are expected to suffer similar reductions.

D. Changes in precipitation patterns represent another major climate-related threat to agriculture. Many regions are experiencing increased frequency and intensity of droughts, which can devastate crops and deplete water resources essential for irrigation. Conversely, other areas are facing more intense rainfall and flooding, which can damage crops, erode soil, and contaminate water supplies. The increasing unpredictability of rainfall patterns makes it difficult for farmers to plan planting and harvesting schedules, undermining the traditional knowledge systems that have guided agricultural decision-making for generations.

E. Adaptation strategies are essential for maintaining agricultural productivity in a changing climate. These include the development of drought-resistant and heat-tolerant crop varieties through conventional breeding and genetic modification, improvements in irrigation efficiency through technologies such as drip irrigation and soil moisture monitoring, and changes in farming practices such as conservation tillage, crop rotation, and agroforestry. Diversification of crops and farming systems can also help reduce vulnerability to climate shocks by ensuring that the failure of one crop does not result in total loss of income or food supply.

F. Climate-smart agriculture (CSA) is an approach that integrates adaptation, mitigation, and food security objectives. CSA practices include precision agriculture, which uses data and technology to optimise the application of water, fertilisers, and pesticides; integrated pest management, which reduces reliance on chemical pesticides; and improved livestock management practices that reduce methane emissions from animal husbandry. The adoption of CSA practices has been promoted by international organisations including the Food and Agriculture Organization of the United Nations, which estimates that global food production will need to increase by approximately 60 per cent by 2050 to feed a projected world population of 9.7 billion.

G. The challenge of adapting agriculture to climate change is particularly acute in developing countries, where smallholder farmers — who produce approximately 80 per cent of the food consumed in sub-Saharan Africa and South Asia — often lack access to improved seeds, fertilisers, credit, extension services, and market infrastructure. Climate change threatens to widen the gap between agricultural productivity in developed and developing nations, potentially exacerbating global food inequality and increasing migration pressures. Addressing these disparities requires targeted investment in agricultural research, infrastructure, and capacity building in the most vulnerable regions.`,
      questions: [
        {
          number: 14,
          type: "matching_headings",
          text: "Choose the correct heading for each section from the list below.\n\nList of Headings\ni. Agriculture's contribution to greenhouse gas emissions\nii. How__(farming must change to survive climate change\niii. The__(challenge for farmers in poorer countries\niv. An integrated approach to sustainable farming\nv. The__(dual relationship between farming and climate\nvi. Rising temperatures: winners and losers\nvii. The__(problem of changing rainfall\nviii. Technology's role in reducing agricultural emissions\n\nParagraph A",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "v",
          explanation: "Paragraph A describes the 'complex and bidirectional' relationship between agriculture and climate."
        },
        {
          number: 15,
          type: "matching_headings",
          text: "Paragraph B",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "i",
          explanation: "Paragraph B details agriculture's greenhouse gas emissions (10-12% plus land-use changes)."
        },
        {
          number: 16,
          type: "matching_headings",
          text: "Paragraph C",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "vi",
          explanation: "Paragraph C discusses benefits in northern latitudes vs. harm in tropical regions."
        },
        {
          number: 17,
          type: "matching_headings",
          text: "Paragraph D",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "vii",
          explanation: "Paragraph D discusses droughts, flooding, and unpredictable rainfall."
        },
        {
          number: 18,
          type: "matching_headings",
          text: "Paragraph E",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "ii",
          explanation: "Paragraph E discusses adaptation strategies for maintaining agricultural productivity."
        },
        {
          number: 19,
          type: "table_completion",
          text: "Complete the table below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nGreenhouse Gas: Methane\nSource: Digestive process of ________ livestock and flooded rice paddies",
          correctAnswer: "ruminant",
          explanation: "The passage states methane is 'released during the digestive process of ruminant livestock'."
        },
        {
          number: 20,
          type: "table_completion",
          text: "Greenhouse Gas: Nitrous oxide\nSource: Use of ________ fertilisers",
          correctAnswer: "nitrogen-based",
          explanation: "The passage states nitrous oxide is 'generated by the use of nitrogen-based fertilisers'."
        },
        {
          number: 21,
          type: "table_completion",
          text: "Greenhouse Gas: Carbon dioxide\nSource: Burning of ________ and operating farm machinery",
          correctAnswer: "crop residues",
          explanation: "The passage states CO2 is 'emitted through the burning of crop residues'."
        },
        {
          number: 22,
          type: "table_completion",
          text: "Climate Impact: Wheat yield decline projected at ________ per degree Celsius increase",
          correctAnswer: "6 per cent",
          explanation: "The passage states 'global wheat yields could decline by 6 per cent for each degree Celsius'."
        },
        {
          number: 23,
          type: "table_completion",
          text: "Food Production Target: Must increase by approximately ________ by 2050",
          correctAnswer: "60 per cent",
          explanation: "The passage states food production 'will need to increase by approximately 60 per cent by 2050'."
        },
        {
          number: 24,
          type: "table_completion",
          text: "Smallholder farmers produce about ________ of food in sub-Saharan Africa and South Asia",
          correctAnswer: "80 per cent",
          explanation: "The passage states smallholder farmers 'produce approximately 80 per cent of the food consumed'."
        },
        {
          number: 25,
          type: "table_completion",
          text: "Projected world population by 2050: ________ billion",
          correctAnswer: "9.7",
          explanation: "The passage states 'a projected world population of 9.7 billion'."
        },
        {
          number: 26,
          type: "table_completion",
          text: "Agriculture directly produces ________ per cent of global greenhouse gas emissions",
          correctAnswer: "10 to 12",
          explanation: "The passage states agriculture is responsible for 'approximately 10 to 12 per cent'."
        }
      ]
    },
    {
      title: "Robotics in Modern Industry",
      text: `A. The use of robots in industrial settings has evolved dramatically since the first programmable industrial robot, Unimate, was installed on a General Motors assembly line in 1961. What began as a relatively simple mechanical arm designed to perform repetitive welding tasks has developed into a sophisticated ecosystem of machines capable of performing an extraordinary range of functions with precision, speed, and consistency far exceeding human capabilities in many domains.

B. The automotive industry remains the largest user of industrial robots, accounting for approximately 30 per cent of all robot installations worldwide. Modern automobile manufacturing relies heavily on robotic systems for welding, painting, assembly, and quality inspection. A typical modern car factory employs hundreds of robots working in coordination, with some facilities achieving production rates of one completed vehicle every 60 seconds. The precision offered by robotic welding and assembly systems has significantly improved vehicle quality and consistency while reducing production costs.

C. Beyond automotive manufacturing, robots have penetrated virtually every industrial sector. In the electronics industry, robots assemble smartphones, computers, and other devices with a level of precision that would be impossible to achieve by hand. In the food and beverage industry, robots are used for packaging, palletising, and quality sorting, operating in hygienic environments and handling products without contamination. In the pharmaceutical industry, robotic systems manage the precise dispensing and packaging of medications, reducing the risk of errors that could have serious health consequences.

D. The development of collaborative robots, or cobots, represents a significant shift in industrial robotics. Unlike traditional industrial robots, which typically operate in caged enclosures separated from human workers for safety reasons, cobots are designed to work alongside people in shared workspaces. Equipped with advanced sensors, force-limiting technology, and sophisticated software, cobots can detect the presence of nearby humans and adjust their behaviour accordingly — slowing down, changing direction, or stopping entirely to avoid collisions. This capability makes cobots particularly valuable for tasks that require a combination of robotic precision and human judgement or dexterity.

E. The integration of artificial intelligence into robotic systems has dramatically expanded the range of tasks that robots can perform. Machine learning algorithms enable robots to recognise objects, adapt to variations in workpieces, and learn from experience, improving their performance over time without explicit reprogramming. Computer vision systems allow robots to inspect products for defects with greater accuracy than human inspectors, detecting flaws as small as a fraction of a millimetre. Natural language processing is enabling the development of robots that can receive verbal instructions from human operators, making them more accessible and easier to deploy.

F. Logistics and warehousing have emerged as rapidly growing applications for robotics. Companies such as Amazon employ thousands of mobile robots in their fulfilment centres to transport goods between storage locations and packing stations. These systems can reduce the time required to process an order from hours to minutes, while simultaneously reducing errors and improving workplace safety by minimising the need for workers to traverse large warehouse floors. Autonomous guided vehicles (AGVs) and autonomous mobile robots (AMRs) are increasingly used in manufacturing facilities to transport materials between workstations, replacing manual forklift operations.

G. The economic implications of industrial robotics are substantial and multifaceted. While robots have undoubtedly displaced some human workers — particularly those performing routine, repetitive tasks — they have also created new categories of employment in robot design, programming, maintenance, and supervision. The International Federation of Robotics estimates that the global operational stock of industrial robots reached approximately 3.5 million units in 2022, with annual installations exceeding 500,000 units. Countries with the highest robot density — including South Korea, Singapore, Japan, and Germany — tend also to have low unemployment rates, suggesting that high levels of automation do not necessarily lead to joblessness.

H. Looking ahead, several emerging technologies promise to further transform industrial robotics. Advances in soft robotics — which uses flexible, compliant materials rather than rigid components — could enable robots to handle delicate objects such as fresh produce, textiles, and biological tissues. Swarm robotics, inspired by the collective behaviour of insects, explores the use of large numbers of simple, inexpensive robots that can coordinate their actions to accomplish complex tasks. The continued development of cloud robotics, which allows robots to access shared data and computational resources via the internet, could accelerate learning and enable more rapid deployment of new capabilities.`,
      questions: [
        {
          number: 27,
          type: "matching_information",
          text: "Which paragraph contains the following information?\n\nWrite the correct letter A–H.\n\nThe first industrial robot ever installed",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "A",
          explanation: "Paragraph A mentions 'the first programmable industrial robot, Unimate, was installed on a General Motors assembly line in 1961'."
        },
        {
          number: 28,
          type: "matching_information",
          text: "Robots that are designed to work safely alongside humans",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
          explanation: "Paragraph D discusses collaborative robots (cobots) designed to work alongside people."
        },
        {
          number: 29,
          type: "matching_information",
          text: "Evidence that automation does not necessarily cause unemployment",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "G",
          explanation: "Paragraph G notes countries with highest robot density 'tend also to have low unemployment rates'."
        },
        {
          number: 30,
          type: "matching_information",
          text: "The use of robots in online retail distribution centres",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "F",
          explanation: "Paragraph F discusses Amazon's fulfilment centres using thousands of mobile robots."
        },
        {
          number: 31,
          type: "matching_information",
          text: "How AI has enhanced what robots can do",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
          explanation: "Paragraph E discusses machine learning, computer vision, and NLP expanding robotic capabilities."
        },
        {
          number: 32,
          type: "matching_information",
          text: "Future technologies that could change how robots are built",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "H",
          explanation: "Paragraph H discusses soft robotics, swarm robotics, and cloud robotics as emerging technologies."
        },
        {
          number: 33,
          type: "matching_features",
          text: "Match each industry with the robotic application described in the passage.\n\nA Automotive industry\nB Electronics industry\nC Food and beverage industry\nD Pharmaceutical industry\n\nPrecise dispensing and packaging to prevent dangerous errors",
          options: ["A", "B", "C", "D"],
          correctAnswer: "D",
          explanation: "The passage states the pharmaceutical industry uses robots for 'precise dispensing and packaging of medications, reducing the risk of errors'."
        },
        {
          number: 34,
          type: "matching_features",
          text: "Operating in hygienic conditions to avoid contamination",
          options: ["A", "B", "C", "D"],
          correctAnswer: "C",
          explanation: "The passage states food and beverage robots operate 'in hygienic environments and handling products without contamination'."
        },
        {
          number: 35,
          type: "matching_features",
          text: "Achieving assembly precision impossible to do by hand",
          options: ["A", "B", "C", "D"],
          correctAnswer: "B",
          explanation: "The passage states electronics robots assemble devices 'with a level of precision that would be impossible to achieve by hand'."
        },
        {
          number: 36,
          type: "matching_features",
          text: "Producing a completed product every 60 seconds",
          options: ["A", "B", "C", "D"],
          correctAnswer: "A",
          explanation: "The passage states automotive facilities achieve 'production rates of one completed vehicle every 60 seconds'."
        },
        {
          number: 37,
          type: "flow_chart_completion",
          text: "Complete the flow chart below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nEvolution of Industrial Robotics:\nFirst robot (Unimate, 1961) → Traditional robots in caged enclosures → Development of ________ (cobots) that work alongside humans",
          correctAnswer: "collaborative robots",
          explanation: "The passage introduces 'collaborative robots, or cobots'."
        },
        {
          number: 38,
          type: "flow_chart_completion",
          text: "AI integration → Robots can recognise objects and learn from ________ → Computer vision for defect inspection",
          correctAnswer: "experience",
          explanation: "The passage states robots can 'learn from experience, improving their performance over time'."
        },
        {
          number: 39,
          type: "short_answer",
          text: "Answer the questions below.\n\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.\n\nHow many industrial robots were in operation globally in 2022?",
          correctAnswer: "3.5 million",
          explanation: "The passage states 'the global operational stock of industrial robots reached approximately 3.5 million units in 2022'."
        },
        {
          number: 40,
          type: "short_answer",
          text: "What type of robotics uses flexible materials to handle delicate objects?",
          correctAnswer: "soft robotics",
          explanation: "The passage describes 'soft robotics — which uses flexible, compliant materials rather than rigid components'."
        }
      ]
    }
  ]
};
