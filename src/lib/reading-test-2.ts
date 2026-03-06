import { ReadingTest } from "./reading-tests-data";

const p2Headings = [
  "i. A tunnel-based irrigation technique from Persia",
  "ii. The engineering genius of Roman water supply",
  "iii. Floating gardens of Mesoamerica",
  "iv. Lessons for modern water management",
  "v. The global water crisis today",
  "vi. Fog collection in arid coastal regions",
  "vii. Ancient dam construction in Sri Lanka",
  "viii. Water harvesting in the Indian subcontinent",
];

const p1Paragraphs = ["A", "B", "C", "D", "E", "F"];
const p3Features = [
  "A Daniel Kahneman",
  "B Amos Tversky",
  "C Richard Thaler",
  "D Herbert Simon",
];

export const READING_TEST_2: ReadingTest = {
  id: 2,
  passages: [
    {
      title: "The Rise of Artificial Intelligence",
      text: `Paragraph A
The concept of artificial intelligence — machines capable of performing tasks that normally require human intelligence — has captivated thinkers since antiquity. Greek myths featured mechanical servants, and medieval scholars imagined automated reasoning devices. However, the formal discipline of AI research did not emerge until the mid-twentieth century, when a small group of mathematicians and computer scientists gathered at Dartmouth College in 1956 to explore whether machines could truly "think."

Paragraph B
Early AI research focused on symbolic reasoning: programming computers with explicit rules to manipulate symbols and solve logical puzzles. Systems like the General Problem Solver, developed by Herbert Simon and Allen Newell, could prove mathematical theorems and play chess at a basic level. Yet these rule-based systems struggled with ambiguity and the messy complexity of real-world situations, leading to periods of reduced funding and interest known as "AI winters."

Paragraph C
The resurgence of AI in the twenty-first century has been driven largely by machine learning, particularly deep learning — a technique inspired by the structure of biological neural networks. Deep learning algorithms process vast quantities of data through multiple layers of artificial neurons, gradually learning to recognise patterns without being explicitly programmed. Breakthroughs in image recognition, natural language processing, and game-playing have demonstrated the remarkable capabilities of this approach.

Paragraph D
AI is now embedded in everyday life in ways that would have seemed extraordinary just a decade ago. Virtual assistants respond to voice commands, recommendation algorithms curate personalised content feeds, autonomous vehicles navigate complex traffic environments, and medical imaging systems detect diseases with accuracy rivalling that of experienced clinicians. The economic impact is substantial: some estimates suggest AI could contribute up to $15.7 trillion to the global economy by 2030.

Paragraph E
Despite its promise, AI raises profound ethical and social concerns. Algorithmic bias — where systems trained on historical data perpetuate or amplify existing inequalities — has been documented in criminal justice, hiring, and lending decisions. The displacement of jobs by automation threatens to widen economic inequality unless accompanied by policies for retraining and social support. Questions of accountability arise when autonomous systems make consequential decisions: who is responsible when a self-driving car causes an accident?

Paragraph F
Researchers and policymakers are increasingly calling for responsible AI development, emphasising transparency, fairness, and human oversight. International organisations have published guidelines for trustworthy AI, and several governments have introduced or proposed legislation to regulate high-risk applications. The challenge lies in fostering innovation while safeguarding individual rights and societal well-being.`,
      questions: [
        { number: 1, type: "multiple_choice", text: "When was the formal discipline of AI research established?", options: ["A 1943", "B 1956", "C 1969", "D 1975"], correctAnswer: "B" },
        { number: 2, type: "multiple_choice", text: "What was the main limitation of early rule-based AI systems?", options: ["A They were too expensive", "B They required too much electricity", "C They struggled with real-world ambiguity", "D They could only work offline"], correctAnswer: "C" },
        { number: 3, type: "multiple_choice", text: "Deep learning algorithms are inspired by:", options: ["A Mathematical equations", "B Biological neural networks", "C Quantum computing", "D Statistical models"], correctAnswer: "B" },
        { number: 4, type: "multiple_choice", text: "How much could AI contribute to the global economy by 2030?", options: ["A $5.2 trillion", "B $10.3 trillion", "C $15.7 trillion", "D $20.1 trillion"], correctAnswer: "C" },
        { number: 5, type: "multiple_choice", text: "What term describes periods of reduced AI funding?", options: ["A AI droughts", "B AI recessions", "C AI winters", "D AI declines"], correctAnswer: "C" },
        { number: 6, type: "multiple_choice", text: "According to the passage, what is a key concern about algorithmic bias?", options: ["A It slows computation speed", "B It perpetuates existing inequalities", "C It increases energy consumption", "D It reduces data storage capacity"], correctAnswer: "B" },
        { number: 7, type: "matching_information", text: "A reference to mythological automated beings", options: p1Paragraphs, correctAnswer: "A" },
        { number: 8, type: "matching_information", text: "Examples of AI applications in daily life", options: p1Paragraphs, correctAnswer: "D" },
        { number: 9, type: "matching_information", text: "The role of government regulation in AI", options: p1Paragraphs, correctAnswer: "F" },
        { number: 10, type: "matching_information", text: "A description of how deep learning processes data", options: p1Paragraphs, correctAnswer: "C" },
        { number: 11, type: "matching_information", text: "The problem of job displacement", options: p1Paragraphs, correctAnswer: "E" },
        { number: 12, type: "matching_information", text: "Early attempts at symbolic reasoning", options: p1Paragraphs, correctAnswer: "B" },
        { number: 13, type: "matching_information", text: "Calls for transparency and fairness in AI", options: p1Paragraphs, correctAnswer: "F" },
      ],
    },
    {
      title: "Ancient Water Management Systems",
      text: `Paragraph A
The Romans are renowned for their engineering prowess, and their aqueduct systems remain among the most impressive achievements of the ancient world. At the height of the Roman Empire, eleven major aqueducts supplied the city of Rome with approximately one million cubic metres of fresh water daily. These structures used gravity to transport water across valleys and through mountains, employing arched bridges and underground channels with remarkably precise gradients — typically a drop of just 34 centimetres per kilometre.

Paragraph B
In ancient Persia, the qanat system offered an ingenious solution to the challenge of accessing groundwater in arid regions. A qanat consists of a gently sloping underground tunnel that channels water from an aquifer at the base of a mountain to settlements on the plains below. The system requires no pumping and uses gravity alone, making it sustainable and energy-efficient. Some qanats still in use today in Iran are over 2,500 years old.

Paragraph C
The Aztec civilisation developed chinampas — often called "floating gardens" — on the shallow lake beds of the Valley of Mexico. These rectangular raised beds, constructed from layers of aquatic vegetation, mud, and soil, were anchored by willow trees planted at their edges. The chinampas provided extraordinarily productive agricultural land, yielding up to seven harvests per year thanks to the constant availability of nutrient-rich lake water.

Paragraph D
In Sri Lanka, an elaborate system of reservoirs and canals was constructed as early as the fourth century BCE to support rice cultivation in the dry zone. Known locally as "tanks," these reservoirs captured monsoon rainfall and released it gradually throughout the dry season. The system included sophisticated sluice gates and spillways that could regulate water levels with considerable precision, supporting large populations in an otherwise challenging environment.

Paragraph E
The ancient systems described above share several characteristics that modern engineers find instructive. They were designed to work with natural hydrological cycles rather than against them, they used local materials and indigenous knowledge, and they were maintained through community cooperation over generations. As contemporary societies face mounting pressure on freshwater resources from population growth, climate change, and pollution, many experts argue that revisiting these traditional approaches could complement modern technology in building more resilient water infrastructure.`,
      questions: [
        { number: 14, type: "matching_headings", text: "Paragraph A", options: p2Headings, correctAnswer: "ii" },
        { number: 15, type: "matching_headings", text: "Paragraph B", options: p2Headings, correctAnswer: "i" },
        { number: 16, type: "matching_headings", text: "Paragraph C", options: p2Headings, correctAnswer: "iii" },
        { number: 17, type: "matching_headings", text: "Paragraph D", options: p2Headings, correctAnswer: "vii" },
        { number: 18, type: "matching_headings", text: "Paragraph E", options: p2Headings, correctAnswer: "iv" },
        { number: 19, type: "matching_headings", text: "Which heading is NOT used for any paragraph?", options: p2Headings, correctAnswer: "v" },
        { number: 20, type: "summary_completion", text: "Roman aqueducts used _______ to transport water across long distances.", correctAnswer: "gravity" },
        { number: 21, type: "summary_completion", text: "A qanat channels water from an _______ at the base of a mountain.", correctAnswer: "aquifer" },
        { number: 22, type: "summary_completion", text: "Chinampas were anchored by _______ trees planted at their edges.", correctAnswer: "willow" },
        { number: 23, type: "summary_completion", text: "Sri Lankan reservoirs captured _______ rainfall for dry-season use.", correctAnswer: "monsoon" },
        { number: 24, type: "diagram_completion", text: "The gradient of Roman aqueducts was typically a drop of 34 centimetres per _______.", correctAnswer: "kilometre" },
        { number: 25, type: "diagram_completion", text: "Chinampas could yield up to _______ harvests per year.", correctAnswer: "seven" },
        { number: 26, type: "diagram_completion", text: "Sri Lankan tank systems included sluice gates and _______ to regulate water.", correctAnswer: "spillways" },
      ],
    },
    {
      title: "The Psychology of Decision Making",
      text: `Human decision-making is far less rational than classical economic theory once assumed. For much of the twentieth century, economists modelled human behaviour on the premise that individuals act as perfectly rational agents, consistently weighing costs and benefits to maximise their utility. This assumption began to crumble in the 1970s, when psychologists Daniel Kahneman and Amos Tversky published a series of groundbreaking studies demonstrating that people rely on mental shortcuts — known as heuristics — that often lead to systematic errors in judgement.

One of the most influential heuristics identified by Kahneman and Tversky is the availability heuristic, whereby people judge the probability of an event based on how easily examples come to mind. Because dramatic events such as plane crashes and shark attacks receive extensive media coverage, people tend to overestimate their likelihood while underestimating more common but less sensational risks, such as heart disease or car accidents.

Another well-documented bias is the anchoring effect. When making numerical estimates, people tend to be heavily influenced by an initial piece of information — the "anchor" — even when it is arbitrary or irrelevant. Tversky demonstrated this by asking participants to estimate the percentage of African countries in the United Nations after first spinning a rigged wheel that stopped at either 10 or 65. Those who saw 65 gave significantly higher estimates than those who saw 10, despite the wheel being obviously random.

Herbert Simon, a Nobel laureate in economics, introduced the concept of "bounded rationality" to describe the constraints under which real-world decisions are made. Simon argued that because individuals have limited time, information, and cognitive capacity, they do not optimise but rather "satisfice" — choosing the first option that meets a minimum threshold of acceptability rather than searching exhaustively for the best possible outcome.

Richard Thaler, another Nobel-winning economist, extended these insights into the domain of public policy. His concept of "nudging" — subtly altering the choice architecture to steer people towards better decisions without restricting their freedom — has been adopted by governments worldwide. For example, automatically enrolling employees in pension schemes while allowing them to opt out has dramatically increased retirement savings rates in several countries.

The implications for everyday life are profound. From the products we buy to the medical treatments we choose, our decisions are shaped by cognitive biases of which we are largely unaware. Understanding these biases does not eliminate them, but awareness can help individuals and institutions design decision-making processes that account for human psychological limitations.`,
      questions: [
        { number: 27, type: "multiple_choice", text: "What did classical economic theory assume about human behaviour?", options: ["A People are irrational by nature", "B People act as perfectly rational agents", "C People always follow cultural norms", "D People make random decisions"], correctAnswer: "B" },
        { number: 28, type: "multiple_choice", text: "The availability heuristic causes people to:", options: ["A Ignore all media reports", "B Overestimate dramatic but rare events", "C Underestimate all risks equally", "D Avoid making any decisions"], correctAnswer: "B" },
        { number: 29, type: "multiple_choice", text: "In Tversky's anchoring experiment, what influenced participants' estimates?", options: ["A Their prior knowledge of Africa", "B The number shown on a rigged wheel", "C Their level of education", "D The time of day"], correctAnswer: "B" },
        { number: 30, type: "multiple_choice", text: "What does 'satisfice' mean according to Herbert Simon?", options: ["A Maximise every decision outcome", "B Choose the first acceptable option", "C Delay decisions indefinitely", "D Follow expert advice"], correctAnswer: "B" },
        { number: 31, type: "multiple_choice", text: "Richard Thaler's 'nudging' concept involves:", options: ["A Forcing people to make better choices", "B Subtly altering choice architecture", "C Eliminating all options except one", "D Providing financial incentives"], correctAnswer: "B" },
        { number: 32, type: "multiple_choice", text: "What is the main conclusion of the passage?", options: ["A Cognitive biases can be completely eliminated", "B Understanding biases helps improve decision processes", "C Rational decision-making is easy to achieve", "D Heuristics are always harmful"], correctAnswer: "B" },
        { number: 33, type: "matching_features", text: "Introduced the concept of bounded rationality.", options: p3Features, correctAnswer: "D" },
        { number: 34, type: "matching_features", text: "Conducted the anchoring experiment with a rigged wheel.", options: p3Features, correctAnswer: "B" },
        { number: 35, type: "matching_features", text: "Developed the concept of nudging for public policy.", options: p3Features, correctAnswer: "C" },
        { number: 36, type: "matching_features", text: "Co-authored studies on heuristics and systematic judgement errors.", options: p3Features, correctAnswer: "A" },
        { number: 37, type: "sentence_completion", text: "Mental shortcuts used in decision-making are called _______.", correctAnswer: "heuristics" },
        { number: 38, type: "sentence_completion", text: "Simon argued that people choose the first option meeting a minimum _______ of acceptability.", correctAnswer: "threshold" },
        { number: 39, type: "sentence_completion", text: "Automatic enrolment in pension schemes has increased retirement _______ rates.", correctAnswer: "savings" },
        { number: 40, type: "sentence_completion", text: "Our decisions are shaped by cognitive _______ of which we are largely unaware.", correctAnswer: "biases" },
      ],
    },
  ],
};
