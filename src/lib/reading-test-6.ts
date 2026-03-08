import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_6: ReadingTest = {
  id: 6,
  passages: [
    {
      title: "The History of Paper",
      text: `Paper is one of the most significant inventions in human history, fundamentally transforming how information is recorded, stored, and transmitted across generations. Its origins can be traced back to ancient China, where the earliest forms of writing surfaces were developed long before the material we recognise today as paper came into existence.

The earliest Chinese writing was inscribed on oracle bones — the shoulder blades of oxen and the shells of turtles — during the Shang Dynasty, around 1200 BCE. These were used primarily for divination purposes, and the inscriptions provide some of the earliest evidence of Chinese script. As Chinese civilisation advanced, writing surfaces evolved to include strips of bamboo and pieces of silk. Bamboo strips were tied together with cord to form scrolls, but these were heavy and cumbersome. Silk, while lighter and more flexible, was prohibitively expensive for widespread use.

The invention of true paper is traditionally attributed to Cai Lun, a court official during the Han Dynasty, in approximately 105 CE. According to historical records, Cai Lun experimented with various materials, including tree bark, hemp, old rags, and fishing nets. He developed a process of soaking these fibres in water, pounding them into a pulp, and then spreading the resulting mixture thinly over a flat surface to dry. The result was a lightweight, affordable, and versatile writing surface that quickly gained popularity throughout China.

However, archaeological discoveries have complicated this narrative. Fragments of paper dating to the 2nd century BCE have been found in several Chinese sites, suggesting that papermaking existed in some form before Cai Lun's widely credited innovation. Nevertheless, Cai Lun is generally acknowledged as having standardised and significantly improved the papermaking process, making it suitable for widespread adoption.

For several centuries, the Chinese guarded the secret of papermaking closely. The technology did not spread beyond China until the 8th century CE, when Arab forces captured Chinese papermakers during the Battle of Talas in 751 CE. These captured artisans were brought to Samarkand, where they established paper mills. From Samarkand, the knowledge of papermaking spread throughout the Islamic world, reaching Baghdad, Damascus, and Cairo. Each region adapted the technique to local materials, with some mills using cotton and linen rags rather than the plant fibres favoured in China.

Paper arrived in Europe through the Iberian Peninsula during the 11th and 12th centuries, brought by the Moors who had established a thriving paper industry in Spain. The oldest known European paper mill was established in Xàtiva, Spain, around 1056 CE. From Spain, papermaking technology gradually spread to Italy, France, Germany, and England over the following centuries. European papermakers refined the process further, introducing innovations such as the watermark, which was first used in Italy around 1282 as a means of identifying the paper mill and the quality of the product.

The demand for paper grew dramatically with the invention of the printing press by Johannes Gutenberg around 1440. Before the printing press, books were copied by hand, making them rare and expensive. Gutenberg's movable type technology made mass production of books possible, but this required large quantities of paper. The resulting surge in demand drove improvements in papermaking efficiency and helped establish paper as a fundamental commodity in European commerce and culture.

The Industrial Revolution brought further transformations to paper production. In 1799, the Frenchman Louis-Nicolas Robert invented the Fourdrinier machine, which automated the paper production process. This machine could produce continuous rolls of paper, vastly increasing output while reducing costs. By the mid-19th century, the growing demand for paper led to a critical shortage of cotton and linen rags, the traditional raw materials. This crisis was resolved by the development of wood pulp paper, first successfully produced in the 1840s. Wood pulp paper was cheaper and could be produced in far greater quantities, though it was initially of lower quality and more prone to yellowing and deterioration.

Today, paper remains an essential material in modern life despite the rise of digital technology. Global paper production exceeds 400 million tonnes annually, with uses ranging from packaging and printing to hygiene products and specialised industrial applications. The environmental impact of paper production has become a significant concern, leading to increased emphasis on recycling, sustainable forestry, and the development of alternative fibres. Nevertheless, the basic principles of papermaking — the suspension of plant fibres in water, their formation into a sheet, and subsequent drying — remain remarkably similar to the process developed in China nearly two thousand years ago.`,
      questions: [
        {
          number: 1,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nWhat were oracle bones primarily used for?",
          options: ["A Recording historical events", "B Predicting the future", "C Teaching writing to children", "D Communicating with other kingdoms"],
          correctAnswer: "B",
          explanation: "The passage states oracle bones 'were used primarily for divination purposes' — divination means predicting the future."
        },
        {
          number: 2,
          type: "multiple_choice",
          text: "What was the main disadvantage of using bamboo strips for writing?",
          options: ["A They were expensive to produce", "B They could not hold ink well", "C They were heavy and difficult to handle", "D They deteriorated quickly in humid conditions"],
          correctAnswer: "C",
          explanation: "The passage describes bamboo strips as 'heavy and cumbersome'."
        },
        {
          number: 3,
          type: "multiple_choice",
          text: "According to the passage, Cai Lun's papermaking process involved",
          options: ["A heating plant fibres over a fire", "B soaking fibres, pounding them, and drying them on a flat surface", "C pressing bamboo and silk together", "D weaving fibres into a thin fabric"],
          correctAnswer: "B",
          explanation: "The passage describes Cai Lun's process as 'soaking these fibres in water, pounding them into a pulp, and then spreading the resulting mixture thinly over a flat surface to dry'."
        },
        {
          number: 4,
          type: "multiple_choice",
          text: "How did papermaking knowledge spread to the Islamic world?",
          options: ["A Chinese merchants traded the secret for spices", "B Chinese papermakers were captured after a battle", "C Islamic scholars visited China to learn the technique", "D A Chinese emperor gifted the knowledge as a diplomatic gesture"],
          correctAnswer: "B",
          explanation: "The passage states 'Arab forces captured Chinese papermakers during the Battle of Talas in 751 CE'."
        },
        {
          number: 5,
          type: "multiple_choice",
          text: "What was the significance of watermarks in European papermaking?",
          options: ["A They made paper more durable", "B They prevented counterfeiting of documents", "C They identified the mill and paper quality", "D They added decorative value to the paper"],
          correctAnswer: "C",
          explanation: "The passage states watermarks were 'first used in Italy around 1282 as a means of identifying the paper mill and the quality of the product'."
        },
        {
          number: 6,
          type: "true_false_not_given",
          text: "Do the following statements agree with the information given in the passage?\n\nWrite TRUE, FALSE, or NOT GIVEN.\n\nCai Lun was the first person ever to produce paper.",
          correctAnswer: "FALSE",
          explanation: "The passage states that paper fragments from the 2nd century BCE predate Cai Lun's work in 105 CE."
        },
        {
          number: 7,
          type: "true_false_not_given",
          text: "Silk was a more practical writing surface than bamboo because it was cheaper.",
          correctAnswer: "FALSE",
          explanation: "The passage states silk 'was prohibitively expensive for widespread use'."
        },
        {
          number: 8,
          type: "true_false_not_given",
          text: "The Battle of Talas took place in the 7th century CE.",
          correctAnswer: "FALSE",
          explanation: "The passage states the Battle of Talas occurred in 751 CE, which is the 8th century."
        },
        {
          number: 9,
          type: "true_false_not_given",
          text: "The Fourdrinier machine was named after its inventor.",
          correctAnswer: "NOT GIVEN",
          explanation: "The passage credits Louis-Nicolas Robert with inventing the machine but does not explain why it is called the Fourdrinier machine."
        },
        {
          number: 10,
          type: "true_false_not_given",
          text: "Global paper production is declining due to increased use of digital technology.",
          correctAnswer: "NOT GIVEN",
          explanation: "The passage mentions paper remains essential and production exceeds 400 million tonnes, but does not state whether production is declining."
        },
        {
          number: 11,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nThe oldest paper mill in Europe was located in ________, Spain.",
          correctAnswer: "Xàtiva",
          explanation: "The passage states 'The oldest known European paper mill was established in Xàtiva, Spain'."
        },
        {
          number: 12,
          type: "sentence_completion",
          text: "The invention of the ________ by Gutenberg dramatically increased the demand for paper.",
          correctAnswer: "printing press",
          explanation: "The passage directly links 'the invention of the printing press by Johannes Gutenberg' to growing demand for paper."
        },
        {
          number: 13,
          type: "sentence_completion",
          text: "The shortage of traditional raw materials in the 19th century was solved by using ________.",
          correctAnswer: "wood pulp",
          explanation: "The passage states the crisis 'was resolved by the development of wood pulp paper'."
        }
      ]
    },
    {
      title: "Urban Farming and Sustainable Cities",
      text: `A. The world's population is increasingly concentrated in urban areas. By 2050, it is estimated that nearly 70 per cent of the global population will live in cities. This rapid urbanisation places immense pressure on food supply chains, transportation networks, and the environment. In response to these challenges, urban farming has emerged as a promising solution that could help cities become more self-sufficient and sustainable.

B. Urban farming, also known as urban agriculture, encompasses a wide range of food production activities that take place within city boundaries. These include rooftop gardens, vertical farms, community allotments, hydroponic systems, and even livestock keeping in some contexts. While the concept is not entirely new — city dwellers have grown food in gardens and allotments for centuries — the scale and sophistication of modern urban farming represent a significant departure from traditional practices.

C. One of the primary advantages of urban farming is its potential to reduce the distance food travels from producer to consumer. In conventional food systems, fresh produce often travels hundreds or even thousands of kilometres before reaching the consumer's plate. This long-distance transportation contributes significantly to greenhouse gas emissions, requires substantial energy inputs, and can result in reduced nutritional quality as produce deteriorates during transit. By growing food within or near cities, urban farming can dramatically reduce these food miles, delivering fresher produce with a smaller carbon footprint.

D. Vertical farming is perhaps the most technologically advanced form of urban agriculture. In vertical farms, crops are grown in stacked layers within controlled indoor environments, using artificial lighting and precisely managed nutrient solutions. These systems can operate year-round regardless of external weather conditions, and they typically use 70 to 95 per cent less water than conventional farming methods. However, the energy requirements for lighting and climate control remain significant, and the high initial investment costs can make vertical farming economically challenging without subsidies or premium pricing.

E. Community gardens and allotments serve a different but equally valuable function. These spaces provide urban residents with the opportunity to grow their own food, often at minimal cost. Beyond the nutritional benefits, community gardens have been shown to improve mental health, strengthen social bonds, and increase environmental awareness among participants. Research conducted in several major cities has demonstrated that neighbourhoods with active community gardens experience lower rates of crime, higher property values, and stronger community cohesion.

F. Despite its potential, urban farming faces several significant obstacles. Land in cities is expensive and often subject to competing demands from housing, commerce, and infrastructure development. Soil contamination from industrial activities or traffic pollution can pose health risks if not properly addressed. Regulatory frameworks in many cities are not designed to accommodate agricultural activities, creating legal barriers for aspiring urban farmers. Additionally, the quantity of food that can be produced through urban farming is unlikely to replace conventional agriculture entirely; rather, it should be seen as a complement to existing food supply systems.

G. Several cities around the world have taken pioneering steps to integrate urban farming into their planning strategies. Singapore, facing severe land constraints, has invested heavily in vertical farming technology and aims to produce 30 per cent of its nutritional needs domestically by 2030. Detroit, once a symbol of urban decline, has transformed thousands of vacant lots into productive farmland, creating jobs and providing fresh food to underserved communities. In Paris, a rooftop farm spanning 14,000 square metres opened in 2020, making it the largest urban rooftop farm in Europe at the time.

H. The future of urban farming will likely be shaped by advances in technology, changes in consumer preferences, and evolving urban planning policies. As cities continue to grow and the effects of climate change intensify, the ability to produce food locally will become increasingly important. While urban farming alone cannot solve the global food crisis, it offers a valuable tool for building more resilient, sustainable, and liveable cities.`,
      questions: [
        {
          number: 14,
          type: "matching_headings",
          text: "Choose the correct heading for each section from the list below.\n\nList of Headings\ni. The environmental__(advantage of local food production\nii. Barriers to expanding urban agriculture\niii. The__(growing urban population and its challenges\niv. Technological solutions for indoor crop production\nv. Government policies supporting urban farming\nvi. Various forms of city-based food production\nvii. International examples of urban farming success\nviii. The__(social benefits of shared growing spaces\nix. Urban farming as part of a larger solution\n\nParagraph B",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "vi",
          explanation: "Paragraph B discusses the 'wide range of food production activities' including rooftop gardens, vertical farms, community allotments, etc."
        },
        {
          number: 15,
          type: "matching_headings",
          text: "Paragraph C",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "i",
          explanation: "Paragraph C focuses on reducing food miles and the environmental benefits of local food production."
        },
        {
          number: 16,
          type: "matching_headings",
          text: "Paragraph D",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "iv",
          explanation: "Paragraph D discusses vertical farming as 'the most technologically advanced form of urban agriculture' with indoor growing systems."
        },
        {
          number: 17,
          type: "matching_headings",
          text: "Paragraph E",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "viii",
          explanation: "Paragraph E discusses community gardens improving mental health, social bonds, and community cohesion."
        },
        {
          number: 18,
          type: "matching_headings",
          text: "Paragraph F",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "ii",
          explanation: "Paragraph F discusses 'significant obstacles' including expensive land, soil contamination, and regulatory barriers."
        },
        {
          number: 19,
          type: "matching_headings",
          text: "Paragraph G",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
          correctAnswer: "vii",
          explanation: "Paragraph G provides examples from Singapore, Detroit, and Paris."
        },
        {
          number: 20,
          type: "summary_completion",
          text: "Complete the summary below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nUrban farming can reduce the ________ that food must travel from farms to consumers.",
          correctAnswer: "food miles",
          explanation: "The passage states urban farming can 'dramatically reduce these food miles'."
        },
        {
          number: 21,
          type: "summary_completion",
          text: "Vertical farms use artificial lighting and managed ________ to grow crops indoors.",
          correctAnswer: "nutrient solutions",
          explanation: "The passage mentions 'precisely managed nutrient solutions'."
        },
        {
          number: 22,
          type: "summary_completion",
          text: "Community gardens have been shown to improve mental health and strengthen ________.",
          correctAnswer: "social bonds",
          explanation: "The passage states community gardens 'strengthen social bonds'."
        },
        {
          number: 23,
          type: "summary_completion",
          text: "In cities, potential health risks from ________ must be addressed before farming can take place.",
          correctAnswer: "soil contamination",
          explanation: "The passage mentions 'Soil contamination from industrial activities or traffic pollution can pose health risks'."
        },
        {
          number: 24,
          type: "short_answer",
          text: "Answer the questions below.\n\nWrite NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.\n\nWhat percentage of the world's population is expected to live in cities by 2050?",
          correctAnswer: "70 per cent",
          explanation: "The passage states 'nearly 70 per cent of the global population will live in cities'."
        },
        {
          number: 25,
          type: "short_answer",
          text: "What city has transformed vacant lots into productive farmland?",
          correctAnswer: "Detroit",
          explanation: "The passage states 'Detroit... has transformed thousands of vacant lots into productive farmland'."
        },
        {
          number: 26,
          type: "short_answer",
          text: "How large is the rooftop farm that opened in Paris in 2020?",
          correctAnswer: "14,000 square metres",
          explanation: "The passage states 'a rooftop farm spanning 14,000 square metres opened in 2020'."
        }
      ]
    },
    {
      title: "Artificial Intelligence and the Future of Work",
      text: `A. The rapid advancement of artificial intelligence (AI) technologies has sparked intense debate about the future of employment. While some analysts predict widespread job displacement, others argue that AI will create new opportunities and enhance human productivity. The reality is likely to be complex, with AI transforming the nature of work in ways that are difficult to predict with certainty.

B. Throughout history, technological revolutions have consistently disrupted existing patterns of employment. The mechanisation of agriculture in the 18th and 19th centuries displaced millions of farm workers but ultimately led to the growth of manufacturing industries that provided new forms of employment. Similarly, the automation of manufacturing in the late 20th century eliminated many factory jobs but contributed to the expansion of the service sector. Each wave of technological change has been accompanied by anxiety about mass unemployment, yet economies have generally adapted by creating new types of work that could not have been anticipated beforehand.

C. However, several researchers argue that AI represents a fundamentally different type of technological disruption. Unlike previous technologies, which primarily automated routine physical tasks, AI has the capacity to perform cognitive functions such as pattern recognition, language processing, decision-making, and even creative tasks. This means that white-collar professions traditionally considered immune to automation — including law, medicine, finance, and journalism — may be significantly affected. A widely cited study by researchers at Oxford University estimated that approximately 47 per cent of jobs in the United States were at risk of being automated within the next two decades.

D. The impact of AI on employment varies considerably across different sectors and regions. In the manufacturing sector, robots and automated systems have already replaced many routine assembly-line positions, particularly in countries with high labour costs. In the financial services industry, algorithmic trading systems now execute the majority of stock market transactions, and AI-powered tools are increasingly used for risk assessment, fraud detection, and customer service. In healthcare, AI systems have demonstrated the ability to diagnose certain conditions with accuracy comparable to or exceeding that of experienced clinicians.

E. Despite these developments, there are strong arguments for a more optimistic outlook. Many jobs require skills that AI currently cannot replicate effectively, including emotional intelligence, complex social interaction, creative problem-solving, and physical dexterity in unstructured environments. Furthermore, AI is often most effective when used to augment rather than replace human capabilities. In medicine, for example, AI diagnostic tools can assist doctors by analysing large volumes of medical data rapidly, but the physician's judgement, empathy, and ability to communicate with patients remain essential components of effective healthcare.

F. The educational implications of AI-driven employment changes are profound. Traditional educational models, which emphasise the acquisition of specific knowledge and technical skills, may become less relevant as AI systems become capable of performing many knowledge-based tasks. Instead, education systems may need to focus on developing adaptable, creative thinkers who can work effectively alongside AI technologies. Skills such as critical thinking, collaboration, and emotional intelligence are likely to become increasingly valued in the labour market.

G. Governments and policymakers face significant challenges in managing the transition to an AI-influenced economy. Some proposals include the implementation of universal basic income schemes to support workers displaced by automation, the introduction of robot taxes to fund retraining programmes, and the reform of education and vocational training systems. However, there is little consensus on the most effective policy responses, and the pace of technological change often outstrips the capacity of political institutions to develop and implement appropriate measures.

H. The question of how AI will reshape the world of work remains fundamentally open. While it is clear that certain jobs will be eliminated and new ones will be created, the net effect on employment levels, wage structures, and social inequality will depend on a complex interplay of technological, economic, and political factors. What is certain is that societies that invest in education, training, and social safety nets will be better positioned to navigate the challenges and opportunities that AI presents.`,
      questions: [
        {
          number: 27,
          type: "matching_information",
          text: "Which paragraph contains the following information?\n\nWrite the correct letter A–H.\n\nExamples of policy proposals to address AI-related employment changes",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "G",
          explanation: "Paragraph G discusses universal basic income, robot taxes, and education reform as policy proposals."
        },
        {
          number: 28,
          type: "matching_information",
          text: "A comparison between AI and previous technological revolutions",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "C",
          explanation: "Paragraph C argues that AI 'represents a fundamentally different type of technological disruption' compared to previous technologies."
        },
        {
          number: 29,
          type: "matching_information",
          text: "The use of AI in specific industries today",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
          explanation: "Paragraph D provides specific examples from manufacturing, financial services, and healthcare."
        },
        {
          number: 30,
          type: "matching_information",
          text: "Human skills that AI finds difficult to replicate",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
          explanation: "Paragraph E discusses emotional intelligence, complex social interaction, creative problem-solving, etc."
        },
        {
          number: 31,
          type: "matching_information",
          text: "The need for changes in how people are educated",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "F",
          explanation: "Paragraph F discusses the 'educational implications' and the need for new approaches to education."
        },
        {
          number: 32,
          type: "matching_information",
          text: "Historical examples of job displacement followed by new employment",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "B",
          explanation: "Paragraph B discusses the mechanisation of agriculture and automation of manufacturing as historical examples."
        },
        {
          number: 33,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nAccording to the Oxford University study mentioned in the passage, what proportion of US jobs could be automated?",
          options: ["A About one quarter", "B About one third", "C Nearly half", "D More than half"],
          correctAnswer: "C",
          explanation: "The passage states 'approximately 47 per cent of jobs' were at risk, which is nearly half."
        },
        {
          number: 34,
          type: "multiple_choice",
          text: "What does the writer suggest about the role of AI in medicine?",
          options: ["A AI will eventually replace most doctors", "B AI works best as a support tool for doctors", "C AI diagnostic tools are unreliable", "D AI should only be used for administrative tasks in healthcare"],
          correctAnswer: "B",
          explanation: "The passage states AI is 'most effective when used to augment rather than replace human capabilities' in medicine."
        },
        {
          number: 35,
          type: "multiple_choice",
          text: "What concern does the writer raise about educational systems?",
          options: ["A They are too expensive to maintain", "B They focus too much on physical skills", "C Their current approach may become outdated due to AI", "D They do not provide enough technical training"],
          correctAnswer: "C",
          explanation: "The passage states traditional models 'may become less relevant as AI systems become capable of performing many knowledge-based tasks'."
        },
        {
          number: 36,
          type: "multiple_choice",
          text: "What is the writer's overall view of AI's impact on employment?",
          options: ["A It will definitely lead to mass unemployment", "B Its effects are uncertain and depend on multiple factors", "C It will create more jobs than it eliminates", "D Its impact has been greatly exaggerated"],
          correctAnswer: "B",
          explanation: "The final paragraph states the net effect 'will depend on a complex interplay of technological, economic, and political factors'."
        },
        {
          number: 37,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nAI can perform cognitive functions such as pattern recognition, language processing, and ________.",
          correctAnswer: "decision-making",
          explanation: "The passage lists 'pattern recognition, language processing, decision-making, and even creative tasks'."
        },
        {
          number: 38,
          type: "sentence_completion",
          text: "In financial services, ________ now carry out most stock market transactions.",
          correctAnswer: "algorithmic trading",
          explanation: "The passage states 'algorithmic trading systems now execute the majority of stock market transactions'."
        },
        {
          number: 39,
          type: "sentence_completion",
          text: "Future education should focus on developing adaptable, ________ who can collaborate with AI.",
          correctAnswer: "creative thinkers",
          explanation: "The passage states education needs to focus on 'developing adaptable, creative thinkers'."
        },
        {
          number: 40,
          type: "sentence_completion",
          text: "Societies that invest in education, training, and ________ will be better prepared for AI changes.",
          correctAnswer: "social safety nets",
          explanation: "The passage concludes that 'societies that invest in education, training, and social safety nets will be better positioned'."
        }
      ]
    }
  ]
};
