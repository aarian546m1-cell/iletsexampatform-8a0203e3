import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_9: ReadingTest = {
  id: 9,
  passages: [
    {
      title: "The Psychology of Motivation",
      text: `Understanding what drives human behaviour has been a central concern of psychology since the discipline's earliest days. Motivation — the process that initiates, guides, and sustains goal-directed behaviour — is a complex phenomenon influenced by biological needs, cognitive processes, social factors, and individual differences. Over the past century, psychologists have developed numerous theories to explain why people act the way they do and what factors determine the direction, intensity, and persistence of their efforts.

A. Among the earliest scientific approaches to motivation was the drive theory, which proposed that biological needs create internal states of tension, or drives, that organisms are motivated to reduce. According to this theory, hunger creates a drive to eat, thirst creates a drive to drink, and so on. While drive theory provided a useful framework for understanding basic physiological motivations, it proved inadequate for explaining more complex human behaviours that are not directly linked to biological needs, such as the pursuit of knowledge, creative expression, or social recognition.

B. Abraham Maslow's hierarchy of needs, proposed in 1943, offered a more comprehensive model of human motivation. Maslow argued that human needs are arranged in a hierarchical structure, with basic physiological needs (food, water, shelter) at the base and more complex psychological needs at higher levels. According to Maslow, individuals must satisfy lower-level needs before they can fully attend to higher-level ones. The hierarchy progresses from physiological needs through safety, love and belonging, and esteem, culminating in self-actualisation — the realisation of one's full potential. While Maslow's theory has been enormously influential in fields ranging from education to management, it has been criticised for its rigid hierarchical structure and its basis in Western cultural values.

C. Self-determination theory (SDT), developed by Edward Deci and Richard Ryan in the 1980s, distinguishes between intrinsic motivation — engaging in an activity for its inherent satisfaction — and extrinsic motivation — performing an activity to obtain an external reward or avoid a punishment. SDT proposes that three basic psychological needs must be satisfied for optimal motivation and well-being: autonomy (the need to feel in control of one's own behaviour), competence (the need to master tasks and learn new skills), and relatedness (the need to feel connected to others). Research supporting SDT has demonstrated that environments which support autonomy, competence, and relatedness tend to foster greater intrinsic motivation, higher quality performance, and improved psychological health.

D. The concept of flow, introduced by psychologist Mihaly Csikszentmihalyi, describes a state of complete absorption in an activity. During flow, individuals are so deeply engaged in what they are doing that they lose awareness of time and their surroundings. Flow typically occurs when a person's skills are well matched to the challenge at hand — if the challenge is too low, boredom results; if it is too high, anxiety occurs. Csikszentmihalyi's research found that flow experiences are associated with high levels of satisfaction and happiness, and that people who frequently experience flow tend to report greater overall life satisfaction.

E. In recent decades, research on motivation has increasingly focused on the role of mindset in shaping achievement. Carol Dweck's influential work on fixed and growth mindsets has shown that individuals who believe their abilities are innate and unchangeable (a fixed mindset) tend to avoid challenges and give up easily when faced with obstacles. In contrast, those who believe their abilities can be developed through effort and learning (a growth mindset) tend to embrace challenges, persist through difficulties, and ultimately achieve more. Dweck's research has had a significant impact on educational practice, with many schools now implementing programmes designed to cultivate a growth mindset among students.

F. Goal-setting theory, developed by Edwin Locke and Gary Latham, provides another important perspective on motivation. Their research has consistently demonstrated that specific, challenging goals lead to higher performance than vague or easy goals. The theory identifies several conditions that enhance the motivational effects of goals: the individual must be committed to the goal, must receive feedback on progress, and must believe they have the ability to achieve the goal. Goal-setting theory has been widely applied in organisational contexts, where it forms the basis of many performance management and employee development systems.

G. The study of motivation continues to evolve, with current research exploring topics such as the neurological basis of motivation, the influence of cultural values on motivational processes, and the role of technology in shaping human drive and engagement. Understanding motivation remains essential not only for psychology but also for education, business, healthcare, and public policy, as the ability to effectively motivate individuals and groups is a fundamental challenge in virtually every area of human activity.`,
      questions: [
        {
          number: 1,
          type: "matching_headings",
          text: "Choose the correct heading for each section from the list below.\n\nList of Headings\ni. The__(importance of believing abilities can improve\nii. Being fully absorbed in a task\niii. A__(theory based on biological needs and their limitations\niv. Three psychological needs for optimal motivation\nv. A__(layered model of human needs\nvi. How specific targets improve performance\nvii. Ongoing developments in motivation research\nviii. The__(difference between internal and external rewards\n\nParagraph A",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "iii",
          explanation: "Paragraph A discusses drive theory based on biological needs and notes its limitations."
        },
        {
          number: 2,
          type: "matching_headings",
          text: "Paragraph B",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "v",
          explanation: "Paragraph B describes Maslow's hierarchy — a layered/hierarchical model of needs."
        },
        {
          number: 3,
          type: "matching_headings",
          text: "Paragraph C",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "iv",
          explanation: "Paragraph C discusses SDT's three basic psychological needs: autonomy, competence, relatedness."
        },
        {
          number: 4,
          type: "matching_headings",
          text: "Paragraph D",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "ii",
          explanation: "Paragraph D describes flow as 'complete absorption in an activity'."
        },
        {
          number: 5,
          type: "matching_headings",
          text: "Paragraph E",
          options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
          correctAnswer: "i",
          explanation: "Paragraph E discusses Dweck's growth mindset — believing abilities can be developed."
        },
        {
          number: 6,
          type: "multiple_choice",
          text: "Choose the correct letter, A, B, C or D.\n\nAccording to Maslow's theory, people must",
          options: ["A satisfy all needs simultaneously", "B focus only on self-actualisation", "C meet basic needs before higher-level ones", "D choose between physical and psychological needs"],
          correctAnswer: "C",
          explanation: "The passage states 'individuals must satisfy lower-level needs before they can fully attend to higher-level ones'."
        },
        {
          number: 7,
          type: "multiple_choice",
          text: "Self-determination theory identifies which three psychological needs?",
          options: ["A Security, belonging, and recognition", "B Autonomy, competence, and relatedness", "C Achievement, power, and affiliation", "D Food, shelter, and safety"],
          correctAnswer: "B",
          explanation: "The passage lists 'autonomy... competence... and relatedness' as the three needs in SDT."
        },
        {
          number: 8,
          type: "multiple_choice",
          text: "According to the passage, flow occurs when",
          options: ["A the challenge is much greater than the person's skill level", "B a person is working under pressure from a deadline", "C a person's skills are well matched to the difficulty of the task", "D the task requires minimal effort or concentration"],
          correctAnswer: "C",
          explanation: "The passage states 'Flow typically occurs when a person's skills are well matched to the challenge at hand'."
        },
        {
          number: 9,
          type: "multiple_choice",
          text: "People with a growth mindset tend to",
          options: ["A avoid difficult tasks", "B believe their abilities are fixed", "C give up when they encounter obstacles", "D persist through challenges and achieve more"],
          correctAnswer: "D",
          explanation: "The passage states those with a growth mindset 'tend to embrace challenges, persist through difficulties, and ultimately achieve more'."
        },
        {
          number: 10,
          type: "multiple_choice",
          text: "Goal-setting theory suggests that the most effective goals are",
          options: ["A easy and general", "B specific and challenging", "C flexible and open-ended", "D set by managers, not employees"],
          correctAnswer: "B",
          explanation: "The passage states 'specific, challenging goals lead to higher performance than vague or easy goals'."
        },
        {
          number: 11,
          type: "multiple_choice",
          text: "Which criticism of Maslow's hierarchy is mentioned in the passage?",
          options: ["A It has no scientific basis", "B It only applies to workplace motivation", "C It has a rigid structure and Western cultural bias", "D It ignores the need for self-actualisation"],
          correctAnswer: "C",
          explanation: "The passage states Maslow's theory 'has been criticised for its rigid hierarchical structure and its basis in Western cultural values'."
        },
        {
          number: 12,
          type: "multiple_choice",
          text: "What does 'intrinsic motivation' mean according to the passage?",
          options: ["A Motivation driven by external rewards", "B Motivation to avoid punishment", "C Engaging in an activity for its own inherent satisfaction", "D Motivation created by social pressure"],
          correctAnswer: "C",
          explanation: "SDT defines intrinsic motivation as 'engaging in an activity for its inherent satisfaction'."
        },
        {
          number: 13,
          type: "multiple_choice",
          text: "According to goal-setting theory, which condition is NOT mentioned as enhancing motivation?",
          options: ["A Commitment to the goal", "B Feedback on progress", "C Competition with colleagues", "D Belief in ability to achieve the goal"],
          correctAnswer: "C",
          explanation: "The passage mentions commitment, feedback, and self-belief — but not competition."
        }
      ]
    },
    {
      title: "Wildlife Conservation",
      text: `A. Wildlife conservation has become one of the most pressing environmental challenges of the 21st century. The current rate of species extinction is estimated to be between 100 and 1,000 times higher than the natural background rate, leading many scientists to warn that the Earth is experiencing its sixth mass extinction event. Unlike previous mass extinctions, which were caused by natural phenomena such as asteroid impacts or volcanic eruptions, the current crisis is overwhelmingly driven by human activities.

B. Habitat destruction is widely recognised as the primary threat to wildlife worldwide. The conversion of forests, wetlands, and grasslands for agriculture, urban development, and infrastructure construction has reduced and fragmented the natural habitats on which countless species depend. Tropical deforestation is particularly devastating, as tropical forests harbour the greatest concentration of biodiversity on Earth. It is estimated that approximately 10 million hectares of forest are lost each year, with the Amazon Basin, the Congo Basin, and Southeast Asia being the most severely affected regions.

C. Climate change represents an increasingly significant threat to wildlife. Rising temperatures, changing precipitation patterns, and more frequent extreme weather events are altering ecosystems in ways that many species cannot adapt to quickly enough. Polar species such as polar bears and Arctic foxes are losing habitat as sea ice diminishes. Coral reefs, which support approximately 25 per cent of all marine species, are experiencing mass bleaching events as ocean temperatures rise. Mountain-dwelling species are being forced to move to higher elevations, where available habitat is progressively smaller.

D. Overexploitation — the harvesting of wildlife at rates exceeding the capacity of populations to recover — poses a direct threat to many species. Commercial fishing has depleted numerous fish stocks worldwide, with an estimated one third of global fisheries now classified as overfished. Illegal wildlife trade, worth an estimated $23 billion annually, threatens iconic species including elephants, rhinoceroses, tigers, and pangolins. Despite international agreements such as CITES (the Convention on International Trade in Endangered Species), enforcement remains difficult, and poaching continues to be a major problem in many regions.

E. Conservation strategies have evolved significantly over the past century. Early conservation efforts focused primarily on establishing protected areas — national parks, wildlife reserves, and marine sanctuaries — to safeguard habitats and the species they contain. Today, approximately 17 per cent of the world's land surface and 8 per cent of its ocean area are designated as protected areas. While protected areas remain a cornerstone of conservation, there is growing recognition that they alone are insufficient, as many species range across boundaries and are affected by threats that originate beyond protected area borders.

F. Community-based conservation, which involves local communities in the management and protection of wildlife and habitats, has emerged as an important complement to traditional protected area approaches. Programmes that provide local people with economic benefits from conservation — through sustainable tourism, payment for ecosystem services, or community-managed natural resources — have shown success in reducing poaching and habitat destruction while improving local livelihoods. In Namibia, for example, a system of communal conservancies has led to significant recoveries in populations of elephants, lions, and black rhinoceroses, while generating substantial income for rural communities.

G. Captive breeding and reintroduction programmes represent another important conservation tool. Species that have been brought to the brink of extinction in the wild — such as the California condor, the Arabian oryx, and the black-footed ferret — have been saved through intensive captive breeding efforts followed by carefully managed releases into suitable habitat. However, captive breeding is expensive, technically demanding, and only feasible for a limited number of species. It is generally regarded as a last resort, to be employed when other conservation measures have failed to prevent population collapse.

H. The future of wildlife conservation will depend on addressing the root causes of biodiversity loss, including unsustainable consumption patterns, inadequate governance, and insufficient funding for conservation initiatives. The Global Biodiversity Framework, adopted at the United Nations Biodiversity Conference in 2022, set ambitious targets including the protection of 30 per cent of the Earth's land and ocean areas by 2030 and the restoration of degraded ecosystems. Achieving these targets will require unprecedented levels of international cooperation, financial investment, and political commitment.`,
      questions: [
        {
          number: 14,
          type: "matching_information",
          text: "Which paragraph contains the following information?\n\nWrite the correct letter A–H.\n\nA specific country where community conservation has been successful",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "F",
          explanation: "Paragraph F gives the example of Namibia's communal conservancies."
        },
        {
          number: 15,
          type: "matching_information",
          text: "Statistics on the extent of currently protected areas",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "E",
          explanation: "Paragraph E states '17 per cent of the world's land surface and 8 per cent of its ocean area are designated as protected areas'."
        },
        {
          number: 16,
          type: "matching_information",
          text: "Examples of species saved from extinction through breeding in captivity",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "G",
          explanation: "Paragraph G mentions the California condor, Arabian oryx, and black-footed ferret."
        },
        {
          number: 17,
          type: "matching_information",
          text: "The estimated financial value of illegal wildlife trade",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "D",
          explanation: "Paragraph D states illegal wildlife trade is 'worth an estimated $23 billion annually'."
        },
        {
          number: 18,
          type: "matching_information",
          text: "The impact of rising temperatures on coral reefs",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "C",
          explanation: "Paragraph C discusses coral reefs experiencing 'mass bleaching events as ocean temperatures rise'."
        },
        {
          number: 19,
          type: "table_completion",
          text: "Complete the table below.\n\nWrite NO MORE THAN THREE WORDS from the passage for each answer.\n\nThreat: Habitat destruction\nKey statistic: About ________ hectares of forest lost annually",
          correctAnswer: "10 million",
          explanation: "The passage states 'approximately 10 million hectares of forest are lost each year'."
        },
        {
          number: 20,
          type: "table_completion",
          text: "Threat: Overexploitation\nKey statistic: ________ of global fisheries are now overfished",
          correctAnswer: "one third",
          explanation: "The passage states 'an estimated one third of global fisheries now classified as overfished'."
        },
        {
          number: 21,
          type: "table_completion",
          text: "Threat: Climate change\nKey detail: Coral reefs support approximately ________ of all marine species",
          correctAnswer: "25 per cent",
          explanation: "The passage states coral reefs 'support approximately 25 per cent of all marine species'."
        },
        {
          number: 22,
          type: "table_completion",
          text: "Conservation target: Protect ________ of land and ocean by 2030",
          correctAnswer: "30 per cent",
          explanation: "The passage states the target is 'protection of 30 per cent of the Earth's land and ocean areas by 2030'."
        },
        {
          number: 23,
          type: "table_completion",
          text: "The current extinction rate is estimated to be ________ times higher than the natural rate",
          correctAnswer: "100 and 1,000",
          explanation: "The passage states 'between 100 and 1,000 times higher than the natural background rate'."
        },
        {
          number: 24,
          type: "sentence_completion",
          text: "Complete the sentences below.\n\nWrite NO MORE THAN TWO WORDS from the passage for each answer.\n\nPolar bears and Arctic foxes are losing habitat because of melting ________.",
          correctAnswer: "sea ice",
          explanation: "The passage states 'Polar species... are losing habitat as sea ice diminishes'."
        },
        {
          number: 25,
          type: "sentence_completion",
          text: "CITES is an international agreement to regulate trade in ________.",
          correctAnswer: "endangered species",
          explanation: "CITES stands for 'Convention on International Trade in Endangered Species'."
        },
        {
          number: 26,
          type: "sentence_completion",
          text: "Captive breeding is generally considered a ________ when other conservation methods have failed.",
          correctAnswer: "last resort",
          explanation: "The passage states captive breeding 'is generally regarded as a last resort'."
        }
      ]
    },
    {
      title: "The Internet and Social Behaviour",
      text: `The internet has fundamentally transformed the way human beings interact, communicate, and form relationships. Since its emergence as a mainstream communication tool in the mid-1990s, the internet — and particularly social media — has reshaped social behaviour in ways that are both beneficial and concerning. Understanding the complex relationship between digital technology and human social dynamics has become an urgent priority for researchers, policymakers, and educators alike.

One of the most significant effects of the internet on social behaviour has been the expansion of social networks beyond geographical constraints. Before the internet, most people's social circles were limited to individuals they could interact with face to face — family members, neighbours, colleagues, and members of local organisations. The internet has made it possible to form and maintain relationships with people across the globe, enabling connections based on shared interests, experiences, or identities rather than physical proximity. Online communities have provided invaluable support for individuals who are geographically isolated or who belong to marginalised groups that may lack visible representation in their local communities.

However, the quality and depth of online relationships have been the subject of considerable debate. Some researchers argue that online interactions tend to be shallower and less emotionally satisfying than face-to-face communication, lacking the non-verbal cues — facial expressions, body language, tone of voice — that are essential components of meaningful human connection. Others contend that online communication can be just as rich and fulfilling as in-person interaction, particularly when it supplements rather than replaces offline relationships. The evidence suggests that the impact of online communication on relationship quality depends heavily on how it is used; people who use the internet primarily to maintain existing relationships tend to experience positive social outcomes, while those who use it as a substitute for face-to-face interaction may experience increased loneliness and social isolation.

Social media platforms have introduced new dynamics into human social behaviour. The ability to curate and present an idealised version of oneself online has given rise to concerns about the effects of social comparison on self-esteem and mental health. Research has consistently shown that frequent exposure to carefully curated portrayals of other people's lives on social media is associated with increased feelings of inadequacy, anxiety, and depression, particularly among adolescents and young adults. The phenomenon of cyberbullying — the use of digital platforms to harass, threaten, or humiliate others — has emerged as a serious social problem, with studies indicating that approximately 37 per cent of young people between the ages of 12 and 17 have experienced cyberbullying.

The internet has also profoundly affected how people consume and share information, with significant implications for public discourse and democratic processes. Social media algorithms, designed to maximise user engagement, tend to promote content that evokes strong emotional reactions, which can amplify misinformation and extremist viewpoints. The creation of filter bubbles — personalised information environments in which users are predominantly exposed to content that reinforces their existing beliefs — has been identified as a factor contributing to political polarisation and the erosion of shared factual foundations for public debate.

The effects of internet use on cognitive function and attention have attracted growing research interest. Studies suggest that the constant availability of information and stimulation provided by smartphones and other connected devices may be diminishing people's capacity for sustained attention and deep thinking. The tendency to engage in rapid task-switching — often described as multitasking — while using digital devices has been shown to impair memory formation and reduce the quality of work on complex tasks. Some researchers have expressed concern that habitual internet use may be literally rewiring the brain, strengthening neural pathways associated with quick, superficial information processing at the expense of those involved in reflection and critical analysis.

Despite these concerns, the internet has also created unprecedented opportunities for education, civic engagement, and creative expression. Online learning platforms have democratised access to knowledge, enabling people in remote or underserved areas to access educational resources that were previously available only to those near major institutions. Social media has facilitated grassroots political movements and enabled citizens to hold governments and corporations accountable in ways that were not previously possible. The ability to publish and share creative work online has given voice to artists, writers, and musicians who might otherwise never have found an audience.

The challenge for society going forward is to maximise the benefits of internet connectivity while mitigating its potential harms. This will require a combination of thoughtful regulation, digital literacy education, and individual responsibility, as well as ongoing research to better understand the complex ways in which digital technology is shaping human social behaviour.`,
      questions: [
        {
          number: 27,
          type: "true_false_not_given",
          text: "Do the following statements agree with the views of the writer?\n\nWrite TRUE, FALSE, or NOT GIVEN.\n\nBefore the internet, people could only form relationships with those they met in person.",
          correctAnswer: "TRUE",
          explanation: "The passage states 'most people's social circles were limited to individuals they could interact with face to face'."
        },
        {
          number: 28,
          type: "true_false_not_given",
          text: "Online relationships are always less meaningful than face-to-face ones.",
          correctAnswer: "FALSE",
          explanation: "The passage presents both sides, noting some researchers contend online communication 'can be just as rich and fulfilling'."
        },
        {
          number: 29,
          type: "true_false_not_given",
          text: "Approximately 37 per cent of teenagers have experienced cyberbullying.",
          correctAnswer: "TRUE",
          explanation: "The passage states 'approximately 37 per cent of young people between the ages of 12 and 17 have experienced cyberbullying'."
        },
        {
          number: 30,
          type: "true_false_not_given",
          text: "Social media companies deliberately promote misinformation.",
          correctAnswer: "NOT GIVEN",
          explanation: "The passage says algorithms promote engaging content which can amplify misinformation, but does not say companies deliberately promote it."
        },
        {
          number: 31,
          type: "true_false_not_given",
          text: "Research has proven that internet use permanently damages the brain.",
          correctAnswer: "NOT GIVEN",
          explanation: "The passage says 'some researchers have expressed concern' about rewiring but does not state it is proven or permanent."
        },
        {
          number: 32,
          type: "true_false_not_given",
          text: "Online learning has made education more accessible to people in remote areas.",
          correctAnswer: "TRUE",
          explanation: "The passage states online platforms have 'democratised access to knowledge, enabling people in remote or underserved areas to access educational resources'."
        },
        {
          number: 33,
          type: "short_answer",
          text: "Answer the questions below.\n\nWrite NO MORE THAN THREE WORDS for each answer.\n\nWhat do social media algorithms tend to promote?",
          correctAnswer: "strong emotional reactions",
          explanation: "The passage states algorithms 'tend to promote content that evokes strong emotional reactions'."
        },
        {
          number: 34,
          type: "short_answer",
          text: "What term describes personalised information environments that reinforce existing beliefs?",
          correctAnswer: "filter bubbles",
          explanation: "The passage defines 'filter bubbles' as environments where users see content reinforcing existing beliefs."
        },
        {
          number: 35,
          type: "short_answer",
          text: "What has been shown to impair memory formation when using digital devices?",
          correctAnswer: "rapid task-switching",
          explanation: "The passage states 'rapid task-switching... has been shown to impair memory formation'."
        },
        {
          number: 36,
          type: "short_answer",
          text: "What two types of neural pathways does the passage contrast regarding internet use?",
          correctAnswer: "superficial information processing",
          explanation: "The passage contrasts 'quick, superficial information processing' with 'reflection and critical analysis'."
        },
        {
          number: 37,
          type: "short_answer",
          text: "What do online communities provide for people in marginalised groups?",
          correctAnswer: "invaluable support",
          explanation: "The passage states 'Online communities have provided invaluable support for individuals who are geographically isolated or who belong to marginalised groups'."
        },
        {
          number: 38,
          type: "short_answer",
          text: "What aspect of social media use is linked to feelings of inadequacy among young people?",
          correctAnswer: "social comparison",
          explanation: "The passage discusses 'the effects of social comparison on self-esteem and mental health'."
        },
        {
          number: 39,
          type: "short_answer",
          text: "According to the passage, what has social media enabled citizens to do to governments?",
          correctAnswer: "hold them accountable",
          explanation: "The passage states social media 'enabled citizens to hold governments and corporations accountable'."
        },
        {
          number: 40,
          type: "short_answer",
          text: "What three approaches does the writer suggest are needed to address internet-related harms?",
          correctAnswer: "regulation, digital literacy",
          explanation: "The passage mentions 'thoughtful regulation, digital literacy education, and individual responsibility'."
        }
      ]
    }
  ]
};
