export interface SpeakingTopic {
  id: number;
  title: string;
  part1Questions: string[];
  cueCard: {
    topic: string;
    points: string[];
    followUp: string;
  };
  part3Questions: string[];
}

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    id: 1,
    title: "Hometown & Living",
    part1Questions: [
      "Where are you from?",
      "Do you live in a city or a town?",
      "What do you like about living there?",
      "Is there anything you would change about your hometown?",
      "How long have you lived there?",
      "Do you think you will continue living there in the future?",
      "What is the most interesting part of your hometown?",
      "Is your hometown a good place for young people?"
    ],
    cueCard: {
      topic: "Describe a place in your hometown that you enjoy visiting.",
      points: [
        "Where it is",
        "How often you go there",
        "What you do there",
        "Why you enjoy visiting this place"
      ],
      followUp: "Is this place popular with other people too?"
    },
    part3Questions: [
      "What makes a city a good place to live?",
      "Do you think cities are becoming too crowded?",
      "How do you think urban areas will change in the future?",
      "Is it better to grow up in the city or the countryside?",
      "What are the advantages and disadvantages of living in a big city?",
      "How can governments improve living conditions in cities?"
    ]
  },
  {
    id: 2,
    title: "Education & Studies",
    part1Questions: [
      "Are you currently studying or working?",
      "What subject are you studying?",
      "Why did you choose this subject?",
      "What do you enjoy most about your studies?",
      "Do you prefer studying alone or in a group?",
      "How do you usually prepare for exams?",
      "What would you like to study in the future?",
      "Do you think education is important?"
    ],
    cueCard: {
      topic: "Describe a teacher who has influenced you.",
      points: [
        "Who this teacher is",
        "What subject they taught you",
        "What made them special",
        "How they influenced you"
      ],
      followUp: "Are you still in contact with this teacher?"
    },
    part3Questions: [
      "What qualities make a good teacher?",
      "How has education changed in your country over the past few decades?",
      "Do you think online education is as effective as traditional classroom learning?",
      "Should university education be free for everyone?",
      "How important is creativity in education?",
      "What role does technology play in modern education?"
    ]
  },
  {
    id: 3,
    title: "Work & Career",
    part1Questions: [
      "What kind of work do you do?",
      "Do you enjoy your work?",
      "What is the most challenging part of your job?",
      "Would you like to change your job in the future?",
      "What hours do you work?",
      "Do you prefer working from home or in an office?",
      "What did you want to be when you were a child?",
      "Is work-life balance important to you?"
    ],
    cueCard: {
      topic: "Describe a job you would like to have in the future.",
      points: [
        "What the job is",
        "What qualifications you would need",
        "Why you find it interesting",
        "How this job would benefit society"
      ],
      followUp: "Do you think you will achieve this goal?"
    },
    part3Questions: [
      "What factors do people consider when choosing a career?",
      "Do you think job satisfaction is more important than salary?",
      "How has the nature of work changed with technology?",
      "What skills will be important in the workplace of the future?",
      "Is it better to be self-employed or work for a company?",
      "How can companies keep their employees motivated?"
    ]
  },
  {
    id: 4,
    title: "Technology & Internet",
    part1Questions: [
      "How often do you use the internet?",
      "What do you mainly use the internet for?",
      "Do you think people spend too much time online?",
      "What is your favourite app or website?",
      "How has technology changed your daily life?",
      "Do you prefer reading books or using electronic devices?",
      "Have you ever taken an online course?",
      "Do you think social media is beneficial?"
    ],
    cueCard: {
      topic: "Describe a piece of technology that you find very useful.",
      points: [
        "What it is",
        "When you started using it",
        "How often you use it",
        "Why you find it useful"
      ],
      followUp: "Would you recommend it to others?"
    },
    part3Questions: [
      "How has technology affected the way people communicate?",
      "Do you think technology has made people lazier?",
      "What are the potential dangers of artificial intelligence?",
      "Should children be allowed to use smartphones from a young age?",
      "How can we ensure that technology is used responsibly?",
      "Will robots replace human workers in the future?"
    ]
  },
  {
    id: 5,
    title: "Travel & Holidays",
    part1Questions: [
      "Do you enjoy travelling?",
      "Where was the last place you visited?",
      "Do you prefer travelling alone or with others?",
      "What kind of places do you like to visit?",
      "How do you usually plan your trips?",
      "Do you think travelling is educational?",
      "What is your dream travel destination?",
      "Do you prefer beach holidays or city breaks?"
    ],
    cueCard: {
      topic: "Describe a memorable trip you have taken.",
      points: [
        "Where you went",
        "Who you went with",
        "What you did there",
        "Why it was memorable"
      ],
      followUp: "Would you like to go back there?"
    },
    part3Questions: [
      "Why do people like to travel?",
      "How has tourism changed in recent years?",
      "What are the negative effects of tourism on local communities?",
      "Do you think ecotourism is a good solution?",
      "How important is it to learn about other cultures through travel?",
      "Will virtual reality replace actual travel in the future?"
    ]
  },
  {
    id: 6,
    title: "Health & Fitness",
    part1Questions: [
      "Do you exercise regularly?",
      "What kind of exercise do you enjoy?",
      "How important is a healthy diet to you?",
      "Do you think people in your country are health-conscious?",
      "Have you ever tried any extreme sports?",
      "How do you manage stress?",
      "Do you prefer indoor or outdoor exercise?",
      "What do you do to stay healthy?"
    ],
    cueCard: {
      topic: "Describe a healthy habit you have developed.",
      points: [
        "What the habit is",
        "When you started it",
        "How it has affected your life",
        "Whether you would recommend it to others"
      ],
      followUp: "Was it difficult to develop this habit?"
    },
    part3Questions: [
      "Why is it important for people to stay physically active?",
      "How can governments encourage healthier lifestyles?",
      "Do you think mental health is as important as physical health?",
      "Why do some people find it difficult to maintain healthy habits?",
      "Should junk food be banned in schools?",
      "How has the concept of health changed over time?"
    ]
  },
  {
    id: 7,
    title: "Environment & Nature",
    part1Questions: [
      "Do you enjoy spending time in nature?",
      "What is the environment like where you live?",
      "Do you think pollution is a serious problem in your city?",
      "What do you do to help the environment?",
      "Do you recycle?",
      "Have you ever visited a national park?",
      "Do you prefer hot or cold weather?",
      "How important is it to protect the environment?"
    ],
    cueCard: {
      topic: "Describe an environmental problem in your area.",
      points: [
        "What the problem is",
        "What causes it",
        "How it affects people",
        "What can be done to solve it"
      ],
      followUp: "Do you think the situation will improve in the future?"
    },
    part3Questions: [
      "What are the biggest environmental challenges facing the world today?",
      "How can individuals contribute to protecting the environment?",
      "Do you think climate change can be reversed?",
      "Should developing countries prioritize economic growth or environmental protection?",
      "How effective are international agreements on climate change?",
      "What role does education play in environmental awareness?"
    ]
  },
  {
    id: 8,
    title: "Arts & Culture",
    part1Questions: [
      "Are you interested in art?",
      "What kind of music do you enjoy?",
      "Do you like visiting museums or galleries?",
      "Have you ever learned to play a musical instrument?",
      "What traditional art forms are popular in your country?",
      "Do you prefer modern art or classical art?",
      "How often do you go to concerts or performances?",
      "Do you think art is important in education?"
    ],
    cueCard: {
      topic: "Describe a cultural event you attended.",
      points: [
        "What the event was",
        "Where and when it took place",
        "Who you went with",
        "Why you enjoyed it"
      ],
      followUp: "Would you attend a similar event again?"
    },
    part3Questions: [
      "Why is it important to preserve cultural traditions?",
      "How does globalization affect local cultures?",
      "Do you think art should be funded by the government?",
      "How has technology changed the way people experience art?",
      "Is it important for children to learn about different cultures?",
      "What is the role of museums in modern society?"
    ]
  },
  {
    id: 9,
    title: "Food & Cooking",
    part1Questions: [
      "What is your favourite type of food?",
      "Can you cook?",
      "Do you prefer eating at home or in restaurants?",
      "What is a traditional dish from your country?",
      "Have you ever tried food from another country?",
      "Do you think fast food is popular in your country?",
      "How important is it to eat together as a family?",
      "Have your food preferences changed over the years?"
    ],
    cueCard: {
      topic: "Describe a meal you enjoyed recently.",
      points: [
        "What you ate",
        "Where you had it",
        "Who you were with",
        "Why you enjoyed it"
      ],
      followUp: "Do you often eat this type of food?"
    },
    part3Questions: [
      "How has the food industry changed in recent years?",
      "Why are fast food chains so popular worldwide?",
      "Do you think people should learn to cook from a young age?",
      "How does food reflect a country's culture?",
      "What are the health implications of modern eating habits?",
      "Should governments regulate the food industry more strictly?"
    ]
  },
  {
    id: 10,
    title: "Media & Communication",
    part1Questions: [
      "How do you usually get your news?",
      "Do you read newspapers or watch the news on TV?",
      "How much time do you spend on social media each day?",
      "Do you think social media has changed the way people communicate?",
      "What type of TV programmes do you enjoy?",
      "Do you listen to podcasts?",
      "Have you ever been interviewed by someone?",
      "Do you trust the information you see online?"
    ],
    cueCard: {
      topic: "Describe a news story that you found interesting.",
      points: [
        "What the story was about",
        "Where you heard or read about it",
        "Why it caught your attention",
        "What you think about it"
      ],
      followUp: "Did you discuss this story with anyone?"
    },
    part3Questions: [
      "How reliable is the news media in your country?",
      "What are the dangers of fake news?",
      "How has social media influenced journalism?",
      "Do you think traditional media will survive in the digital age?",
      "Should the government regulate social media platforms?",
      "How can people become more critical consumers of media?"
    ]
  }
];
