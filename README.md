# Saavy App

Saavy is an investment app that helps users grow their wealth, diversify their investments, and achieve financial success through sustainable investments. Saavy allows users to invest in a variety of sectors, explore promising startups, and receive personalized guidance for smart financial decisions from an AI assistant.

## Features

- Diversified Investments: Saavy allows users to invest in a wide range of companies and businesses across various sectors and regions, unlocking opportunities for growth and diversification.
- Startup Investment Opportunities: Saavy users can explore and support promising startups, nurturing their growth while potentially reaping significant returns.
- Personalized Guidance: Saavy users benefit from tailored investment recommendations and expert guidance, empowering them to make informed financial decisions aligned with their unique goals and risk appetite.
- Security and Transparency: Saavy users can rest easy knowing that their investments are safeguarded by robust security measures, ensuring transparency and peace of mind.

## Technologies

This app uses the following technologies and libraries:

- [React Native](https://reactnative.dev) - a framework for building native apps using React
- [TypeScript](https://www.typescriptlang.org) - a superset of JavaScript that adds static type definitions
- [Redux Toolkit](https://redux-toolkit.js.org) - a toolkit for managing application state
- [React Navigation](https://reactnavigation.org) - a library for routing and navigation in React Native apps
- [React Native Elements](https://reactnativeelements.com) - a UI toolkit for React Native apps
- [React Native Twitter](https://github.com/GoldenOwlAsia/react-native-twitter) - a library for integrating Twitter authentication and API in React Native apps
- [Jest](https://jestjs.io) - a testing framework for JavaScript and TypeScript

## Installation

To install this app, you will need to have [Node.js](https://nodejs.org) and [NPM](https://yarnpkg.com) installed on your machine. You will also need to have [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode) installed if you want to run the app on an Android or iOS device or emulator.

To install the app, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/yourusername/investment-app.git`
2. Navigate to the project directory using `cd investment-app`
3. Install the dependencies using `npm install`
4. Create a `.env` file in the root directory and add your Twitter API keys as follows:

```text
TWITTER_CONSUMER_KEY=your_consumer_key
TWITTER_CONSUMER_SECRET=your_consumer_secret
```

You can obtain your Twitter API keys by creating a Twitter developer account and an app on [Twitter Developer Portal](https://developer.twitter.com).

## Usage

To run the app, follow these steps:

1. Start the app on an Android or emulator using `npx react-native run-android`
2. Enjoy the app!

## Testing

To run the tests, use `npm test`. This will run all the unit tests and integration tests in the `_tests_` folder.

## Folder Structure

```text
src
├── state_manager
│   ├── store.ts
│   └── slices
│       ├── posts-slice.ts
│       └── comments-slice.ts
├── assets
│   ├── icons.ts
│   ├── images
│   │   └── logo.png
│   ├── strings.ts
│   ├── fonts.ts
│   ├── colors.ts
│   ├── palette.ts
│   └── package.json
├── lib
│   ├── components
│   │   ├── button
│   │   │   ├── icon-button.ts
│   │   │   ├── index.unit.test.ts
│   │   │   └── styles.ts
│   │   ├── avatar.ts
│   │   ├── list.ts
│   │   └── index.js
│   ├── hooks
│   │   ├── useInterval.ts
│   │   ├── useLogin.ts
│   │   └── index.js
│   ├── utils
│   │   ├── movetobottom.ts
│   │   └── convertCurrency.ts
│   ├── auth
│   │   ├── loginAuth.ts
│   │   └── withdrawalAuth.ts
│   └── index.js
├── navigation
│   ├── profileTabNavigator.ts
│   └── RootStackNavigator.ts
├── screens
│   ├── dashboard
│   │   ├── components
│   │   │   ├── portfolio-summary-card.ts
│   │   │   ├── index.unit.test.ts
│   │   │   └── styles.ts
│   │  ├── hooks 
|    |  |  └── useInterval.js 
|    |  ├── api 
|    |  |  ├── twitter.ts 
|    |  |  └── helper.ts 
|    |  └── index.js 
|    ├── exploreInvestments 
|    |  ├── components 
|    |  |  ├── index.unit.test.ts 
|    |  |  └── styles.ts 
|    |  ├── api  
|    |  |  └── auth.api.js  
|    |  └── index.js  
|    └── profile  
|      ├── components  
|      |  ├── index.unit.test.ts  
|      |  └── styles.ts  
|      ├── layout  
|      |  └── chatScreenLayout.ts  
|      ├── api   
|      |  └── withdrawalAuth.api.js   
|      └── index.js  
└─ _tests_
    └─ api.int.test.ts


```

Note: tests that have .int in their name are for integration tests and tests that have .unit are for unit tests

## Contributing

To contribute to this project, please follow these steps:

1. Fork this repository to your GitHub account
2. Create a new branch for your feature or bug fix using `git checkout -b feature/your-feature` or `git checkout -b bugfix/your-bugfix`
3. Make your changes and commit them using `git commit -m "Your commit message"`
4. Push your changes to your forked repository using `git push origin feature/your-feature` or `git push origin bugfix/your-bugfix`
5. Create a pull request from your forked repository to this repository

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback about this project, please contact me via [Mail](olasunkanmiidris15@email.com)
