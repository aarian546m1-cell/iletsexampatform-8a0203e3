import { ReadingTest } from "./reading-tests-data";

export const READING_TEST_23: ReadingTest = {
  id: 23,
  passages: [
    {
      title: "Ancient Trade Routes",
      text: `For thousands of years, trade routes served as the arteries of civilisation, connecting distant societies and facilitating the exchange of goods, ideas, technologies, and cultural practices that shaped the course of human history. Among the most significant of these networks was the Silk Road, a vast system of overland and maritime routes that linked China with the Mediterranean world for nearly two millennia.

The term "Silk Road" was coined by the German geographer Ferdinand von Richthofen in 1877, but the trade networks it describes had been operating for centuries before they received a formal name. The routes emerged gradually, beginning around the second century BCE when the Chinese Han dynasty sought to establish diplomatic and commercial ties with the kingdoms of Central Asia. Chinese silk, prized for its lustre and lightness, became the most emblematic commodity traded along these routes, but the networks also carried spices, precious metals, gemstones, glass, ceramics, paper, and gunpowder in both directions.

The Silk Road was not a single road but a complex web of interconnected paths crossing some of the most challenging terrain on Earth. Merchants and their caravans traversed the scorching deserts of the Taklamakan and Gobi, negotiated the high mountain passes of the Pamir and Karakoram ranges, and navigated the vast steppes of Central Asia. Caravanserais — fortified inns spaced at intervals of roughly a day's travel — provided shelter, water, and security for traders and their animals. These stopping points often grew into thriving market towns, and some, such as Samarkand, Bukhara, and Kashgar, became legendary centres of commerce and cultural exchange.

The exchange of ideas and technologies along the Silk Road was arguably even more significant than the trade in physical goods. Buddhism spread from India to China and Central Asia along these routes during the first centuries of the Common Era, profoundly influencing art, architecture, and philosophy across East Asia. Islam later spread along the same corridors. Papermaking technology, invented in China around the second century, reached the Arab world by the eighth century and Europe by the twelfth, revolutionising the recording and dissemination of knowledge. The Chinese inventions of the compass, gunpowder, and printing similarly diffused westward along Silk Road networks.

Maritime trade routes complemented and eventually surpassed overland routes in commercial importance. The Indian Ocean trade network, which connected East Africa, the Arabian Peninsula, the Indian subcontinent, and Southeast Asia, was one of the oldest and most extensive maritime trading systems in history. Arab, Indian, and Chinese merchants sailed these waters using the seasonal monsoon winds, trading textiles, spices, ivory, gold, and enslaved people. The discovery of maritime routes around the Cape of Good Hope by Portuguese explorers in the late fifteenth century opened direct sea connections between Europe and Asia, gradually diminishing the importance of overland routes.

The legacy of ancient trade routes extends far beyond commerce. They fostered cultural synthesis, as artistic styles, architectural forms, musical traditions, and culinary practices blended across vast distances. They also facilitated the spread of diseases; the Black Death of the fourteenth century is believed to have travelled from Central Asia to Europe along Silk Road trade networks. The archaeological remains of ancient trading cities, caravanserais, and port towns offer invaluable insights into the interconnected nature of pre-modern civilisations, challenging simplistic narratives of isolated cultural development.`,
      questions: [
        { number: 1, type: "multiple_choice", text: "Who coined the term 'Silk Road'?", options: ["A. Marco Polo", "B. Ferdinand von Richthofen", "C. A Chinese Han dynasty scholar", "D. An Arab geographer"], correctAnswer: "B", explanation: "The passage states the term was 'coined by the German geographer Ferdinand von Richthofen in 1877'." },
        { number: 2, type: "multiple_choice", text: "What were caravanserais?", options: ["A. Trading ships used on maritime routes", "B. Fortified inns providing shelter for traders", "C. Government checkpoints along trade routes", "D. Markets where goods were auctioned"], correctAnswer: "B", explanation: "Defined as 'fortified inns spaced at intervals of roughly a day's travel'." },
        { number: 3, type: "multiple_choice", text: "Which technology reached the Arab world from China by the eighth century?", options: ["A. Compass making", "B. Silk weaving", "C. Papermaking", "D. Gunpowder production"], correctAnswer: "C", explanation: "The passage states papermaking 'reached the Arab world by the eighth century'." },
        { number: 4, type: "multiple_choice", text: "What diminished the importance of overland Silk Road routes?", options: ["A. Wars along the route", "B. The discovery of maritime routes around the Cape of Good Hope", "C. The invention of railways", "D. The decline of Chinese silk production"], correctAnswer: "B", explanation: "The passage states Portuguese maritime routes 'gradually diminishing the importance of overland routes'." },
        { number: 5, type: "true_false_not_given", text: "The Silk Road trade networks began operating in the second century BCE.", correctAnswer: "True", explanation: "The passage states routes emerged 'beginning around the second century BCE'." },
        { number: 6, type: "true_false_not_given", text: "Silk was the only commodity traded along the Silk Road.", correctAnswer: "False", explanation: "The passage lists many other commodities including spices, metals, and gemstones." },
        { number: 7, type: "true_false_not_given", text: "Samarkand was the largest trading city on the Silk Road.", correctAnswer: "Not Given", explanation: "Samarkand is mentioned as a legendary centre but not stated as the largest." },
        { number: 8, type: "true_false_not_given", text: "Buddhism spread from China to India along the Silk Road.", correctAnswer: "False", explanation: "The passage says Buddhism spread 'from India to China', not the reverse." },
        { number: 9, type: "true_false_not_given", text: "Arab merchants used monsoon winds for sailing the Indian Ocean.", correctAnswer: "True", explanation: "The passage states merchants 'sailed these waters using the seasonal monsoon winds'." },
        { number: 10, type: "true_false_not_given", text: "The Portuguese were the first Europeans to trade with China.", correctAnswer: "Not Given", explanation: "The passage mentions Portuguese maritime routes but doesn't say they were the first European traders with China." },
        { number: 11, type: "true_false_not_given", text: "The Black Death is believed to have spread along Silk Road trade networks.", correctAnswer: "True", explanation: "Directly stated in the passage." },
        { number: 12, type: "true_false_not_given", text: "The Silk Road consisted of a single well-defined path.", correctAnswer: "False", explanation: "The passage says it 'was not a single road but a complex web of interconnected paths'." },
        { number: 13, type: "true_false_not_given", text: "More goods were traded by sea than overland during the first century BCE.", correctAnswer: "Not Given", explanation: "The passage does not provide specific comparisons for that time period." },
      ],
    },
    {
      title: "Plastic Recycling Technologies",
      text: `Paragraph A
Plastic waste has become one of the most pressing environmental challenges of the twenty-first century. Global plastic production has increased from roughly two million tonnes in 1950 to over four hundred million tonnes annually, with packaging accounting for approximately forty percent of total output. Despite decades of recycling campaigns, only about nine percent of all plastic ever produced has been recycled. The remainder has been incinerated, sent to landfill, or released into the natural environment, where it persists for hundreds of years and causes extensive harm to ecosystems and wildlife.

Paragraph B
Conventional mechanical recycling, the most widely practised form of plastic recycling, involves sorting, washing, shredding, and melting plastic waste into pellets that can be used to manufacture new products. This process works reasonably well for certain types of plastic, particularly PET (polyethylene terephthalate), commonly used in drink bottles, and HDPE (high-density polyethylene), used in milk jugs and detergent containers. However, mechanical recycling has significant limitations. Each recycling cycle degrades the polymer chains, reducing the material's strength and clarity. Consequently, mechanically recycled plastic is typically downcycled into lower-value products rather than being returned to its original application.

Paragraph C
Chemical recycling technologies have emerged as a potential solution to the limitations of mechanical recycling. These processes break plastic polymers down into their constituent monomers or other basic chemical building blocks, which can then be reassembled into new, virgin-quality plastic. Pyrolysis, one of the most developed chemical recycling methods, uses heat in the absence of oxygen to decompose mixed plastic waste into oils and gases that can serve as feedstocks for new plastic production or as fuel. Depolymerisation techniques target specific plastic types, breaking them down into monomers that can be repolymerised into plastic of identical quality to the original material.

Paragraph D
Enzymatic recycling represents a newer and potentially revolutionary approach. In 2016, Japanese researchers discovered a bacterium, Ideonella sakaiensis, that had evolved the ability to break down PET plastic using two specialised enzymes. Since then, scientists have engineered enhanced versions of these enzymes that can decompose PET into its component monomers in a matter of hours rather than the centuries required for natural degradation. The French company Carbios has developed an enzymatic recycling process and is constructing the world's first industrial-scale enzymatic recycling plant, expected to process tens of thousands of tonnes of PET waste annually.

Paragraph E
Despite these technological advances, scaling plastic recycling to match the volume of plastic production faces formidable economic and logistical obstacles. Recycled plastic must compete on price with virgin plastic, which benefits from decades of optimisation and economies of scale in petrochemical manufacturing. When oil prices are low, producing new plastic from fossil fuel feedstocks is often cheaper than recycling existing waste. Effective recycling also requires efficient collection and sorting systems, which are lacking in many parts of the world. Contamination of plastic waste with food residue, labels, and mixed materials further complicates the recycling process and increases costs.

Paragraph F
Policy interventions are increasingly being deployed to support plastic recycling. Extended producer responsibility schemes require manufacturers to finance the collection and recycling of their products at end of life. Recycled content mandates, such as the European Union's requirement that PET bottles contain at least twenty-five percent recycled material by 2025, create guaranteed demand for recycled plastic. Plastic taxes and bans on single-use items aim to reduce overall plastic consumption while improving the economics of recycling.`,
      questions: (() => {
        const headings = [
          "i. Government measures to promote recycling",
          "ii. A biological solution to plastic waste",
          "iii. The scale of the global plastic waste problem",
          "iv. Breaking plastics into their chemical components",
          "v. Traditional recycling methods and their drawbacks",
          "vi. The environmental impact of microplastics in oceans",
          "vii. Economic barriers to expanding recycling",
          "viii. Consumer attitudes toward recycled products",
        ];
        return [
          { number: 14, type: "matching_headings" as const, text: "Paragraph A", options: headings, correctAnswer: "iii", explanation: "Paragraph A outlines the scale of global plastic production and waste." },
          { number: 15, type: "matching_headings" as const, text: "Paragraph B", options: headings, correctAnswer: "v", explanation: "Paragraph B describes mechanical recycling and its limitations." },
          { number: 16, type: "matching_headings" as const, text: "Paragraph C", options: headings, correctAnswer: "iv", explanation: "Paragraph C describes chemical recycling breaking plastics into monomers." },
          { number: 17, type: "matching_headings" as const, text: "Paragraph D", options: headings, correctAnswer: "ii", explanation: "Paragraph D describes enzymatic recycling using bacteria." },
          { number: 18, type: "matching_headings" as const, text: "Paragraph E", options: headings, correctAnswer: "vii", explanation: "Paragraph E discusses economic and logistical obstacles." },
          { number: 19, type: "matching_headings" as const, text: "Paragraph F", options: headings, correctAnswer: "i", explanation: "Paragraph F discusses policy interventions and regulations." },
          { number: 20, type: "summary_completion" as const, text: "Only about ________ percent of all plastic ever produced has been recycled.", correctAnswer: "nine", explanation: "Directly stated in the passage." },
          { number: 21, type: "summary_completion" as const, text: "Mechanical recycling degrades the polymer ________, reducing material strength.", correctAnswer: "chains", explanation: "The passage states 'each recycling cycle degrades the polymer chains'." },
          { number: 22, type: "summary_completion" as const, text: "Pyrolysis uses heat in the absence of ________ to decompose plastic waste.", correctAnswer: "oxygen", explanation: "The passage describes pyrolysis using 'heat in the absence of oxygen'." },
          { number: 23, type: "summary_completion" as const, text: "The bacterium Ideonella sakaiensis was discovered by ________ researchers in 2016.", correctAnswer: "Japanese", explanation: "The passage states 'Japanese researchers discovered' the bacterium." },
          { number: 24, type: "table_completion" as const, text: "PET stands for polyethylene ________.", correctAnswer: "terephthalate", explanation: "The passage defines 'PET (polyethylene terephthalate)'." },
          { number: 25, type: "table_completion" as const, text: "The EU requires PET bottles to contain at least ________ percent recycled material by 2025.", correctAnswer: "twenty-five", explanation: "Directly stated in the passage." },
          { number: 26, type: "table_completion" as const, text: "Carbios is constructing the first industrial-scale ________ recycling plant.", correctAnswer: "enzymatic", explanation: "The passage mentions Carbios developing an 'enzymatic recycling process'." },
        ];
      })(),
    },
    {
      title: "Artificial Intelligence in Healthcare",
      text: `Paragraph A
Artificial intelligence is rapidly transforming healthcare, with applications ranging from diagnostic imaging and drug discovery to personalised treatment planning and administrative automation. The convergence of vast quantities of digital health data, advances in machine learning algorithms, and dramatic increases in computing power has created conditions for AI to address some of healthcare's most persistent challenges, including diagnostic errors, treatment variability, and the growing burden of chronic diseases on health systems worldwide.

Paragraph B
Medical imaging has emerged as one of the most successful applications of AI in clinical practice. Deep learning algorithms, trained on millions of labelled medical images, can now detect abnormalities in radiographs, CT scans, and MRI images with accuracy comparable to or exceeding that of experienced radiologists. In dermatology, AI systems have demonstrated the ability to classify skin lesions — distinguishing between benign moles and potentially malignant melanomas — with diagnostic accuracy matching that of board-certified dermatologists. Ophthalmology has seen similar advances, with AI algorithms approved for autonomous detection of diabetic retinopathy from retinal photographs, enabling screening in primary care settings without the need for specialist referral.

Paragraph C
AI is also accelerating the traditionally slow and expensive process of drug discovery. Developing a new pharmaceutical drug from initial discovery to market approval typically takes twelve to fifteen years and costs an average of two and a half billion dollars. AI algorithms can analyse vast databases of molecular structures, biological pathways, and clinical trial data to identify promising drug candidates far more quickly than traditional methods. In 2023, the first AI-designed drug entered Phase II clinical trials, representing a milestone that could significantly reduce both the time and cost of bringing new therapies to patients.

Paragraph D
Personalised medicine, in which treatment decisions are tailored to individual patients based on their genetic profile, medical history, and lifestyle factors, represents another frontier for AI in healthcare. Machine learning algorithms can integrate and analyse diverse data sources — genomic sequences, electronic health records, wearable device data, and environmental exposures — to predict individual disease risk and identify the treatments most likely to be effective for a specific patient. This approach has shown particular promise in oncology, where AI-guided analysis of tumour genetics helps clinicians select targeted therapies with higher response rates and fewer side effects than conventional chemotherapy.

Paragraph E
Natural language processing, a branch of AI that enables computers to understand and generate human language, is being applied to reduce the administrative burden that consumes a significant proportion of clinicians' working time. AI-powered systems can automatically transcribe doctor-patient consultations, extract relevant clinical information, and generate structured medical documentation, potentially saving hours of manual data entry per day. Clinical decision support systems analyse patient records in real time, alerting physicians to potential drug interactions, missed diagnoses, or deviations from evidence-based treatment guidelines.

Paragraph F
Despite its promise, the integration of AI into healthcare raises significant ethical and practical concerns. Algorithmic bias — the risk that AI systems trained on unrepresentative data may perform poorly for certain demographic groups — has been documented in several healthcare applications. A widely cited study found that an algorithm used by American hospitals to allocate health resources systematically underestimated the healthcare needs of Black patients compared with white patients of similar health status. Ensuring that AI systems are transparent, equitable, and subject to rigorous clinical validation before deployment remains a critical challenge.

Paragraph G
Data privacy and security present additional challenges. Healthcare AI systems require access to large volumes of sensitive patient information, raising concerns about data breaches, unauthorised access, and the potential for re-identification of individuals from anonymised datasets. Regulatory frameworks governing the use of AI in healthcare are still developing in most jurisdictions, creating uncertainty for developers, healthcare providers, and patients alike. Striking the appropriate balance between enabling innovation and protecting patient safety and privacy will be essential as AI becomes increasingly embedded in clinical practice.`,
      questions: [
        { number: 27, type: "matching_information", text: "An example of racial bias in a healthcare AI system", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", explanation: "Paragraph F discusses the algorithm that underestimated healthcare needs of Black patients." },
        { number: 28, type: "matching_information", text: "The use of AI to reduce paperwork for doctors", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", explanation: "Paragraph E discusses natural language processing for medical documentation." },
        { number: 29, type: "matching_information", text: "AI achieving accuracy comparable to specialist doctors in diagnosis", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", explanation: "Paragraph B discusses AI matching radiologists and dermatologists." },
        { number: 30, type: "matching_information", text: "The first AI-designed drug reaching clinical trials", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", explanation: "Paragraph C mentions the first AI-designed drug entering Phase II trials." },
        { number: 31, type: "matching_information", text: "Concerns about protecting patient data from breaches", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", explanation: "Paragraph G discusses data privacy and security challenges." },
        { number: 32, type: "matching_information", text: "Using AI to select cancer treatments based on tumour genetics", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", explanation: "Paragraph D discusses AI-guided analysis of tumour genetics in oncology." },
        { number: 33, type: "multiple_choice", text: "How long does traditional drug development typically take?", options: ["A. 5 to 8 years", "B. 8 to 10 years", "C. 12 to 15 years", "D. 15 to 20 years"], correctAnswer: "C", explanation: "The passage states 'typically takes twelve to fifteen years'." },
        { number: 34, type: "multiple_choice", text: "What has AI been approved to autonomously detect in ophthalmology?", options: ["A. Glaucoma", "B. Cataracts", "C. Macular degeneration", "D. Diabetic retinopathy"], correctAnswer: "D", explanation: "The passage mentions 'autonomous detection of diabetic retinopathy'." },
        { number: 35, type: "multiple_choice", text: "What is algorithmic bias?", options: ["A. AI systems becoming too expensive to use", "B. AI performing poorly for certain demographic groups due to unrepresentative training data", "C. AI replacing human doctors entirely", "D. AI systems being too slow for clinical use"], correctAnswer: "B", explanation: "Defined as 'the risk that AI systems trained on unrepresentative data may perform poorly for certain demographic groups'." },
        { number: 36, type: "multiple_choice", text: "What average cost is cited for developing a new pharmaceutical drug?", options: ["A. Five hundred million dollars", "B. One billion dollars", "C. Two and a half billion dollars", "D. Five billion dollars"], correctAnswer: "C", explanation: "The passage states 'costs an average of two and a half billion dollars'." },
        { number: 37, type: "sentence_completion", text: "Deep learning algorithms are trained on millions of labelled medical ________.", correctAnswer: "images", explanation: "The passage states algorithms are 'trained on millions of labelled medical images'." },
        { number: 38, type: "sentence_completion", text: "AI-powered systems can automatically ________ doctor-patient consultations.", correctAnswer: "transcribe", explanation: "The passage states systems 'can automatically transcribe doctor-patient consultations'." },
        { number: 39, type: "sentence_completion", text: "Machine learning can integrate genomic sequences, electronic health records, and ________ device data.", correctAnswer: "wearable", explanation: "The passage lists 'wearable device data' as one of the data sources." },
        { number: 40, type: "sentence_completion", text: "Regulatory frameworks governing AI in healthcare are still ________ in most jurisdictions.", correctAnswer: "developing", explanation: "The passage states frameworks 'are still developing in most jurisdictions'." },
      ],
    },
  ],
};
