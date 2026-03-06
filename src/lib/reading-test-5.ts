import { ReadingTest } from "./reading-tests-data";

const p1Headings = [
  "i. The race to reach the Moon",
  "ii. Early rocket science and its pioneers",
  "iii. Commercial ventures in low Earth orbit",
  "iv. Robotic explorers of the solar system",
  "v. The International Space Station experiment",
  "vi. Ambitious plans for human settlement on Mars",
  "vii. Military origins of space technology",
  "viii. The search for extraterrestrial life",
];

const p3Paragraphs = ["A", "B", "C", "D", "E", "F", "G"];

const p3Features = [
  "A Passive solar design",
  "B Green roofs",
  "C Cross-laminated timber",
  "D Building-integrated photovoltaics",
];

export const READING_TEST_5: ReadingTest = {
  id: 5,
  passages: [
    {
      title: "Space Exploration: Past and Future",
      text: `Paragraph A
The dream of space travel is as old as civilisation itself, but the practical foundations were laid in the early twentieth century by pioneers such as Konstantin Tsiolkovsky, Robert Goddard, and Hermann Oberth. Tsiolkovsky, a Russian schoolteacher, published theoretical work on multi-stage rockets and orbital mechanics as early as 1903. Goddard, an American physicist, launched the world's first liquid-fuelled rocket in 1926. Their work, initially dismissed by many as fanciful, provided the scientific basis for everything that followed.

Paragraph B
The Space Age began in earnest on 4 October 1957, when the Soviet Union launched Sputnik 1, the first artificial satellite, into orbit around the Earth. This achievement shocked the Western world and triggered a fierce competition between the superpowers — the "Space Race." The rivalry culminated on 20 July 1969, when NASA astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon during the Apollo 11 mission, watched by an estimated 600 million television viewers worldwide.

Paragraph C
Following the Apollo programme, attention shifted to long-duration spaceflight in low Earth orbit. The Soviet Mir station, operational from 1986 to 2001, demonstrated that humans could live and work in space for extended periods. The International Space Station (ISS), a collaborative project involving five space agencies, has been continuously occupied since November 2000. Research aboard the ISS has contributed to fields ranging from materials science and fluid physics to human physiology and Earth observation.

Paragraph D
Robotic spacecraft have ventured far beyond the reach of human explorers. NASA's Voyager probes, launched in 1977, have now entered interstellar space, carrying golden records with sounds and images of life on Earth. The Mars rovers — Spirit, Opportunity, Curiosity, and Perseverance — have transformed our understanding of the Red Planet's geology, climate history, and potential to harbour life. The James Webb Space Telescope, launched in 2021, is providing unprecedented views of the early universe.

Paragraph E
The most ambitious proposals for the future involve establishing a permanent human presence on Mars. SpaceX, the private aerospace company founded by Elon Musk, is developing the Starship launch system with the explicit goal of enabling Mars colonisation. NASA's Artemis programme aims to return astronauts to the Moon as a stepping stone for eventual Mars missions. The challenges are immense — including radiation exposure, psychological stress, and the need for self-sustaining life-support systems — but advocates argue that becoming a multi-planetary species is essential for humanity's long-term survival.

Paragraph F
The commercialisation of space has accelerated dramatically in recent years. Companies such as SpaceX, Blue Origin, and Rocket Lab have reduced launch costs through reusable rocket technology, opening access to orbit for a growing range of customers including satellite operators, scientific researchers, and even space tourists. This commercial ecosystem is expected to expand further as in-space manufacturing, asteroid mining, and orbital infrastructure become technically and economically feasible.`,
      questions: [
        { number: 1, type: "matching_headings", text: "Paragraph A", options: p1Headings, correctAnswer: "ii" },
        { number: 2, type: "matching_headings", text: "Paragraph B", options: p1Headings, correctAnswer: "i" },
        { number: 3, type: "matching_headings", text: "Paragraph C", options: p1Headings, correctAnswer: "v" },
        { number: 4, type: "matching_headings", text: "Paragraph D", options: p1Headings, correctAnswer: "iv" },
        { number: 5, type: "matching_headings", text: "Paragraph E", options: p1Headings, correctAnswer: "vi" },
        { number: 6, type: "matching_headings", text: "Paragraph F", options: p1Headings, correctAnswer: "iii" },
        { number: 7, type: "true_false_not_given", text: "Tsiolkovsky published theoretical work on rockets before Goddard's first launch.", correctAnswer: "True", explanation: "Tsiolkovsky published in 1903; Goddard launched in 1926." },
        { number: 8, type: "true_false_not_given", text: "Sputnik 1 was launched by the United States.", correctAnswer: "False", explanation: "Sputnik 1 was launched by the Soviet Union." },
        { number: 9, type: "true_false_not_given", text: "Over one billion people watched the Apollo 11 Moon landing.", correctAnswer: "False", explanation: "The passage states an estimated 600 million viewers." },
        { number: 10, type: "true_false_not_given", text: "The ISS has been continuously occupied since 2000.", correctAnswer: "True" },
        { number: 11, type: "true_false_not_given", text: "The Voyager probes were launched in 1979.", correctAnswer: "False", explanation: "They were launched in 1977." },
        { number: 12, type: "true_false_not_given", text: "SpaceX was the first company to send tourists to space.", correctAnswer: "Not Given", explanation: "The passage mentions space tourists but does not specify which company was first." },
        { number: 13, type: "true_false_not_given", text: "Asteroid mining is currently profitable.", correctAnswer: "Not Given", explanation: "The passage mentions it as a future possibility, not current reality." },
      ],
    },
    {
      title: "The Impact of Social Media on Society",
      text: `Social media platforms have fundamentally transformed the way people communicate, consume information, and form communities. In barely two decades, services such as Facebook, Twitter, Instagram, and TikTok have attracted billions of users worldwide, creating unprecedented opportunities for connection and self-expression while simultaneously raising serious concerns about privacy, mental health, and the quality of public discourse.

The most frequently cited benefit of social media is its ability to connect people across geographical and social boundaries. Families separated by migration can maintain daily contact through video calls and messaging. Activists in authoritarian regimes can organise protests and share evidence of human rights abuses with the global community. Small businesses can reach customers directly without the expense of traditional advertising, and artists can build audiences without relying on established gatekeepers.

However, a growing body of research has linked heavy social media use to negative mental health outcomes, particularly among adolescents. Studies have found associations between excessive screen time and increased rates of anxiety, depression, loneliness, and poor sleep quality. The constant exposure to curated, idealised representations of others' lives can foster damaging social comparisons and erode self-esteem. Cyberbullying, facilitated by the anonymity and reach of online platforms, has emerged as a serious and sometimes tragic problem.

The spread of misinformation and disinformation on social media poses a significant threat to democratic societies. False or misleading content can propagate rapidly through networks, reaching millions of people before fact-checkers can respond. During elections and public health crises, the deliberate manipulation of information has undermined trust in institutions, distorted public debate, and in some cases contributed to real-world violence.

Social media companies have faced increasing pressure from governments, civil society organisations, and their own users to address these harms. Measures taken include algorithmic adjustments to reduce the visibility of harmful content, partnerships with independent fact-checking organisations, and the introduction of digital literacy tools. Some jurisdictions have introduced or proposed legislation requiring platforms to remove illegal content promptly and to be more transparent about their algorithms and data practices.

The debate over how to regulate social media reflects a fundamental tension between the desire to protect users — especially children — and the commitment to preserving free expression and open communication. Finding the right balance will require ongoing dialogue between technology companies, governments, researchers, and civil society.`,
      questions: [
        { number: 14, type: "multiple_choice", text: "What is described as the most frequently cited benefit of social media?", options: ["A Entertainment value", "B Connecting people across boundaries", "C Educational resources", "D Economic growth"], correctAnswer: "B" },
        { number: 15, type: "multiple_choice", text: "Which group is particularly affected by negative mental health outcomes from social media?", options: ["A Elderly people", "B University students", "C Adolescents", "D Working professionals"], correctAnswer: "C" },
        { number: 16, type: "multiple_choice", text: "What has undermined trust in institutions according to the passage?", options: ["A Excessive regulation", "B Deliberate manipulation of information", "C High subscription costs", "D Technical failures"], correctAnswer: "B" },
        { number: 17, type: "multiple_choice", text: "Social media companies have partnered with:", options: ["A Government agencies only", "B Independent fact-checking organisations", "C Military organisations", "D Educational institutions exclusively"], correctAnswer: "B" },
        { number: 18, type: "multiple_choice", text: "The debate over social media regulation involves tension between:", options: ["A Profit and innovation", "B User protection and free expression", "C Speed and accuracy", "D Privacy and transparency"], correctAnswer: "B" },
        { number: 19, type: "summary_completion", text: "Small businesses can reach customers without the expense of traditional _______.", correctAnswer: "advertising" },
        { number: 20, type: "summary_completion", text: "Constant exposure to idealised representations can foster damaging social _______.", correctAnswer: "comparisons" },
        { number: 21, type: "summary_completion", text: "False content can reach millions before _______ can respond.", correctAnswer: "fact-checkers" },
        { number: 22, type: "summary_completion", text: "Some jurisdictions have proposed legislation requiring platforms to remove _______ content.", correctAnswer: "illegal" },
        { number: 23, type: "summary_completion", text: "Cyberbullying is facilitated by the _______ and reach of online platforms.", correctAnswer: "anonymity" },
        { number: 24, type: "flow_chart_completion", text: "Social media users are exposed to _______ representations of others' lives.", correctAnswer: "idealised" },
        { number: 25, type: "flow_chart_completion", text: "This leads to damaging comparisons that erode _______.", correctAnswer: "self-esteem" },
        { number: 26, type: "flow_chart_completion", text: "The result can include increased anxiety, depression, and poor _______ quality.", correctAnswer: "sleep" },
      ],
    },
    {
      title: "Sustainable Architecture",
      text: `Paragraph A
The built environment is responsible for approximately 40 percent of global energy consumption and nearly one-third of greenhouse gas emissions. As the world's population continues to urbanise — with projections suggesting that 68 percent of people will live in cities by 2050 — the design, construction, and operation of buildings have become critical fronts in the fight against climate change. Sustainable architecture seeks to minimise the environmental impact of buildings throughout their entire life cycle, from raw material extraction to demolition and recycling.

Paragraph B
Passive solar design is one of the oldest and most effective strategies for reducing a building's energy demand. By carefully orienting a building to maximise solar gain in winter and minimise it in summer, architects can dramatically reduce the need for mechanical heating and cooling. Large south-facing windows, thermal mass in floors and walls, and well-insulated building envelopes are key elements of this approach, which can reduce energy consumption for climate control by 50 to 70 percent.

Paragraph C
Green roofs — rooftops covered with vegetation and growing medium — offer multiple environmental benefits. They provide natural insulation, reducing heat loss in winter and heat gain in summer. They absorb rainfall, reducing stormwater runoff and easing pressure on urban drainage systems. They create habitats for birds and insects, contributing to urban biodiversity. In cities suffering from the "heat island effect," where built-up areas are significantly warmer than surrounding countryside, green roofs can lower ambient temperatures by several degrees.

Paragraph D
The choice of building materials has a profound impact on a structure's carbon footprint. Concrete and steel, the dominant materials in modern construction, are extremely energy-intensive to produce. Cross-laminated timber (CLT) has emerged as a promising alternative for medium-rise buildings. CLT panels are manufactured from sustainably harvested wood, are lighter than concrete, and actually store carbon rather than releasing it. Buildings constructed with CLT can achieve a significantly lower embodied carbon footprint than conventional structures.

Paragraph E
Building-integrated photovoltaics (BIPV) represent a convergence of energy generation and architectural design. Unlike conventional solar panels mounted on existing rooftops, BIPV systems replace conventional building materials — roof tiles, façade cladding, or window glazing — with photovoltaic elements that generate electricity while serving their normal architectural function. This dual-purpose approach can make solar energy generation more aesthetically acceptable and economically viable, particularly in urban environments where available roof space is limited.

Paragraph F
Certification schemes such as LEED, BREEAM, and Passive House have established standardised benchmarks for sustainable building performance. These frameworks assess buildings across multiple criteria, including energy efficiency, water use, indoor environmental quality, and materials selection. While compliance can increase initial construction costs by 2 to 10 percent, studies consistently show that green buildings deliver lower operating costs, higher occupant productivity, and stronger property values over their lifetimes.

Paragraph G
The transition to sustainable architecture requires action at every level — from individual architects and builders to municipal governments and international bodies. Building codes must be updated to reflect current climate science, financial incentives must be realigned to favour low-carbon construction, and education and training programmes must equip professionals with the knowledge and skills to design and deliver the built environment of the future.`,
      questions: [
        { number: 27, type: "matching_information", text: "Statistics on the built environment's contribution to global emissions", options: p3Paragraphs, correctAnswer: "A" },
        { number: 28, type: "matching_information", text: "A description of how vegetation on buildings helps manage rainfall", options: p3Paragraphs, correctAnswer: "C" },
        { number: 29, type: "matching_information", text: "The financial costs and benefits of green building certification", options: p3Paragraphs, correctAnswer: "F" },
        { number: 30, type: "matching_information", text: "A material that stores carbon rather than releasing it", options: p3Paragraphs, correctAnswer: "D" },
        { number: 31, type: "matching_information", text: "Solar elements that replace conventional building materials", options: p3Paragraphs, correctAnswer: "E" },
        { number: 32, type: "matching_information", text: "The need for updated building codes and professional training", options: p3Paragraphs, correctAnswer: "G" },
        { number: 33, type: "matching_features", text: "Can reduce energy consumption for climate control by 50 to 70 percent.", options: p3Features, correctAnswer: "A" },
        { number: 34, type: "matching_features", text: "Can lower ambient temperatures in urban areas by several degrees.", options: p3Features, correctAnswer: "B" },
        { number: 35, type: "matching_features", text: "Has a significantly lower embodied carbon footprint than conventional materials.", options: p3Features, correctAnswer: "C" },
        { number: 36, type: "matching_features", text: "Generates electricity while serving an architectural function.", options: p3Features, correctAnswer: "D" },
        { number: 37, type: "sentence_completion", text: "Buildings account for approximately _______ percent of global energy consumption.", correctAnswer: "40" },
        { number: 38, type: "sentence_completion", text: "By 2050, an estimated 68 percent of people will live in _______.", correctAnswer: "cities" },
        { number: 39, type: "sentence_completion", text: "Green building compliance can increase initial construction costs by 2 to _______ percent.", correctAnswer: "10" },
        { number: 40, type: "sentence_completion", text: "CLT panels are manufactured from sustainably harvested _______.", correctAnswer: "wood" },
      ],
    },
  ],
};
