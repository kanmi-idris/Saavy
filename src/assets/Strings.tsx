const strings = {
  onboarding: {
    welcome: [
      {
        id: 1,
        illustration: 'InvestmentIllustration',
        heading: 'Reach Your Financial Goals',
        text: 'Whether you want to save for retirement, buy a house, or fund your education, Saavy has the right solution for you.',
        button: 'Next',
      },
      {
        id: 2,
        illustration: 'LearningIllustration',
        heading: 'Learn How to Invest',
        text: 'You will learn the basics of investing and find the best investment plans for your goals and needs from our AI chatbot.',
        button: 'Next',
      },
      {
        id: 3,
        illustration: 'DiverseOpportunities',
        heading: 'Explore Diverse Opportunities',
        text: 'Get access to a variety of investment options across different sectors that have been carefully vetted to avoid scams.',
        button: 'Next',
      },
      {
        id: 4,
        illustration: 'BusinessSuccess',
        heading: 'Support Innovative Startups',
        text: 'We connect you with promising startups  and allow you to invest in their equity or support their growth.',
        button: 'Get Started',
      },
    ],
  },
  learning: {
    continue: [
      {
        id: 1,
        heading: 'What are stocks?',
        text: 'Learn the basics of stocks and how they represent ownership in a company',
        percentCompleted: 80,
      },
      {
        heading: 'How to read stock charts?',
        text: 'Learn how to interpret the price movements and trends of stocks using charts',
        percentCompleted: 67,
      },
      {
        heading: 'How to sell mutual funds?',
        text: 'Learn how to redeem your mutual fund units, calculate your returns, and pay taxes',
        percentCompleted: 20,
      },
      {
        heading: 'How to buy mutual funds',
        text: 'Learn how to place orders, choose payment methods, and confirm transactions',
        percentCompleted: 50,
      },
    ],
  },
  recommendations: [
    {
      id: '1',
      name: 'PAXLX',
      company: 'Pax Large Cap Fund',
      type: 'Mutual Fund',
      description:
        'Pax Large Cap Fund is a mutual fund that invests in large-cap U.S. companies with strong growth potential',
      amount: '$141,883',
      return: '5-yr return',
      frequency: 'Yearly',
      price: 121.23,
      image: require('@/assets/images/paxlx.png'),
    },
    {
      id: '2',
      name: 'MSFT',
      company: 'Microsoft Corporation',
      type: 'Stock',
      description:
        'Microsoft Corp is a global technology company that develops and sells software, hardware, cloud services, and gaming products',
      amount: '$18M',
      return: '-14.55%',
      frequency: 'Daily',
      price: 100,
      image: require('@/assets/images/MicrosoftLogo.png'),
    },
    {
      id: '3',
      name: 'Balogun 2.0',
      company: 'CBC Africa',
      type: 'Startup',
      description:
        'Balogun 2.0 is a startup that aims to revolutionize the fashion industry in Africa by using AI and blockchain to create personalized and sustainable clothing',
      amount: '25M',
      return: 'N/A',
      frequency: 'N/A',
      price: '10 per share',
      image: require('@/assets/images/cbcAfrica.png'),
    },
    {
      id: '4',
      name: 'Fair save',
      company: 'Fair Money',
      type: 'Fixed Return',
      description:
        'Fair save is a fixed return investment that offers a guaranteed interest rate of 10% per annum for a minimum deposit of $1000 and a lock-in period of one year',
      amount: '$1000',
      return: '10% per annum',
      frequency: 'Yearly',
      price: '1000 per unit',
      image: require('@/assets/images/fairmoney.png'),
    },
    {
      id: '5',
      name: 'Tiny Organics',
      company: 'Tiny Organics',
      type: 'Stock',
      description:
        'Tiny Organics is a public company that produces and delivers organic baby food and toddler meals to parents across the U.S.',
      amount: '$5000',
      return: '-5.23%',
      frequency: 'Daily',
      price: '25.67',
      image: require('@/assets/images/tiny.png'),
    },
    {
      id: '6',
      name: 'Lekki Garden City',
      company: 'Lagos Housing Corporation',
      type: 'Real Estate',
      description:
        'Real estate is a type of investment that involves buying, selling, renting, or managing properties such as land, buildings, or housing',
      amount: '$250,000',
      return: '5-yr return',
      frequency: 'Yearly',
      price: '250,000 per property',
      image: require('@/assets/images/lagos.png'),
    },
  ],
};

export default strings;
