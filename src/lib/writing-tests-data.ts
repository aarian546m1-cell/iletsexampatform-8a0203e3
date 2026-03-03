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
  {
    id: 17,
    task1: {
      image: "https://i.postimg.cc/ydTdBcBg/Gemini-Generated-Image-6mbqz36mbqz36mbq.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe maps below show an industrial area in the town of Norbiton, and planned future development of the site.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIt is important for people to take risks, both in their professional lives and their personal lives.\n\nDo you think the advantages of taking risks outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 18,
    task1: {
      image: "https://i.postimg.cc/6QtxKSQ8/Gemini-Generated-Image-to40jzto40jzto40.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe table and charts below give information on the police budget for 2017 and 2018 in one area of Britain. The table shows where the money came from and the charts show how it was distributed.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome children spend hours every day on their smartphones.\n\nWhy is this the case? Do you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 19,
    task1: {
      image: "https://i.postimg.cc/MTh8CGfx/Gemini-Generated-Image-ib4elib4elib4eli.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below gives information about how families in one country spent their weekly income in 1968 and in 2018.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people believe that professionals, such as doctors and engineers, should be required to work in the country where they did their training. Others believe they should be free to work in another country if they wish.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 20,
    task1: {
      image: "https://i.postimg.cc/VvBHKsjK/Gemini-Generated-Image-gxn0magxn0magxn0.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below shows the number of shops that closed and the number of new shops that opened in one country between 2011 and 2018.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nNowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor.\n\nDo you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 21,
    task1: {
      image: "https://i.postimg.cc/k5KNQ1Nx/Gemini-Generated-Image-eb5ynleb5ynleb5y.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nThe most important aim of science should be to improve people's lives.\n\nTo what extent do you agree or disagree with this statement?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 22,
    task1: {
      image: "https://i.postimg.cc/K8XRPZ9c/Gemini-Generated-Image-j40ykhj40ykhj40y.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans below show the site of a farm in 1950 and the same site today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn many countries, primary and secondary schools close for two months or more in the summer holidays.\n\nWhat is the value of long school holidays?\n\nWhat are the arguments in favour of shorter school holidays?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 23,
    task1: {
      image: "https://i.postimg.cc/Cxm5WjhM/Gemini-Generated-Image-qawcedqawcedqawc.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows the floor plan of a public library 20 years ago and how it looks now.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing.\n\nDo you think this is a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 24,
    task1: {
      image: "https://i.postimg.cc/HkhHw3WZ/Gemini-Generated-Image-i7ex7mi7ex7mi7ex.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below shows the average monthly change in the prices of three metals during 2014.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn many countries, people are now living longer than ever before. Some people say an ageing population creates problems for governments. Other people think there are benefits if society has more elderly people.\n\nTo what extent do the advantages of having an ageing population outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 25,
    task1: {
      image: "https://i.postimg.cc/SKfd01Xn/Gemini-Generated-Image-tpvq5dtpvq5dtpvq.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 26,
    task1: {
      image: "https://i.postimg.cc/jqmz1Y8P/Gemini-Generated-Image-pq6canpq6canpq6c.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans below show a harbour in 2000 and how it looks today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nThe working week should be shorter and workers should have a longer weekend.\n\nDo you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 27,
    task1: {
      image: "https://i.postimg.cc/bwC1fGpj/Gemini-Generated-Image-eh4feueh4feueh4f.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows how a biofuel called ethanol is produced.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIt is important for everyone, including young people, to save money for their future.\n\nTo what extent do you agree or disagree with this statement?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 28,
    task1: {
      image: "https://i.postimg.cc/ZnC1jvTG/a19t4w1.jpg",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below give information on the location and types of dance classes young people in a town in Australia are currently attending.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn many countries nowadays, consumers can go to a supermarket and buy food produced all over the world.\n\nDo you think this is a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 29,
    task1: {
      image: "https://i.postimg.cc/W4vN1Vjg/Gemini-Generated-Image-u1kppnu1kppnu1kp.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe first table below shows changes in the total population of New York City from 1800 to 2000. The second and third tables show changes in the population of the five districts of the city (Manhattan, Brooklyn, Bronx, Queens, Staten Island) over the same period.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nAccess to clean water is a basic human right. Therefore every home should have a water supply that is provided free of charge.\n\nDo you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 30,
    task1: {
      image: "https://i.postimg.cc/tJ2kYp8K/Gemini-Generated-Image-hdahjkhdahjkhdah.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe plans below show the site of a farm in 1950 and the same site today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn many countries, primary and secondary schools close for two months or more in the summer holidays.\n\nWhat is the value of long school holidays?\n\nWhat are the arguments in favour of shorter school holidays?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 31,
    task1: {
      image: "https://i.postimg.cc/9QT9kcJc/Gemini-Generated-Image-a6uyuka6uyuka6uy.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below give information about a public library in a town called Little Chalfont.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people have decided to reduce the number of times they fly every year or to stop flying altogether.\n\nDo you think the environmental benefits of this development outweigh the disadvantages for individuals and businesses?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 32,
    task1: {
      image: "https://i.postimg.cc/NMVfYH0c/Gemini-Generated-Image-ig17ciig17ciig17.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows how fabric is manufactured from bamboo.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nMany aspects of the way people dress today are influenced by global fashion trends.\n\nHow has global fashion become such a strong influence on people's lives?\n\nDo you think this is a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
];
