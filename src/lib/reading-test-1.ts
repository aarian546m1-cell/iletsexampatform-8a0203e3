import { ReadingTest } from "./reading-tests-data";

const p1Headings = [
  "i. The dominance of horse-drawn vehicles",
  "ii. A shift towards sustainable commuting",
  "iii. The dawn of mechanised urban travel",
  "iv. Challenges of rapid motorisation",
  "v. Underground solutions to surface congestion",
  "vi. The role of government subsidies in transport",
  "vii. Electric power transforms city streets",
  "viii. Planning cities around the car",
];

const p3Paragraphs = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const READING_TEST_1: ReadingTest = {
  id: 1,
  passages: [
    {
      title: "The Evolution of Urban Transportation",
      text: `Paragraph A
For most of recorded history, cities were compact, walkable settlements. Where distances were too great for walking, people relied on animals — horses, donkeys, and oxen — to pull carts and carriages through narrow streets. By the early nineteenth century, horse-drawn omnibuses had become the first form of public transport in cities like Paris and London, carrying dozens of passengers along fixed routes for a modest fare. Despite their popularity, these services were slow, and the sheer volume of horses created serious sanitation problems.

Paragraph B
The arrival of the steam engine in the 1820s marked a turning point. Although initially confined to intercity railways, steam technology was soon adapted for urban use. In 1863, London opened the Metropolitan Railway, the world's first underground passenger railway, which carried 38,000 passengers on its opening day. Other cities quickly followed suit, recognising that moving transport below ground freed valuable surface space and dramatically reduced journey times across sprawling metropolises.

Paragraph C
By the 1880s, electric traction began to replace steam and horse power on city streets. Frank Sprague's successful deployment of an electric streetcar system in Richmond, Virginia, in 1888 proved that electric trams were reliable, clean, and fast. Within two decades, electric tramway networks crisscrossed cities on every inhabited continent, reshaping urban geography by allowing residential suburbs to develop along tram lines far from the traditional city centre.

Paragraph D
The mass production of the automobile in the early twentieth century, pioneered by Henry Ford's assembly-line methods, placed private motorised transport within reach of the middle classes. Car ownership soared, and cities responded by widening roads, building highways, and constructing vast parking facilities. This car-centric planning, particularly pronounced in North American cities after World War II, led to suburban sprawl and a decline in public transit ridership that would take decades to reverse.

Paragraph E
By the late twentieth century, the environmental and social costs of automobile dependence had become impossible to ignore. Traffic congestion, air pollution, noise, and rising greenhouse-gas emissions prompted planners to reconsider the role of cycling and walking. Cities such as Copenhagen and Amsterdam invested heavily in protected bike lanes, secure parking, and bike-sharing schemes, demonstrating that cycling could account for a significant share of urban trips even in climates with harsh winters.`,
      questions: [
        { number: 1, type: "matching_headings", text: "Paragraph A", options: p1Headings, correctAnswer: "i" },
        { number: 2, type: "matching_headings", text: "Paragraph B", options: p1Headings, correctAnswer: "v" },
        { number: 3, type: "matching_headings", text: "Paragraph C", options: p1Headings, correctAnswer: "vii" },
        { number: 4, type: "matching_headings", text: "Paragraph D", options: p1Headings, correctAnswer: "iv" },
        { number: 5, type: "matching_headings", text: "Paragraph E", options: p1Headings, correctAnswer: "ii" },
        { number: 6, type: "true_false_not_given", text: "Horse-drawn omnibuses were first introduced in London.", correctAnswer: "Not Given", explanation: "The passage mentions Paris and London but does not say which city was first." },
        { number: 7, type: "true_false_not_given", text: "The Metropolitan Railway carried over 30,000 passengers on its first day.", correctAnswer: "True", explanation: "The passage states 38,000 passengers on its opening day." },
        { number: 8, type: "true_false_not_given", text: "Frank Sprague built the first electric tram in London.", correctAnswer: "False", explanation: "Sprague's system was in Richmond, Virginia." },
        { number: 9, type: "true_false_not_given", text: "Car-centric planning was most evident in European cities.", correctAnswer: "False", explanation: "The passage says it was particularly pronounced in North American cities." },
        { number: 10, type: "sentence_completion", text: "Horse-drawn omnibuses created serious _______ problems in cities.", correctAnswer: "sanitation" },
        { number: 11, type: "sentence_completion", text: "The world's first underground railway opened in _______.", correctAnswer: "London" },
        { number: 12, type: "sentence_completion", text: "Henry Ford's _______ methods made cars affordable for the middle classes.", correctAnswer: "assembly-line" },
        { number: 13, type: "sentence_completion", text: "Copenhagen and Amsterdam invested in protected _______ to promote cycling.", correctAnswer: "bike lanes" },
      ],
    },
    {
      title: "The Science of Sleep",
      text: `Sleep is one of the most fundamental biological processes, yet scientists have only begun to unravel its complexities in recent decades. Research has shown that sleep is not a single, uniform state but rather a cycle of distinct stages, each serving different physiological and psychological functions.

The sleep cycle consists of two main categories: non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep is further divided into three stages. Stage 1 is a light transitional phase lasting only a few minutes. Stage 2, which accounts for roughly half of total sleep time, involves a drop in body temperature and heart rate. Stage 3, often called deep sleep or slow-wave sleep, is the most restorative phase, during which tissue repair, immune function enhancement, and growth hormone release occur.

REM sleep, which first appears about 90 minutes after falling asleep, is characterised by rapid eye movements, increased brain activity, and vivid dreaming. This stage is believed to play a critical role in memory consolidation, emotional regulation, and creative problem-solving. Adults typically experience four to six complete cycles per night, with REM periods growing longer towards morning.

The circadian rhythm, an internal biological clock governed primarily by the suprachiasmatic nucleus in the hypothalamus, regulates the timing of sleep and wakefulness. This clock responds to external cues, particularly light exposure, which suppresses the production of melatonin — the hormone that promotes sleepiness. Modern lifestyles, with their abundance of artificial light and screen use, can disrupt circadian rhythms, leading to difficulties falling asleep and reduced sleep quality.

Chronic sleep deprivation has been linked to a wide range of health problems, including obesity, cardiovascular disease, weakened immunity, and impaired cognitive function. Studies have demonstrated that individuals who consistently sleep fewer than six hours per night show measurable declines in attention, reaction time, and decision-making ability. Furthermore, prolonged sleep loss has been associated with increased risks of depression and anxiety disorders.

Sleep disorders affect a significant proportion of the population. Insomnia, the most common disorder, is characterised by persistent difficulty falling or staying asleep. Sleep apnoea, another prevalent condition, involves repeated interruptions in breathing during sleep, often resulting in excessive daytime drowsiness. Narcolepsy, though rarer, causes sudden, uncontrollable episodes of sleep during waking hours.`,
      questions: [
        { number: 14, type: "multiple_choice", text: "According to the passage, which stage of sleep is most restorative?", options: ["A Stage 1 NREM", "B Stage 2 NREM", "C Stage 3 NREM", "D REM sleep"], correctAnswer: "C" },
        { number: 15, type: "multiple_choice", text: "REM sleep first occurs approximately how long after falling asleep?", options: ["A 30 minutes", "B 60 minutes", "C 90 minutes", "D 120 minutes"], correctAnswer: "C" },
        { number: 16, type: "multiple_choice", text: "What is the primary external cue for the circadian rhythm?", options: ["A Temperature", "B Light exposure", "C Sound levels", "D Physical activity"], correctAnswer: "B" },
        { number: 17, type: "multiple_choice", text: "Which hormone promotes sleepiness according to the passage?", options: ["A Cortisol", "B Serotonin", "C Melatonin", "D Dopamine"], correctAnswer: "C" },
        { number: 18, type: "multiple_choice", text: "What is the most common sleep disorder mentioned?", options: ["A Sleep apnoea", "B Narcolepsy", "C Insomnia", "D Restless leg syndrome"], correctAnswer: "C" },
        { number: 19, type: "summary_completion", text: "Stage 2 NREM sleep involves a drop in body _______ and heart rate.", correctAnswer: "temperature" },
        { number: 20, type: "summary_completion", text: "During deep sleep, _______ repair and immune function enhancement occur.", correctAnswer: "tissue" },
        { number: 21, type: "summary_completion", text: "REM sleep is believed to assist in memory consolidation and _______ regulation.", correctAnswer: "emotional" },
        { number: 22, type: "summary_completion", text: "The circadian rhythm is governed by the suprachiasmatic nucleus in the _______.", correctAnswer: "hypothalamus" },
        { number: 23, type: "summary_completion", text: "People sleeping fewer than six hours show declines in attention and _______ time.", correctAnswer: "reaction" },
        { number: 24, type: "table_completion", text: "Stage 3 NREM sleep is also called deep sleep or _______ sleep.", correctAnswer: "slow-wave" },
        { number: 25, type: "table_completion", text: "Sleep apnoea involves repeated interruptions in _______ during sleep.", correctAnswer: "breathing" },
        { number: 26, type: "table_completion", text: "Narcolepsy causes sudden episodes of sleep during _______ hours.", correctAnswer: "waking" },
      ],
    },
    {
      title: "Biodiversity and Conservation",
      text: `Paragraph A
Biodiversity — the variety of life on Earth at every level, from genes to ecosystems — underpins the functioning of the natural world and the services it provides to humanity. Healthy ecosystems regulate climate, purify water, pollinate crops, and decompose waste. Yet human activities are eroding this diversity at an unprecedented rate, with scientists estimating that species are now disappearing between 100 and 1,000 times faster than the natural background rate of extinction.

Paragraph B
Habitat destruction is widely regarded as the single greatest threat to biodiversity. Agriculture, urbanisation, logging, and mining have converted vast tracts of forest, wetland, and grassland into human-dominated landscapes. The tropical rainforests, which harbour roughly half of all terrestrial species despite covering less than seven percent of the Earth's land surface, have been particularly hard hit, losing an area equivalent to a football pitch every six seconds.

Paragraph C
Climate change poses an increasingly severe threat, altering temperature and precipitation patterns faster than many species can adapt or migrate. Coral reefs, which support approximately 25 percent of all marine species, are especially vulnerable: rising sea temperatures trigger mass bleaching events that can kill entire reef systems within weeks.

Paragraph D
Invasive species introduced by human trade and travel represent another major driver of biodiversity loss. On islands, where native species evolved in isolation and lack defences against foreign predators and competitors, invasions have been devastating. In New Zealand, for example, introduced mammals such as rats, stoats, and possums have driven numerous native bird species to extinction or near-extinction.

Paragraph E
Over-exploitation — including overfishing, poaching, and unsustainable harvesting — continues to deplete populations of commercially or culturally valuable species. The collapse of the North Atlantic cod fishery in the early 1990s remains one of the most dramatic examples, resulting in the loss of approximately 40,000 jobs and a marine ecosystem that has yet to fully recover.

Paragraph F
Protected areas, such as national parks and marine reserves, are a cornerstone of conservation strategy. When well-managed and adequately funded, they can safeguard critical habitats and allow depleted populations to recover. The global network of protected areas has expanded significantly, now covering roughly 17 percent of terrestrial and 8 percent of marine environments, though many conservation biologists argue these figures remain insufficient.

Paragraph G
Community-based conservation recognises that local people are often the most effective stewards of their natural environment. Programmes that grant indigenous and local communities legal rights over their lands and resources have shown impressive results: in the Brazilian Amazon, deforestation rates within indigenous territories are significantly lower than in surrounding areas.

Paragraph H
Success stories, while still too rare, offer grounds for cautious optimism. The recovery of the humpback whale population following the international moratorium on commercial whaling, the reintroduction of wolves to Yellowstone National Park, and the steady increase in global tiger numbers all demonstrate that determined conservation action can reverse declines — provided there is sufficient political will and financial investment.`,
      questions: [
        { number: 27, type: "matching_information", text: "An example of job losses caused by species depletion", options: p3Paragraphs, correctAnswer: "E" },
        { number: 28, type: "matching_information", text: "The rate at which tropical rainforests are being lost", options: p3Paragraphs, correctAnswer: "B" },
        { number: 29, type: "matching_information", text: "Evidence that indigenous land management reduces deforestation", options: p3Paragraphs, correctAnswer: "G" },
        { number: 30, type: "matching_information", text: "The impact of rising sea temperatures on marine life", options: p3Paragraphs, correctAnswer: "C" },
        { number: 31, type: "matching_information", text: "Examples of successful species recovery programmes", options: p3Paragraphs, correctAnswer: "H" },
        { number: 32, type: "matching_information", text: "The problem of non-native animals on islands", options: p3Paragraphs, correctAnswer: "D" },
        { number: 33, type: "yes_no_not_given", text: "The author believes current protected area coverage is sufficient.", correctAnswer: "No", explanation: "The passage states many biologists argue the figures remain insufficient." },
        { number: 34, type: "yes_no_not_given", text: "Community-based conservation is more effective than government-led initiatives.", correctAnswer: "Not Given", explanation: "The passage does not directly compare the two approaches." },
        { number: 35, type: "yes_no_not_given", text: "Conservation efforts can succeed if adequately supported.", correctAnswer: "Yes", explanation: "The passage states action can reverse declines with sufficient political will and investment." },
        { number: 36, type: "yes_no_not_given", text: "The humpback whale population has fully recovered to pre-whaling levels.", correctAnswer: "Not Given", explanation: "The passage mentions recovery but does not state it has reached pre-whaling levels." },
        { number: 37, type: "sentence_completion", text: "Species are now disappearing up to _______ times faster than the natural rate.", correctAnswer: "1,000" },
        { number: 38, type: "sentence_completion", text: "Tropical rainforests cover less than _______ percent of Earth's land surface.", correctAnswer: "seven" },
        { number: 39, type: "sentence_completion", text: "Protected areas now cover roughly 17 percent of _______ environments.", correctAnswer: "terrestrial" },
        { number: 40, type: "sentence_completion", text: "The North Atlantic _______ fishery collapsed in the early 1990s.", correctAnswer: "cod" },
      ],
    },
  ],
};
