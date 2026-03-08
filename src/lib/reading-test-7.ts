import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_7: ReadingTest = {
  id: 7,
  passages: [
    {
      title: "The Evolution of Transportation",
      text: `The history of human transportation is a story of constant innovation, driven by the need to move people and goods more quickly, efficiently, and over greater distances. From the domestication of horses to the development of supersonic aircraft, each advancement in transportation has profoundly influenced the shape of civilisation, altering patterns of trade, settlement, and cultural exchange.

The earliest forms of land transportation relied on human and animal power. The domestication of horses, donkeys, and camels, which occurred at various times between 4000 and 3000 BCE, dramatically expanded the range and speed of overland travel. The invention of the wheel, generally dated to around 3500 BCE in Mesopotamia, was another transformative development. Initially used for pottery making, the wheel was soon adapted for carts and chariots, enabling the efficient movement of heavy loads over long distances.

Water transportation developed alongside land-based methods and, in many respects, proved even more significant for long-distance travel and trade. The ancient Egyptians built sailing vessels as early as 3000 BCE, using them to navigate the Nile River and, eventually, to venture into the Mediterranean Sea. The Phoenicians, renowned as master sailors, established extensive trading networks across the Mediterranean by the first millennium BCE. Their innovations in ship design and navigation techniques were later adopted and refined by the Greeks and Romans.

The Roman Empire made extraordinary contributions to land transportation through its vast network of paved roads. At its peak, the Roman road system encompassed approximately 80,000 kilometres of major routes, connecting the far-flung provinces of the empire. These roads were engineered to an remarkably high standard, with multiple layers of stone and gravel providing durable surfaces that remained functional for centuries after the empire's decline.

The most significant revolution in transportation came with the development of the steam engine in the 18th century. Thomas Newcomen built the first practical steam engine in 1712, originally designed for pumping water from mines. James Watt's subsequent improvements in the 1760s and 1770s made the steam engine sufficiently powerful and efficient for a wide range of applications. The first steam-powered locomotive, built by Richard Trevithick in 1804, demonstrated the potential of rail transportation, but it was George Stephenson's Rocket in 1829 that established the viability of steam-powered railways for passenger and freight services.

The railway boom of the 19th century transformed both the physical and economic landscape of the industrialised world. Railways enabled the rapid movement of raw materials to factories and finished goods to markets, dramatically reducing transportation costs and stimulating economic growth. They also made long-distance passenger travel accessible to ordinary people for the first time, fundamentally changing patterns of migration, tourism, and commuting.

The internal combustion engine, developed in the late 19th century, brought yet another revolution. Karl Benz patented the first practical automobile in 1886, and by the early 20th century, mass production techniques pioneered by Henry Ford had made cars affordable for the middle class. The automobile reshaped cities, spawning suburban development, and transformed personal mobility. Simultaneously, the Wright brothers' successful powered flight in 1903 opened the era of aviation, which would eventually make intercontinental travel a matter of hours rather than weeks.

The 20th century saw the maturation of both automotive and aviation technologies, alongside the development of new forms of transportation. High-speed rail systems, pioneered by Japan's Shinkansen in 1964, offered an alternative to short-haul flights, combining speed with energy efficiency. Containerised shipping, introduced in the 1950s, revolutionised maritime freight by standardising cargo handling and dramatically reducing the cost and time required to load and unload ships.

Today, the transportation sector stands on the cusp of another revolution. Electric vehicles, autonomous driving technology, and hyperloop concepts promise to reshape how people and goods move in the 21st century. Meanwhile, the environmental impact of transportation — which accounts for approximately one quarter of global carbon dioxide emissions — has become a pressing concern, driving research into sustainable alternatives including hydrogen fuel cells, biofuels, and improved public transit systems.`,
      questions: [
        {
          number: 1,
          type: "true_false_not_given",
          text: "Do the following statements agree with the information given in the passage?\n\nWrite TRUE, FALSE, or NOT GIVEN.\n\nHorses were domesticated before the wheel was invented.",
          correctAnswer: "TRUE",
          explanation: "Horses were domesticated between 4000-3000 BCE, while the wheel dates to around 3500 BCE."
        },
        {
          number: 2,
          type: "true_false_not_given",
          text: "The wheel was originally designed for transportation purposes.",
          correctAnswer: "FALSE",
          explanation: "The passage states the wheel was 'Initially used for pottery making'."
        },
        {
          number: 3,
          type: "true_false_not_given",
          text: "The Phoenicians learned sailing techniques from the Egyptians.",
          correctAnswer: "NOT GIVEN",
          explanation: "The passage mentions both civilisations separately but does not state that the Phoenicians learned from the Egyptians."
        },
        {
          number: 4,
          type: "true_false_not_given",
          text: "Roman roads covered approximately 80,000 kilometres at the empire's peak.",
          correctAnswer: "TRUE",
          explanation: "The passage states 'the Roman road system encompassed approximately 80,000 kilometres of major routes'."
        },
        {
          number: 5,
          type: "true_false_not_given",
          text: "Thomas Newcomen's steam engine was originally built for railway transportation.",
          correctAnswer: "FALSE",
          explanation: "The passage states it was 'originally designed for pumping water from mines'."
        },
        {
          number: 6,
          type: "true_false_not_given",
          text: "George Stephenson invented the first steam-powered locomotive.",
          correctAnswer: "FALSE",
          explanation: "Richard Trevithick built the first steam-powered locomotive in 1804; Stephenson's Rocket came later in 1829."
        },
        {
          number: 7,
          type: "true_false_not_given",
          text: "Henry Ford invented the automobile.",
          correctAnswer: "FALSE",
          explanation: "Karl Benz patented the first practical automobile; Ford pioneered mass production techniques."
        },
        {
          number: 8,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN THREE WORDS from the passage for each answer.\n\nThe ________ were known as expert sailors who created major trading routes across the Mediterranean.",
          correctAnswer: "Phoenicians",
          explanation: "The passage describes the Phoenicians as 'renowned as master sailors'."
        },
        {
          number: 9,
          type: "sentence_completion",
          text: "Railways made ________ travel possible for ordinary people for the first time.",
          correctAnswer: "long-distance passenger",
          explanation: "The passage states railways 'made long-distance passenger travel accessible to ordinary people for the first time'."
        },
        {
          number: 10,
          type: "sentence_completion",
          text: "Karl Benz patented the first practical automobile in ________.",
          correctAnswer: "1886",
          explanation: "The passage states 'Karl Benz patented the first practical automobile in 1886'."
        },
        {
          number: 11,
          type: "sentence_completion",
          text: "Japan's ________ was the first high-speed rail system.",
          correctAnswer: "Shinkansen",
          explanation: "The passage states 'High-speed rail systems, pioneered by Japan's Shinkansen in 1964'."
        },
        {
          number: 12,
          type: "sentence_completion",
          text: "________ shipping standardised cargo handling and reduced costs.",
          correctAnswer: "Containerised",
          explanation: "The passage states 'Containerised shipping... revolutionised maritime freight by standardising cargo handling'."
        },
        {
          number: 13,
          type: "sentence_completion",
          text: "Transportation accounts for approximately ________ of global carbon dioxide emissions.",
          correctAnswer: "one quarter",
          explanation: "The passage states transportation 'accounts for approximately one quarter of global carbon dioxide emissions'."
        }
      ]
    },
    {
      title: "The Science of Sleep",
      text: `A. Sleep is one of the most fundamental biological processes, yet it remains one of the least understood aspects of human physiology. Every person spends roughly one third of their life asleep, and the consequences of inadequate sleep — from impaired cognitive function to increased susceptibility to chronic disease — are well documented. Despite decades of research, scientists are still unravelling the complex mechanisms that govern sleep and its vital role in maintaining physical and mental health.

B. The architecture of sleep is more complex than most people realise. A typical night's sleep consists of multiple cycles, each lasting approximately 90 minutes and comprising several distinct stages. These stages are broadly categorised into two types: non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep is further divided into three stages, progressing from light sleep (Stage 1) through intermediate sleep (Stage 2) to deep, restorative sleep (Stage 3). REM sleep, which is associated with vivid dreaming, typically first occurs about 90 minutes after falling asleep and recurs at intervals throughout the night, with each REM period tending to be longer than the last.

C. The regulation of sleep is governed by two primary mechanisms: the circadian rhythm and the homeostatic sleep drive. The circadian rhythm is an internal biological clock that operates on an approximately 24-hour cycle, influenced primarily by exposure to light. This clock is located in a region of the brain called the suprachiasmatic nucleus, situated in the hypothalamus. The homeostatic sleep drive, by contrast, is a progressively increasing pressure to sleep that builds during waking hours. The interaction between these two systems determines when we feel alert and when we feel drowsy.

D. The functions of sleep are numerous and essential. During deep NREM sleep, the body undergoes critical processes of physical restoration: tissues are repaired, hormones essential for growth and development are released, and the immune system is strengthened. REM sleep appears to play a particularly important role in cognitive functions, including memory consolidation, emotional regulation, and creative problem-solving. Research has shown that people deprived of REM sleep exhibit significant difficulties in learning new tasks, managing emotions, and thinking creatively.

E. One of the most significant recent discoveries in sleep science is the role of the glymphatic system, a waste-clearance mechanism in the brain that is most active during sleep. This system functions by circulating cerebrospinal fluid through brain tissue, effectively flushing out metabolic waste products, including beta-amyloid, a protein associated with Alzheimer's disease. This discovery has led researchers to hypothesise that chronic sleep deprivation may contribute to the development of neurodegenerative disorders by allowing toxic proteins to accumulate in the brain.

F. Modern lifestyles pose numerous challenges to healthy sleep patterns. The widespread use of artificial lighting and electronic devices, which emit blue light that suppresses the production of melatonin — a hormone that signals the body to prepare for sleep — has been shown to delay sleep onset and reduce sleep quality. Shift work, which requires people to sleep during the day and work at night, disrupts the circadian rhythm and is associated with elevated risks of cardiovascular disease, diabetes, and depression. Additionally, the cultural tendency to undervalue sleep, treating it as an obstacle to productivity rather than a biological necessity, has contributed to what some researchers describe as a global epidemic of sleep deprivation.

G. The consequences of insufficient sleep extend far beyond daytime drowsiness. Chronic sleep deprivation has been linked to a wide range of serious health conditions, including obesity, type 2 diabetes, cardiovascular disease, and weakened immune function. In terms of cognitive performance, even moderate sleep restriction — sleeping six hours per night instead of the recommended seven to nine — can produce impairments in attention, reaction time, and decision-making comparable to those caused by alcohol intoxication. The economic costs of sleep deprivation are also substantial, with estimates suggesting that insufficient sleep costs the United States economy over $400 billion annually in lost productivity.

H. Emerging treatments and interventions for sleep disorders reflect the growing recognition of sleep's importance. Cognitive behavioural therapy for insomnia (CBT-I) has emerged as the gold standard treatment, proving more effective than medication for long-term management of chronic insomnia. Advances in wearable technology now allow individuals to monitor their sleep patterns with reasonable accuracy, empowering people to make informed decisions about their sleep habits. As understanding of sleep science continues to deepen, it is becoming increasingly clear that prioritising sleep is not a luxury but a fundamental requirement for health and wellbeing.`,
      questions: [
        {
          number: 14,
          type: "matching_headings",
          text: "Choose the correct heading for each section from the list below.\n\nList of Headings\ni. How sleep is controlled by the body\nii. The__(health and economic consequences of poor sleep\niii. Physical and mental processes during sleep\niv. New scientific findings about brain cleaning during sleep\nv. Sleep as an unsolved scientific puzzle\nvi. The stages and structure of a night's sleep\nvii. Modern solutions for sleep problems\nviii. Why modern life harms sleep quality\nix. The__(role of dreams in sleep\n\nParagraph A",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "v",
          explanation: "Paragraph A describes sleep as 'one of the least understood aspects' that scientists are 'still unravelling'."
        },
        {
          number: 15,
          type: "matching_headings",
          text: "Paragraph B",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "vi",
          explanation: "Paragraph B describes the stages of NREM and REM sleep that make up a night's sleep."
        },
        {
          number: 16,
          type: "matching_headings",
          text: "Paragraph C",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "i",
          explanation: "Paragraph C discusses the circadian rhythm and homeostatic sleep drive as the two mechanisms that regulate sleep."
        },
        {
          number: 17,
          type: "matching_headings",
          text: "Paragraph E",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "iv",
          explanation: "Paragraph E discusses the glymphatic system that clears waste from the brain during sleep."
        },
        {
          number: 18,
          type: "matching_headings",
          text: "Paragraph F",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "viii",
          explanation: "Paragraph F discusses artificial lighting, electronic devices, and shift work disrupting sleep."
        },
        {
          number: 19,
          type: "matching_headings",
          text: "Paragraph G",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "ii",
          explanation: "Paragraph G discusses health conditions and economic costs of insufficient sleep."
        },
        {
          number: 20,
          type: "summary_completion",
          text: "Complete the summary below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nA single sleep cycle lasts about ________ and includes both NREM and REM stages.",
          correctAnswer: "90 minutes",
          explanation: "The passage states each cycle lasts 'approximately 90 minutes'."
        },
        {
          number: 21,
          type: "summary_completion",
          text: "The body's internal clock is located in a brain structure called the ________.",
          correctAnswer: "suprachiasmatic nucleus",
          explanation: "The passage states the clock 'is located in a region of the brain called the suprachiasmatic nucleus'."
        },
        {
          number: 22,
          type: "summary_completion",
          text: "Electronic devices emit ________ that reduces melatonin production.",
          correctAnswer: "blue light",
          explanation: "The passage states devices 'emit blue light that suppresses the production of melatonin'."
        },
        {
          number: 23,
          type: "summary_completion",
          text: "The recommended treatment for chronic insomnia is ________ for insomnia.",
          correctAnswer: "cognitive behavioural therapy",
          explanation: "The passage identifies 'Cognitive behavioural therapy for insomnia (CBT-I)' as the gold standard treatment."
        },
        {
          number: 24,
          type: "short_answer",
          text: "Answer the questions below.\n\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.\n\nWhat protein associated with Alzheimer's disease is cleared by the glymphatic system?",
          correctAnswer: "beta-amyloid",
          explanation: "The passage mentions 'beta-amyloid, a protein associated with Alzheimer's disease'."
        },
        {
          number: 25,
          type: "short_answer",
          text: "How much does insufficient sleep cost the US economy annually?",
          correctAnswer: "over $400 billion",
          explanation: "The passage states 'insufficient sleep costs the United States economy over $400 billion annually'."
        },
        {
          number: 26,
          type: "short_answer",
          text: "What type of work is associated with disrupted circadian rhythms?",
          correctAnswer: "shift work",
          explanation: "The passage states 'Shift work... disrupts the circadian rhythm'."
        }
      ]
    },
    {
      title: "Renewable Energy Technologies",
      text: `The global transition from fossil fuels to renewable energy sources represents one of the most significant technological and economic shifts in modern history. Driven by concerns about climate change, air pollution, and the finite nature of fossil fuel reserves, governments, businesses, and researchers worldwide are investing heavily in technologies that can generate electricity from sustainable sources such as sunlight, wind, water, and geothermal heat.

Solar energy has experienced the most dramatic growth among renewable technologies in recent decades. The cost of photovoltaic (PV) solar panels has fallen by approximately 99 per cent since 1976, making solar electricity competitive with or cheaper than fossil fuel-generated power in many parts of the world. Modern PV panels typically convert between 15 and 22 per cent of the sunlight they receive into electricity, though laboratory prototypes have achieved efficiencies exceeding 47 per cent. The development of thin-film solar cells, perovskite solar cells, and bifacial panels that capture light from both sides promises further improvements in efficiency and cost-effectiveness.

Wind energy is the second most rapidly growing renewable technology. Modern wind turbines have grown enormously in scale; the largest models now stand over 260 metres tall and can generate enough electricity to power approximately 16,000 homes. Offshore wind farms, which benefit from stronger and more consistent wind patterns than land-based installations, have expanded rapidly in northern Europe and are now being developed in Asia and North America. However, wind energy faces challenges including the intermittent nature of wind, the visual and noise impact of turbines, and potential effects on bird and bat populations.

Hydroelectric power remains the world's largest source of renewable electricity, accounting for approximately 16 per cent of global electricity generation. Large-scale hydroelectric dams, such as China's Three Gorges Dam, can generate enormous quantities of electricity with very low carbon emissions during operation. However, the construction of large dams often entails significant environmental and social consequences, including the displacement of communities, the disruption of river ecosystems, and the release of methane from decomposing vegetation in flooded areas. Smaller run-of-river systems and pumped-storage facilities offer alternatives that mitigate some of these impacts.

Geothermal energy, which harnesses heat from the Earth's interior, provides a reliable and continuous source of power that is not dependent on weather conditions. Countries situated along tectonic plate boundaries, such as Iceland, the Philippines, and New Zealand, have developed significant geothermal capacity. Iceland, which generates approximately 30 per cent of its electricity from geothermal sources, is widely regarded as a model for geothermal energy utilisation. The development of enhanced geothermal systems (EGS), which create artificial reservoirs of hot water in deep rock formations, could potentially extend geothermal energy production to regions that do not have naturally occurring geothermal resources.

Energy storage technology is widely regarded as the critical enabler of a fully renewable electricity system. Because solar and wind energy are inherently variable — solar panels produce no electricity at night, and wind turbines generate nothing in calm conditions — effective storage solutions are needed to match electricity supply with demand. Lithium-ion batteries, which have seen dramatic reductions in cost over the past decade, are currently the dominant storage technology. However, alternatives such as solid-state batteries, flow batteries, compressed air energy storage, and green hydrogen production are being actively researched and developed.

The transition to renewable energy also faces significant challenges beyond technology. Existing electricity grids were designed for centralised power generation from large fossil fuel or nuclear plants, and adapting them to accommodate distributed, variable renewable sources requires substantial investment in infrastructure. The mining of materials needed for renewable technologies — including lithium, cobalt, and rare earth elements — raises environmental and ethical concerns. Additionally, the fossil fuel industry represents enormous economic interests, and the political influence of established energy companies has in some cases slowed the adoption of renewable alternatives.

Despite these challenges, the momentum behind renewable energy appears increasingly irreversible. Global investment in renewable energy exceeded $300 billion in 2022, and renewable sources now account for approximately 30 per cent of global electricity generation. As costs continue to fall, technologies improve, and the urgency of addressing climate change grows, renewable energy is poised to become the dominant source of electricity worldwide within the coming decades.`,
      questions: [
        {
          number: 27,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nAccording to the passage, the cost of solar PV panels since 1976 has",
          options: ["A fallen by approximately half", "B decreased by about 90 per cent", "C dropped by roughly 99 per cent", "D remained relatively stable"],
          correctAnswer: "C",
          explanation: "The passage states 'The cost of photovoltaic (PV) solar panels has fallen by approximately 99 per cent since 1976'."
        },
        {
          number: 28,
          type: "multiple_choice",
          text: "What advantage do offshore wind farms have over land-based installations?",
          options: ["A They are cheaper to construct", "B They have stronger and more consistent wind", "C They do not affect wildlife", "D They are easier to maintain"],
          correctAnswer: "B",
          explanation: "The passage states offshore farms 'benefit from stronger and more consistent wind patterns than land-based installations'."
        },
        {
          number: 29,
          type: "multiple_choice",
          text: "The passage states that large hydroelectric dams",
          options: ["A are the most environmentally friendly energy source", "B have low carbon emissions but cause other environmental problems", "C are being replaced by smaller systems worldwide", "D generate more electricity than all other renewables combined"],
          correctAnswer: "B",
          explanation: "The passage mentions 'very low carbon emissions during operation' but also lists environmental and social consequences."
        },
        {
          number: 30,
          type: "multiple_choice",
          text: "What is unique about geothermal energy compared to solar and wind?",
          options: ["A It is cheaper to produce", "B It can be used anywhere in the world", "C It provides continuous power regardless of weather", "D It produces no waste at all"],
          correctAnswer: "C",
          explanation: "The passage describes geothermal as 'a reliable and continuous source of power that is not dependent on weather conditions'."
        },
        {
          number: 31,
          type: "multiple_choice",
          text: "According to the passage, what is the main challenge for renewable energy storage?",
          options: ["A Storage technology has not been invented yet", "B Solar and wind energy are variable, requiring systems to match supply and demand", "C Batteries are too dangerous for widespread use", "D Consumers are not willing to pay for storage"],
          correctAnswer: "B",
          explanation: "The passage explains that solar and wind are 'inherently variable' and storage is needed to 'match electricity supply with demand'."
        },
        {
          number: 32,
          type: "multiple_choice",
          text: "The passage suggests that the political influence of fossil fuel companies has",
          options: ["A had no effect on renewable energy adoption", "B accelerated the transition to renewable energy", "C in some cases delayed the move to renewable alternatives", "D been completely eliminated by government policy"],
          correctAnswer: "C",
          explanation: "The passage states 'the political influence of established energy companies has in some cases slowed the adoption of renewable alternatives'."
        },
        {
          number: 33,
          type: "flow_chart_completion",
          text: "Complete the flow chart below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nSolar Energy Development:\nEarly PV panels (1976) → Costs fall by 99% → Modern panels convert 15-22% of sunlight → ________ have achieved over 47% efficiency",
          correctAnswer: "laboratory prototypes",
          explanation: "The passage states 'laboratory prototypes have achieved efficiencies exceeding 47 per cent'."
        },
        {
          number: 34,
          type: "flow_chart_completion",
          text: "New technologies being developed include thin-film cells, ________ cells, and bifacial panels",
          correctAnswer: "perovskite solar",
          explanation: "The passage mentions 'thin-film solar cells, perovskite solar cells, and bifacial panels'."
        },
        {
          number: 35,
          type: "flow_chart_completion",
          text: "Energy Storage Solutions:\nVariable renewable output → Need for storage → Current dominant technology: ________ batteries",
          correctAnswer: "lithium-ion",
          explanation: "The passage states 'Lithium-ion batteries... are currently the dominant storage technology'."
        },
        {
          number: 36,
          type: "flow_chart_completion",
          text: "Alternative storage being researched: solid-state batteries, flow batteries, compressed air, and ________ production",
          correctAnswer: "green hydrogen",
          explanation: "The passage lists 'green hydrogen production' as one of the alternatives being researched."
        },
        {
          number: 37,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe largest modern wind turbines can power approximately ________ homes.",
          correctAnswer: "16,000",
          explanation: "The passage states turbines 'can generate enough electricity to power approximately 16,000 homes'."
        },
        {
          number: 38,
          type: "sentence_completion",
          text: "Hydroelectric power accounts for about ________ of the world's electricity production.",
          correctAnswer: "16 per cent",
          explanation: "The passage states hydroelectric power accounts for 'approximately 16 per cent of global electricity generation'."
        },
        {
          number: 39,
          type: "sentence_completion",
          text: "Iceland generates roughly ________ of its electricity from geothermal energy.",
          correctAnswer: "30 per cent",
          explanation: "The passage states Iceland 'generates approximately 30 per cent of its electricity from geothermal sources'."
        },
        {
          number: 40,
          type: "sentence_completion",
          text: "Global investment in renewable energy was more than ________ in 2022.",
          correctAnswer: "$300 billion",
          explanation: "The passage states 'Global investment in renewable energy exceeded $300 billion in 2022'."
        }
      ]
    }
  ]
};
