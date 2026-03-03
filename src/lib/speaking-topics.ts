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
  },
  {
    id: 11,
    title: "Society & Social Issues",
    part1Questions: [
      "Do you think your neighbourhood is a good place to live?",
      "How well do you know your neighbours?",
      "What social events are popular in your community?",
      "Do you think people help each other enough in your society?",
      "Has your community changed much in recent years?",
      "Do you think it's important to be involved in your local community?",
      "What social issues concern you the most?",
      "Do you prefer living in a close-knit community or a more independent lifestyle?"
    ],
    cueCard: {
      topic: "Describe a social problem in your country that you think is important.",
      points: [
        "What the problem is",
        "How it affects people",
        "What is being done about it",
        "How you feel about this issue"
      ],
      followUp: "Do you think this problem will be solved in the future?"
    },
    part3Questions: [
      "What are the biggest social challenges facing your country today?",
      "How can governments address inequality in society?",
      "Do you think social media helps or hinders social progress?",
      "Is it the responsibility of individuals or governments to solve social problems?",
      "How has the concept of community changed over the past few decades?",
      "What role does education play in solving social issues?"
    ]
  },
  {
    id: 12,
    title: "Business & Entrepreneurship",
    part1Questions: [
      "Have you ever thought about starting your own business?",
      "What kind of businesses are popular in your area?",
      "Do you prefer shopping at local businesses or big chains?",
      "Have you ever worked in a business environment?",
      "What qualities do you think a successful businessperson needs?",
      "Do you think it's easy to start a business in your country?",
      "Would you rather work for someone else or be your own boss?",
      "How important is money to you?"
    ],
    cueCard: {
      topic: "Describe a successful business you know about.",
      points: [
        "What the business is",
        "How it became successful",
        "What products or services it offers",
        "Why you admire this business"
      ],
      followUp: "Would you like to run a similar business?"
    },
    part3Questions: [
      "What makes a business successful in today's world?",
      "Do you think small businesses can compete with large corporations?",
      "How has technology changed the way businesses operate?",
      "Should governments provide more support for entrepreneurs?",
      "What are the risks and rewards of starting your own business?",
      "How important is innovation in the business world?"
    ]
  },
  {
    id: 13,
    title: "Science & Innovation",
    part1Questions: [
      "Are you interested in science?",
      "Did you enjoy science lessons at school?",
      "What area of science do you find most fascinating?",
      "Do you follow any science-related news?",
      "Have you ever visited a science museum or exhibition?",
      "Do you think science is important in everyday life?",
      "What scientific discovery do you think has been the most important?",
      "Would you like to work in a science-related field?"
    ],
    cueCard: {
      topic: "Describe a scientific discovery or invention that has had a big impact on society.",
      points: [
        "What it is",
        "When it was discovered or invented",
        "How it has changed people's lives",
        "How you feel about its impact"
      ],
      followUp: "Do you think there will be even greater discoveries in the future?"
    },
    part3Questions: [
      "How important is scientific research for a country's development?",
      "Should governments invest more money in scientific research?",
      "Do you think science always leads to positive outcomes?",
      "How has technology influenced scientific discoveries?",
      "What ethical issues arise from scientific advancements?",
      "Will artificial intelligence change the future of science?"
    ]
  },
  {
    id: 14,
    title: "Childhood & Memories",
    part1Questions: [
      "What is your earliest childhood memory?",
      "Did you enjoy your childhood?",
      "What games did you play as a child?",
      "Who did you spend most of your time with as a child?",
      "What was your favourite toy or activity?",
      "Do you think children today have a better childhood than previous generations?",
      "Is there anything from your childhood you miss?",
      "Did you have any childhood hobbies?"
    ],
    cueCard: {
      topic: "Describe a happy memory from your childhood.",
      points: [
        "What happened",
        "When and where it took place",
        "Who was involved",
        "Why this memory makes you happy"
      ],
      followUp: "Do you often think about this memory?"
    },
    part3Questions: [
      "How important are childhood experiences in shaping a person's character?",
      "Do you think children today are under more pressure than in the past?",
      "How has childhood changed with the rise of technology?",
      "Should parents try to give their children a carefree childhood?",
      "What role do schools play in a child's development?",
      "Is it important for adults to maintain connections with their childhood?"
    ]
  },
  {
    id: 15,
    title: "Lifestyle & Habits",
    part1Questions: [
      "What does a typical day look like for you?",
      "Do you consider yourself an early bird or a night owl?",
      "What habits have you tried to develop recently?",
      "How do you spend your weekends?",
      "Do you think you have a healthy lifestyle?",
      "What is one thing you would change about your daily routine?",
      "Do you prefer a structured routine or a flexible schedule?",
      "How important is sleep to you?"
    ],
    cueCard: {
      topic: "Describe a daily habit you have that you think is beneficial.",
      points: [
        "What the habit is",
        "When you started doing it",
        "How it has benefited you",
        "Whether you would recommend it to others"
      ],
      followUp: "Was it easy to develop this habit?"
    },
    part3Questions: [
      "Why do some people find it difficult to change their habits?",
      "How does modern technology affect people's daily routines?",
      "Do you think people today have a better or worse lifestyle than in the past?",
      "What role does discipline play in maintaining a healthy lifestyle?",
      "How do cultural differences influence people's lifestyles?",
      "Should schools teach students about healthy habits and routines?"
    ]
  },
  {
    id: 16,
    title: "Globalization & International Relations",
    part1Questions: [
      "Do you think your country is well connected to the rest of the world?",
      "Have you ever lived or studied abroad?",
      "Do you enjoy learning about other countries?",
      "What foreign products are popular in your country?",
      "Do you think globalization has been good for your country?",
      "How important is it to learn foreign languages?",
      "Do you follow international news?",
      "Have you ever attended an international event or festival?"
    ],
    cueCard: {
      topic: "Describe an experience that made you learn something about another culture.",
      points: [
        "What the experience was",
        "When and where it happened",
        "What you learned from it",
        "How it changed your perspective"
      ],
      followUp: "Would you like to have more such experiences?"
    },
    part3Questions: [
      "What are the advantages and disadvantages of globalization?",
      "How has globalization affected local cultures and traditions?",
      "Do you think international cooperation is becoming more important?",
      "Should countries prioritize their own interests or work together globally?",
      "How has the internet contributed to globalization?",
      "What challenges does globalization create for developing countries?"
    ]
  },
  {
    id: 17,
    title: "Communication & Relationships",
    part1Questions: [
      "How do you usually stay in touch with friends and family?",
      "Do you prefer texting or calling?",
      "How important is face-to-face communication to you?",
      "Have you made any friends online?",
      "Do you think people communicate differently now compared to the past?",
      "What makes a good friend?",
      "How do you resolve disagreements with people close to you?",
      "Is it easy for you to make new friends?"
    ],
    cueCard: {
      topic: "Describe a person who has had a positive influence on your life.",
      points: [
        "Who this person is",
        "How you know them",
        "What they have done that influenced you",
        "How you feel about this person"
      ],
      followUp: "Are you still in regular contact with this person?"
    },
    part3Questions: [
      "How has technology changed the way people build relationships?",
      "Do you think online friendships are as meaningful as offline ones?",
      "What are the most important qualities in a strong relationship?",
      "How can communication problems lead to misunderstandings?",
      "Is it important to maintain relationships with people from different backgrounds?",
      "How do cultural differences affect communication styles?"
    ]
  },
  {
    id: 18,
    title: "Public Services & Infrastructure",
    part1Questions: [
      "What public transport do you use most often?",
      "Are you satisfied with the public services in your area?",
      "How clean is your city or town?",
      "Do you think public parks and spaces are important?",
      "What improvements would you like to see in your local infrastructure?",
      "How do you usually get around your city?",
      "Do you think the roads in your area are in good condition?",
      "Have you ever used a public library?"
    ],
    cueCard: {
      topic: "Describe a public facility in your city that you think is very useful.",
      points: [
        "What it is",
        "Where it is located",
        "How often you use it",
        "Why you think it is useful"
      ],
      followUp: "Do you think the government should invest more in such facilities?"
    },
    part3Questions: [
      "What are the most important public services a government should provide?",
      "How can public transport be improved in cities?",
      "Do you think privatizing public services is a good idea?",
      "How important is infrastructure development for a country's economy?",
      "Should all public services be free?",
      "How can technology improve public services?"
    ]
  },
  {
    id: 19,
    title: "Entertainment & Leisure",
    part1Questions: [
      "What do you do for fun in your free time?",
      "Do you prefer indoor or outdoor entertainment?",
      "How often do you go to the cinema?",
      "What kind of movies or TV shows do you enjoy?",
      "Do you play any video games?",
      "What is the most enjoyable thing you have done recently?",
      "Do you think people need more leisure time?",
      "What is your favourite way to relax after work or school?"
    ],
    cueCard: {
      topic: "Describe an enjoyable activity you do in your free time.",
      points: [
        "What the activity is",
        "How often you do it",
        "Who you do it with",
        "Why you enjoy it so much"
      ],
      followUp: "Would you recommend this activity to others?"
    },
    part3Questions: [
      "How has entertainment changed over the past 20 years?",
      "Do you think people spend too much time on entertainment?",
      "Is it important for people to have hobbies?",
      "How do different cultures approach leisure and entertainment?",
      "What impact does the entertainment industry have on young people?",
      "Will virtual reality change the future of entertainment?"
    ]
  },
  {
    id: 20,
    title: "Future Plans & Ambitions",
    part1Questions: [
      "What are your plans for the near future?",
      "Do you have any long-term goals?",
      "Where do you see yourself in five years?",
      "Have your ambitions changed over time?",
      "What motivates you to achieve your goals?",
      "Do you think it's important to have a plan for the future?",
      "Would you like to live in a different country in the future?",
      "What is the most important goal you want to achieve?"
    ],
    cueCard: {
      topic: "Describe a goal you have set for yourself in the future.",
      points: [
        "What the goal is",
        "When you hope to achieve it",
        "What steps you are taking to reach it",
        "How you will feel when you achieve it"
      ],
      followUp: "Do you think you will definitely achieve this goal?"
    },
    part3Questions: [
      "Why is it important for young people to have ambitions?",
      "Do you think people today set realistic goals for themselves?",
      "How do economic conditions affect people's future plans?",
      "Is it better to have one big goal or many smaller ones?",
      "How important is family support in achieving your ambitions?",
      "What challenges do people face when trying to achieve their dreams?"
    ]
  }
];
