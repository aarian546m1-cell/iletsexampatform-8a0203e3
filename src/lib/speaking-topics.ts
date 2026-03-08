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
  },
  {
    id: 21,
    title: "Useful Websites",
    part1Questions: [
      "How often do you use the internet?",
      "What do you usually do online?",
      "Do you prefer using a computer or a phone to browse the internet?",
      "Have you ever learned something new from a website?",
      "Do you think the internet is a reliable source of information?"
    ],
    cueCard: {
      topic: "Describe a useful website you often visit.",
      points: [
        "What the website is",
        "How you found out about it",
        "What you use it for",
        "Why you find it useful"
      ],
      followUp: "Would you recommend this website to others?"
    },
    part3Questions: [
      "How has the internet changed the way people access information?",
      "Do you think too much time spent on websites can be harmful?",
      "Are there any risks associated with using websites for learning?",
      "How can people determine whether a website is trustworthy?",
      "Do you think websites will replace traditional libraries in the future?",
      "What role do websites play in education today?"
    ]
  },
  {
    id: 22,
    title: "Encouragement & Motivation",
    part1Questions: [
      "Do you consider yourself a motivated person?",
      "Who usually encourages you in your life?",
      "How do you stay motivated when things get difficult?",
      "Do you think encouragement from others is important?",
      "Have you ever encouraged someone else?"
    ],
    cueCard: {
      topic: "Describe a person who encouraged you.",
      points: [
        "Who this person is",
        "When and how they encouraged you",
        "What they said or did",
        "How their encouragement affected you"
      ],
      followUp: "Are you still in contact with this person?"
    },
    part3Questions: [
      "Why is encouragement important for children's development?",
      "Do you think teachers play a significant role in motivating students?",
      "How can employers encourage their employees to perform better?",
      "Is self-motivation more effective than external encouragement?",
      "Do people in your country tend to encourage each other openly?",
      "How has the way people motivate others changed over time?"
    ]
  },
  {
    id: 23,
    title: "Memorable Trips",
    part1Questions: [
      "Do you enjoy travelling?",
      "How often do you go on trips?",
      "Do you prefer travelling alone or with others?",
      "What kind of places do you like to visit?",
      "Do you usually plan your trips in advance?"
    ],
    cueCard: {
      topic: "Describe a memorable trip you have taken.",
      points: [
        "Where you went",
        "Who you went with",
        "What you did during the trip",
        "Why it was memorable"
      ],
      followUp: "Would you like to go on a similar trip again?"
    },
    part3Questions: [
      "Why do people enjoy travelling to new places?",
      "How has tourism changed in recent years?",
      "Do you think international travel broadens people's minds?",
      "What are the negative effects of mass tourism on local communities?",
      "Is it better to travel within your own country or go abroad?",
      "How important is it for young people to travel?"
    ]
  },
  {
    id: 24,
    title: "Learning New Skills",
    part1Questions: [
      "Are you currently learning anything new?",
      "Do you enjoy learning new skills?",
      "How do you usually learn new things?",
      "Do you prefer learning from a teacher or by yourself?",
      "What skill did you learn most recently?"
    ],
    cueCard: {
      topic: "Describe a skill you want to learn.",
      points: [
        "What the skill is",
        "Why you want to learn it",
        "How you plan to learn it",
        "How learning this skill would benefit you"
      ],
      followUp: "Do you think you will start learning this skill soon?"
    },
    part3Questions: [
      "Why is it important for people to keep learning throughout their lives?",
      "Do you think practical skills are more valuable than academic knowledge?",
      "How has technology changed the way people learn new skills?",
      "Should schools focus more on teaching practical skills?",
      "What are the challenges of learning a completely new skill as an adult?",
      "Do you think some people are naturally better at learning new things?"
    ]
  },
  {
    id: 25,
    title: "Reading & Books",
    part1Questions: [
      "Do you enjoy reading?",
      "What kind of books do you usually read?",
      "How often do you read?",
      "Do you prefer reading physical books or e-books?",
      "Did you read a lot as a child?"
    ],
    cueCard: {
      topic: "Describe a book you recently read.",
      points: [
        "What the book was about",
        "Why you decided to read it",
        "How long it took you to finish it",
        "What you liked or disliked about it"
      ],
      followUp: "Would you recommend this book to a friend?"
    },
    part3Questions: [
      "Do you think people read less nowadays compared to the past?",
      "How important is reading for children's development?",
      "Are e-books replacing traditional books?",
      "What role do libraries play in modern society?",
      "Do you think reading fiction is as valuable as reading non-fiction?",
      "How can governments encourage people to read more?"
    ]
  },
  {
    id: 26,
    title: "Dream Destinations",
    part1Questions: [
      "Do you like exploring new places?",
      "Have you ever been abroad?",
      "What kind of destinations interest you most?",
      "Do you prefer beach holidays or city breaks?",
      "How do you usually find out about new travel destinations?"
    ],
    cueCard: {
      topic: "Describe a place you want to visit.",
      points: [
        "Where the place is",
        "How you heard about it",
        "What you would like to do there",
        "Why you want to visit this place"
      ],
      followUp: "Do you think you will visit this place in the near future?"
    },
    part3Questions: [
      "Why do some places become popular tourist destinations?",
      "How does tourism benefit a country's economy?",
      "Do you think people travel for different reasons today compared to the past?",
      "What impact does social media have on people's travel choices?",
      "Should governments limit the number of tourists visiting certain places?",
      "How can popular destinations manage overtourism?"
    ]
  },
  {
    id: 27,
    title: "Helping Others",
    part1Questions: [
      "Do you often help other people?",
      "What kind of help do you usually offer?",
      "Do you think it is important to help strangers?",
      "Has anyone helped you recently?",
      "Do you volunteer for any organisations?"
    ],
    cueCard: {
      topic: "Describe a time you helped someone.",
      points: [
        "Who you helped",
        "What the situation was",
        "How you helped them",
        "How you felt after helping"
      ],
      followUp: "Did this person thank you for your help?"
    },
    part3Questions: [
      "Why is it important for communities to help each other?",
      "Do you think people are less willing to help others nowadays?",
      "Should governments do more to support people in need?",
      "How can schools teach children the value of helping others?",
      "Is volunteering becoming more or less popular in your country?",
      "What motivates people to help strangers?"
    ]
  },
  {
    id: 28,
    title: "Relaxation & Comfort",
    part1Questions: [
      "What do you usually do to relax?",
      "Do you have a favourite place to relax?",
      "How often do you take time to relax?",
      "Do you prefer relaxing alone or with others?",
      "Do you think people today have enough time to relax?"
    ],
    cueCard: {
      topic: "Describe a place where you go to relax.",
      points: [
        "Where this place is",
        "How often you go there",
        "What you do there",
        "Why this place helps you relax"
      ],
      followUp: "Do other people also go to this place to relax?"
    },
    part3Questions: [
      "Why is relaxation important for people's health?",
      "Do you think modern life is more stressful than in the past?",
      "How do different cultures approach relaxation?",
      "Should employers provide relaxation facilities at work?",
      "What are the effects of not having enough time to relax?",
      "How can people balance work and relaxation effectively?"
    ]
  },
  {
    id: 29,
    title: "Busy Schedules",
    part1Questions: [
      "Do you have a busy lifestyle?",
      "What does a typical day look like for you?",
      "How do you manage your time?",
      "Do you prefer being busy or having free time?",
      "Do you think being busy is a good thing?"
    ],
    cueCard: {
      topic: "Describe a busy day in your life.",
      points: [
        "When this day was",
        "What activities you had to do",
        "How you managed your time",
        "How you felt at the end of the day"
      ],
      followUp: "Do you often have days like this?"
    },
    part3Questions: [
      "Why do some people seem busier than others?",
      "Is being constantly busy harmful to people's well-being?",
      "How can people manage their time more effectively?",
      "Do you think technology makes people busier or saves them time?",
      "Should there be limits on how many hours people work?",
      "How has the concept of work-life balance changed over the years?"
    ]
  },
  {
    id: 30,
    title: "Daily Technology",
    part1Questions: [
      "What technology do you use most often?",
      "How important is technology in your daily life?",
      "Do you think you spend too much time using technology?",
      "What was the first piece of technology you owned?",
      "How has technology changed your daily routine?"
    ],
    cueCard: {
      topic: "Describe a technology you use daily.",
      points: [
        "What the technology is",
        "When you started using it",
        "What you use it for",
        "Why it is important to you"
      ],
      followUp: "Could you live without this technology?"
    },
    part3Questions: [
      "How has technology changed the way people communicate?",
      "Do you think people are too dependent on technology?",
      "What are the dangers of children using technology too much?",
      "How might technology change our daily lives in the next 20 years?",
      "Should governments regulate the use of certain technologies?",
      "What are the advantages and disadvantages of smart home technology?"
    ]
  },
  {
    id: 31,
    title: "Talented Friends",
    part1Questions: [
      "Do you have many close friends?",
      "What qualities do you look for in a friend?",
      "Do any of your friends have special talents?",
      "How did you meet your closest friend?",
      "Do you think it is important to have talented friends?"
    ],
    cueCard: {
      topic: "Describe a talented friend you have.",
      points: [
        "Who this friend is",
        "What talent they have",
        "How you know about their talent",
        "Why you admire their talent"
      ],
      followUp: "Has this friend ever taught you anything about their talent?"
    },
    part3Questions: [
      "Are some people born with natural talents or is talent developed?",
      "How can schools identify and nurture talented students?",
      "Do you think society values certain talents more than others?",
      "Should talented individuals receive special support from the government?",
      "How does talent contribute to a person's success in life?",
      "Is it possible to develop a talent later in life?"
    ]
  },
  {
    id: 32,
    title: "Important Decisions",
    part1Questions: [
      "Do you find it easy to make decisions?",
      "Who do you usually ask for advice when making decisions?",
      "Have you ever regretted a decision you made?",
      "Do you prefer to think carefully or decide quickly?",
      "What was the last important decision you made?"
    ],
    cueCard: {
      topic: "Describe an important decision you have made.",
      points: [
        "What the decision was",
        "When you made it",
        "How you made the decision",
        "How this decision affected your life"
      ],
      followUp: "Would you make the same decision again?"
    },
    part3Questions: [
      "Why do some people find it difficult to make decisions?",
      "Should important decisions be made individually or collectively?",
      "How do cultural values influence the decisions people make?",
      "Do you think young people are given enough freedom to make their own decisions?",
      "What role does experience play in decision-making?",
      "How has access to information changed the way people make decisions?"
    ]
  },
  {
    id: 33,
    title: "Mobile Applications",
    part1Questions: [
      "How often do you use your mobile phone?",
      "What apps do you use the most?",
      "Have you ever paid for a mobile app?",
      "Do you think there are too many apps available today?",
      "How do you decide which apps to download?"
    ],
    cueCard: {
      topic: "Describe a useful mobile app you have used.",
      points: [
        "What the app is",
        "When you started using it",
        "What features it has",
        "Why you find it useful"
      ],
      followUp: "Have you recommended this app to anyone?"
    },
    part3Questions: [
      "How have mobile apps changed the way people live?",
      "Do you think apps can replace traditional services like banking or shopping?",
      "What are the risks of relying too heavily on mobile apps?",
      "Should there be stricter regulations on how apps collect user data?",
      "How might mobile apps develop in the future?",
      "Do you think older generations benefit from mobile apps as much as younger people?"
    ]
  },
  {
    id: 34,
    title: "Films & Cinema",
    part1Questions: [
      "Do you enjoy watching movies?",
      "How often do you watch films?",
      "Do you prefer watching films at home or at the cinema?",
      "What type of movies do you like best?",
      "Who is your favourite actor or actress?"
    ],
    cueCard: {
      topic: "Describe a movie you enjoyed watching.",
      points: [
        "What the movie was",
        "When and where you watched it",
        "What the story was about",
        "Why you enjoyed it"
      ],
      followUp: "Would you watch this movie again?"
    },
    part3Questions: [
      "How has the film industry changed in recent years?",
      "Do you think movies can influence people's behaviour?",
      "Are films from your country popular internationally?",
      "Do you think streaming services are replacing cinemas?",
      "What is the educational value of watching films?",
      "Should governments fund the film industry?"
    ]
  },
  {
    id: 35,
    title: "Learning Experiences",
    part1Questions: [
      "Do you enjoy learning new things?",
      "What have you learned recently?",
      "Do you prefer learning from books or from experience?",
      "How do you feel when you learn something new?",
      "Is there something you have always wanted to learn?"
    ],
    cueCard: {
      topic: "Describe something new you learned recently.",
      points: [
        "What you learned",
        "How you learned it",
        "How long it took you to learn",
        "How this new knowledge or skill has helped you"
      ],
      followUp: "Do you plan to continue learning more about this?"
    },
    part3Questions: [
      "Why is lifelong learning important?",
      "How has the internet changed the way people learn?",
      "Do you think formal education is the best way to learn?",
      "What can governments do to encourage people to keep learning?",
      "Is it easier to learn new things when you are young or old?",
      "How important is it to learn from mistakes?"
    ]
  },
  {
    id: 36,
    title: "Public Spaces",
    part1Questions: [
      "Do you often visit public places?",
      "What public places do you enjoy visiting?",
      "Do you think your city has enough public spaces?",
      "How often do you go to places like parks or libraries?",
      "Do you prefer indoor or outdoor public spaces?"
    ],
    cueCard: {
      topic: "Describe a public place you like to visit.",
      points: [
        "What the place is",
        "Where it is located",
        "What you do there",
        "Why you like visiting this place"
      ],
      followUp: "Do you go there alone or with other people?"
    },
    part3Questions: [
      "Why are public spaces important for communities?",
      "How can city planners improve public spaces?",
      "Do you think public spaces are being well maintained in your country?",
      "Should public spaces be free for everyone to use?",
      "How do public spaces contribute to people's mental health?",
      "What is the difference between public spaces in cities and rural areas?"
    ]
  },
  {
    id: 37,
    title: "People You Admire",
    part1Questions: [
      "Is there someone you look up to?",
      "What qualities do you admire in others?",
      "Do you admire any famous people?",
      "Has the person you admire changed over the years?",
      "Do you think it is important to have role models?"
    ],
    cueCard: {
      topic: "Describe a person you admire.",
      points: [
        "Who this person is",
        "How you know about them",
        "What they have achieved",
        "Why you admire them"
      ],
      followUp: "Have you ever met this person?"
    },
    part3Questions: [
      "What kind of people are generally admired in your society?",
      "Do you think the qualities people admire have changed over time?",
      "Is it healthy for young people to admire celebrities?",
      "How do role models influence children's behaviour?",
      "Should public figures be held to higher moral standards?",
      "Do you think ordinary people can be role models too?"
    ]
  },
  {
    id: 38,
    title: "Problem Solving",
    part1Questions: [
      "Are you good at solving problems?",
      "How do you usually approach a problem?",
      "Do you prefer solving problems alone or with help?",
      "What kind of problems do you face in daily life?",
      "Have you ever helped someone solve a problem?"
    ],
    cueCard: {
      topic: "Describe a problem you solved.",
      points: [
        "What the problem was",
        "When it happened",
        "How you solved it",
        "How you felt after solving it"
      ],
      followUp: "Did you learn anything from this experience?"
    },
    part3Questions: [
      "Why are problem-solving skills important in the workplace?",
      "Should schools teach problem-solving as a subject?",
      "Do you think technology helps or hinders people's ability to solve problems?",
      "How do different cultures approach problem-solving?",
      "Is it better to prevent problems or deal with them after they occur?",
      "What are the most common problems facing young people today?"
    ]
  },
  {
    id: 39,
    title: "Favourite Teachers",
    part1Questions: [
      "Did you have a favourite teacher at school?",
      "What subjects did you enjoy at school?",
      "Do you think teachers have a big influence on students?",
      "What makes a teacher memorable?",
      "Are you still in touch with any of your former teachers?"
    ],
    cueCard: {
      topic: "Describe a favourite teacher you had.",
      points: [
        "Who this teacher was",
        "What subject they taught",
        "What made them your favourite",
        "How they influenced your learning"
      ],
      followUp: "Would you like to be a teacher yourself?"
    },
    part3Questions: [
      "What are the most important qualities of a good teacher?",
      "How has the role of teachers changed with technology?",
      "Do you think teachers are valued enough in your country?",
      "Should teachers be paid more to attract better candidates?",
      "How can the relationship between teachers and students be improved?",
      "Do you think online teachers can be as effective as classroom teachers?"
    ]
  },
  {
    id: 40,
    title: "Gifts & Giving",
    part1Questions: [
      "Do you enjoy giving or receiving gifts?",
      "What was the last gift you received?",
      "Do you find it easy to choose gifts for others?",
      "On what occasions do people give gifts in your country?",
      "Do you prefer handmade gifts or store-bought gifts?"
    ],
    cueCard: {
      topic: "Describe a gift you received that you were happy about.",
      points: [
        "What the gift was",
        "Who gave it to you",
        "When you received it",
        "Why it made you happy"
      ],
      followUp: "Do you still have this gift?"
    },
    part3Questions: [
      "Why do people give gifts to each other?",
      "Has the culture of gift-giving changed in recent years?",
      "Do you think expensive gifts are always better than inexpensive ones?",
      "How important is the thought behind a gift compared to its value?",
      "Should children be taught the value of giving rather than receiving?",
      "How has online shopping changed the way people buy gifts?"
    ]
  },
  {
    id: 41,
    title: "Sports & Fitness",
    part1Questions: [
      "Do you play any sports?",
      "How often do you exercise?",
      "What sports are popular in your country?",
      "Did you play sports when you were a child?",
      "Do you prefer watching sports or playing them?"
    ],
    cueCard: {
      topic: "Describe a sport you like.",
      points: [
        "What the sport is",
        "How often you play or watch it",
        "Who you play it with or who you watch it with",
        "Why you like this sport"
      ],
      followUp: "Would you like to try any new sports in the future?"
    },
    part3Questions: [
      "Why is physical activity important for health?",
      "Do you think professional athletes are paid too much?",
      "How can governments encourage people to be more active?",
      "Should sports be a compulsory part of education?",
      "Do you think competitive sports teach valuable life skills?",
      "How has technology changed the way people play and watch sports?"
    ]
  },
  {
    id: 42,
    title: "Cities & Travel",
    part1Questions: [
      "Do you enjoy visiting cities?",
      "What cities have you visited?",
      "Do you prefer big cities or small towns?",
      "What do you usually do when you visit a new city?",
      "Have you ever lived in a different city?"
    ],
    cueCard: {
      topic: "Describe a city you would like to visit.",
      points: [
        "What city it is",
        "Where it is located",
        "What you know about it",
        "Why you would like to visit it"
      ],
      followUp: "Do you think you will visit this city soon?"
    },
    part3Questions: [
      "What makes a city attractive to tourists?",
      "How does tourism affect the local culture of a city?",
      "Do you think all major cities are becoming similar?",
      "What are the advantages of living in a large city?",
      "How can cities manage the challenges of rapid growth?",
      "Should cities invest more in public transport to reduce traffic?"
    ]
  },
  {
    id: 43,
    title: "Proud Moments",
    part1Questions: [
      "Do you often feel proud of yourself?",
      "What kind of achievements make you feel proud?",
      "Do you share your achievements with others?",
      "Has anyone ever told you they were proud of you?",
      "What was the last thing you accomplished?"
    ],
    cueCard: {
      topic: "Describe a moment when you felt proud of yourself.",
      points: [
        "When it happened",
        "What you did",
        "Who was with you at the time",
        "Why you felt proud"
      ],
      followUp: "Do you think this moment changed you in any way?"
    },
    part3Questions: [
      "Why is it important for people to feel a sense of achievement?",
      "Do you think society puts too much pressure on people to succeed?",
      "How can parents encourage their children without putting too much pressure on them?",
      "Is personal achievement more important than collective achievement?",
      "How do different cultures celebrate achievements?",
      "Do you think recognition from others is necessary to feel proud?"
    ]
  },
  {
    id: 44,
    title: "Traditional Food",
    part1Questions: [
      "What is your favourite food?",
      "Do you enjoy cooking?",
      "Have you ever tried food from other countries?",
      "Do you eat traditional food often?",
      "Is food an important part of celebrations in your culture?"
    ],
    cueCard: {
      topic: "Describe a traditional food in your country.",
      points: [
        "What the food is",
        "What ingredients are used to make it",
        "When people usually eat it",
        "Why it is important in your culture"
      ],
      followUp: "Have you ever made this food yourself?"
    },
    part3Questions: [
      "Why is it important to preserve traditional food cultures?",
      "How has globalisation affected the food people eat?",
      "Do you think fast food is replacing traditional meals?",
      "Should schools teach children about traditional cooking?",
      "How does food bring people together?",
      "What are the health implications of modern eating habits compared to traditional diets?"
    ]
  },
  {
    id: 45,
    title: "Smart Purchases",
    part1Questions: [
      "Do you enjoy shopping?",
      "Do you prefer shopping online or in stores?",
      "How do you decide what to buy?",
      "Have you ever bought something that turned out to be really useful?",
      "Do you compare prices before buying something?"
    ],
    cueCard: {
      topic: "Describe something useful you bought recently.",
      points: [
        "What you bought",
        "Where you bought it",
        "Why you decided to buy it",
        "How it has been useful to you"
      ],
      followUp: "Would you buy this product again?"
    },
    part3Questions: [
      "Do you think people buy too many things they do not need?",
      "How has online shopping changed consumer behaviour?",
      "Should governments take steps to reduce overconsumption?",
      "What are the environmental impacts of excessive buying?",
      "How can people become more responsible consumers?",
      "Do you think advertising makes people buy things they do not need?"
    ]
  },
  {
    id: 46,
    title: "Teamwork",
    part1Questions: [
      "Do you enjoy working in a team?",
      "Have you ever worked on a group project?",
      "What role do you usually take in a team?",
      "Do you prefer working alone or in a group?",
      "What makes a team successful?"
    ],
    cueCard: {
      topic: "Describe a time when you worked as part of a team.",
      points: [
        "What the task or project was",
        "Who was in the team",
        "What your role was",
        "What the outcome was"
      ],
      followUp: "Would you work with the same team again?"
    },
    part3Questions: [
      "Why is teamwork considered an important skill?",
      "How can schools teach children to work better in teams?",
      "What are the challenges of working in a team?",
      "Do you think leaders are born or made?",
      "How does technology affect teamwork in the modern workplace?",
      "Is it possible to achieve more as a team than as an individual?"
    ]
  },
  {
    id: 47,
    title: "Parks & Nature",
    part1Questions: [
      "Do you like spending time in nature?",
      "How often do you visit parks?",
      "Is there a park near your home?",
      "What do you usually do in a park?",
      "Do you think cities need more green spaces?"
    ],
    cueCard: {
      topic: "Describe a park or garden you enjoy visiting.",
      points: [
        "Where the park is",
        "What it looks like",
        "What activities you do there",
        "Why you enjoy visiting it"
      ],
      followUp: "Do you visit this park in all seasons?"
    },
    part3Questions: [
      "Why are parks important for people living in cities?",
      "How can governments encourage people to use public parks?",
      "Do you think children today spend enough time outdoors?",
      "What are the environmental benefits of urban green spaces?",
      "Should parks be maintained by the government or private companies?",
      "How do parks contribute to the quality of life in a neighbourhood?"
    ]
  },
  {
    id: 48,
    title: "Learning from Others",
    part1Questions: [
      "Have you ever learned something important from another person?",
      "Do you think we learn more from people or from books?",
      "Who taught you the most valuable lesson in life?",
      "Do you enjoy sharing your knowledge with others?",
      "Is there someone you would like to learn from?"
    ],
    cueCard: {
      topic: "Describe someone who taught you something useful.",
      points: [
        "Who this person is",
        "What they taught you",
        "How they taught you",
        "Why what they taught you was useful"
      ],
      followUp: "Are you still in contact with this person?"
    },
    part3Questions: [
      "How important is mentorship in professional development?",
      "Do you think people learn better from personal experience or from instruction?",
      "How has the role of teachers changed with the rise of online learning?",
      "Should knowledge be shared freely or can it be considered property?",
      "What are the most effective ways to transfer knowledge between generations?",
      "How can communities encourage knowledge sharing?"
    ]
  },
  {
    id: 49,
    title: "Being Late",
    part1Questions: [
      "Are you usually punctual?",
      "How do you feel when you are late?",
      "Is punctuality important in your culture?",
      "Have you ever been late for something important?",
      "How do you make sure you are on time?"
    ],
    cueCard: {
      topic: "Describe a time when you were late for something.",
      points: [
        "When it happened",
        "Why you were late",
        "What you were late for",
        "How you felt about being late"
      ],
      followUp: "Did being late cause any problems?"
    },
    part3Questions: [
      "Why do some people find it difficult to be on time?",
      "How does lateness affect professional relationships?",
      "Do you think attitudes towards punctuality vary between cultures?",
      "Should there be penalties for people who are consistently late?",
      "How can people improve their time management skills?",
      "Is being early always better than being on time?"
    ]
  },
  {
    id: 50,
    title: "Study Environments",
    part1Questions: [
      "Where do you usually study?",
      "Do you prefer studying at home or somewhere else?",
      "What kind of environment helps you concentrate?",
      "Do you listen to music while studying?",
      "Has your study routine changed over the years?"
    ],
    cueCard: {
      topic: "Describe a place you like to go to study.",
      points: [
        "Where this place is",
        "How often you go there",
        "What makes it a good place to study",
        "How you feel when you study there"
      ],
      followUp: "Would you recommend this place to other students?"
    },
    part3Questions: [
      "How does the study environment affect a student's performance?",
      "Do you think libraries are still important for studying?",
      "How has technology changed the way students study?",
      "Should schools provide better study facilities?",
      "Is it better to study in silence or with background noise?",
      "How can students create an effective study environment at home?"
    ]
  }
];
