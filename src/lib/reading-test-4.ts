import { ReadingTest } from "./reading-tests-data";

const p1Headings = [
  "i. The global campaign to eliminate smallpox",
  "ii. Jenner's revolutionary experiment",
  "iii. Opposition and controversy surrounding vaccination",
  "iv. Modern vaccine development techniques",
  "v. Ancient practices of disease prevention",
  "vi. The conquest of poliomyelitis",
  "vii. Vaccination and economic development",
  "viii. The role of international organisations",
];

const p2Paragraphs = ["A", "B", "C", "D", "E", "F"];

const p3Features = [
  "A The Easterlin Paradox",
  "B Gross National Happiness",
  "C The World Happiness Report",
  "D Subjective well-being research",
];

export const READING_TEST_4: ReadingTest = {
  id: 4,
  passages: [
    {
      title: "The History of Vaccination",
      text: `Paragraph A
Long before the scientific basis of immunisation was understood, people in various parts of the world practised forms of deliberate disease prevention. In tenth-century China, physicians blew powdered smallpox scabs into the nostrils of healthy individuals to induce a mild form of the disease and subsequent immunity. Similar practices, known as variolation, were employed in the Ottoman Empire and introduced to Britain in the early eighteenth century by Lady Mary Wortley Montagu, who had witnessed the technique during her time in Istanbul.

Paragraph B
The modern era of vaccination began in 1796, when English country doctor Edward Jenner conducted an experiment that would change the course of medical history. Jenner inoculated eight-year-old James Phipps with material taken from a cowpox lesion on the hand of a milkmaid, Sarah Nelmes. When Phipps was subsequently exposed to smallpox, he showed no signs of the disease. Jenner published his findings in 1798, coining the term "vaccine" from the Latin word "vacca," meaning cow.

Paragraph C
Jenner's work was met with both enthusiasm and fierce resistance. While many physicians embraced the new technique, others questioned its safety and efficacy. Religious groups argued that vaccination was unnatural and contrary to divine will. Despite this opposition, the British government made smallpox vaccination compulsory for infants in 1853, establishing a precedent for public health legislation that would be followed by many countries.

Paragraph D
The twentieth century saw remarkable advances in vaccine development. Louis Pasteur's work on rabies and anthrax vaccines in the 1880s laid the groundwork for a scientific understanding of how immunity works. The development of vaccines against diphtheria, tetanus, pertussis, and tuberculosis in the early 1900s dramatically reduced childhood mortality rates in industrialised countries.

Paragraph E
The battle against poliomyelitis (polio) stands as one of the great triumphs of modern medicine. Jonas Salk's injectable vaccine, introduced in 1955, and Albert Sabin's oral vaccine, licensed in 1961, together reduced global polio cases from an estimated 350,000 in 1988 to fewer than 200 by 2020. The Global Polio Eradication Initiative, launched by the World Health Organization in 1988, aims to make polio only the second human disease — after smallpox — to be completely eliminated.`,
      questions: [
        { number: 1, type: "matching_headings", text: "Paragraph A", options: p1Headings, correctAnswer: "v" },
        { number: 2, type: "matching_headings", text: "Paragraph B", options: p1Headings, correctAnswer: "ii" },
        { number: 3, type: "matching_headings", text: "Paragraph C", options: p1Headings, correctAnswer: "iii" },
        { number: 4, type: "matching_headings", text: "Paragraph D", options: p1Headings, correctAnswer: "iv" },
        { number: 5, type: "matching_headings", text: "Paragraph E", options: p1Headings, correctAnswer: "vi" },
        { number: 6, type: "multiple_choice", text: "In tenth-century China, disease prevention involved:", options: ["A Drinking herbal remedies", "B Blowing powdered scabs into nostrils", "C Bathing in hot springs", "D Applying ointments to the skin"], correctAnswer: "B" },
        { number: 7, type: "multiple_choice", text: "Jenner's vaccine material came from:", options: ["A Smallpox lesions", "B Cowpox lesions", "C Rabies samples", "D Anthrax cultures"], correctAnswer: "B" },
        { number: 8, type: "multiple_choice", text: "The word 'vaccine' derives from the Latin word for:", options: ["A Disease", "B Needle", "C Cow", "D Protection"], correctAnswer: "C" },
        { number: 9, type: "multiple_choice", text: "When did Britain make smallpox vaccination compulsory for infants?", options: ["A 1798", "B 1832", "C 1853", "D 1880"], correctAnswer: "C" },
        { number: 10, type: "multiple_choice", text: "Who developed the injectable polio vaccine?", options: ["A Edward Jenner", "B Louis Pasteur", "C Albert Sabin", "D Jonas Salk"], correctAnswer: "D" },
        { number: 11, type: "multiple_choice", text: "How many global polio cases were there in 1988?", options: ["A 150,000", "B 250,000", "C 350,000", "D 500,000"], correctAnswer: "C" },
        { number: 12, type: "multiple_choice", text: "Who introduced variolation to Britain?", options: ["A Edward Jenner", "B Lady Mary Wortley Montagu", "C Louis Pasteur", "D Jonas Salk"], correctAnswer: "B" },
        { number: 13, type: "multiple_choice", text: "What is the aim of the Global Polio Eradication Initiative?", options: ["A To reduce polio cases by half", "B To develop a new polio vaccine", "C To completely eliminate polio", "D To provide treatment for polio patients"], correctAnswer: "C" },
      ],
    },
    {
      title: "Coral Reef Degradation",
      text: `Paragraph A
Coral reefs are among the most biologically diverse ecosystems on Earth, often described as the "rainforests of the sea." Although they cover less than 0.1 percent of the ocean floor, they support approximately 25 percent of all known marine species. Reefs provide essential ecosystem services, including coastal protection from storms and waves, nursery habitats for commercially important fish species, and tourism revenue for coastal communities worldwide.

Paragraph B
The primary builders of coral reefs are tiny animals called coral polyps, which secrete calcium carbonate to form hard external skeletons. Over thousands of years, successive generations of polyps build upon the skeletons of their predecessors, creating the massive limestone structures visible today. This slow growth rate — typically just one to three centimetres per year — means that damage to reefs can take decades or centuries to repair naturally.

Paragraph C
Rising sea temperatures, driven by climate change, pose the most acute threat to coral reefs globally. When water temperatures rise just one to two degrees Celsius above the normal summer maximum, corals undergo bleaching — expelling the symbiotic algae that provide them with colour and up to 90 percent of their energy. Repeated bleaching events, which have become more frequent since the late 1990s, can cause widespread coral mortality.

Paragraph D
Ocean acidification compounds the thermal stress on reefs. As seawater absorbs increasing quantities of atmospheric CO₂, its pH decreases, making it more difficult for corals and other calcifying organisms to build and maintain their calcium carbonate structures. Laboratory studies suggest that coral calcification rates could decline by 20 to 40 percent by the end of this century under high-emission scenarios.

Paragraph E
Local stressors further degrade reef health. Sediment and nutrient runoff from agriculture and coastal development smother coral tissues and fuel algal overgrowth. Destructive fishing practices — including the use of dynamite and cyanide — cause immediate physical damage. Overfishing removes key species such as herbivorous fish that would otherwise keep algal growth in check.

Paragraph F
Restoration efforts are underway in many parts of the world. Coral gardening — growing coral fragments in underwater nurseries before transplanting them onto degraded reefs — has shown promising results in the Caribbean and Pacific. Scientists are also investigating selective breeding and assisted gene flow to develop coral strains that are more resistant to heat stress. However, experts caution that restoration alone cannot save reefs without addressing the root causes of degradation.`,
      questions: [
        { number: 14, type: "matching_information", text: "The economic and ecological services provided by coral reefs", options: p2Paragraphs, correctAnswer: "A" },
        { number: 15, type: "matching_information", text: "How the chemical composition of seawater affects reef building", options: p2Paragraphs, correctAnswer: "D" },
        { number: 16, type: "matching_information", text: "Human activities that directly damage reefs at a local level", options: p2Paragraphs, correctAnswer: "E" },
        { number: 17, type: "matching_information", text: "The biological process by which reef structures are created", options: p2Paragraphs, correctAnswer: "B" },
        { number: 18, type: "matching_information", text: "Techniques being used to repair damaged reef systems", options: p2Paragraphs, correctAnswer: "F" },
        { number: 19, type: "table_completion", text: "Coral reefs cover less than _______ percent of the ocean floor.", correctAnswer: "0.1" },
        { number: 20, type: "table_completion", text: "Coral polyps secrete _______ to form hard external skeletons.", correctAnswer: "calcium carbonate" },
        { number: 21, type: "table_completion", text: "Coral growth rate is typically one to three _______ per year.", correctAnswer: "centimetres" },
        { number: 22, type: "table_completion", text: "Bleaching occurs when temperatures rise _______ degrees above normal.", correctAnswer: "one to two" },
        { number: 23, type: "table_completion", text: "Coral calcification rates could decline by 20 to _______ percent.", correctAnswer: "40" },
        { number: 24, type: "sentence_completion", text: "Coral gardening involves growing fragments in underwater _______.", correctAnswer: "nurseries" },
        { number: 25, type: "sentence_completion", text: "Herbivorous fish keep _______ growth in check on healthy reefs.", correctAnswer: "algal" },
        { number: 26, type: "sentence_completion", text: "Scientists are investigating selective breeding and assisted _______ flow.", correctAnswer: "gene" },
      ],
    },
    {
      title: "The Economics of Happiness",
      text: `For decades, economists relied on Gross Domestic Product (GDP) as the primary measure of a nation's progress. GDP measures the total monetary value of goods and services produced within a country, and its growth has long been equated with improving living standards. However, a growing body of research suggests that GDP is an inadequate — and sometimes misleading — indicator of human well-being.

In 1974, economist Richard Easterlin published a seminal study revealing what became known as the Easterlin Paradox: while individuals within a country tend to be happier as their income rises, overall happiness levels in wealthy nations had not increased substantially despite decades of economic growth. Easterlin argued that once basic material needs are met, additional income yields diminishing returns in terms of life satisfaction, as people tend to compare their circumstances with those around them rather than judging their situation in absolute terms.

The Kingdom of Bhutan pioneered an alternative approach by adopting Gross National Happiness (GNH) as its guiding development philosophy in the 1970s. GNH measures progress across nine domains, including psychological well-being, health, education, good governance, community vitality, cultural resilience, ecological diversity, time use, and living standards. While critics have questioned whether GNH can be applied universally, the concept has inspired numerous countries and organisations to develop broader measures of societal progress.

Since 2012, the United Nations has published an annual World Happiness Report, ranking countries according to their citizens' self-reported life satisfaction. The report uses survey data combined with six key variables: GDP per capita, social support, healthy life expectancy, freedom to make life choices, generosity, and perceptions of corruption. Nordic countries — particularly Finland, Denmark, and Norway — consistently rank among the happiest, a finding attributed not to their wealth alone but to strong social safety nets, high levels of trust, and relatively low inequality.

Research into subjective well-being has identified several factors that consistently correlate with happiness regardless of income level. Strong social relationships, meaningful work, physical and mental health, personal autonomy, and a sense of purpose or connection to something larger than oneself all emerge as powerful determinants. Conversely, long commutes, social isolation, chronic stress, and perceived unfairness are reliably associated with lower well-being.

The implications for public policy are significant. Governments that focus exclusively on economic growth risk neglecting the factors that most directly influence citizens' quality of life. Policies that promote social cohesion, mental health services, work-life balance, and community engagement may deliver greater improvements in well-being per unit of public expenditure than traditional economic stimulus measures.`,
      questions: [
        { number: 27, type: "multiple_choice", text: "GDP measures:", options: ["A Citizens' happiness levels", "B Total monetary value of goods and services produced", "C Quality of healthcare and education", "D Environmental sustainability"], correctAnswer: "B" },
        { number: 28, type: "multiple_choice", text: "According to the Easterlin Paradox, additional income:", options: ["A Always increases happiness proportionally", "B Has no effect on happiness at any level", "C Yields diminishing returns once basic needs are met", "D Only benefits the poorest members of society"], correctAnswer: "C" },
        { number: 29, type: "multiple_choice", text: "How many domains does GNH measure?", options: ["A Five", "B Seven", "C Nine", "D Twelve"], correctAnswer: "C" },
        { number: 30, type: "multiple_choice", text: "Which countries consistently rank among the happiest?", options: ["A North American countries", "B Nordic countries", "C Southeast Asian countries", "D South American countries"], correctAnswer: "B" },
        { number: 31, type: "multiple_choice", text: "The World Happiness Report has been published since:", options: ["A 2005", "B 2008", "C 2012", "D 2015"], correctAnswer: "C" },
        { number: 32, type: "multiple_choice", text: "The passage suggests governments should:", options: ["A Focus exclusively on GDP growth", "B Abandon economic policies entirely", "C Consider broader well-being factors in policy", "D Copy Bhutan's GNH model exactly"], correctAnswer: "C" },
        { number: 33, type: "yes_no_not_given", text: "The author considers GDP to be a completely useless measure.", correctAnswer: "No", explanation: "The author calls it inadequate and sometimes misleading, not completely useless." },
        { number: 34, type: "yes_no_not_given", text: "Finland's happiness ranking is solely due to its wealth.", correctAnswer: "No", explanation: "The passage attributes it to social safety nets, trust, and low inequality, not wealth alone." },
        { number: 35, type: "yes_no_not_given", text: "Long commutes are associated with higher well-being.", correctAnswer: "No", explanation: "The passage states long commutes are associated with lower well-being." },
        { number: 36, type: "yes_no_not_given", text: "Bhutan was the first country to measure Gross National Happiness.", correctAnswer: "Yes", explanation: "The passage states Bhutan pioneered the approach." },
        { number: 37, type: "matching_features", text: "Showed that national happiness does not rise with economic growth once basic needs are met.", options: p3Features, correctAnswer: "A" },
        { number: 38, type: "matching_features", text: "Measures progress across nine domains including ecological diversity.", options: p3Features, correctAnswer: "B" },
        { number: 39, type: "matching_features", text: "Ranks countries annually using six key variables.", options: p3Features, correctAnswer: "C" },
        { number: 40, type: "matching_features", text: "Identifies social relationships and meaningful work as happiness determinants.", options: p3Features, correctAnswer: "D" },
      ],
    },
  ],
};
