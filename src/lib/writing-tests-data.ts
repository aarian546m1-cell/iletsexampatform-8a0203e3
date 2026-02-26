export interface WritingTest {
  id: number;
  task1: {
    image: string;
    prompt: string;
  };
  task2: {
    prompt: string;
  };
}

export const WRITING_TESTS: WritingTest[] = [
  {
    id: 1,
    task1: {
      image: "https://i.postimg.cc/SsJNG29g/Image-1-test.jpg",
      prompt: "You should spend about 20 minutes on this task.\n\nThe two maps below show road access to a city hospital in 2007 and in 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nLiving in a country where you have to speak a foreign language can cause serious social problems, as well as practical problems.\n\nTo what extent do you agree or disagree?\n\nWrite at least 250 words.",
    },
  },
  {
    id: 2,
    task1: {
      image: "https://i.postimg.cc/pXtRm1sB/Image-2.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nSome people believe that nowadays we have too many choices.\n\nTo what extent do you agree or disagree?\n\nWrite at least 250 words.",
    },
  },
  {
    id: 3,
    task1: {
      image: "https://i.postimg.cc/zGGmWmKp/Gemini-Generated-Image-6dx8je6dx8je6dx8.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe bar chart below shows the top ten countries for the production and consumption of electricity in 2014.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nSome people say History is one of the most important school subjects. Others think Science and Technology are more important.\n\nDiscuss both views and give your opinion.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 4,
    task1: {
      image: "https://i.postimg.cc/tJpvjP50/Gemini-Generated-Image-uuzhbsuuzhbsuuzh.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans below show the layout of a university's sports centre now and after redevelopment.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nIn spite of advances in agriculture, many people still go hungry.\n\nWhy is this happening?\n\nWhat can be done?\n\nWrite at least 250 words.",
    },
  },
  {
    id: 5,
    task1: {
      image: "https://i.postimg.cc/X7XcyQXX/Gemini-Generated-Image-f0b2i5f0b2i5f0b2.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below show the average percentages in typical meals of three types of nutrients that may be unhealthy if eaten too much.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nSome people believe it is best to accept a bad situation. Others think it is better to improve it.\n\nDiscuss both views and give your opinion.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 6,
    task1: {
      image: "https://i.postimg.cc/zfM36F8d/Gemini-Generated-Image-43zurq43zurq43zu.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart shows the value of one country's exports in 2015 and 2016. The table shows percentage change in 2016 compared to 2015.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nSome people say the main environmental problem is loss of species. Others think there are more important environmental problems.\n\nDiscuss both views and give your opinion.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 7,
    task1: {
      image: "https://i.postimg.cc/XJdNhM2f/Gemini-Generated-Image-p1bvqlp1bvqlp1bv.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram shows how electricity is generated in a hydroelectric power station.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nSome people say music brings people of different cultures and ages together.\n\nTo what extent do you agree or disagree?\n\nWrite at least 250 words.",
    },
  },
  {
    id: 8,
    task1: {
      image: "https://i.postimg.cc/RFL5Kvs2/Gemini-Generated-Image-l99t5bl99t5bl99t.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans show a public park in 1920 and the same park today.\n\nSummarise the information.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nNowadays many people choose to be self-employed.\n\nWhy is this?\n\nWhat are the disadvantages?\n\nWrite at least 250 words.",
    },
  },
];
