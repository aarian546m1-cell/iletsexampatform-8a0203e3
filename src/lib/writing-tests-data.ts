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
  {
    id: 33,
    task1: {
      image: "https://i.postimg.cc/SR04mwSc/Gemini-Generated-Image-9igxoy9igxoy9igx.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe bar chart below shows the percentage of Australian men and women in different age groups who did regular physical activity in 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people believe that it is good to share as much information as possible in scientific research, business and the academic world. Others believe that some information is too important or too valuable to be shared freely.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 34,
    task1: {
      image: "https://i.postimg.cc/D0tSkCDH/Gemini-Generated-Image-q420f2q420f2q420.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe maps below show the centre of a small town called Islip as it is now, and plans for its development.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nAt the present time, the population of some countries includes a relatively large number of young adults, compared with the number of older people.\n\nDo the advantages of this situation outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 35,
    task1: {
      image: "https://i.postimg.cc/rpmR4tSf/Gemini-Generated-Image-63xygq63xygq63xy.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows how frequently people in the USA ate in fast food restaurants between 2003 and 2013.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn a number of countries, some people think it is necessary to spend large sums of money on constructing new railway lines for very fast trains between cities. Others believe the money should be spent on improving existing public transport.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 36,
    task1: {
      image: "https://i.postimg.cc/K84mr7H3/Gemini-Generated-Image-5y5c95y5c95y5c95.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows how geothermal energy is used to produce electricity.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people believe that allowing children to make their own choices on everyday matters (such as food, clothes and entertainment) is likely to result in a society of individuals who only think about their own wishes. Other people believe that it is important for children to make decisions about matters that affect them.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 37,
    task1: {
      image: "https://i.postimg.cc/J07f7Mw5/Gemini-Generated-Image-rug64drug64drug6.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below show the percentage of water used for different purposes in six areas of the world.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nGovernments should spend money on railways rather than roads.\n\nTo what extent do you agree or disagree with this statement?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 38,
    task1: {
      image: "https://i.postimg.cc/HxNwn9RS/Gemini-Generated-Image-klj5z9klj5z9klj5.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below show the proportions of British students at one university in England who were able to speak other languages in addition to English, in 2000 and 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people claim that not enough of the waste from homes is recycled. They say that the only way to increase recycling is for governments to make it a legal requirement.\n\nTo what extent do you think laws are needed to make people recycle more of their waste?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 39,
    task1: {
      image: "https://i.postimg.cc/28rQ6yKN/Gemini-Generated-Image-75te2a75te2a75te.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below shows average carbon dioxide (CO₂) emissions per person in the United Kingdom, Sweden, Italy and Portugal between 1967 and 2007.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people say that the only reason for learning a foreign language is in order to travel to or work in a foreign country. Others say that these are not the only reasons why someone should learn a foreign language.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 40,
    task1: {
      image: "https://i.postimg.cc/Nf2cKG9f/Gemini-Generated-Image-sx4806sx4806sx48.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe table below shows the numbers of visitors to Ashdown Museum during the year before and the year after it was refurbished. The charts show the result of surveys asking visitors how satisfied they were with their visit, during the same two periods.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nMany governments think that economic progress is their most important goal. Some people, however, think that other types of progress are equally important for a country.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 41,
    task1: {
      image: "https://i.postimg.cc/15bNFzvk/Gemini-Generated-Image-qyrlgsqyrlgsqyrl.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe first chart below shows how energy is used in an average Australian household. The second chart shows the greenhouse gas emissions which result from this energy use.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIt is important for children to learn the difference between right and wrong at an early age. Punishment is necessary to help them learn this distinction.\n\nTo what extent do you agree or disagree with this opinion?\n\nWhat sort of punishment should parents and teachers be allowed to use to teach good behaviour to children?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 42,
    task1: {
      image: "https://i.postimg.cc/027JpshC/Gemini-Generated-Image-y2355zy2355zy235.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe tables below give information about sales of Fairtrade*-labelled coffee and bananas in 1999 and 2004 in five European countries.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people think that all university students should study whatever they like. Others believe that they should only be allowed to study subjects that will be useful in the future, such as those related to science and technology.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 43,
    task1: {
      image: "https://i.postimg.cc/65zBsbvY/Gemini-Generated-Image-hqpbnehqpbnehqpb.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below show what UK graduate and postgraduate students who did not go into full-time work did after leaving college in 2008.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nCountries are becoming more and more similar because people are able to buy the same products anywhere in the world.\n\nDo you think this is a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 44,
    task1: {
      image: "https://i.postimg.cc/0QGLYrdq/Gemini-Generated-Image-r07gk0r07gk0r07g.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagrams below show the life cycle of a species of large fish called the salmon.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nMany museums charge for admission while others are free.\n\nDo you think the advantages of charging people for admission to museums outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 45,
    task1: {
      image: "https://i.postimg.cc/T2gjfFf7/Gemini-Generated-Image-b0gh7xb0gh7xb0gh.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe two maps below show an island, before and after the construction of some tourist facilities.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome experts believe that it is better for children to begin learning a foreign language at primary school rather than secondary school.\n\nDo the advantages of this outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 46,
    task1: {
      image: "https://i.postimg.cc/9FXDKnM4/Gemini-Generated-Image-ys9nywys9nywys9n.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows the total number of minutes (in billions) of telephone calls in the UK, divided into three categories, from 1995-2002.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighbourhood or teaching sports to younger children).\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 47,
    task1: {
      image: "https://i.postimg.cc/tC1js3mH/Gemini-Generated-Image-cwngcecwngcecwng.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe charts below give information on the ages of the populations of Yemen and Italy in 2000 and projections for 2050.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people say that the best way to improve public health is by increasing the number of sports facilities. Others, however, say that this would have little effect on public health and that other measures are required.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 48,
    task1: {
      image: "https://i.postimg.cc/yxMrgZWb/Gemini-Generated-Image-4u3hgu4u3hgu4u3h.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below gives information from a 2008 report about consumption of energy in the USA since 1980 with projections until 2030.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nEvery year several languages die out. Some people think that this is not important because life will be easier if there are fewer languages in the world.\n\nTo what extent do you agree or disagree with this opinion?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 49,
    task1: {
      image: "https://i.postimg.cc/V6cqCWF9/Gemini-Generated-Image-idk99bidk99bidk9.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe pie chart below shows the main reasons why agricultural land becomes less productive. The table shows how these causes affected three regions of the world during the 1990s.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people think that parents should teach children how to be good members of society. Others, however, believe that school is the place to learn this.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 50,
    task1: {
      image: "https://i.postimg.cc/wvZ7NqzW/Gemini-Generated-Image-dli5aadli5aadli5.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagrams below show the stages and equipment used in the cement-making process, and how cement is used to produce concrete for building purposes.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIncreasing the price of petrol is the best way to solve growing traffic and pollution problems.\n\nTo what extent do you agree or disagree?\n\nWhat other measures do you think might be effective?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 51,
    task1: {
      image: "https://i.postimg.cc/cJKWnQJ4/Gemini-Generated-Image-eaadx4eaadx4eaad.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph shows the percentage of male and female academic staff members across the faculties of a major university in 2012.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSolar energy is becoming more and more popular as a source of household energy in many countries around the world.\n\nWhy is this?\n\nWhat are the advantages and disadvantages of solar energy?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 52,
    task1: {
      image: "https://i.postimg.cc/9fPp1k0N/Gemini-Generated-Image-7hy2ra7hy2ra7hy2.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph below shows the proportion of four different materials that were recycled from 1982 to 2010 in a particular country.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nLearning English at school is often seen as more important than learning local languages. If these are not taught, many are at risk of dying out.\n\nIn your opinion, is it important for everyone to learn English? Should we try to ensure the survival of local languages and, if so, how?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 53,
    task1: {
      image: "https://i.postimg.cc/sxb73P11/Gemini-Generated-Image-5uuy5p5uuy5p5uuy.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagram below shows how a solar powered water pump works.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nRising university fees and scarce employment prospects for graduates have led some people to say that universities should not teach arts subjects, like philosophy and history, and only offer practical degree courses that maximise chances of employment.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 54,
    task1: {
      image: "https://i.postimg.cc/ydtyNCbV/Gemini-Generated-Image-kts60wkts60wkts6.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe pie chart below shows where energy is used in a typical Australian household, and the table shows the amount of electricity used according to the number of occupants.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nMost people accept that we now live in a globalised world but not everyone agrees that this is beneficial.\n\nTo what extent is globalisation a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 55,
    task1: {
      image: "https://i.postimg.cc/yYXcMRs6/Gemini-Generated-Image-154y89154y89154y.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below gives information on the percentage of British people giving money to charity by age range for the years 1990 and 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nSome people work for the same organisation all their working life. Others think that it is better to work for different organisations.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 56,
    task1: {
      image: "https://i.postimg.cc/MT7pnysX/Gemini-Generated-Image-p7ij6ap7ij6ap7ij.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe graph and table below show the average monthly temperatures and the average number of hours of sunshine per year in three major cities.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nOne of the consequences of improved medical care is that people are living longer and life expectancy is increasing.\n\nDo you think the advantages of this development outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 57,
    task1: {
      image: "https://i.postimg.cc/FKtv0YkZ/Gemini-Generated-Image-r92s3gr92s3gr92s.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe diagrams below show the changes that have taken place at West Park Secondary School since its construction in 1950.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nCar ownership has increased so rapidly over the past thirty years that many cities in the world are now 'one big traffic jam'.\n\nHow true do you think this statement is?\n\nWhat measures can governments take to discourage people from using their cars?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 58,
    task1: {
      image: "https://i.postimg.cc/fb7GXBhq/Gemini-Generated-Image-qhhgmpqhhgmpqhhg.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below gives information about Southland's main exports in 2000, 2014, and future projections for 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn some countries an increasing number of people are suffering from health problems as a result of eating too much fast food. It is therefore necessary for governments to impose a higher tax on this kind of food.\n\nTo what extent do you agree or disagree with this opinion?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 59,
    task1: {
      image: "https://i.postimg.cc/nrXSd16B/Gemini-Generated-Image-rieyu3rieyu3riey.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe pie charts below show the online shopping sales for retail sectors in New Zealand in 2003 and 2013.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nNowadays technology is increasingly being used to monitor what people are saying and doing (for example, through cellphone tracking and security cameras). In many cases, the people being monitored are unaware that this is happening.\n\nDo you think the advantages of this development outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
  {
    id: 60,
    task1: {
      image: "https://i.postimg.cc/3xh5wPsv/Gemini-Generated-Image-nzz5snzz5snzz5sn.png",
      prompt: "You should spend about 20 minutes on this task.\n\nThe chart below shows the changes that took place in three different areas of crime in Newport city centre from 2003-2012.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    },
    task2: {
      prompt: "You should spend about 40 minutes on this task.\n\nWrite about the following topic:\n\nIn the past, when students did a university degree, they tended to study in their own country. Nowadays, they have more opportunity to study abroad.\n\nWhat are the advantages and disadvantages of this development?\n\nYou should use your own ideas, knowledge and experience and support your arguments with examples and relevant evidence.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
    },
  },
];
