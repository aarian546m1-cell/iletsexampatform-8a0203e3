// Cambridge-style IELTS Listening Test Data
import { LISTENING_TEST_2 } from "./listening-test-data-2";
import { LISTENING_TEST_3 } from "./listening-test-data-3";
import { LISTENING_TEST_4 } from "./listening-test-data-4";
import { LISTENING_TEST_5 } from "./listening-test-data-5";

export interface DialogueLine {
  speaker: string;
  voiceId: string;
  text: string;
}

export interface ListeningQuestion {
  number: number;
  type: "fill_blank" | "short_answer" | "mcq" | "matching" | "map_labeling" | "sentence_completion" | "summary_completion";
  text: string;
  options?: string[];
  matchOptions?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface ListeningSection {
  sectionNumber: number;
  title: string;
  description: string;
  context: string;
  dialogue: DialogueLine[];
  questions: ListeningQuestion[];
}

export interface ListeningTestData {
  id: number;
  title: string;
  totalQuestions: number;
  timeLimit: number; // minutes
  sections: ListeningSection[];
}

// Voice IDs from ElevenLabs
const VOICES = {
  roger: "CwhRBWXzGAHq8TQ4Fs17",     // Male British
  sarah: "EXAVITQu4vr4xnSDxMaL",     // Female British
  george: "JBFqnCBsd6RMkjVDRZzb",    // Male British formal
  laura: "FGY2WhTYpPnrIDTdsKH5",     // Female British
  charlie: "IKne3meq5aSn9XLyUdCD",   // Male British
  alice: "Xb7hH8MSUJpSbSDYk0k2",     // Female British
  brian: "nPczCjzI2devNBz1zQrb",      // Male British formal
};

export const LISTENING_TESTS: ListeningTestData[] = [
  {
    id: 1,
    title: "Listening Test 1",
    totalQuestions: 40,
    timeLimit: 40,
    sections: [
      // ─── SECTION 1: Everyday Conversation ───
      {
        sectionNumber: 1,
        title: "Library Membership Enquiry",
        description: "A conversation between a library receptionist and a new member registering for a library card.",
        context: "You will hear a conversation between a receptionist at a public library and a woman who wants to register for a library membership. First, you have some time to look at questions 1 to 10.",
        dialogue: [
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Good morning, welcome to Greenfield Public Library. How can I help you today?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Oh, hello. Um, I've just moved to the area, and I'd like to register for a library card, please." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Of course, I'd be happy to help you with that. I'll just need to take a few details. Could I start with your full name, please?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Yes, it's Patricia Henderson." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Patricia Henderson. And could you spell your surname for me?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Yes, it's H-E-N-D-E-R-S-O-N." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Lovely. And what's your date of birth?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "The fourteenth of March, nineteen eighty-seven." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Fourteenth of March, eighty-seven. Right. And your current address?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Well, it's 47 Birchwood Lane. That's B-I-R-C-H-W-O-O-D. Lane." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "47 Birchwood Lane. And what's the postcode?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "It's CB4 7TL." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "CB4 7TL. Perfect. And a contact number?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Um, yes, my mobile is 07845 293016." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "07845 293016. And do you have an email address we can use?" },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Yes, it's p.henderson at mailbox dot com." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Great. Now, we offer three types of membership. There's the standard membership, which is completely free, and that lets you borrow up to six books at a time for three weeks. Then there's premium membership at twelve pounds a year, which gives you up to fifteen books and access to our digital collection. And finally, there's the family membership at twenty pounds per year for up to four family members." },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Um, well, I think the premium one sounds good, actually. I do a lot of reading, and the digital collection would be useful." },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Excellent choice. Now, do you have any particular interests? We run several reading groups and workshops." },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Oh, that sounds interesting. What kind of things do you have?" },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Well, there's a fiction book club that meets every Wednesday evening, a creative writing workshop on Saturday mornings, and we've just started a children's story time on Tuesday afternoons if you have young ones." },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "The creative writing workshop sounds wonderful. What time does that start on Saturdays?" },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "It starts at ten thirty and runs until about twelve. It's led by a local author, Margaret Thornton." },
          { speaker: "Woman", voiceId: VOICES.sarah, text: "Oh, lovely. I'll definitely come along to that. And how long does it usually take to get the card ready?" },
          { speaker: "Receptionist", voiceId: VOICES.roger, text: "Your card will be ready in about fifteen minutes. You can wait in the reading area, or browse our new arrivals section while you wait." },
        ],
        questions: [
          // Form/Note Completion (1-5)
          { number: 1, type: "fill_blank", text: "Full name of the new member:", correctAnswer: "Patricia Henderson", explanation: "The woman says her name is Patricia Henderson." },
          { number: 2, type: "fill_blank", text: "Date of birth:", correctAnswer: "14 March 1987", explanation: "She says 'the fourteenth of March, nineteen eighty-seven'." },
          { number: 3, type: "fill_blank", text: "Address: 47 _______ Lane", correctAnswer: "Birchwood", explanation: "She spells out B-I-R-C-H-W-O-O-D." },
          { number: 4, type: "fill_blank", text: "Postcode:", correctAnswer: "CB4 7TL", explanation: "She says the postcode is CB4 7TL." },
          { number: 5, type: "fill_blank", text: "Contact number:", correctAnswer: "07845 293016", explanation: "Her mobile number is 07845 293016." },
          // Short Answer (6-8)
          { number: 6, type: "short_answer", text: "How much does the premium membership cost per year?", correctAnswer: "12", explanation: "Premium membership is twelve pounds a year." },
          { number: 7, type: "short_answer", text: "How many books can premium members borrow at one time?", correctAnswer: "15", explanation: "Premium gives you up to fifteen books." },
          { number: 8, type: "short_answer", text: "What is the name of the person who leads the creative writing workshop?", correctAnswer: "Margaret Thornton", explanation: "It's led by a local author, Margaret Thornton." },
          // MCQ (9-10)
          { number: 9, type: "mcq", text: "Which membership does the woman choose?", options: ["A Standard", "B Premium", "C Family"], correctAnswer: "B", explanation: "She says 'I think the premium one sounds good'." },
          { number: 10, type: "mcq", text: "When does the creative writing workshop take place?", options: ["A Wednesday evenings", "B Tuesday afternoons", "C Saturday mornings"], correctAnswer: "C", explanation: "The creative writing workshop is on Saturday mornings at 10:30." },
        ],
      },

      // ─── SECTION 2: Informative Monologue ───
      {
        sectionNumber: 2,
        title: "Riverside Sports Centre Tour",
        description: "A guide giving information about a newly renovated sports centre to a group of visitors.",
        context: "You will hear a guide giving a tour of the Riverside Sports Centre. First, you have some time to look at questions 11 to 20.",
        dialogue: [
          { speaker: "Guide", voiceId: VOICES.george, text: "Good afternoon, everyone, and welcome to the Riverside Sports Centre. My name is David Parker, and I'll be showing you around today. We've recently undergone a major renovation, which was completed last September, and I'm sure you'll agree the facilities are now quite impressive." },
          { speaker: "Guide", voiceId: VOICES.george, text: "Let me start by giving you an overview. The centre covers an area of approximately twelve thousand square metres and includes both indoor and outdoor facilities. We're open seven days a week, from six thirty in the morning until ten o'clock at night on weekdays, and from eight until eight at weekends." },
          { speaker: "Guide", voiceId: VOICES.george, text: "Now, as you come through the main entrance, which is where we are now, you'll see the reception desk directly in front of you. To your left is the café, which serves healthy meals and snacks throughout the day. The café was actually designed by a local architect who specialised in sustainable building design, and all the furniture is made from recycled materials." },
          { speaker: "Guide", voiceId: VOICES.george, text: "If you turn right from reception, you'll find the changing rooms. Beyond the changing rooms, straight ahead, is our Olympic-sized swimming pool. The pool has eight lanes and is kept at twenty-eight degrees Celsius year-round. Next to the main pool, there's a smaller teaching pool, which is particularly popular with families and young children." },
          { speaker: "Guide", voiceId: VOICES.george, text: "Now, if you go past the swimming pool area and take the corridor on your left, you'll reach the gymnasium. This is our largest indoor space, and it's equipped with over two hundred pieces of equipment, including treadmills, rowing machines, and weight stations. We also offer group fitness classes here, including yoga, spinning, and high-intensity interval training." },
          { speaker: "Guide", voiceId: VOICES.george, text: "Moving upstairs to the first floor, you'll find three multi-purpose sports halls. Hall A, the largest, is primarily used for badminton and basketball. Hall B is set up for table tennis and martial arts. And Hall C is our dedicated dance and aerobics studio, with mirrors along one wall and a sprung wooden floor." },
          { speaker: "Guide", voiceId: VOICES.george, text: "Outside, we have four tennis courts, a five-a-side football pitch with artificial turf, and a four-hundred-metre running track. The running track was actually the most expensive part of the renovation, costing over three hundred thousand pounds. We've also added a children's adventure playground, which is right next to the outdoor car park at the south end of the building." },
          { speaker: "Guide", voiceId: VOICES.george, text: "In terms of membership, individual adult membership is forty-five pounds per month. There's a reduced rate of thirty pounds for students and senior citizens. Family membership, which covers two adults and up to three children, is seventy-five pounds per month. All memberships include unlimited access to the pool and gymnasium, and you get two free group classes per week." },
        ],
        questions: [
          // MCQ (11-14)
          { number: 11, type: "mcq", text: "When was the renovation of the sports centre completed?", options: ["A Last June", "B Last September", "C Last December"], correctAnswer: "B", explanation: "The guide says the renovation was completed last September." },
          { number: 12, type: "mcq", text: "What time does the centre open on weekdays?", options: ["A 6:00 am", "B 6:30 am", "C 8:00 am"], correctAnswer: "B", explanation: "Open from six thirty in the morning on weekdays." },
          { number: 13, type: "mcq", text: "What special feature does the café have?", options: ["A It has a garden terrace", "B It serves organic food only", "C Its furniture is made from recycled materials"], correctAnswer: "C", explanation: "All the furniture is made from recycled materials." },
          { number: 14, type: "mcq", text: "How much does the running track renovation cost?", options: ["A Over £200,000", "B Over £300,000", "C Over £400,000"], correctAnswer: "B", explanation: "The running track cost over three hundred thousand pounds." },
          // Note/Sentence Completion (15-17)
          { number: 15, type: "sentence_completion", text: "The swimming pool temperature is maintained at _______ degrees Celsius.", correctAnswer: "28", explanation: "The pool is kept at twenty-eight degrees Celsius." },
          { number: 16, type: "sentence_completion", text: "The gymnasium contains over _______ pieces of equipment.", correctAnswer: "200", explanation: "Over two hundred pieces of equipment." },
          { number: 17, type: "sentence_completion", text: "Student membership costs _______ pounds per month.", correctAnswer: "30", explanation: "Reduced rate of thirty pounds for students." },
          // Map/Diagram Labeling (18-20)
          { number: 18, type: "map_labeling", text: "What is located to the LEFT of the reception desk?", options: ["A Changing rooms", "B Café", "C Swimming pool", "D Gymnasium"], correctAnswer: "B", explanation: "To your left is the café." },
          { number: 19, type: "map_labeling", text: "What is located to the RIGHT of the reception desk?", options: ["A Changing rooms", "B Café", "C Swimming pool", "D Gymnasium"], correctAnswer: "A", explanation: "If you turn right from reception, you'll find the changing rooms." },
          { number: 20, type: "map_labeling", text: "Hall C on the first floor is used for:", options: ["A Badminton and basketball", "B Table tennis and martial arts", "C Dance and aerobics", "D Swimming lessons"], correctAnswer: "C", explanation: "Hall C is our dedicated dance and aerobics studio." },
        ],
      },

      // ─── SECTION 3: Academic Discussion ───
      {
        sectionNumber: 3,
        title: "Research Project Planning",
        description: "Three university students discussing their group research project on urban green spaces.",
        context: "You will hear three university students discussing their research project. First, you have some time to look at questions 21 to 30.",
        dialogue: [
          { speaker: "Laura", voiceId: VOICES.laura, text: "Right, so we need to finalise our research plan for the urban green spaces project. Professor Williams wants our proposal by next Friday. Have you both done the background reading?" },
          { speaker: "Charlie", voiceId: VOICES.charlie, text: "Yeah, I've been looking at the literature on the health benefits of urban parks. There's quite a lot of research from Scandinavia, particularly from Denmark and Sweden, showing that access to green spaces reduces stress levels and improves mental wellbeing." },
          { speaker: "Alice", voiceId: VOICES.alice, text: "That's interesting. I focused on the environmental aspects, um, things like air quality improvement, biodiversity, and the urban heat island effect. Did you know that a single large tree can absorb up to twenty-two kilograms of carbon dioxide per year?" },
          { speaker: "Laura", voiceId: VOICES.laura, text: "That's a useful statistic. Now, for our methodology, I was thinking we should use a mixed methods approach. We could combine quantitative data, like surveys and air quality measurements, with qualitative interviews with local residents." },
          { speaker: "Charlie", voiceId: VOICES.charlie, text: "I agree. But I think we should also include some observational studies. You know, actually going to different parks and recording how people use the spaces, what activities they do, how long they stay, that sort of thing." },
          { speaker: "Alice", voiceId: VOICES.alice, text: "Good idea. We could use time-lapse photography as well. I read about a study in Melbourne that used cameras to track visitor patterns over a twelve-month period. It gave them really detailed data about seasonal variations in park usage." },
          { speaker: "Laura", voiceId: VOICES.laura, text: "Let's divide the work then. Charlie, since you've been looking at health benefits, why don't you handle the survey design and the literature review on health outcomes? Alice, could you take charge of the environmental measurements, the air quality monitoring, and the biodiversity surveys?" },
          { speaker: "Charlie", voiceId: VOICES.charlie, text: "That works for me. What will you focus on, Laura?" },
          { speaker: "Laura", voiceId: VOICES.laura, text: "I'll manage the qualitative side, the resident interviews and the observational studies. I'll also coordinate the overall report structure. We should aim to collect data over eight weeks, starting in April, so we can capture spring usage patterns." },
          { speaker: "Alice", voiceId: VOICES.alice, text: "April is perfect for the biodiversity surveys too. That's when many species become active again. Um, one question though, how many parks should we include in our study?" },
          { speaker: "Laura", voiceId: VOICES.laura, text: "I was thinking three parks of different sizes. Victoria Park, which is the largest at fifteen hectares, then Meadow Gardens, which is about five hectares, and then that small pocket park on Bridge Street, which is less than one hectare." },
          { speaker: "Charlie", voiceId: VOICES.charlie, text: "That gives us a good range. We should also consider the demographics of the surrounding areas. Victoria Park is in a fairly affluent neighbourhood, while Meadow Gardens serves a more mixed-income community." },
          { speaker: "Alice", voiceId: VOICES.alice, text: "And the Bridge Street park is right in the city centre, so it probably gets quite different types of visitors. Office workers on lunch breaks, that kind of thing." },
          { speaker: "Laura", voiceId: VOICES.laura, text: "Exactly. Right, so we need our equipment list. Alice, what do you need for the environmental monitoring?" },
          { speaker: "Alice", voiceId: VOICES.alice, text: "I'll need a portable air quality sensor, a sound level meter for noise pollution measurements, and some basic botanical survey equipment. I can borrow most of it from the geography department." },
        ],
        questions: [
          // Matching (21-24)
          { number: 21, type: "matching", text: "Charlie is responsible for:", matchOptions: ["A Survey design & health literature review", "B Environmental measurements", "C Resident interviews & observations", "D Report editing"], correctAnswer: "A", explanation: "Laura assigns Charlie the survey design and health literature review." },
          { number: 22, type: "matching", text: "Alice is responsible for:", matchOptions: ["A Survey design & health literature review", "B Environmental measurements & biodiversity", "C Resident interviews & observations", "D Report editing"], correctAnswer: "B", explanation: "Alice takes charge of environmental measurements and biodiversity surveys." },
          { number: 23, type: "matching", text: "Laura is responsible for:", matchOptions: ["A Survey design & health literature review", "B Environmental measurements", "C Qualitative research & coordination", "D Data analysis only"], correctAnswer: "C", explanation: "Laura manages qualitative side and coordinates the report." },
          { number: 24, type: "matching", text: "The background research on health benefits focused on studies from:", matchOptions: ["A Australia", "B Scandinavia", "C North America", "D Asia"], correctAnswer: "B", explanation: "Research from Scandinavia, particularly Denmark and Sweden." },
          // Table/Flowchart Completion (25-27)
          { number: 25, type: "fill_blank", text: "Victoria Park size: _______ hectares", correctAnswer: "15", explanation: "Victoria Park is the largest at fifteen hectares." },
          { number: 26, type: "fill_blank", text: "Data collection will last for _______ weeks.", correctAnswer: "8", explanation: "Collect data over eight weeks starting in April." },
          { number: 27, type: "fill_blank", text: "A single large tree absorbs up to _______ kg of CO2 per year.", correctAnswer: "22", explanation: "A single large tree can absorb up to twenty-two kilograms." },
          // MCQ (28-30)
          { number: 28, type: "mcq", text: "What research method from Melbourne did Alice mention?", options: ["A Drone surveys", "B Time-lapse photography", "C Satellite imaging"], correctAnswer: "B", explanation: "A study in Melbourne that used cameras/time-lapse photography." },
          { number: 29, type: "mcq", text: "Which park is in a city centre location?", options: ["A Victoria Park", "B Meadow Gardens", "C Bridge Street park"], correctAnswer: "C", explanation: "Bridge Street park is right in the city centre." },
          { number: 30, type: "mcq", text: "Where will Alice borrow most of her equipment from?", options: ["A The biology department", "B The geography department", "C The environmental science lab"], correctAnswer: "B", explanation: "She can borrow most of it from the geography department." },
        ],
      },

      // ─── SECTION 4: Academic Lecture ───
      {
        sectionNumber: 4,
        title: "The History and Impact of Urban Farming",
        description: "A university lecture on the development and significance of urban agriculture.",
        context: "You will hear a lecture about urban farming. First, you have some time to look at questions 31 to 40.",
        dialogue: [
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Good morning, everyone. Today I want to talk about urban farming, a practice that, while it might seem like a modern trend, actually has a history stretching back thousands of years. The ancient Aztecs, for instance, developed a system of floating gardens called chinampas on Lake Texcoco in what is now Mexico City. These artificial islands were remarkably productive, yielding up to seven harvests per year." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Now, in more recent history, urban farming gained significant importance during the two World Wars. In Britain, the famous Dig for Victory campaign during World War Two encouraged citizens to turn every available piece of land into a vegetable garden. At the peak of this movement, there were approximately one point four million allotments across the country, producing around ten per cent of the nation's food supply." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Fast forward to the twenty-first century, and urban farming has taken on new dimensions. Modern urban farms use innovative technologies such as vertical farming, hydroponics, and aquaponics. Vertical farming, in particular, has attracted considerable investment. The global vertical farming market was valued at five point five billion dollars in twenty twenty-two and is projected to reach approximately thirty-three billion by twenty thirty." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "One of the most compelling arguments for urban farming relates to food miles. The average food item in a British supermarket has travelled roughly nineteen hundred miles before it reaches the consumer. Urban farms, by contrast, can deliver produce within hours of harvest, dramatically reducing transportation emissions and ensuring fresher food with higher nutritional content." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Let me give you a specific example. In Singapore, a company called Sky Greens has developed a system of rotating vertical towers that are nine metres tall. Each tower uses a unique water-driven mechanism that requires only sixty watts of electricity, roughly the same as a single light bulb. Despite this low energy consumption, each tower can produce about five times more vegetables per unit of land than a conventional farm." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Another fascinating development is the use of abandoned urban spaces. In London, a company called Growing Underground has converted a former World War Two air-raid shelter, thirty-three metres below Clapham, into a hydroponic farm. They grow micro-herbs and salad leaves using LED lighting and supply several major supermarkets and restaurants." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "However, urban farming does face significant challenges. The most obvious is the cost of land in urban areas, which can make large-scale operations financially unviable. Water management is another concern, particularly in cities already struggling with water supply. There are also issues around contaminated soil in former industrial areas, which requires extensive remediation before food can be safely grown." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Despite these challenges, the social benefits of urban farming are increasingly recognised. Studies have shown that community gardens reduce crime rates in surrounding areas by up to fifteen per cent. They also provide educational opportunities for children, many of whom have never seen food being grown. In Detroit, for instance, urban farms have become a vital part of community regeneration, providing both food and employment in areas that were previously economically deprived." },
          { speaker: "Lecturer", voiceId: VOICES.brian, text: "Looking ahead, the integration of artificial intelligence and robotics into urban farming promises to make it even more efficient. Researchers at MIT have developed algorithms that can optimise growing conditions for individual plants, adjusting light, temperature, and nutrients in real time. This precision agriculture approach could increase yields by up to thirty per cent while using forty per cent less water than traditional methods." },
        ],
        questions: [
          // MCQ (31-33)
          { number: 31, type: "mcq", text: "The Aztec floating gardens could produce:", options: ["A up to 5 harvests per year", "B up to 7 harvests per year", "C up to 10 harvests per year"], correctAnswer: "B", explanation: "The chinampas yielded up to seven harvests per year." },
          { number: 32, type: "mcq", text: "During World War Two, allotments in Britain produced approximately what percentage of the nation's food?", options: ["A 5%", "B 10%", "C 15%"], correctAnswer: "B", explanation: "Producing around ten per cent of the nation's food supply." },
          { number: 33, type: "mcq", text: "What is the projected value of the vertical farming market by 2030?", options: ["A $5.5 billion", "B $22 billion", "C $33 billion"], correctAnswer: "C", explanation: "Projected to reach approximately thirty-three billion by twenty thirty." },
          // Sentence Completion (34-37)
          { number: 34, type: "sentence_completion", text: "The average food item in British supermarkets has travelled _______ miles.", correctAnswer: "1900", explanation: "Roughly nineteen hundred miles." },
          { number: 35, type: "sentence_completion", text: "Sky Greens' vertical towers in Singapore are _______ metres tall.", correctAnswer: "9", explanation: "Rotating vertical towers that are nine metres tall." },
          { number: 36, type: "sentence_completion", text: "Growing Underground's farm is located _______ metres below Clapham.", correctAnswer: "33", explanation: "Thirty-three metres below Clapham." },
          { number: 37, type: "sentence_completion", text: "Community gardens can reduce crime rates by up to _______ per cent.", correctAnswer: "15", explanation: "Reduce crime rates by up to fifteen per cent." },
          // Summary/Diagram Completion (38-40)
          { number: 38, type: "summary_completion", text: "Each Sky Greens tower uses only _______ watts of electricity.", correctAnswer: "60", explanation: "Only sixty watts of electricity." },
          { number: 39, type: "summary_completion", text: "MIT's precision agriculture could increase yields by up to _______ per cent.", correctAnswer: "30", explanation: "Increase yields by up to thirty per cent." },
          { number: 40, type: "summary_completion", text: "The precision approach could also use _______ per cent less water.", correctAnswer: "40", explanation: "Using forty per cent less water." },
        ],
      },
    ],
  },
];
