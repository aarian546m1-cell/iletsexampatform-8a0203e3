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
  {
    id: 9,
    task1: {
      image: "https://i.postimg.cc/BQYgbRgg/Gemini-Generated-Image-o9fa8ro9fa8ro9fa.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows the results of a survey about people's coffee and tea buying and drinking habits in five Australian cities.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn some countries, owning a home rather than renting one is very important for people.\n\nWhy might this be the case?\n\nDo you think this is a positive or negative situation?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 10,
    task1: {
      image: "https://i.postimg.cc/7Y26J21K/Gemini-Generated-Image-u0y5wju0y5wju0y5.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below shows the number of tourists visiting a particular Caribbean island between 2010 and 2017.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn the future, nobody will buy printed newspapers or books because they will be able to read everything they want online without paying.\n\nTo what extent do you agree or disagree with this statement?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 11,
    task1: {
      image: "https://i.postimg.cc/2jgmjw5Q/Gemini-Generated-Image-rclk8prclk8prclk.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows how instant noodles are manufactured.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people say that advertising is extremely successful at persuading us to buy things. Other people think that advertising is so common that we no longer pay attention to it.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 12,
    task1: {
      image: "https://i.postimg.cc/ZKzgDDRM/Gemini-Generated-Image-np736lnp736lnp73.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows what Anthropology graduates from one university did after finishing their undergraduate degree course. The table shows the salaries of the anthropologists in work after five years.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn some cultures, children are often told that they can achieve anything if they try hard enough.\n\nWhat are the advantages and disadvantages of giving children this message?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 13,
    task1: {
      image: "https://i.postimg.cc/jdq65zk3/Gemini-Generated-Image-qrw1q3qrw1q3qrw1.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below show the changes in ownership of electrical appliances and amount of time spent doing housework in households in one country between 1920 and 2019.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn some countries, more and more people are becoming interested in finding out about the history of the house or building they live in.\n\nWhat are the reasons for this?\n\nHow can people research this?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 14,
    task1: {
      image: "https://i.postimg.cc/kgm2G950/a16t3w1.jpg",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans below show the site of an airport now and how it will look after redevelopment next year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nMany manufactured food and drink products contain high levels of sugar, which causes many health problems. Sugary products should be made more expensive to encourage people to consume less sugar.\n\nDo you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 15,
    task1: {
      image: "https://i.postimg.cc/G3vr2DT5/Gemini-Generated-Image-6mottz6mottz6mot.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows the process for recycling plastic bottles.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn the future all cars, buses and trucks will be driverless. The only people traveling inside these vehicles will be passengers.\n\nDo you think the advantages of driverless vehicles outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 16,
    task1: {
      image: "https://i.postimg.cc/hvZ0gvgc/Gemini-Generated-Image-egs35cegs35cegs3.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows the manufacturing process for making sugar from sugar cane.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn their advertising, businesses nowadays usually emphasise that their products are new in some way.\n\nWhy is this? Do you think it is a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
];
