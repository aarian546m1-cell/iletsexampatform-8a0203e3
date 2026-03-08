import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_25: ReadingTest = {
  id: 25,
  passages: [
    {
      title: "The History of Maps",
      text: `Maps are among the oldest and most universal forms of human communication, predating written language by thousands of years. The impulse to represent spatial relationships — the locations of resources, the boundaries of territories, the routes between settlements — appears to be a fundamental aspect of human cognition, and evidence of mapmaking has been found in virtually every culture studied by anthropologists and archaeologists.

The oldest known map is a wall painting discovered in the ancient settlement of Çatalhöyük in modern-day Turkey, dating to approximately 6200 BCE. The painting appears to depict the layout of the settlement with an erupting volcano in the background, though some scholars dispute this interpretation. Clay tablets from ancient Babylon, dating to around 2300 BCE, show more clearly recognisable maps, including a famous example that depicts the world as a flat disc surrounded by water, with Babylon prominently placed at the centre.

The ancient Greeks made transformative contributions to cartography. Anaximander of Miletus, writing in the sixth century BCE, is credited with producing the first map based on mathematical principles rather than religious or mythological conceptions. Eratosthenes, working at the Library of Alexandria in the third century BCE, calculated the circumference of the Earth with remarkable accuracy using the angles of shadows at different locations, arriving at a figure only slightly larger than the modern accepted value. Claudius Ptolemy, writing in the second century CE, produced the Geographia, a comprehensive treatise that included instructions for projecting the curved surface of the Earth onto a flat plane — a challenge that continues to occupy cartographers today.

During the medieval period in Europe, religious considerations dominated cartography. Mappa mundi — literally "cloths of the world" — placed Jerusalem at the centre and organised geographic information according to theological principles rather than empirical observation. The most famous surviving example, the Hereford Mappa Mundi created around 1300, is a remarkable work of art and theology but bears little resemblance to the physical geography of the Earth. Meanwhile, Arabic and Chinese cartographers produced maps of considerably greater geographic accuracy during this period.

The Age of Exploration in the fifteenth and sixteenth centuries drove a revolution in European cartography. As Portuguese and Spanish navigators charted the coastlines of Africa, Asia, and the Americas, cartographers struggled to incorporate vast quantities of new geographic information into their maps. Gerardus Mercator's world map of 1569 introduced the cylindrical projection that bears his name, which represented lines of constant compass bearing as straight lines — an innovation of enormous practical value for maritime navigation, despite its well-known distortion of the relative sizes of landmasses near the poles.

The development of aerial photography in the early twentieth century and satellite remote sensing from the 1960s onward transformed cartography from an art reliant on ground-level observation into a science capable of mapping the entire Earth with extraordinary precision. The Global Positioning System, originally developed by the United States military and made fully available for civilian use in 2000, enabled anyone with an inexpensive receiver to determine their location on Earth's surface to within a few metres.

The digital revolution has democratised mapmaking on an unprecedented scale. Geographic information systems allow vast quantities of spatial data to be stored, analysed, and visualised in ways that would have been inconceivable to earlier generations of cartographers. Platforms such as Google Maps and OpenStreetMap have placed detailed, interactive maps in the hands of billions of users worldwide, while smartphone navigation applications have fundamentally altered how people interact with and move through geographic space.`,
      questions: [
        { number: 1, type: "multiple_choice", text: "Where was the oldest known map discovered?", options: ["A. Ancient Babylon", "B. The Library of Alexandria", "C. Çatalhöyük in Turkey", "D. Medieval Europe"], correctAnswer: "C", explanation: "The passage states the oldest known map was found in Çatalhöyük." },
        { number: 2, type: "multiple_choice", text: "What did Eratosthenes calculate?", options: ["A. The distance between the Earth and the Moon", "B. The circumference of the Earth", "C. The depth of the Mediterranean Sea", "D. The height of the Pyramids"], correctAnswer: "B", explanation: "The passage states he 'calculated the circumference of the Earth'." },
        { number: 3, type: "multiple_choice", text: "What practical advantage did Mercator's projection offer?", options: ["A. It showed landmass sizes accurately", "B. It was easier to print than other maps", "C. Lines of constant compass bearing appeared as straight lines", "D. It could be used for aviation"], correctAnswer: "C", explanation: "The passage describes this as its key innovation for maritime navigation." },
        { number: 4, type: "multiple_choice", text: "When was GPS made fully available for civilian use?", options: ["A. 1969", "B. 1985", "C. 1995", "D. 2000"], correctAnswer: "D", explanation: "The passage states 'made fully available for civilian use in 2000'." },
        { number: 5, type: "multiple_choice", text: "What did medieval European mappa mundi place at the centre?", options: ["A. Rome", "B. Jerusalem", "C. Constantinople", "D. Athens"], correctAnswer: "B", explanation: "The passage states they 'placed Jerusalem at the centre'." },
        { number: 6, type: "sentence_completion", text: "The Çatalhöyük wall painting dates to approximately ________ BCE.", correctAnswer: "6200", explanation: "Directly stated in the passage." },
        { number: 7, type: "sentence_completion", text: "Babylonian clay tablets depicted the world as a flat ________ surrounded by water.", correctAnswer: "disc", explanation: "The passage states 'the world as a flat disc surrounded by water'." },
        { number: 8, type: "sentence_completion", text: "Anaximander is credited with the first map based on ________ principles.", correctAnswer: "mathematical", explanation: "The passage states 'the first map based on mathematical principles'." },
        { number: 9, type: "sentence_completion", text: "Ptolemy's Geographia included instructions for projecting the ________ surface of the Earth onto a flat plane.", correctAnswer: "curved", explanation: "The passage states 'projecting the curved surface of the Earth'." },
        { number: 10, type: "sentence_completion", text: "The Hereford Mappa Mundi was created around ________.", correctAnswer: "1300", explanation: "Directly stated in the passage." },
        { number: 11, type: "sentence_completion", text: "Mercator's projection distorts the relative sizes of landmasses near the ________.", correctAnswer: "poles", explanation: "The passage mentions 'distortion of the relative sizes of landmasses near the poles'." },
        { number: 12, type: "sentence_completion", text: "GPS was originally developed by the United States ________.", correctAnswer: "military", explanation: "The passage states it was 'originally developed by the United States military'." },
        { number: 13, type: "sentence_completion", text: "________ information systems allow spatial data to be stored, analysed, and visualised.", correctAnswer: "Geographic", explanation: "The passage mentions 'Geographic information systems'." },
      ],
    },
    {
      title: "Renewable Energy in Developing Countries",
      text: `Paragraph A
Access to reliable and affordable energy is fundamental to economic development, yet approximately seven hundred and seventy million people worldwide — predominantly in sub-Saharan Africa and South Asia — still lack access to electricity. For decades, expanding energy access in developing countries meant building centralised power plants, typically fuelled by coal or natural gas, and extending transmission grids to reach unserved populations. However, the declining cost of renewable energy technologies, particularly solar photovoltaics and wind turbines, is opening alternative pathways that could leapfrog traditional fossil fuel infrastructure.

Paragraph B
Solar energy has emerged as a transformative force in developing countries. The cost of solar photovoltaic modules has fallen by approximately ninety percent since 2010, making solar the cheapest source of new electricity generation in most parts of the world. In regions with abundant sunshine but limited grid infrastructure, off-grid solar systems — ranging from small solar lanterns and home systems to larger mini-grids serving entire communities — provide a practical and affordable means of electrification. Pay-as-you-go financing models, enabled by mobile phone payment platforms, have made solar home systems accessible to households that could not afford the upfront purchase cost.

Paragraph C
Wind energy is also expanding rapidly in developing countries, particularly for grid-connected power generation. Countries such as India, Brazil, and South Africa have installed tens of thousands of megawatts of wind power capacity, diversifying their energy supply and reducing dependence on imported fossil fuels. Offshore wind technology, while currently concentrated in Europe and China, holds significant potential for coastal developing nations. Small-scale wind turbines can complement solar systems in hybrid mini-grids, providing electricity generation during nighttime hours and cloudy periods when solar output is reduced.

Paragraph D
The benefits of renewable energy in developing countries extend beyond electricity access. Replacing kerosene lamps and wood-burning stoves with solar-powered lighting and clean cooking solutions reduces indoor air pollution, which the World Health Organization estimates causes approximately three point eight million premature deaths annually. Solar-powered water pumps enable irrigation in regions where agriculture is constrained by water access, boosting crop yields and food security. Renewable energy installations create local employment opportunities in manufacturing, installation, and maintenance, contributing to economic development in rural communities.

Paragraph E
Despite rapid progress, significant barriers to renewable energy deployment remain. Weak regulatory frameworks, political instability, and corruption deter private investment in many developing countries. Technical capacity for installing and maintaining renewable energy systems is often limited, and the intermittent nature of solar and wind power requires energy storage solutions that add cost and complexity. Access to financing remains a critical bottleneck, as many renewable energy projects in developing countries are perceived as high-risk by international investors.

Paragraph F
International climate finance and development assistance play a crucial role in overcoming these barriers. The Green Climate Fund, established under the United Nations Framework Convention on Climate Change, provides financing for renewable energy projects in developing countries. Multilateral development banks, including the World Bank and the African Development Bank, have significantly increased their renewable energy lending. Technology transfer programmes help build local manufacturing capacity and technical expertise. As the global community intensifies efforts to address climate change while expanding energy access, renewable energy in developing countries will remain a critical intersection of development and environmental policy.`,
      questions: (() => {
        const headings = [
          "i. The falling cost of solar power and innovative financing",
          "ii. Health and agricultural benefits of clean energy",
          "iii. The energy access challenge in the developing world",
          "iv. International financial support for clean energy",
          "v. Growing wind power capacity across developing nations",
          "vi. Obstacles to renewable energy adoption",
          "vii. The environmental impact of fossil fuels",
          "viii. The role of nuclear energy in developing countries",
        ];
        return [
          { number: 14, type: "matching_headings" as const, text: "Paragraph A", options: headings, correctAnswer: "iii", explanation: "Paragraph A discusses the lack of energy access and the potential for renewables." },
          { number: 15, type: "matching_headings" as const, text: "Paragraph B", options: headings, correctAnswer: "i", explanation: "Paragraph B discusses solar cost reductions and pay-as-you-go models." },
          { number: 16, type: "matching_headings" as const, text: "Paragraph C", options: headings, correctAnswer: "v", explanation: "Paragraph C discusses wind energy expansion in developing countries." },
          { number: 17, type: "matching_headings" as const, text: "Paragraph D", options: headings, correctAnswer: "ii", explanation: "Paragraph D discusses health benefits and agricultural improvements." },
          { number: 18, type: "matching_headings" as const, text: "Paragraph E", options: headings, correctAnswer: "vi", explanation: "Paragraph E discusses barriers to deployment." },
          { number: 19, type: "matching_headings" as const, text: "Paragraph F", options: headings, correctAnswer: "iv", explanation: "Paragraph F discusses international climate finance." },
          { number: 20, type: "table_completion" as const, text: "Approximately ________ million people worldwide lack access to electricity.", correctAnswer: "seven hundred and seventy", explanation: "The passage states 'approximately seven hundred and seventy million people'." },
          { number: 21, type: "table_completion" as const, text: "Solar photovoltaic module costs have fallen by approximately ________ percent since 2010.", correctAnswer: "ninety", explanation: "Directly stated in the passage." },
          { number: 22, type: "table_completion" as const, text: "Indoor air pollution causes approximately ________ million premature deaths annually.", correctAnswer: "three point eight", explanation: "The passage states 'approximately three point eight million premature deaths'." },
          { number: 23, type: "short_answer" as const, text: "What type of payment platforms enable pay-as-you-go solar financing?", correctAnswer: "mobile phone", explanation: "The passage mentions 'mobile phone payment platforms'." },
          { number: 24, type: "short_answer" as const, text: "What fund was established under the UN Framework Convention on Climate Change?", correctAnswer: "Green Climate Fund", explanation: "Directly named in the passage." },
          { number: 25, type: "short_answer" as const, text: "What do solar-powered water pumps enable in water-constrained regions?", correctAnswer: "irrigation", explanation: "The passage states they 'enable irrigation in regions where agriculture is constrained'." },
          { number: 26, type: "short_answer" as const, text: "What is perceived as a critical bottleneck for renewable energy projects?", correctAnswer: "access to financing", explanation: "The passage states 'Access to financing remains a critical bottleneck'." },
        ];
      })(),
    },
    {
      title: "The Psychology of Decision Making",
      text: `Paragraph A
Human decision-making is a complex cognitive process that has been studied extensively across psychology, economics, neuroscience, and behavioural science. Traditional economic models assumed that individuals make decisions rationally, carefully weighing costs and benefits to maximise their utility. However, decades of research have revealed that human decisions are frequently influenced by cognitive biases, emotional states, social pressures, and environmental cues that lead to systematic deviations from purely rational behaviour.

Paragraph B
One of the most influential frameworks for understanding decision-making was developed by Daniel Kahneman, who proposed that the human mind operates through two distinct systems. System 1 is fast, automatic, and intuitive, handling routine decisions and snap judgements with minimal conscious effort. System 2 is slow, deliberate, and analytical, engaged when complex reasoning or careful calculation is required. Most everyday decisions are made by System 1, which, while efficient, is prone to systematic errors because it relies on mental shortcuts known as heuristics rather than thorough analysis.

Paragraph C
The anchoring effect is one of the most robust and well-documented cognitive biases. When making estimates or decisions, people tend to be disproportionately influenced by the first piece of information they encounter — the "anchor" — even when that information is arbitrary or irrelevant. In one classic experiment, participants were asked to spin a wheel that randomly stopped at either the number ten or sixty-five, and were then asked to estimate the percentage of African countries in the United Nations. Those who spun sixty-five gave significantly higher estimates than those who spun ten, despite the obvious irrelevance of the wheel's outcome to the question.

Paragraph D
Framing effects demonstrate that the way information is presented can dramatically influence decisions, even when the underlying facts are identical. Research by Kahneman and Tversky showed that people respond differently to options described in terms of gains versus losses. When told that a medical treatment has a ninety percent survival rate, most people view it favourably; when told the same treatment has a ten percent mortality rate, responses are significantly more negative — despite the two descriptions being mathematically equivalent. This sensitivity to framing has profound implications for communication in healthcare, public policy, marketing, and financial services.

Paragraph E
Social influences on decision-making are pervasive and powerful. Conformity research, pioneered by Solomon Asch in the 1950s, demonstrated that individuals frequently adjust their judgements to align with group consensus, even when the group is clearly wrong. The phenomenon of groupthink, identified by Irving Janis, describes how cohesive groups may suppress dissenting opinions and fail to critically evaluate alternatives, leading to poor collective decisions. More recently, research on social proof has shown that people routinely use the behaviour of others as a guide for their own actions, particularly in situations of uncertainty.

Paragraph F
The emerging field of behavioural nudging applies insights from decision-making research to design environments that guide people toward better choices without restricting their freedom. Nudges — subtle changes to the choice architecture — have been deployed in diverse domains, from increasing retirement savings participation by making enrolment automatic rather than opt-in, to reducing energy consumption by providing households with comparisons of their usage to that of their neighbours. Governments around the world have established behavioural insights teams to apply these principles to public policy challenges.

Paragraph G
Understanding decision-making biases has important implications for artificial intelligence and algorithmic decision systems. AI systems trained on historical human decisions may inherit and amplify existing biases, producing outcomes that are systematically unfair to certain groups. Designing AI systems that make decisions more equitably than humans requires both technical approaches — such as algorithmic fairness constraints — and governance frameworks that ensure accountability and transparency. As automated decision-making becomes increasingly prevalent in areas such as hiring, lending, and criminal justice, addressing these challenges is both a technical and ethical imperative.`,
      questions: [
        { number: 27, type: "matching_information", text: "An experiment using a spinning wheel to demonstrate a cognitive bias", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", explanation: "Paragraph C describes the wheel experiment illustrating the anchoring effect." },
        { number: 28, type: "matching_information", text: "How presenting the same information differently changes people's responses", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", explanation: "Paragraph D discusses framing effects." },
        { number: 29, type: "matching_information", text: "The risk of AI systems reproducing human biases", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", explanation: "Paragraph G discusses AI inheriting decision-making biases." },
        { number: 30, type: "matching_information", text: "Research showing people change their views to match group opinion", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", explanation: "Paragraph E discusses Asch's conformity research." },
        { number: 31, type: "matching_information", text: "Practical applications of decision science in public policy", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", explanation: "Paragraph F discusses behavioural nudging in public policy." },
        { number: 32, type: "matching_information", text: "The distinction between fast and slow thinking processes", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", explanation: "Paragraph B describes System 1 and System 2 thinking." },
        { number: 33, type: "multiple_choice", text: "According to the passage, System 1 thinking is:", options: ["A. Slow and analytical", "B. Fast and intuitive", "C. Used only for complex decisions", "D. Free from cognitive biases"], correctAnswer: "B", explanation: "System 1 is described as 'fast, automatic, and intuitive'." },
        { number: 34, type: "multiple_choice", text: "What is an example of a nudge mentioned in the passage?", options: ["A. Banning unhealthy food options", "B. Making retirement savings enrolment automatic", "C. Increasing taxes on energy consumption", "D. Requiring financial literacy courses"], correctAnswer: "B", explanation: "The passage mentions 'making enrolment automatic rather than opt-in'." },
        { number: 35, type: "summary_completion", text: "Traditional economic models assumed individuals make decisions ________, weighing costs and benefits.", correctAnswer: "rationally", explanation: "The passage states models 'assumed that individuals make decisions rationally'." },
        { number: 36, type: "summary_completion", text: "The anchoring effect occurs when people are influenced by the first piece of ________ they encounter.", correctAnswer: "information", explanation: "The passage describes being 'influenced by the first piece of information they encounter'." },
        { number: 37, type: "summary_completion", text: "Solomon Asch's research demonstrated that individuals adjust their judgements to align with group ________.", correctAnswer: "consensus", explanation: "The passage states people 'adjust their judgements to align with group consensus'." },
        { number: 38, type: "summary_completion", text: "Irving Janis identified the phenomenon of ________, where cohesive groups suppress dissenting opinions.", correctAnswer: "groupthink", explanation: "The passage describes 'the phenomenon of groupthink, identified by Irving Janis'." },
        { number: 39, type: "summary_completion", text: "Nudges are subtle changes to the choice ________ that guide better decisions.", correctAnswer: "architecture", explanation: "The passage describes 'subtle changes to the choice architecture'." },
        { number: 40, type: "summary_completion", text: "AI systems trained on historical human decisions may inherit and ________ existing biases.", correctAnswer: "amplify", explanation: "The passage states AI 'may inherit and amplify existing biases'." },
      ],
    },
  ],
};
